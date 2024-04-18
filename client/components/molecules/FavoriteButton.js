import { Button } from "../atoms/Button";
import { toggleFavorite } from "@/app/api/users";
import { useUser } from "@/app/context/UserContext";
export const FavoriteButton = ({ restaurantId }) => {
  const { user, setUser } = useUser();

  const isFavorite = user && user.favorites.includes(restaurantId);

  const handleToggleFavorite = async () => {
    try {
      const updatedFavorites = await toggleFavorite(restaurantId);
      console.log("Updated favorites:", updatedFavorites);
      if (user) {
        const newFavorites = isFavorite
          ? user.favorites.filter((fav) => fav !== restaurantId)
          : [...user.favorites, restaurantId];
        setUser({ ...user, favorites: newFavorites });
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    <Button
      onClick={handleToggleFavorite}
      className={
        isFavorite ? "bg-[#264BEB] text-white" : "border-black text-black"
      }
    >
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </Button>
  );
};
