from sqlalchemy import Column, Integer, String
from . import Base

class Address(Base):
    __tablename__ = 'address'

    address_id = Column(Integer, primary_key=True)
    street = Column(String, nullable=False)
    city = Column(String, nullable=False)
    state = Column(String, nullable=False)
    country = Column(String, nullable=False)
    zip_code = Column(String, nullable=False)
