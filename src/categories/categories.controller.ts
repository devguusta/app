import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategorySequelizeRepository } from '@core/category/infra/db/sequelize/category-sequelize.repository';
import { Uuid } from '@core/shared/domain/value-objects/uuid.vo';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryRepo: CategorySequelizeRepository) {
    console.log(categoryRepo);
  }

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryRepo.insert(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoryRepo.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryRepo.findById(new Uuid(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepo.update(new Uuid(id), updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryRepo.delete(new Uuid(id));
  }
}
