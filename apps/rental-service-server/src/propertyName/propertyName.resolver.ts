import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PropertyNameResolverBase } from "./base/propertyName.resolver.base";
import { PropertyName } from "./base/PropertyName";
import { PropertyNameService } from "./propertyName.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PropertyName)
export class PropertyNameResolver extends PropertyNameResolverBase {
  constructor(
    protected readonly service: PropertyNameService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
