import { Controller, Get, Post, Body, Patch, Param, Delete, Header, HttpCode, Headers, Req } from '@nestjs/common';
import { Csrf } from 'src/decorators';
import { CongratulationsService } from './congratulations.service';
import { CreateGuestMessageDto } from './dto/create-congratulations.dto';

@Controller('congratulations')
export class CongratulationsController {
  constructor(private readonly congratulationsService: CongratulationsService) {}

  @Get('/form')
  getCsrfToken(@Req() req): any {
    return {
      token: req.csrfToken()
    }
  }

  @Post()
  @Csrf()
  @Header('Cache-Control', 'none')
  @HttpCode(200)
  async create(@Body() createWeddingDto: CreateGuestMessageDto) {
    return await this.congratulationsService.create(createWeddingDto);
  }

  @Get()
  @HttpCode(200)
  async findAll() {
    return await this.congratulationsService.findAll();
  }

  // @Get(':id')
  // @HttpCode(200)
  // findOne(@Param('id') id: string) {
  //   return this.congratulationsService.findOne(id);
  // }

  // @Patch(':id')
  // @Header('Cache-Control', 'none')
  // @HttpCode(200)
  // update(@Param('id') id: string, @Body() updateWeddingDto: UpdateWeddingDto) {
  //   return this.congratulationsService.update(id, updateWeddingDto);
  // }

  // @Delete(':id')
  // @HttpCode(204)
  // remove(@Param('id') id: string) {
  //   return this.congratulationsService.remove(id);
  // }

  // @Post(':id/guest-messages')
  // @Header('Cache-Control', 'none')
  // @HttpCode(200)
  // sendGuestMessage(@Param('id') id: string, @Body() guestMessageDto: GuestMessageDto) {
  //   return this.congratulationsService.sendGuestMessage(id, guestMessageDto);
  // }

  // @Get(':id/guest-messages')
  // @HttpCode(200)
  // retrieveGuestMessage(@Param('id') id: string) {
  //   return this.congratulationsService.retrieveGuestMessages(id);
  // }
}
