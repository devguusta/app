import { Entity } from "../entity";
import { ValueObject } from "../value-objects/value-object";

export interface IRepository<E extends Entity, EntityId extends ValueObject> {

    insert(entity: E): Promise<void>;
    bulkInsert(entities: E[]): Promise<void>;
    update(entity: E): Promise<void>;
    findAll(): Promise<E[]>;
    findById(entity_id: EntityId): Promise<E>;
    delete(entity_id: EntityId): Promise<void>;

    getEntity(): new (...args: any[]) => E;

}