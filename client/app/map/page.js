"use client";

import { RestaurantCard } from "@/components/organisms/RestaurantCard";
import { RestaurantsMap } from "@/components/organisms/RestaurantMap";
import { useEffect, useState } from "react";
import { getRestaurants } from "../api/restaurants";
import { LoggedLayout } from "@/components/layouts/LoggedLayout";
import { Spinner } from "@/components/atoms/Spinner";

export default function MapPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAndSetRestaurants() {
      try {
        const data = await getRestaurants();
        setRestaurants(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar los restaurantes:", error.message);
      }
    }

    fetchAndSetRestaurants();
  }, []);

  const handleRestaurantClick = (restaurant) => {
    if (selectedRestaurant && selectedRestaurant.id === restaurant.id) {
      setSelectedRestaurant(null);
    } else {
      setSelectedRestaurant(restaurant);
      console.log("Selected restaurant in handleRestaurantClick:", restaurant);
    }
  };

  return (
    <LoggedLayout
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
            />            ))
          )}
        </div>
      }
    />
  );
}
