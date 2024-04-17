import { useEffect, useState } from "react";
import { Spinner } from "../atoms/Spinner";
import { StyledImage } from "../atoms/StyledImage";

export const SingleRestaurantHeader = ({ restaurantId  }) => {
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (restaurantId) {
      setIsLoading(true);
      getRestaurantById(restaurantId)
        .then(data => {
          setRestaurant(data);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, [restaurantId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error al cargar los detalles del restaurante: {error}</p>;
  }

  if (!restaurant) {
    return <p>Restaurante no encontrado.</p>;
  }
  return (
    <div className="relative h-[600px]">
      <StyledImage src={restaurant.imageUrl}  className="absolute z-0" />
      <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.address}</p>
    </div>
    </div>
  );
};
