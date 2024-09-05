import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PropertyNameModuleBase } from "./base/propertyName.module.base";
import { PropertyNameService } from "./propertyName.service";
import { PropertyNameController } from "./propertyName.controller";
import { PropertyNameResolver } from "./propertyName.resolver";

@Module({
  imports: [PropertyNameModuleBase, forwardRef(() => AuthModule)],
  controllers: [PropertyNameController],
  providers: [PropertyNameService, PropertyNameResolver],
  exports: [PropertyNameService],
})
export class PropertyNameModule {}
