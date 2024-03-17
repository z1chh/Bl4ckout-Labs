from flask import Flask

from routes.address_routes import address_routes
from routes.user_routes import user_routes

app = Flask(__name__)
app.register_blueprint(address_routes)
app.register_blueprint(user_routes)

if __name__ == '__main__':
    app.run(debug=True)

# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
# import os

# from config.loader import config, ConfigSchema, db_uri

# app = Flask(__name__)

# # Configure the database URI
# app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
# db = SQLAlchemy(app)

# @app.route('/')
# def index():
#     return 'Hello, World!'

# if __name__ == '__main__':
#     # with app.app_context():
#     #     db.create_all()
#     app.run(debug=True)
