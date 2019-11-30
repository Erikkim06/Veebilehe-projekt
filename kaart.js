// Initialize and add the map
function initMap() {
  // The location of Rome
  var Rome = {lat: 41.934197, lng: 12.454682};
  // The map, centered at Rome
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: Rome});
  // The marker, positioned at Rome
  var marker = new google.maps.Marker({position: Rome, map: map});
}
