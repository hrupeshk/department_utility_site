# They allow you to interact with the database using Python classes and objects rather than writing raw SQL queries.

from sqlalchemy import Column, Integer, String 
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class FacultyProfile(Base):
    __tablename__ = 'faculty_profiles'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255))
    designation = Column(String(255))
    profile_picture = Column(String(500))
    linkedin = Column(String(500))
    email = Column(String(255))
    position = Column(String(255)) 