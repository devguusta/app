import { ValueObject } from "./value-object";
import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

export class Uuid extends ValueObject {
    readonly id: string;
    constructor(id?: string) {
        super();
        this.id = id ??this.generate();
        this.validate();
    }

    private generate(): string {
        return uuidv4();
    }

    private validate() {
            if(!uuidValidate(this.id)){
                throw new InvalidUuidError();
            }
       
    }

    toString(): string {
        return this.id;
    }
}

export class InvalidUuidError extends Error {
    constructor(message?: string) {
        super( message ?? 'Id must be a valid UUID');
        this.name = 'InvalidUuidError';
    }
}