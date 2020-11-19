const vacationLocations = [
    {
        location: "Yosemite National Park",
        lat: 37.8651,
        lng: 119.5383
    },
    {
        location: "Disneyland",
        lat: 33.8121,
        lng: 117.9190
    },
    {
        location: "Universal Studios",
        lat: 34.1381,
        lng: 118.3534
    },
    {
        location: "San Francisco",
        lat: 37.7749,
        lng: 122.4194
    },
    {
        location: "Joshua Tree National Park",
        lat: 33.8734,
        lng: 115.9010
    },
    {
        location: "Palm Springs",
        lat: 33.8303,
        lng: 116.5453
    },
    {
        location: "Coachella Valley Music and Arts Festival",
        lat: 33.6803,
        lng: 116.1738
    },
    {
        location: "Sequoia National Park",
        lat: 36.4864,
        lng: 118.5658
    },
    {
        location: "Kings Canyon National Park",
        lat: 36.8879,
        lng: 118.5551
    },
    {
        location: "New Orleans",
        lat: 29.9511,
        lng: 90.0715
    },
    {
        location: "Zion National Park",
        lat: 37.2982,
        lng: 113.0263
    },
    {
        location: "Bryce Canyon National Park",
        lat: 37.5930,
        lng: 112.1871
    },
    {
        location: "Grand Staircase-Escalante National Monument",
        lat: 37.4047,
        lng: 111.6841
    },
    {
        location: "Capitol Reef National Park",
        lat: 38.0877,
        lng: 111.1355
    },
    {
        location: "Arches National Monument",
        lat: 38.7331,
        lng: 109.5925
    },
    {
        location: "Canyonlands National Park",
        lat: 38.2136,
        lng: 109.9025
    }
];

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const sanDiego = { lat: 32.7157, lng: 117.1611 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: sanDiego,
    });
    // The marker, positioned at Uluru
    for (let i = 0; i < vacationLocations.length; i++){
        const marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            map: map,
            position: { lat: vacationLocations[i].lat , lng: vacationLocations[i].lng },
            labe: { text: vacationLocations[i].location , color: "white"}
    });
  }
}

initMap();
