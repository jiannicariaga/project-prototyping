/* exported data */

var data = {
  // LocalStorage data model
};
var previousData = localStorage.getItem('data');

if (previousData !== null) {
  data = JSON.parse(previousData);
}

window.addEventListener('beforeunload', event => {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
});
