import { Transform } from 'class-transformer';
import { IsIn, IsString, MinLength, MaxLength, IsJSON } from 'class-validator';
import { environements } from '../../configs';

export class UpdateConfigDto {

	@IsIn(environements)
	env = "prod";

	@IsString()
	@MinLength(3)
	@MaxLength(20)
	name: string;

	// TODO: THIS MUST BE PARSED IN ORDER TO AVOID EXCEPTIONS, CODE BElLOW DOESN'T WORKS AS JSON ARRIVE ALREADY SERIALIZED FOR SOME REASONS ???
	//@Transform((v: any) => {console.log(v); return JSON.parse(v)})
	config: any;

}