const token = 'pk.eyJ1IjoidHJpbmhsZTMxNiIsImEiOiJjbDZia2oyY3QwMmVxM2NwMnBwNGcyM3NnIn0.4PtWqYmP2Cp1U4mT52URRw'
const markers = []

mapboxgl.accessToken = token
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
})
const initLocation = { placeName: 'Nguyen Lam Tower', coordinates: [106.689151, 10.747872]}
async function searchKeywords (text) {
  const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(text)}.json?access_token=${token}`)
    .then(response => response)
  if (res.status === 200) {
    const data = await res.json()
    appendResults(data.features)
  }
}
function selectSuggestion (placeName, coordinates, parentNode) {
  parentNode.style.display = 'none'
  let input = document.querySelector('#input')
  input.value = placeName
  createMarker({placeName, coordinates})
  flyToLocation(coordinates)
}
function createMarker ({placeName, coordinates}) {
  const marker = new mapboxgl
    .Marker()
    .setLngLat(coordinates)
    .addTo(map)
  
  if(placeName.length) {
    const popup = new mapboxgl.Popup().setText(placeName).addTo(map)
    marker.setPopup(popup)
  }
  
  markers.forEach(marker => { marker.remove() })
  markers.push(marker)
}
function flyToLocation(coordinates) {
  map.flyTo({
    center: coordinates,
    zoom: 13,
    duration: 3000,
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
  map.on('click', (e) => {
    const lngLat = [e.lngLat.lng, e.lngLat.lat]
    createMarker({placeName:'', coordinates: lngLat })
    flyToLocation(lngLat)
  })
})
