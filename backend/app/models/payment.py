from enum import Enum
from sqlalchemy import Column, DateTime, Enum as EnumType, Integer
from . import Base

class PaymentMethod(Enum):
    CREDIT_CARD = 'Credit Card'
    DEBIT_CARD = 'Debit Card'
    PAYPAL = 'PayPal'
    OTHER = 'Other'

class PaymentStatus(Enum):
    PENDING = 'Pending'
    PROCESSING = 'Processing'
    COMPLETED = 'Completed'
    FAILED = 'Failed'

class Payment(Base):
    __tablename__ = 'payment'

    payment_id = Column(Integer, primary_key=True)
    payment_date = Column(DateTime, nullable=False)
    payment_method = Column(EnumType(PaymentMethod), nullable=False)
    payment_status = Column(EnumType(PaymentStatus), nullable=False, default=PaymentStatus.PENDING.value)
