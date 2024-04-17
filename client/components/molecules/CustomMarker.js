import { Marker } from "react-leaflet";
import L from "leaflet";

const normalIcon = new L.Icon({
  iconUrl: "/images/lightMarker.png",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

const selectedIcon = new L.Icon({
  iconUrl: "/images/marker.png",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

export const CustomMarker = ({ position, onClick, selected }) => {
  const icon = selected ? selectedIcon : normalIcon;
  return (
    <Marker
      position={position}
      icon={icon}
      eventHandlers={{ click: onClick }}
    />
  );
};
