window.addEventListener('load', event => initMap());

function initMap() {
  const position = { lat: 34.052235, lng: -118.243683 };
  const map = new window.google.maps.Map(document.querySelector('.map'), {
    center: position,
    zoom: 13
  });
  // eslint-disable-next-line no-unused-vars
  const marker = new window.google.maps.Marker({
    position,
    map
  });
}
