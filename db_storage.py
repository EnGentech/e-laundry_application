from users import User
from sql_connect import session
from run_web_service import app, request, Bcrypt
from werkzeug.security import check_password_hash #this is used to enhance security check in database

class Storage:
    """Storage Card definition"""

    def create_user(data):
        """Create new user to the database"""
        new_usr = User(name=data[0], password=data[1], email=data[2], address=data[3], phoneNumber=data[4])
        session.add(new_usr)
        session.commit()

    def validate_user(user):
        """Check if user already exist in the database"""
        verify = session.query(User).filter_by(name=user).first()
        if verify:
            return "found"
        
    def security_check(name, passcode):
        """Authenticate User"""
        user_validation = session.query(User).filter_by(name=name).first()
        if user_validation and Bcrypt().check_password_hash(user_validation.password, passcode):
            return "allow_access"
        