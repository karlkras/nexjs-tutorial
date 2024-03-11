import {fetchDrinkById} from "@/utils";
import Link from "next/link";
import Image from "next/image";


const getIngredientList = (theDrink) => {
  let count = 1;
  const ingredients = [];

  while(theDrink[`strIngredient${count}`]) {
    ingredients.push(theDrink[`strIngredient${count}`]);
    count++;
  }
  return ingredients;
}

const Page = async ({ params }) => {
  const theDrink = (await fetchDrinkById(params.id));
  const { strDrink,  strInstructions, strDrinkThumb} = theDrink;
  const theIngredients = getIngredientList(theDrink);


  return (
    <div>
      <Link href={"/drinks"} className="btn btn-primary mt-8 mb-12">
        Back to Drinks
      </Link>
      <Image
        src={strDrinkThumb}
        alt={strDrink}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        width={300}
        height={300}
        priority
      />
      <h1 className="text-4xl mb-8">{strDrink}</h1>
    </div>
  )
}
export default Page
