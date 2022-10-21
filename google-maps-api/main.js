window.addEventListener('load', event => initMap());

function initMap() {
  const position = { lat: 34.052235, lng: -118.243683 };
  const map = new google.maps.Map(document.querySelector('.map'), {
    center: position,
    zoom: 13
  });
  const marker = new google.maps.Marker({
    position,
    map
  });
}
