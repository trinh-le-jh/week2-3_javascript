const token = 'pk.eyJ1IjoidHJpbmhsZTMxNiIsImEiOiJjbDZia2oyY3QwMmVxM2NwMnBwNGcyM3NnIn0.4PtWqYmP2Cp1U4mT52URRw';
mapboxgl.accessToken = token;
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});
const focusLocation = [106.689151, 10.747872]
function onChange(text) {
  console.log('The text has been changed.'+ text);
  $.ajax({
    url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(text)}.json`,
    data: {
      'access_token' : token
    },
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      appendResults(data.features)
    }
  })
}
function appendResults (list) {
  let ul = document.querySelector('#suggestions');
  ul.innerHTML = ''
  
  if(!list.length) {
    ul.style.display = 'none'
    console.log(list.length)
    return
  }
  
  ul.style.display = 'block'
  
  let listSuggestion = list.map(suggestion => {
    let li = document.createElement('li')
    li.textContent = suggestion.place_name
    return li
  });
  console.log(listSuggestion.length)
  console.log(list.length)
  
  ul.append(...listSuggestion)
}
map.on('load', () => {
  map.loadImage(
    'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
    (error, image) => {
      if (error) throw error
      map.addImage('custom-marker', image);
      map.addSource('points', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [{
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': focusLocation
            },
            'properties': {'title': 'Nguyen Lam Tower'}
          }]
        }
      });
      
      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
          'icon-image': 'custom-marker',
          'text-field': ['get', 'title'],
          'text-font': [
            'Open Sans Semibold',
            'Arial Unicode MS Bold'
          ],
          'text-offset': [0, 1.25],
          'text-anchor': 'top'
        }
      });
    }
  );
  map.flyTo({
    center: focusLocation,
    zoom: 13,
    duration: 8000,
  });
  
  // Show infobox when done focus in location
  setTimeout(function () {
    new mapboxgl.Popup()
      .setLngLat(focusLocation)
      .setHTML('<strong>Journey Horizon is here</strong><p>You will love the people you work with.</p>')
      .addTo(map);
  }, 8000)
  
});