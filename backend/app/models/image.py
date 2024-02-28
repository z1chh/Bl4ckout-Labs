from sqlalchemy import Column, ForeignKey, Integer, String
from . import Base

class Image(Base):
    __tablename__ = 'image'

    image_id = Column(Integer, primary_key=True)
    URL = Column(String, nullable=False)
    description = Column(String)
    product_id = Column(Integer, ForeignKey('product.product_id'), nullable=False)
