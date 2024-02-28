from enum import Enum
from sqlalchemy import Column, DateTime, Enum as EnumType, ForeignKey, Integer
from sqlalchemy.orm import relationship
from . import Base

class OrderStatus(Enum):
    PENDING = 'Pending'
    PROCESSING = 'Processing'
    SHIPPED = 'Shipped'
    DELIVERED = 'Delivered'

class BuyOrder(Base):
    __tablename__ = 'buy_order'

    buy_order_id = Column(Integer, primary_key=True)
    order_date = Column(DateTime, nullable=False)
    order_status = Column(EnumType(OrderStatus), nullable=False, default=OrderStatus.PENDING.value)
    payment_id = Column(Integer, ForeignKey('payment.payment_id'), nullable=False)
    shipping_id = Column(Integer, ForeignKey('shipping.shipping_id'), nullable=False)

    payment = relationship('Payment', backref='buy_order', uselist=False)
    shipping = relationship('Shipping', backref='buy_order', uselist=False)
