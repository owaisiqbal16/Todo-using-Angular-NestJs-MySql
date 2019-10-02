import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}


// import { AuthGuard } from '@nestjs/passport';
// import { AuthService } from './auth/auth.service';
// import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
// @UseGuards(AuthGuard('local'))
  // @Post('login')
  // async login(@Request() req){
  //   return this.authService.login(req.user);
  // }

  // @UseGuards(AuthGuard('jwt'))
  // @Get('me')
  // getProfile(@Request() req) {
  //   return req.user;
  // }