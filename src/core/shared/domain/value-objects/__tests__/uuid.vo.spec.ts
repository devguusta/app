import { InvalidUuidError, Uuid } from "../uuid.vo";

describe('UUID Value Object unit tests', () => {

    const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');

    test('should throw error when uuid is invalid', () => {
      expect(()=> new Uuid('invalid-uuid')).toThrow(new InvalidUuidError());
      expect(validateSpy).toHaveBeenCalled();
    });

    test('should generate a valid uuid when no id is provided', () => {
        const uuid = new Uuid();
        expect(uuid.id).toBeDefined();

        expect(validateSpy).toHaveBeenCalled();
    });

    test('should use the provided id when it is valid', () => {
        const uuid = new Uuid('6ba7b810-9dad-11d1-80b4-00c04fd430c8');
        expect(uuid.id).toBe('6ba7b810-9dad-11d1-80b4-00c04fd430c8');

        expect(validateSpy).toHaveBeenCalled();
    });

});