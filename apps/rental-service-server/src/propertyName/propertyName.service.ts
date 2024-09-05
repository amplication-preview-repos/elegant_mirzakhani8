import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PropertyNameServiceBase } from "./base/propertyName.service.base";

@Injectable()
export class PropertyNameService extends PropertyNameServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
