import { Controller, Request, Get, Post, Body , UseGuards } from  '@nestjs/common';
import { AuthService } from  './auth.service';
import { User } from  '../users/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private  readonly  authService:  AuthService) {}

    @Post('login')
    async login(@Body() user: User): Promise<any> {
      return this.authService.login(user);
    }  
    // @UseGuards(AuthGuard('local'))
    // @Post('login')
    // async login(@Request() req) {
    //   return this.authService.login(req.user);
    // }

    @Post('register')
    async register(@Body() user: User): Promise<any> {
      return this.authService.register(user);
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getProfile(@Request() req) {
    return req.user;
  }
}
