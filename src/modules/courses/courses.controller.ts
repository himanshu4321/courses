import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService){}

    @Get()
    async getCourses(){
        return this.coursesService.getCourses();
    }

    @Get(':courseId')
    async getCourse(@Param('courseId') courseId){
        return this.coursesService.getCourse(courseId);
    }

    @Post()
    async addCourse(@Body() createCourseDto: CreateCourseDto){
        return this.coursesService.addCourse(createCourseDto);
    }

    @Delete()
    async deleteCourse(@Query() query){
        return this.coursesService.deleteCourse(query.courseId);
    }
}
