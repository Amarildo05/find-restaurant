import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";
import Price from "../Price";

interface Restaurant {
  id: number;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  slug: string;
}

export default function RestaurantCardSearch({restaurant}: {restaurant : Restaurant}) {
  return (
    <div className="border-b flex p-5 ml-5">
      <img
        src={restaurant.main_image}
        alt=""
        className="w-44 h-36 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start mt-2">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-7">
          <div className="font-light flex">
            <Price price={restaurant.price}/>
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
}
