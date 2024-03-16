from sqlalchemy import create_engine, MetaData

from config.loader import config, get_db_uri
from models import Base

db_uri = get_db_uri(config)
engine = create_engine(db_uri)
metadata = MetaData(bind=engine)

# Bind the metadata to the engine
metadata.reflect()
metadata.drop_all()
metadata.create_all()
