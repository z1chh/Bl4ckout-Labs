from sqlalchemy import create_engine

from config.loader import db_uri

try:
    engine = create_engine(db_uri)
    print("Database engine created successfully!")
except Exception as e:
    print(f"Failed to create database engine: {e}")
