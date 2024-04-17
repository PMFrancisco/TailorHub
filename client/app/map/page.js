"use client";

import { RestaurantCard } from "@/components/organisms/RestaurantCard";
import { RestaurantsMap } from "@/components/organisms/RestaurantMap";
import { useEffect, useState } from "react";
import { getRestaurants } from "../api/restaurants";
import { Spinner } from "@/components/atoms/Spinner";
import { useRouter } from "next/navigation";
import { TwoContentLayout } from "@/components/layouts/TwoContentLayout";

export default function MapPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    async function fetchAndSetRestaurants() {
      try {
        const data = await getRestaurants();
        setRestaurants(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading the restaurants:", error.message);
      }
    }

    fetchAndSetRestaurants();
  }, []);

  const handleRestaurantClick = (restaurant) => {
    if (selectedRestaurant && selectedRestaurant.id === restaurant.id) {
      router.push(`/restaurants/${restaurant.id}`);
    } else {
      setSelectedRestaurant(restaurant);
      console.log("Selected restaurant in handleRestaurantClick:", restaurant);
    }
  };

  return (
    <TwoContentLayout
      leftContent={
        <RestaurantsMap
          restaurants={restaurants}
          onRestaurantClick={handleRestaurantClick}
          selectedRestaurant={selectedRestaurant}
        />
      }
      rightContent={
        <div className="space-y-8">
          {loading ? (
            <Spinner />
          ) : (
            restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onClick={() => handleRestaurantClick(restaurant)}
                selected={selectedRestaurant}
              />
            ))
          )}
        </div>
      }
    />
  );
}
