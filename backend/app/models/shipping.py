from enum import Enum
from sqlalchemy import Column, DateTime, Enum as EnumType, Integer, String
from . import Base

class ShippingStatus(Enum):
    PENDING = 'Pending'
    PROCESSING = 'Processing'
    SHIPPED = 'Shipped'
    DELIVERED = 'Delivered'

class Shipping(Base):
    __tablename__ = 'shipping'

    shipping_id = Column(Integer, primary_key=True)
    shipping_date = Column(DateTime, nullable=False)
    tracking_number = Column(String)
    shipping_status = Column(EnumType(ShippingStatus), nullable=False, default=ShippingStatus.PENDING.value)
