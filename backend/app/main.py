from fastapi import FastAPI
from app.api import faculty_profile
from app.db.models.faculty_profile import Base
from app.db.session import engine

app = FastAPI()
# Create the database tables if not exist 
Base.metadata.create_all(bind=engine) 

# Include the faculty profile router
app.include_router(faculty_profile.router, prefix="/api") 