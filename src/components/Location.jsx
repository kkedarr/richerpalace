import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom Marker Icon
const markerIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [28, 45],
  iconAnchor: [14, 45],
});

export default function Location({
  shopName = "FreshClean Headquarters",
  address = "123 Clean Street, Laundry City, LC 90210",
  latitude = 6.5244,
  longitude = 3.3792,
}) {
  const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <section id="location" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Visit Us</h2>
        <p className="text-gray-600 max-w-xl mb-12">
          Find our facility easily using the interactive map below. Tap the marker for details
          or open the location in Google Maps for navigation.
        </p>

        {/* Map Container */}
        <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-gray-200">
          <MapContainer
            center={[latitude, longitude]}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height: "420px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />

            <Marker position={[latitude, longitude]} icon={markerIcon}>
              <Popup>
                <strong>{shopName}</strong>
                <br />
                {address}
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Address + Navigation */}
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold">{shopName}</h3>
          <p className="text-gray-600 mt-2 max-w-md mx-auto">{address}</p>

          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}