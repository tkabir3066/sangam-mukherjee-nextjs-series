import Link from "next/link";
import React from "react";

const RecipeDetails = ({ recipeDetails }) => {
  console.log(recipeDetails);
  return (
    <div className="container mx-auto mt-10 text-center">
      <Link
        className="bg-blue-400 text-white font-bold px-5 py-3 rounded-lg"
        href="/recipe-list"
      >
        Go to Recipe List
      </Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="w-full lg:sticky top-0 sm:flex  gap-2">
            <img
              className="w-4/5 rounded object-cover"
              src={recipeDetails.image}
              alt={recipeDetails.name}
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              {recipeDetails.name}
            </h2>
            <div className=" gap-4 mt-5">
              <p className="text-2xl text-gray-700">
                {recipeDetails.mealType[0]}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-2xl text-gray-800">{recipeDetails?.cuisine}</p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ul className="list-disc list-inside">
                {recipeDetails.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-800">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
