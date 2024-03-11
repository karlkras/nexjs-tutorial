import Link from "next/link";
import Image from "next/image";

const DrinksList = ({drinks}) => {

  if(!drinks.length) {
    return;
  }
  return (
    <>
    <div>DrinksList</div>
      <ul className="grid sm:grid-cols-2 gap-6 mt-6">
        {drinks.map(aDrink => (
          <li key={aDrink.idDrink}>
            <Link
              href={`/drinks/${aDrink.idDrink}`}
              className="text-xl font-medium"
            >
              <div className="relative h-48 mb-4">
                <Image
                  src={aDrink.strDrinkThumb}
                  alt={aDrink.strDrink}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw"
                  className="rounded-md object-cover"
                />
              </div>
              {aDrink.strDrink}
            </Link>
          </li>
        ))}
      </ul>
    </>

  )
}
export default DrinksList
