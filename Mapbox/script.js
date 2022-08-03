const token = 'pk.eyJ1IjoidHJpbmhsZTMxNiIsImEiOiJjbDZia2oyY3QwMmVxM2NwMnBwNGcyM3NnIn0.4PtWqYmP2Cp1U4mT52URRw'
mapboxgl.accessToken = token
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
})
const initLocation = { placeName: 'Nguyen Lam Tower', coordinates: [106.689151, 10.747872]}
function searchKeywords(text) {
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
function selectSuggestion (placeName, coordinates, parentNode) {
  parentNode.style.display = 'none'
  let input = document.querySelector('#input')
  input.value = placeName
  createMarker({placeName, coordinates})
  flyToLocation(coordinates)
}
function createMarker ({placeName, coordinates}) {
  const id = Math.random().toString(36).slice(2, 7)
  map.addSource(id, {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [{
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': coordinates
        },
        'properties': {'title': placeName}
      }]
    }
  })
  
  map.addLayer({
    'id': id,
    'type': 'symbol',
    'source': id,
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
  })
}
function flyToLocation(coordinates) {
  map.flyTo({
    center: coordinates,
    zoom: 13,
    duration: 8000,
  })
}
function appendResults (list) {
  let ul = document.querySelector('#suggestions')
  ul.innerHTML = ''
  
  if(!list.length) {
    ul.style.display = 'none'
    return
  }
  
  ul.style.display = 'block'
  
  let listSuggestion = list.map(suggestion => {
    let li = document.createElement('li')
    li.textContent = suggestion.place_name
    li.style.cursor = 'pointer'
    li.addEventListener('click', () => {
      selectSuggestion(suggestion.text, suggestion.geometry.coordinates, ul)
    })
    return li
  })
  
  ul.append(...listSuggestion)
}
map.on('load', () => {
  map.loadImage(
    'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
    (error, image) => {
      if (error) throw error
      map.addImage('custom-marker', image)
      createMarker(initLocation)
    }
  )
  flyToLocation(initLocation.coordinates)
  
  // Show infobox when done focus in location
  setTimeout(function () {
    new mapboxgl.Popup()
      .setLngLat(initLocation.coordinates)
      .setHTML('<strong>Journey Horizon is here</strong><p>You will love the people you work with.</p>')
      .addTo(map)
  }, 8000)
})
