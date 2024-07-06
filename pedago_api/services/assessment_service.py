
assessments = {}

class AssessmentService:
    @staticmethod
    def get_all_assessments():
        return assessments.values()

    @staticmethod
    def create_assessment(data):
        assessment_id = len(assessments) + 1
        assessments[assessment_id] = {
            'assessment_id': assessment_id,
            'course_id': data['course_id'],
            'assessment_type': data['assessment_type'],
            'details': data['details'],
        }
