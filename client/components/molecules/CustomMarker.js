import { Marker } from "react-leaflet";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "/images/marker.png",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

export const CustomMarker = ({ position }) => {
  return <Marker position={position} icon={customIcon}></Marker>;
};
