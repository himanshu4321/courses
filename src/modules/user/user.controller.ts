import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUserAll() {
      return this.userService.getAllUser();
  }

  @Get("/:id")
  async getUser(@Param('id') id: string,) {
      return this.userService.getUser(id);
  }

  @Post()
  async addUser(@Body() userDto: UserDto) {
    return this.userService.addUser(userDto);
  }

  @Put("/:id")
  async updateUser(@Param('id') id, @Body() userDto:UserDto) {
    return this.userService.updateUser(userDto,id);
  }
}
