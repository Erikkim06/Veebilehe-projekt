// Initialize and add the map
function initMap() {
  // The location of Rome
  var Rome = {lat: 41.934197, lng: 12.454682};
  var Wembley = {lat: 51.555969, lng: -0.279966};
  var Saksamaa = {lat: 48.218755, lng: 11.624691};
  var Baku = {lat: 40.429950, lng: 49.919602};
  var Venemaa = {lat: 59.972685, lng: 30.221434};
  var Holland = {lat: 52.314352, lng: 4.941975};
  var Hispaania = {lat: 43.264089, lng: -2.949312};
  var Ungari = {lat: 47.503129, lng: 19.096990};
  var Taani = {lat: 55.702671, lng: 12.572390};
  var Dublin = {lat: 53.335142, lng: -6.228435};
  var Hampden = {lat: 55.825824, lng: -4.252377};  
  // The map, centered at Rome
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: Rome});
  // The marker, positioned at Rome
  var marker = new google.maps.Marker({position: Rome, map: map});
  var marker = new google.maps.Marker({position: Wembley, map: map});
  var marker = new google.maps.Marker({position: Saksamaa, map: map});
  var marker = new google.maps.Marker({position: Baku, map: map});
  var marker = new google.maps.Marker({position: Venemaa, map: map});
  var marker = new google.maps.Marker({position: Holland, map: map});
  var marker = new google.maps.Marker({position: Hispaania, map: map});
  var marker = new google.maps.Marker({position: Ungari, map: map});
  var marker = new google.maps.Marker({position: Taani, map: map});
  var marker = new google.maps.Marker({position: Dublin, map: map});
  var marker = new google.maps.Marker({position: Hampden, map: map});

}
