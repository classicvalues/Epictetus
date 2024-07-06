from flask_restful import Resource
from flask_jwt_extended import jwt_required
from services.assessment_service import AssessmentService

class AssessmentResource(Resource):
    @jwt_required()
    def get(self):
        return AssessmentService.get_all_assessments(), 200

    @jwt_required()
    def post(self):
        data = request.get_json()
        AssessmentService.create_assessment(data)
        return {'message': 'Assessment created successfully'}, 201

