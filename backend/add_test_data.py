from app.db.session import SessionLocal
from app.db.models.faculty_profile import FacultyProfile

def add_test_data():
    db = SessionLocal()
    try:
        # Check if there are any existing profiles
        existing_profiles = db.query(FacultyProfile).count()
        
        if existing_profiles == 0:
            # Add a test profile
            test_profile = FacultyProfile(
                name="Dr. John Doe",
                designation="Associate Professor",
                profile_picture="https://example.com/profile.jpg",
                linkedin="https://linkedin.com/in/johndoe",
                email="john.doe@example.com"
            )
            db.add(test_profile)
            db.commit()
            print("Test profile added successfully!")
        else:
            print(f"Database already has {existing_profiles} profiles. No test data added.")
    except Exception as e:
        print(f"Error adding test data: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    add_test_data()