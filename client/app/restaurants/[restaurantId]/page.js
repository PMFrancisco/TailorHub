"use client";

import { useState, useEffect } from "react";
import { SingleContentLayout } from "@/components/layouts/SingleContentLayout";
import { Spinner } from "@/components/atoms/Spinner";
import { getRestaurantById } from "@/app/api/restaurants";
import { DescriptionAndComments } from "@/components/organisms/DescriptionAndComments";
import { SingleRestaurantHeader } from "@/components/organisms/SingleRestaurantHeader";
import { NewCommentBox } from "@/components/molecules/NewCommentBox";
import { FavoriteButton } from "@/components/molecules/FavoriteButton";

export default function RestaurantPage({ params }) {
  const { restaurantId } = params;
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (restaurantId) {
      getRestaurantById(restaurantId)
        .then((data) => {
          setRestaurant(data);
          setReviews(data.reviews || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch restaurant", err);
          setError(err.message);
          setLoading(false);
        });
    }
  }, [restaurantId]);

  const addReview = (newComment) => {
    setReviews((prevComments) => [...prevComments, newComment]);
  };

  const handleReviewDeleted = (reviewId) => {
    setReviews((reviews) => reviews.filter((review) => review.id !== reviewId));
  };

  const handleReviewUpdated = (updatedReview) => {
    setReviews((reviews) =>
      reviews.map((review) =>
        review.id === updatedReview.id ? updatedReview : review
      )
    );
  };

  return (
    <SingleContentLayout
      mainContent={
        loading ? (
          <Spinner />
        ) : (
          <>
            <div className="flex flex-col items-center w-full gap-8">
              <SingleRestaurantHeader restaurant={restaurant} />
              <div className="w-3/4 flex flex-row gap-8">
                <DescriptionAndComments
                  restaurant={restaurant}
                  reviews={reviews}
                  onReviewDeleted={handleReviewDeleted}
                  onReviewUpdated={handleReviewUpdated}
                />
                <div className="flex flex-col gap-4">
                  <FavoriteButton restaurantId={restaurantId} />
                  <NewCommentBox
                    restaurantId={restaurantId}
                    addReview={addReview}
                  />
                </div>
              </div>
            </div>
          </>
        )
      }
    />
  );
}
