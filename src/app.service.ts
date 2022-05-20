import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(data: any): Promise<User> {
    return this.userRepository.save(data);
  }

  async findOne(condition: any): Promise<User> {
    return this.userRepository.findOne(condition);
  }

  getBMI(user): any {
    let result;
    const bmi =
      parseInt(user.WEIGHT) / Math.pow(parseInt(user.HEIGHT) / 100, 2);

    if (bmi >= 16 && bmi < 18.5) result = 'under weight';
    else if (bmi >= 18.5 && bmi < 25) result = 'healthy';
    else if (bmi >= 25 && bmi < 30) result = 'over weight';
    else if (bmi >= 30) result = 'obese';
    else result = 'critically under weight';

    return { BMI: result };
  }

  getBmi(user): any {
    let result;
    const bmi =
      parseInt(user.weight) / Math.pow(parseInt(user.height) / 100, 2);

    if (bmi >= 16 && bmi < 18.5) result = 'under weight';
    else if (bmi >= 18.5 && bmi < 25) result = 'healthy';
    else if (bmi >= 25 && bmi < 30) result = 'over weight';
    else if (bmi >= 30) result = 'obese';
    else result = 'critically under weight';

    return { BMI: result };
  }
}
