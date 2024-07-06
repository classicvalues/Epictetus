
# pedago_api/models.py

class User:
    def __init__(self, user_id, name, email, password, role):
        self.user_id = user_id
        self.name = name
        self.email = email
        self.password = password
        self.role = role

class Course:
    def __init__(self, course_id, title, description, instructor_id):
        self.course_id = course_id
        self.title = title
        self.description = description
        self.instructor_id = instructor_id

class Assessment:
    def __init__(self, assessment_id, course_id, assessment_type, details):
        self.assessment_id = assessment_id
        self.course_id = course_id
        self.assessment_type = assessment_type
        self.details = details
