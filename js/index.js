
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
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "weight": "2.00"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#9c9c9c"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
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
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#7b7b7b"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#46bcec"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c8d7d4"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#070707"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
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
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});