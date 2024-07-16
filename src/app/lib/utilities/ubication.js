export function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by your browser.");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = [
            position.coords.longitude,
            position.coords.latitude,
          ];
          resolve(location);
        },
        (error) => {
          reject("Error obtaining location: " + error.message);
        }
      );
    }
  });
}
