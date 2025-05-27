from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.schemas.faculty_profile import FacultyProfileOut
from app.db.models.faculty_profile import FacultyProfile 

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db    
    finally:
        db.close()

@router.get("/profiles",response_model=list[FacultyProfileOut])
def get_faculty_profiles(db: Session = Depends(get_db)):
    """
    Retrieve all faculty profiles.
    """
    profiles = db.query(FacultyProfile).all()
    return profiles