/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Property } from "./Property";
import { PropertyCountArgs } from "./PropertyCountArgs";
import { PropertyFindManyArgs } from "./PropertyFindManyArgs";
import { PropertyFindUniqueArgs } from "./PropertyFindUniqueArgs";
import { CreatePropertyArgs } from "./CreatePropertyArgs";
import { UpdatePropertyArgs } from "./UpdatePropertyArgs";
import { DeletePropertyArgs } from "./DeletePropertyArgs";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { CreatePropertyInput } from "../CreatePropertyInput";
import { PropertyOutput } from "../PropertyOutput";
import { PropertyService } from "../property.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Property)
export class PropertyResolverBase {
  constructor(
    protected readonly service: PropertyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "read",
    possession: "any",
  })
  async _propertiesMeta(
    @graphql.Args() args: PropertyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Property])
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "read",
    possession: "any",
  })
  async properties(
    @graphql.Args() args: PropertyFindManyArgs
  ): Promise<Property[]> {
    return this.service.properties(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Property, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "read",
    possession: "own",
  })
  async property(
    @graphql.Args() args: PropertyFindUniqueArgs
  ): Promise<Property | null> {
    const result = await this.service.property(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Property)
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "create",
    possession: "any",
  })
  async createProperty(
    @graphql.Args() args: CreatePropertyArgs
  ): Promise<Property> {
    return await this.service.createProperty({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Property)
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "update",
    possession: "any",
  })
  async updateProperty(
    @graphql.Args() args: UpdatePropertyArgs
  ): Promise<Property | null> {
    try {
      return await this.service.updateProperty({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Property)
  @nestAccessControl.UseRoles({
    resource: "Property",
    action: "delete",
    possession: "any",
  })
  async deleteProperty(
    @graphql.Args() args: DeletePropertyArgs
  ): Promise<Property | null> {
    try {
      return await this.service.deleteProperty(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Appointment], { name: "appointments" })
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "read",
    possession: "any",
  })
  async findAppointments(
    @graphql.Parent() parent: Property,
    @graphql.Args() args: AppointmentFindManyArgs
  ): Promise<Appointment[]> {
    const results = await this.service.findAppointments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.Mutation(() => PropertyOutput)
  async CreateProperty(
    @graphql.Args()
    args: CreatePropertyInput
  ): Promise<PropertyOutput> {
    return this.service.CreateProperty(args);
  }

  @graphql.Query(() => [PropertyOutput])
  async GetProperties(
    @graphql.Args("args")
    args: string
  ): Promise<PropertyOutput[]> {
    return this.service.GetProperties(args);
  }
}
