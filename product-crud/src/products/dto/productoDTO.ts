
import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, Min, MinLength, minLength } from "class-validator";

export class CreateProductDTO {
    @MinLength(3)
    @MaxLength(50)
    @IsNotEmpty()
    @IsString()
    NAME_PROD: string;

    @IsString()
    DESCRIPTION_PROD?: string;

    @IsNumber()
    @IsPositive()
    PRICE_PROD: number;

    @IsInt()
    @Min(0)
    STOCK: number;
}

