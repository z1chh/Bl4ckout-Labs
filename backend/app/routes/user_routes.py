import bcrypt
from flask import Blueprint, request, jsonify
import psycopg2

from config.loader import db_uri

# Create a Blueprint for user routes
user_routes = Blueprint('user_routes', __name__)

INTERNAL_SERVER_ERROR = 500

@user_routes.route('/login', methods=['POST'])
def login():
    '''
    exit_code:
        0: success
        1: email not provided
        2: password not provided
        3: email or password invalid
        -1: server error
        
    '''
    try:
        # Get the email and password from the request
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        # Check that email is provided
        if not email:
            return jsonify(
            {
                'exit_code': 1,
                'message': 'Email not provided',
                'user': {
                    'first_name': None,
                    'last_name': None,
                    'email': None
                }
            })

        # Check that password is provided
        if not password:
            return jsonify(
            {
                'exit_code': 2,
                'message': 'Password not provided',
                'user': {
                    'first_name': None,
                    'last_name': None,
                    'email': None
                }
            })

        # Connect to the database using the db_uri
        conn = psycopg2.connect(db_uri)
        cur = conn.cursor()

        # Execute a query to check if the user exists
        cur.execute('SELECT first_name, last_name, password FROM "user" WHERE email = %s', (email,))
        user = cur.fetchone()

        # Close the cursor and connection
        cur.close()
        conn.close()

        if user and bcrypt.checkpw(password.encode(), user[2].encode()):
            # Password matches, user is authenticated
            return jsonify(
            {
                'exit_code': 0,
                'message': 'User logged in successfully (/login)',
                'user': {
                    'first_name': user[0],
                    'last_name': user[1],
                    'email': email
                }
            })
        else:
            return jsonify(
            {
                'exit_code': 3,
                'message': 'Email or password is invalid (/login)',
                'user': {
                    'first_name': None,
                    'last_name': None,
                    'email': None
                }
            })

    except Exception as e:
        return jsonify(
        {
            'exit_code': -1,
            'message': f'Server error: {str(e)} (/login)',
            'user': {
                'first_name': None,
                'last_name': None,
                'email': None
            }
        }), INTERNAL_SERVER_ERROR

@user_routes.route('/create_account', methods=['POST'])
def create_account():
    '''
    exit_code:
        0: success
        1: email not provided
        2: password not provided
        3: first name not provided
        4: last name not provided
        5: email already exists
        -1: server error
    '''
    try:
        # Get the data (first_name, last_name, email, password) from the request
        data = request.get_json()
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        password = data.get('password')

        # Check that email is provided
        if not email:
            return jsonify(
            {
                'exit_code': 1,
                'message': 'Email not provided',
                'user': {
                    'first_name': None,
                    'last_name': None,
                    'email': None
                }
            })

        # Check that password is provided
        if not password:
            return jsonify(
            {
                'exit_code': 2,
                'message': 'Password not provided',
                'user': {
                    'first_name': None,
                    'last_name': None,
                    'email': None
                }
            })

        # Check that first_name is provided
        if not first_name:
            return jsonify(
            {
                'exit_code': 3,
                'message': 'First name not provided',
                'user': {
                    'first_name': None,
                    'last_name': None,
                    'email': None
                }
            })

        # Check that last_name is provided
        if not last_name:
            return jsonify(
            {
                'exit_code': 4,
                'message': 'Last name not provided',
                'user': {
                    'first_name': None,
                    'last_name': None,
                    'email': None
                }
            })

        # Connect to the database using the db_uri
        conn = psycopg2.connect(db_uri)
        cur = conn.cursor()

        # Check if the email already exists in the database
        cur.execute('SELECT 1 FROM "user" WHERE email = %s', (email,))
        existing_user = cur.fetchone()

        if existing_user:
            return jsonify(
            {
                'exit_code': 5,
                'message': 'Email already exists',
                'user': {
                    'first_name': None,
                    'last_name': None,
                    'email': None
                }
            })

        # Hash and salt the password
        hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

        # Insert the new user into the database
        cur.execute('INSERT INTO "user" (first_name, last_name, email, password) VALUES (%s, %s, %s, %s)',
                    (first_name, last_name, email, hashed_password.decode()))
        conn.commit()

        # Close the cursor and connection
        cur.close()
        conn.close()

        return jsonify(
        {
            'exit_code': 0,
            'message': 'User account created successfully (/create_account)',
            'user': {
                'first_name': first_name,
                'last_name': last_name,
                'email': email
            }
        })

    except Exception as e:
        return jsonify(
        {
            'exit_code': -1,
            'message': f'Server error: {str(e)} (/login)',
            'user': {
                'first_name': None,
                'last_name': None,
                'email': None
            }
        }), INTERNAL_SERVER_ERROR
