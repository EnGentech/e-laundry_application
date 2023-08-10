from sql_connect import Base, engine
from sqlalchemy import Column, Integer, String, DateTime, CheckConstraint
from datetime import datetime
from uuid import uuid4


class User(Base):
    """creating user table"""
    __tablename__ = 'user'  
    id = Column(String(60), default=uuid4, nullable=False, primary_key=True)  
    name = Column(String(255), nullable=False)  
    password = Column(String(255), nullable=False)
    email = Column(String(150))
    phoneNumber = Column(String(20), nullable=False)
    address = Column(String(255), nullable=False)
    date_crated = Column(DateTime(), default=datetime.utcnow())


Base.metadata.create_all(engine)