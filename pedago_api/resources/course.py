from flask_restful import Resource
from flask_jwt_extended import jwt_required
from services.course_service import CourseService

class CourseResource(Resource):
    @jwt_required()
    def get(self):
        return CourseService.get_all_courses(), 200

    @jwt_required()
    def post(self):
        data = request.get_json()
        CourseService.create_course(data)
        return {'message': 'Course created successfully'}, 201

