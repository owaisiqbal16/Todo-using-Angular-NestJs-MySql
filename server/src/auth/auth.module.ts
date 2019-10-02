import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

// import { AuthService } from './auth.service';
// import { UsersModule } from '../users/users.module';
// import { PassportModule } from '@nestjs/passport';
// import { LocalStrategy } from './local.strategy';
// import { JwtModule } from '@nestjs/jwt';
// import { jwtConstants } from './constants';
// import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [
    // UsersModule,
    // PassportModule.register({ defaultStrategy: 'jwt'}),
    // JwtModule.register({
    //   secret: jwtConstants.secret,
    //   signOptions: { expiresIn: '60s' },
    // }),
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secretOrPrivateKey: 'secret123456789'
    })
  ],
  providers: [UsersService , AuthService],
  controllers: [AuthController]
  // providers: [AuthService, LocalStrategy, JwtStrategy],
  // exports: [AuthService]
})
export class AuthModule {}
