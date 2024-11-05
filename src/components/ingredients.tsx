import React from "react";
import Container from "./container";
import data from "@/data/db.json";
import MultiItemCarousel from "./shared/multi-items-carousel";
import Image from "next/image";

export interface ImageType {
  src: string;
  alt: string;
}

export interface Ingredient {
  id: number;
  name: string;
  description: string;
  image: ImageType;
}

export interface IngredientCardProps {
  ingredient: Ingredient;
}

interface IngredientsListProps {
  ingredients: Ingredient[];
}

const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient }) => {
  const { name, description, image } = ingredient;

  return (
    <div className="relative rounded overflow-hidden group hover:shadow-lg transition-shadow duration-300 w-full">
      <div className="relative h-full w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#182211] to-transparent">
        <div className="text-neutral-50 p-6 space-y-4">
          <h4 className="h4">{name}</h4>
          <p className="display2">{description}</p>
        </div>
      </div>
    </div>
  );
};

const IngredientCarousel: React.FC<IngredientsListProps> = ({
  ingredients,
}) => {
  const ingredientItems = ingredients.map((ingredient) => (
    <div key={ingredient.id} className="rounded flex justify-center h-96">
      <IngredientCard key={ingredient.id} ingredient={ingredient} />
    </div>
  ));
  return (
    <MultiItemCarousel
      items={ingredientItems}
      itemsToShow={3}
      autoPlay={false}
      showArrows={false}
    />
  );
};

const Ingredients = () => {
  return (
    <Container>
      <h2>Thành phần nổi bật</h2>
      <div className="mt-10">
        <IngredientCarousel ingredients={data.ingredients} />
      </div>
    </Container>
  );
};

export default Ingredients;
