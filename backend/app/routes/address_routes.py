from flask import Blueprint, request, jsonify
import psycopg2
from config.loader import db_uri

address_routes = Blueprint('address_routes', __name__)

INTERNAL_SERVER_ERROR = 500

@address_routes.route('/create_address', methods=['POST'])
def create_address():
    '''
    exit_code:
        0: success
        1: street not provided
        2: city not provided
        3: state not provided
        4: country not provided
        5: email not provided or not found in the user database
        6: is_shipping or is_billing not provided
        -1: server error
    '''
    try:
        # Get the data (street, city, state, country, zip_code, email, is_shipping, is_billing) from the request
        data = request.get_json()
        street = data.get('street')
        city = data.get('city')
        state = data.get('state')
        country = data.get('country')
        zip_code = data.get('zip_code')
        email = data.get('email')
        is_shipping = data.get('is_shipping')
        is_billing = data.get('is_billing')

        # Check that street, city, state, country, email, is_shipping, and is_billing are provided
        if not street:
            return jsonify({'exit_code': 1, 'message': 'Street not provided'})
        if not city:
            return jsonify({'exit_code': 2, 'message': 'City not provided'})
        if not state:
            return jsonify({'exit_code': 3, 'message': 'State not provided'})
        if not country:
            return jsonify({'exit_code': 4, 'message': 'Country not provided'})
        if not email:
            return jsonify({'exit_code': 5, 'message': 'Email not provided'})
        if is_shipping is None or is_billing is None:
            return jsonify({'exit_code': 6, 'message': 'is_shipping or is_billing not provided'})

        # Connect to the database using the db_uri
        conn = psycopg2.connect(db_uri)
        cur = conn.cursor()

        # Check if the email exists in the user database
        cur.execute('SELECT user_id FROM "user" WHERE email = %s', (email,))
        user_id = cur.fetchone()

        if not user_id:
            return jsonify({'exit_code': 5, 'message': 'Email invalid'})

        # Insert the new address into the database
        if not zip_code:
            cur.execute('INSERT INTO address (street, city, state, country) VALUES (%s, %s, %s, %s) RETURNING address_id',
                        (street, city, state, country))
        else:
            cur.execute('INSERT INTO address (street, city, state, country, zip_code) VALUES (%s, %s, %s, %s, %s) RETURNING address_id',
                        (street, city, state, country, zip_code))
        
        address_id = cur.fetchone()[0]
        conn.commit()

        # Update the user's address_id based on is_shipping and is_billing
        if is_shipping:
            cur.execute('UPDATE "user" SET shipping_address_id = %s WHERE email = %s', (address_id, email))
        if is_billing:
            cur.execute('UPDATE "user" SET billing_address_id = %s WHERE email = %s', (address_id, email))
        conn.commit()

        # Close the cursor and connection
        cur.close()
        conn.close()

        return jsonify({'exit_code': 0, 'message': 'Address created successfully (/create_address)'})

    except Exception as e:
        return jsonify({'exit_code': -1, 'message': f'Server error: {str(e)} (/create_address)'}), INTERNAL_SERVER_ERROR
