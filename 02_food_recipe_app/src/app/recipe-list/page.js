import RecipeList from "@/components/recipe-list";

const fetchListOfRecipes = async () => {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    return data?.recipes;
  } catch (error) {
    throw new Error("Failed to fetch recipes", error);
  }
};
const Recipes = async () => {
  const recipes = await fetchListOfRecipes();

  return <RecipeList recipes={recipes} />;
};

export default Recipes;
