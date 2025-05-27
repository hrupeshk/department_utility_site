from pydantic import BaseModel 
from typing import Optional

class FacultyProfileOut(BaseModel):
    id : int
    name: str
    designation: str
    profile_picture: str
    linkedin: Optional[str]=None 
    position: Optional[str]=None
    email: str 

    class Config:
        from_attributes = True
        # This allows Pydantic to read data from SQLAlchemy models