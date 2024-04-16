import { MapContainer, TileLayer } from "react-leaflet";
import { MarkerGroup } from "../molecules/MarkerGroup";
import "leaflet/dist/leaflet.css";


export const RestaurantsMap = ({ restaurants }) => {
  return (
    <div className="w-full h-full overflow-hidden rounded-xl flex justify-center items-center">
    <MapContainer
      center={[40.713829, -73.989667]}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: "92vh", width: "100%" }}
    >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}"
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          ext="png"
        />
      <MarkerGroup restaurants={restaurants} />
    </MapContainer>
    </div>
  );
};
