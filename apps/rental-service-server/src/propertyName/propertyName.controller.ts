import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PropertyNameService } from "./propertyName.service";
import { PropertyNameControllerBase } from "./base/propertyName.controller.base";

@swagger.ApiTags("propertyNames")
@common.Controller("propertyNames")
export class PropertyNameController extends PropertyNameControllerBase {
  constructor(
    protected readonly service: PropertyNameService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
