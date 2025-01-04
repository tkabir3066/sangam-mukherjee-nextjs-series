import RecipeDetails from "@/components/recipe-details";

const fetchRecipeDetails = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch recipe details", error);
  }
};

const RecipeDetailsPage = async ({ params }) => {
  const newParams = await params;
  const getRecipeDetails = await fetchRecipeDetails(newParams?.details);

  return <RecipeDetails recipeDetails={getRecipeDetails} />;
};

export default RecipeDetailsPage;
