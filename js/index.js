function initMap() {
    // The location of Uluru
    var mung = { lat: 40.743, lng: -73.976 };
    // The map, centered at Mung Cafe
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 6, center: mung });
    // The marker, positioned at Mung Cafe
    var marker = new google.maps.Marker({ position: mung, map: map });
}