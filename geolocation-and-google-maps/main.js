const $button = document.querySelector('button');
const $position = document.querySelector('p');

$button.addEventListener('click', event => getPosition());

function getPosition() {
  if (!navigator.geolocation) {
    $position.textContent = 'Geolocation is not supported in your browser.';
    return;
  }
  navigator.geolocation.getCurrentPosition(
    position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      $position.innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}`;
    },
    error => {
      $position.textContent = error.message;
    }
  );
}

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
