/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PropertyNameWhereInput } from "./PropertyNameWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PropertyNameListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PropertyNameWhereInput,
  })
  @ValidateNested()
  @Type(() => PropertyNameWhereInput)
  @IsOptional()
  @Field(() => PropertyNameWhereInput, {
    nullable: true,
  })
  every?: PropertyNameWhereInput;

  @ApiProperty({
    required: false,
    type: () => PropertyNameWhereInput,
  })
  @ValidateNested()
  @Type(() => PropertyNameWhereInput)
  @IsOptional()
  @Field(() => PropertyNameWhereInput, {
    nullable: true,
  })
  some?: PropertyNameWhereInput;

  @ApiProperty({
    required: false,
    type: () => PropertyNameWhereInput,
  })
  @ValidateNested()
  @Type(() => PropertyNameWhereInput)
  @IsOptional()
  @Field(() => PropertyNameWhereInput, {
    nullable: true,
  })
  none?: PropertyNameWhereInput;
}
export { PropertyNameListRelationFilter as PropertyNameListRelationFilter };
