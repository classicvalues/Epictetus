
# pedago_api/app.py

from flask import Flask
from flask_restful import Api
from flask_jwt_extended import JWTManager
from config import Config
from resources.user import UserRegister, UserLogin
from resources.course import CourseResource
from resources.assessment import AssessmentResource

app = Flask(__name__)
app.config.from_object(Config)
api = Api(app)
jwt = JWTManager(app)

# Routes
api.add_resource(UserRegister, '/register')
api.add_resource(UserLogin, '/login')
api.add_resource(CourseResource, '/courses')
api.add_resource(AssessmentResource, '/assessments')

if __name__ == '__main__':
    app.run(debug=True)
