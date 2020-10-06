import { Transform } from 'class-transformer';
import { IsIn, IsString, MinLength, MaxLength } from 'class-validator';
import { environements } from '../../configs';

export class UpdateConfigDto {

	@IsIn(environements)
	env = "prod";

	@IsString()
	@MinLength(3)
	@MaxLength(20)
	name: string;

	// TODO: This section perform a double JSON.parse (IsJSON uses it internally), this must be improved
	@Transform((v: any) => JSON.parse(v))
	config: any;

}