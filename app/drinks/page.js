import DrinksList from "@/components/Drinks/DrinksList";
import {fetchDrinksByAlpha} from "@/utils";


const DrinksPage = async () => {
  const theDrinks = await fetchDrinksByAlpha("a");
  return (
    <div>
      <h1 className="text-7xl">Drinks Page</h1>
      <DrinksList drinks={theDrinks} />
    </div>
  )
}
export default DrinksPage;
