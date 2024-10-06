import {
  MaxLength,
} from "class-validator";
import { Category } from "./category.entity";
import { Notification } from "../../shared/domain/validators/notification";
import { ClassValidatorFields } from "../../shared/domain/validators/class-validator-field";

//criar um testes que verifique os decorators
export class CategoryRules {
  @MaxLength(255, { groups: ['name'] })
  name: string;

  constructor(entity: Category) {
    Object.assign(this, entity);
  }
}

export class CategoryValidator extends ClassValidatorFields {
  validate(notification: Notification, data: any, fields?: string[]): boolean {
    const newFields = fields?.length ? fields : ['name'];
    return super.validate(notification, new CategoryRules(data), newFields);
  }
}

export class CategoryValidatorFactory {
  static create() {
    return new CategoryValidator();
  }
}