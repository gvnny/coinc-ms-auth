import { ApiProperty } from "@nestjs/swagger";

export class RegisterCreatedUserUseCaseRequest {
    @ApiProperty({example: 'user-id'})
    userId: string;
    @ApiProperty({example: 'user-name'})
    name: string;
    @ApiProperty({example: 'user-email'})
    email: string;
}
export type RegisterCreatedUserUseCaseResponse = {
    status: number;
}
