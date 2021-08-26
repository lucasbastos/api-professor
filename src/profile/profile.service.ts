import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async create(createProfileDto: CreateProfileDto) {
    const newProfile = Profile.create(createProfileDto);
    await newProfile.save();
    return createProfileDto;
  }

  findAll(): Promise<Profile[]> {
    return this.profileRepository.find();
  }

  findOne(id: number): Promise<Profile> {
    // console.log(this.profileRepository.findOne(id));
    return this.profileRepository.findOne(id);
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
