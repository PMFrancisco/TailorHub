"use client";

import { SingleContentLayout } from "@/components/layouts/SingleContentLayout";
import { NewRestaurantCard } from "@/components/organisms/NewRestaurantCard";
export default function NewRestaurant() {


  return (
    <SingleContentLayout
      mainContent={
        < NewRestaurantCard
        />
      }
    />
  );
}
