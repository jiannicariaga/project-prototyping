function getLocation() {
  if (!navigator.geolocation) {
    // eslint-disable-next-line no-console
    console.log('Geolocation is not supported in your browser.');
    return;
  }
  // eslint-disable-next-line no-console
  console.log('Retrieving location...');
  navigator.geolocation.getCurrentPosition(
    position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      // eslint-disable-next-line no-console
      console.log(`Latitude: ${latitude}\nLongitude: ${longitude}`);
    },
    () => {
      // eslint-disable-next-line no-console
      console.log('Unable to retrieve location.');
    });
}

getLocation();
