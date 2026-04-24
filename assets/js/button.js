

function getLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        callback(lat, lon)
      },
      function(error) {
        alert("Error: " + error.message);
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function hello() {
  return "hello"
}


function testButton(){
    console.log('hello')
    //getLocation(function(lat, lon) {
    //  console.log("Latitude:", lat);
    //  console.log("Longitude:", lon);
    //});
}
