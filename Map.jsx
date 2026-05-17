import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer
      center={[33.6844, 73.0479]} // Islamabad
      zoom={10}
      className="h-80 w-full rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[33.6844, 73.0479]}>
        <Popup>Islamabad</Popup>
      </Marker>
    </MapContainer>
  );
}
