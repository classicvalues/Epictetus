
# pedago_api/services/user_service.py

from models import User

users = {}

class UserService:
    @staticmethod
    def register_user(data):
        if data['email'] in users:
            return False
        users[data['email']] = User(data['name'], data['email'], data['password'], data['role'])
        return True

    @staticmethod
    def authenticate_user(email, password):
        user = users.get(email)
        if user and user.password == password:
            return user
        return None
