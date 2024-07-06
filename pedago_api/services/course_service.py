
courses = {}

class CourseService:
    @staticmethod
    def get_all_courses():
        return courses.values()

    @staticmethod
    def create_course(data):
        course_id = len(courses) + 1
        courses[course_id] = {
            'course_id': course_id,
            'title': data['title'],
            'description': data['description'],
            'instructor_id': data['instructor_id'],
        }
