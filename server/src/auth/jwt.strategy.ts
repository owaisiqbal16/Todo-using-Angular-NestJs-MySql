import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { AdvancedConsoleLogger } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('auth_token'),
      ignoreExpiration: false,
      secretOrKey: 'secret123456789',
    });
  }

  async validate(payload: any) {
    return { payload };
  }
}