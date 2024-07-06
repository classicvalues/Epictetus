# pedago_api/resources/user.py

from flask_restful import Resource, reqparse
from flask_jwt_extended import create_access_token
from services.user_service import UserService

user_parser = reqparse.RequestParser()
user_parser.add_argument('name', type=str, required=True)
user_parser.add_argument('email', type=str, required=True)
user_parser.add_argument('password', type=str, required=True)
user_parser.add_argument('role', type=str, required=True)

class UserRegister(Resource):
    def post(self):
        data = user_parser.parse_args()
        if UserService.register_user(data):
            return {'message': 'User created successfully'}, 201
        return {'message': 'User already exists'}, 400

class UserLogin(Resource):
    def post(self):
        data = user_parser.parse_args()
        user = UserService.authenticate_user(data['email'], data['password'])
        if user:
            access_token = create_access_token(identity=user['user_id'])
            return {'access_token': access_token}, 200
        return {'message': 'Invalid credentials'}, 401
