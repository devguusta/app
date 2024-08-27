import { Category } from "../domain/category.entity";

describe('Category unit tests', ()=> {
    test('constructor', () => {
        const category = new Category({
            name: 'Category 1',
            description: 'Description of category 1',
          
            created_at: new Date(),
        });

        expect(category.name).toBe('Category 1');
        expect(category.description).toBe('Description of category 1');
        expect(category.is_active).toBe(true);
        expect(category.created_at).toBeInstanceOf(Date);
    });

    describe('create command', () => {

        test('create a activate category', () => {
            const category = Category.create({
                name: 'Category 1',
                description: 'Description of category 1',
            });

            expect(category.name).toBe('Category 1');
            expect(category.description).toBe('Description of category 1');
            expect(category.is_active).toBe(true);
            expect(category.created_at).toBeInstanceOf(Date);
            expect(category.category_id).toBeDefined();
        });

        test('create a deactivate category', () => {
            const category = Category.create({
                name: 'Category 1',
                description: 'Description of category 1',
                is_active: false,
            });

            expect(category.name).toBe('Category 1');
            expect(category.description).toBe('Description of category 1');
            expect(category.is_active).toBe(false);
            expect(category.created_at).toBeInstanceOf(Date);
            expect(category.category_id).toBeDefined();
        });

 
 
        
   
   
   
   
    });

    describe('methods', () => {

      
            test('should change name', () => {
                const category = new Category({
                    name: 'Category 1',
                    description: 'Description of category 1',
                    created_at: new Date(),
                });
                expect(category.name).toBe('Category 1');
                category.changeName('Category 2');
                expect(category.name).toBe('Category 2');
            })

            test('should change description', () => {
                const category = new Category({
                    name: 'Category 1',
                    description: 'Description of category 1',
                    created_at: new Date(),
                });
                expect(category.description).toBe('Description of category 1');
                category.changeDescription('Description of category 2');
                expect(category.description).toBe('Description of category 2');
            });

            test('should deactivate category', () => {
                const category = new Category({
                    name: 'Category 1',
                    description: 'Description of category 1',
                    created_at: new Date(),
                });
                expect(category.is_active).toBe(true);
                category.deactivate();
                expect(category.is_active).toBe(false);
            });

            test('should activate category', () => {
                const category = new Category({
                    name: 'Category 1',
                    description: 'Description of category 1',
                    created_at: new Date(),
                    is_active: false,
                });
              
                expect(category.is_active).toBe(false);
                category.activate();
                expect(category.is_active).toBe(true);
            });


    });

   
});