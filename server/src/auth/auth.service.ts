import { Injectable } from '@nestjs/common';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService 
    ) {}

    async validate(userData: User): Promise<any> {
        const user = await this.usersService.findByEmail(userData.email);
        if( user && user.password === userData.password ){
            const { password , ...result } = user;
            return result;
        }
        return null;
    }

    public async login(user: User): Promise< any | { status: number }>{
        return this.validate(user).then( userData =>{
            // console.log(userData)
          if(!userData){
            //   console.log("no user data")
            return { status: 404 };
          }
          let payload = { name:userData.name , id:userData.id , email:userData.email };
          const accessToken = this.jwtService.sign(payload);

          return {
             expires_in: 3600,
             access_token: accessToken,
             user: payload,
             status: 200
          };

        });
    }
    public async register(user: User): Promise<any>{
        return this.usersService.create(user)
    }
}
