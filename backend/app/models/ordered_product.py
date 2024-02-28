from sqlalchemy import Column, ForeignKey, Integer
from sqlalchemy.orm import relationship
from . import Base

class OrderedProduct(Base):
    __tablename__ = 'ordered_product'

    ordered_product_id = Column(Integer, primary_key=True)
    buy_order_id = Column(Integer, ForeignKey('buy_order.buy_order_id'), nullable=False)
    product_id = Column(Integer, ForeignKey('product.product_id'), nullable=False)
    quantity = Column(Integer, nullable=False)

    buy_order = relationship("BuyOrder", back_populates="ordered_products")
    product = relationship("Product", back_populates="ordered_products")
