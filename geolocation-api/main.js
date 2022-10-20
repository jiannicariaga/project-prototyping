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
