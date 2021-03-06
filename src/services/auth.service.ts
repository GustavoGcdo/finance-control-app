import { Result } from '../infra/models/result';
import { LoginDto } from '../models/dtos/login.dto';
import api from './api';
import { SignupDto } from '../models/dtos/signup.dto';

export function signIn(loginDto: LoginDto): Promise<Result> {
  return api.post('/login', loginDto).then((result) => result.data);
}

export function signup(signupDto: SignupDto): Promise<Result> {
  return api.post('/signup', signupDto).then((result) => result.data);
}
