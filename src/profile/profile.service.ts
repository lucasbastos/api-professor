import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  async create(createProfileDto: CreateProfileDto) {
    const newProfile = Profile.create(createProfileDto);
    await newProfile.save();
    return createProfileDto;
  }

  findAll() {
    return `This action returns all profile`;
  }

  findOne(id: number) {
    const selectedProfile = Profile.find({ userId: id });
    return selectedProfile;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
