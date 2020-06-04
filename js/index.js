
var map;
var markers = [];
var infoWindow;

var selectedMarker;

function initMap() {
  var Oslo = {
    lat: 59.911491,
    lng: 10.757933
  }
  map = new google.maps.Map(document.getElementById('map'), {
    center: Oslo,
    zoom: 8,
    mapTypeId: "roadmap",
    styles: 
    [
      {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "saturation": 36
              },
              {
                  "color": "#000000"
              },
              {
                  "lightness": 40
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#000000"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 17
              },
              {
                  "weight": 1.2
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "saturation": "-100"
              },
              {
                  "lightness": "30"
              }
          ]
      },
      {
          "featureType": "administrative.neighborhood",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "administrative.land_parcel",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "gamma": "0.00"
              },
              {
                  "lightness": "74"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "all",
          "stylers": [
              {
                  "lightness": "3"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 21
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 17
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 29
              },
              {
                  "weight": 0.2
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 18
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 19
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#2c2c39"
              },
              {
                  "lightness": "0"
              },
              {
                  "gamma": "1.00"
              },
              {
                  "saturation": "0"
              }
          ]
      }
  ],
    mapTypeControl: false,
  });
  infoWindow = new google.maps.InfoWindow();
  searchStores();
}

function searchStores() {
  var foundStores = [];
  var zipCode = document.getElementById('zip-code-input').value;
  if (zipCode) {
    stores.forEach(function (store) {
      var postal = store.address.postalCode.substring(0, 4);
      if (postal == zipCode) {
        foundStores.push(store);
      };
    });
  } else {
    foundStores = stores;
  }
  clearLocations();
  displayStores(foundStores);
  showStoresMarkers(foundStores);
  setOnClickListener();
}

function clearLocations() {
  infoWindow.close();
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers.length = 0;
}


function setOnClickListener() {
  var storeElements = document.querySelectorAll('.store-container');
  storeElements.forEach(function (elem, index) {
    elem.addEventListener('click', function () {
      google.maps.event.trigger(markers[index], 'click');
    })
  });
}

function displayStores(stores) {
  var storesHtml = "";
  stores.forEach(function (store, index) {
    var name = store.name;
    var address = store.addressLines;
    // var phone = store.phoneNumber;
    var city = store.address.city;
    var zipCode = store.address.postalCode;
    storesHtml += `
    <div class="store-container">
      <div class="store-container-background">
          <div class="store-info-container">
            <div class="store-container-name">
            ${name}
            </div>
            <div class="store-address">
              <span>${address[0]}</span>
              <span>${address[1]}</span>
            </div>
            <div class="store-phone-number">
            ${zipCode}, ${city}
            </div>
          </div>
          <div class="store-number-container">
            <div class="store-number">
              ${index + 1}
            </div>
          </div>
        </div>
    </div>
    `
  });
  document.querySelector('.stores-list').innerHTML = storesHtml;
}

function showStoresMarkers(stores) {
  var bounds = new google.maps.LatLngBounds();
  stores.forEach(function (store, index) {
    var latlng = new google.maps.LatLng(
      store.coordinates.latitude,
      store.coordinates.longitude);
    var name = store.name;
    var address = store.addressLines[0];
    var openStatusText = store.openStatusText;
    var phoneNumber = store.phoneNumber;
    bounds.extend(latlng);
    createMarker(latlng, name, address, openStatusText, phoneNumber, index);
  })
  map.fitBounds(bounds);
}


function createMarker(latlng, name, address, openStatusText, phoneNumber, index) {
  var html = `
    <div class="store-info-window">
    <div class="store-info-name">
      ${name}
    </div>
    <div class="store-info-status">
      ${openStatusText}
    </div>
    <div class="store-info-address">
      <div class="circle">
        <i class="fas fa-location-arrow"></i>
      </div>
      <a href="https://www.google.com/maps/dir/?api=1&destination=${latlng}" style="color: #514C4C" target="_blank">${address}</a>
    </div>
  </div>
    `

  var coffeIcon = {
    // url: 'https://i.ya-webdesign.com/images/svg-marker-flat-map-5.png',
    url: './media/coffee-cup-icon.png',
    // url: 'https://i.ya-webdesign.com/images/vector-cafe-flat-1.png',
    scaledSize: new google.maps.Size(40, 40)
  };

   var marker = new google.maps.Marker({
    map: map,
    position: latlng,
    // label: `${index + 1}`,
    icon: coffeIcon,
    animation: google.maps.Animation.DROP,
  });
  

  google.maps.event.addListener(marker, 'click', function () {
    infoWindow.setContent(html);
    infoWindow.open(map, marker);

    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function () {
    marker.setAnimation(null);
    }, 700); // current maps duration in ms of one bounce (v3.13)
  });  
  markers.push(marker);
}

var input = document.getElementById("zip-code-input");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});