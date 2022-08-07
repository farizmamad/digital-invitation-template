import { Controller, Post, Req } from "@nestjs/common";

@Controller('form')
export class CsrfController {
  @Post()
  getForm(@Req() req): string {
    return req.csrfToken();
  }
}
