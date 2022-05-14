import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from 'src/courses.mock';

@Injectable()
export class CoursesService {
  courses = COURSES;

  async getCourses() {
    return this.courses;
  }

  async getCourse(courseId: number) {
    const course = this.courses.find(course => course.id == courseId);
    if (!course) {
      throw new HttpException('Course does not exist', 404);
    }
    return course;
  }

  async addCourse(course: any) {
    this.courses.push(course);
    return this.courses;
  }

  async deleteCourse(courseId: number) {
    let index = this.courses.findIndex((course) => course.id === courseId);
    if (index === -1) {
      throw new HttpException('Course does not exist', 404);
    }
    this.courses.splice(index, 1);
    return this.courses;
  }
}
