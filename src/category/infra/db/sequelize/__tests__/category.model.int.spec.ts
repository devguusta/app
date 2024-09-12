import { Sequelize } from "sequelize";
import { Category } from "../../../../domain/category.entity";
import { CategoryModel } from "../category.model";


describe("CategoryModel Integration Test", () => {

    test("should create a new category", async () => {
        const sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            models: [CategoryModel],
        })

        await sequelize.sync({ force: true });
    
        // Act
        const category = await Category.fake().aCategory().build();

        // Assert
     await   CategoryModel.create({
            category_id: category.category_id.id.toString(),
            name: category.name,
            description: category.description,
            is_active: category.is_active,
            created_at: category.created_at,
          
        });

    });
});