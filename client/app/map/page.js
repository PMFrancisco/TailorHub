"use client";

import { Layout } from "@/components/layouts/Layout";
import { RestaurantCard } from "@/components/organisms/RestaurantCard";
import { RestaurantsMap } from "@/components/organisms/RestaurantMap";
import { useEffect, useState } from "react";
import { getRestaurants } from "../api/restaurants";

export default function MapPage() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchAndSetRestaurants() {
      try {
        const data = await getRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error("Error al cargar los restaurantes:", error.message);
      }
    }

    fetchAndSetRestaurants();
  }, []);
  return (
    <Layout
      leftContent={<RestaurantsMap restaurants={restaurants} />}
      rightContent={
        <div className="space-y-8">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      }
    />
  );
}
