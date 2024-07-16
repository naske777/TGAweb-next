"use client";
import { getUserLocation } from "@/app/lib/utilities/ubication";
import { useEffect } from "react";

export default function ShowMapPage() {
  useEffect(() => {
    import("@tomtom-international/web-sdk-maps/dist/maps.css");

    if ("serviceWorker" in navigator) {
      console.log("detected");

      navigator.serviceWorker.register("/sw.js").then(
        function (registration) {
          // Registro exitoso
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
          window.addEventListener("beforeunload", () => {
            registration.unregister().then((boolean) => {
              console.log("Service Worker unregistered");
            });
          });
        },
        function (err) {
          // Registro fallido :(
          console.log("ServiceWorker registration failed: ", err);
        }
      );
    }

    const initializeMap = async () => {
      try {
        // Importar dinámicamente el SDK de TomTom Maps
        const tt = await import("@tomtom-international/web-sdk-maps");
        const location = await getUserLocation();

        const map = tt.map({
          key: "apikey",
          container: "map",
          center: location,
          zoom: 15,
        });

        // Crear una instancia de GeolocateControl
        const geolocateControl = new tt.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        });

        // Añadir el control al mapa
        map.addControl(geolocateControl);

        const locations = [
          { lat: 40.416775, lng: -3.70379 }, // Ejemplo: Madrid, España
          { lat: 48.856614, lng: 2.352222 }, // Ejemplo: París, Francia
        ];

        locations.forEach((location) => {
          // Crear un nuevo popup con información
          const popup = new tt.Popup({ offset: 35 }).setHTML(
            `<h3 class="font-bold">Información de la Ubicación</h3><p>Latitud: ${location.lat}, Longitud: ${location.lng}</p>`
          );

          // Crear una nueva marca y añadirla al mapa
          const marker = new tt.Marker()
            .setLngLat([location.lng, location.lat])
            .setPopup(popup) // Asociar el popup a la marca
            .addTo(map);
        });
      } catch (error) {
        console.error("Error loading TomTom maps:", error);
      }
    };

    initializeMap();
  }, []);

  return <div className="w-full h-full" id="map"></div>;
}
