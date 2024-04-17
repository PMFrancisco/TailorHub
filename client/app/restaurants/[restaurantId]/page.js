"use client";

import { SingleContentLayout } from "@/components/layouts/SingleContentLayout";
import { RestaurantHeader } from "@/components/molecules/RestaurantHeader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RestaurantPage() {

    const router = useRouter();
    const restaurantId = router.query?.restaurantId || null;

    console.log("restaurantId:", restaurantId);

  return (
    <SingleContentLayout
      mainContent={
        <RestaurantHeader restaurantId={restaurantId}
        />
      }
    />
  );
}
