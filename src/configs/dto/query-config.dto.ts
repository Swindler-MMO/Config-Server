import { IsIn } from "class-validator";
import { environements } from "../../configs";

export class QueryConfigDto {

	@IsIn(environements)
	env = "prod";

	// @IsString()
	// @MinLength(3)
	// @MaxLength(20)
	// name: string;

}