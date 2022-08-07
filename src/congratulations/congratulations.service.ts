import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGuestMessageDto } from './dto/create-congratulations.dto';
import { ReadGuestMessageDto } from './dto/read-congratulations.dto';
import { Congratulations, CongratulationsDocument } from './schemas/congratulations.schema';

@Injectable()
export class CongratulationsService {
  constructor(@InjectModel(Congratulations.name) private congratulationsModel: Model<CongratulationsDocument>) {}
  
  async create(data: CreateGuestMessageDto): Promise<ReadGuestMessageDto> {
    const regex = [/anjing/, /babi/, /bodo/, /bangke/, /cemburu/, /benci/, /fuck/, /butt/, /shit/, /function/, /fetch/];
    for(let i = 0; i < regex.length; i++) {
      const badName = data.formName.search(regex[i]);
      const badCongrats = data.formCongratulations.search(regex[i]);
      if (badName >= 0 || badCongrats >= 0) throw new HttpException(`Mengandung kata yang dilarang`, HttpStatus.BAD_REQUEST);
    }
    const newData = new this.congratulationsModel({
      name: data.formName,
      congratulations: data.formCongratulations,
      presence: data.formPresence ?? "absent",
      totalAudience: data.formTotalAudience ?? 0
    });
    const result = await newData.save();
    return {
      formName: result.name,
      formCongratulations: result.congratulations
    };
  }

  async findAll(): Promise<ReadGuestMessageDto[]> {
    const results = await this.congratulationsModel.find().sort({ _id: -1 });
    const display: ReadGuestMessageDto[] = [];
    for(let i = 0; i < results.length; i++) {
      if (results[i].name && results[i].congratulations) {
        display.push({
          formName: results[i].name,
          formCongratulations: results[i].congratulations
        });
      }
    }
    return display;
  }

  // async findOne(id: string): Promise<ReadGuestMessageDto> {
  //   const c = await this.congratulationsModel.findOne({ _id: id }).exec();
  //   if (!c) throw new Error(`Not Found`);
  //   return c;
  // }

  // async update(id: string, updateWeddingDto: UpdateWeddingDto): Promise<void>{
  //   await this.congratulationsModel.updateOne({ _id: id}, updateWeddingDto, { returnDocument: 'after' }).exec();
  // }

  // remove(id: string) {
  //   return `This action removes a #${id} wedding`;
  // }

  // async sendGuestMessage(id, message: GuestMessageDto): Promise<GuestMessageDto[]> {
  //   const regex = [/anjing/, /babi/, /bodo/, /bangke/, /cemburu/, /benci/, /fuck/, /butt/, /shit/];
  //   for(let i = 0; i < regex.length; i++) {
  //     const badName = message.name.search(regex[i]);
  //     const badCongrats = message.congratulations.search(regex[i]);
  //     if (badName !== -1 && badCongrats !== -1) throw new Error(`Mengandung kata yang dilarang`);
  //   }

  //   await this.congratulationsModel.updateOne({ _id: id}, { $push: { guestMessages: message } }, { returnDocument: 'after' }).exec();
  //   const wedding = await this.findOne(id);
  //   return wedding.guestMessages.sort((a, b) => -1);
  // }
  
  // async retrieveGuestMessages(id: string): Promise<GuestMessageDto[]> {
  //   const wedding = await this.findOne(id);
  //   return wedding.guestMessages.sort((a, b) => -1);
  // }
}
