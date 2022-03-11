const client = require('@bigdatacloudapi/client')('token');

function distance(lat1,lon1,lat2,lon2) {
    let R = 6371; 
    let dLat = deg2rad(lat2-lat1);  
    let dLon = deg2rad(lon2-lon1); 
    let a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      let d = R * c;
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}

(async () => {
    try {
      const response = await fetch('http://ip-api.com/json/tyt toje')
      const response_1 = await fetch('http://ip-api.com/json/tyt ip adress')
      const json = await response.json()
      const json_1 = await response_1.json()
      let result_dist = distance(json.lat, json.lon, json_1.lat, json_1.lon)
      if (result_dist != null || result_dist != undefined) {
        console.log('Result: \n' + getinfo_ip[1] + ' [' + json.country + '/' + json.city + '] \n' + getinfo_ip[2] + ' [' + json_1.country + '/' + json_1.city + ']\nDistance: ' + Math.round(result_dist, 1) + 'km')
      }
      console.log(json);
    } catch (error) {
      console.log(error);
    }
})();
