import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl text-gray-800 mb-12">Recipes</h2>
        <Link
          className="bg-blue-600 text-white font-bold px-5 py-3 rounded-lg"
          href={"/"}
        >
          Go Home
        </Link>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-5">
          {recipes && recipes.length > 0
            ? recipes.map((recipe) => (
                <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
                  <Card key={recipe.id}>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all p-4">
                      <div className=" w-full aspect-w-16 aspect-h-9 lg:h-80">
                        <img
                          src={recipe?.image}
                          alt={recipe.name}
                          className="w-full  h-full object-cover object-top rounded-lg"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900">
                          {recipe.name}
                        </h3>
                        <div className="mt-4 flex items-center flex-wrap gap-2">
                          <p className="text-lg text-gray-600">
                            Rating:{recipe?.rating}
                          </p>
                          <div className="ml-auto">
                            <p className="text-lg text-gray-600 font-bold">
                              {recipe?.cuisine}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
