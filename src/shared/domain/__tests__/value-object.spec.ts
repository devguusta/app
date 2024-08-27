import { ValueObject } from "../value-object";


class StringValueObject extends ValueObject{
    constructor(readonly value: string){
        super();
    }
}

class ComplexValueObject extends ValueObject{
    constructor(readonly prop1: string, readonly prop2: string){
        super();
    }
}


describe('ValueObject unit tests', () => {


    test('should return true if two value objects are equal', () => {
        const valueObject1 = new StringValueObject('test');
        const valueObject2 = new StringValueObject('test');
        expect(valueObject1.equals(valueObject2)).toBe(true);

        const complexValueObject1 = new ComplexValueObject('test', 'test');
        const complexValueObject2 = new ComplexValueObject('test', 'test');
        expect(complexValueObject1.equals(complexValueObject2)).toBe(true);
    });

    test('should return false if two value objects are not equal', () => {
        const valueObject1 = new StringValueObject('test');
        const valueObject2 = new StringValueObject('test2');
        expect(valueObject1.equals(valueObject2)).toBe(false);

        const complexValueObject1 = new ComplexValueObject('test', 'test');
        const complexValueObject2 = new ComplexValueObject('test', 'test2');
        expect(complexValueObject1.equals(complexValueObject2)).toBe(false);
    });



    test('should return false if the value object is not the same type', () => {
        const valueObject1: ValueObject = new StringValueObject('test');
        const valueObject2: ValueObject = new ComplexValueObject('test', 'test');
        expect(valueObject1.equals(valueObject2)).toBe(false);
    });
    





});