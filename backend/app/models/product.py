from enum import Enum
from sqlalchemy import Column, Integer, String, Enum as EnumType
from . import Base

class ProductType(Enum):
    BASIC_PLATE = 'Basic Plate'
    PREMIUM_PLATE = 'Premium Plate'
    WHEEL_LEDS = 'Wheel LEDs'
    OTHER = 'Other'

class Product(Base):
    __tablename__ = 'product'

    product_id = Column(Integer, primary_key=True)
    product_name = Column(String, nullable=False)
    product_description = Column(String)
    product_type = Column(EnumType(ProductType), unique=True, nullable=False)
    price = Column(Integer, nullable=False)
    stock_quantity = Column(Integer, nullable=False)
