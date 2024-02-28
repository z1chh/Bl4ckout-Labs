from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from . import Base

class User(Base):
    __tablename__ = 'user'

    user_id = Column(Integer, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    shipping_address_id = Column(Integer, ForeignKey('address.address_id'))
    billing_address_id = Column(Integer, ForeignKey('address.address_id'))

    shipping_address = relationship('Address', foreign_keys=[shipping_address_id])
    billing_address = relationship('Address', foreign_keys=[billing_address_id])
