
var indexController = angular.module('indexController', []);

indexController.controller('indexController', function($scope, $http, $q){


    $scope.formulario = {};
    var coords = {};
    var lat = 0;
    var long = 0;

    var lastMarker;

    
    $scope.formulario.latitude = -26.2297492;
    $scope.formulario.longitude =  -52.673373;


    var latitudeClick = 0;
    var longitudeClick = 0;



var atualizar = function(latitude, longitude, autocomplete){

    console.log('dentro do atualizar');

    var locations = [];

    $http({
        method: 'GET',
        url: '/get-all-points'

    }).then(function successCallback(response) {

        for(var i = 0; i < response.data.length; i++) {

            var point = response.data[i];
            

            var  contentString =
            '<p><b>Endereço</b>: ' + point.endereco +'</p>'+ '<br>' +'<p><b>Comentário</b>: ' + point.comentario +'</p>'+ '<br>' + "<div style='display: block;text-align: center;'><img onclick='document.getElementById(\"myModal\").style.display=\"block\";document.getElementById(\"img01\").src=\"uploads/"+point.file+"\"' id='myImg' width='100' src='uploads/"+point.file+"'></div>" ;

            
            locations.push({
                latlon: new google.maps.LatLng(point.latlong[1], point.latlong[0]),
                message: new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 320
                }),
                comentario: point.comentario
            });
        }

        var myLatLng = {lat: parseFloat(latitude), lng: parseFloat(longitude)};

        if (!mapa){


            var mapa = new google.maps.Map(document.getElementById('mapa'), {
                zoom: 12,
                center: myLatLng
            });

            var pbCoords = [
            {lng:-52.801, lat:-26.189},
            {lng:-52.804, lat:-26.189},
            {lng:-52.817, lat:-26.178},
            {lng:-52.816, lat:-26.173},
            {lng:-52.802, lat:-26.168},
            {lng:-52.803, lat:-26.163},
            {lng:-52.802, lat:-26.16},
            {lng:-52.797, lat:-26.159},
            {lng:-52.794, lat:-26.162},
            {lng:-52.783, lat:-26.154},
            {lng:-52.77, lat: -26.151},
            {lng:-52.753, lat:-26.153},
            {lng:-52.723, lat:-26.14},
            {lng:-52.724, lat:-26.125},
            {lng:-52.738, lat:-26.114},
            {lng:-52.747, lat:-26.111},
            {lng:-52.745, lat:-26.089},
            {lng:-52.743, lat:-26.086},
            {lng:-52.74, lat: -26.085},
            {lng:-52.736, lat:-26.072},
            {lng:-52.738, lat:-26.068},
            {lng:-52.742, lat:-26.067},
            {lng:-52.743, lat:-26.064},
            {lng:-52.747, lat:-26.064},
            {lng:-52.749, lat:-26.062},
            {lng:-52.749, lat:-26.055},
            {lng:-52.755, lat:-26.048},
            {lng:-52.756, lat:-26.038},
            {lng:-52.749, lat:-26.014},
            {lng:-52.734, lat:-26.006},
            {lng:-52.732, lat:-26.007},
            {lng:-52.729, lat:-26.013},
            {lng:-52.723, lat:-26.017},
            {lng:-52.719, lat:-26.016},
            {lng:-52.717, lat:-26.012},
            {lng:-52.718, lat:-26.009},
            {lng:-52.717, lat:-26.005},
            {lng:-52.714, lat:-26.002},
            {lng:-52.71, lat: -26.001},
            {lng:-52.711, lat:-25.994},
            {lng:-52.709, lat:-25.992},
            {lng:-52.699, lat:-25.993},
            {lng:-52.694, lat:-25.997},
            {lng:-52.689, lat:-26.006},
            {lng:-52.677, lat:-25.994},
            {lng:-52.672, lat:-25.994},
            {lng:-52.669, lat:-25.996},
            {lng:-52.667, lat:-26.003},
            {lng:-52.659, lat:-26.012},
            {lng:-52.659, lat:-26.017},
            {lng:-52.662, lat:-26.02},
            {lng:-52.666, lat:-26.021},
            {lng:-52.665, lat:-26.022},
            {lng:-52.666, lat:-26.029},
            {lng:-52.664, lat:-26.031},
            {lng:-52.654, lat:-26.033},
            {lng:-52.635, lat:-26.024},
            {lng:-52.627, lat:-26.026},
            {lng:-52.625, lat:-26.028},
            {lng:-52.625, lat:-26.035},
            {lng:-52.627, lat:-26.038},
            {lng:-52.645, lat:-26.051},
            {lng:-52.632, lat:-26.052},
            {lng:-52.629, lat:-26.057},
            {lng:-52.625, lat:-26.06},
            {lng:-52.622, lat:-26.06},
            {lng:-52.619, lat:-26.053},
            {lng:-52.611, lat:-26.052},
            {lng:-52.605, lat:-26.058},
            {lng:-52.595, lat:-26.058},
            {lng:-52.591, lat:-26.063},
            {lng:-52.584, lat:-26.067},
            {lng:-52.583, lat:-26.075},
            {lng:-52.586, lat:-26.08},
            {lng:-52.6, lat:-26.08},
            {lng:-52.607, lat:-26.083},
            {lng:-52.62, lat: -26.082},
            {lng:-52.622, lat:-26.085},
            {lng:-52.618, lat:-26.084},
            {lng:-52.611, lat:-26.085},
            {lng:-52.598, lat:-26.082},
            {lng:-52.594, lat:-26.083},
            {lng:-52.591, lat:-26.088},
            {lng:-52.602, lat:-26.108},
            {lng:-52.599, lat:-26.107},
            {lng:-52.592, lat:-26.108},
            {lng:-52.587, lat:-26.114},
            {lng:-52.581, lat:-26.108},
            {lng:-52.576, lat:-26.108},
            {lng:-52.571, lat:-26.111},
            {lng:-52.567, lat:-26.124},
            {lng:-52.559, lat:-26.128},
            {lng:-52.554, lat:-26.135},
            {lng:-52.555, lat:-26.141},
            {lng:-52.561, lat:-26.145},
            {lng:-52.558, lat:-26.145},
            {lng:-52.547, lat:-26.151},
            {lng:-52.543, lat:-26.15},
            {lng:-52.537, lat:-26.153},
            {lng:-52.537, lat:-26.158},
            {lng:-52.541, lat:-26.163},
            {lng:-52.534, lat:-26.166},
            {lng:-52.532, lat:-26.172},
            {lng:-52.535, lat:-26.176},
            {lng:-52.539, lat:-26.176},
            {lng:-52.54, lat: -26.181},
            {lng:-52.543, lat:-26.184},
            {lng:-52.54, lat: -26.191},
            {lng:-52.533, lat:-26.197},
            {lng:-52.533, lat:-26.202},
            {lng:-52.537, lat:-26.205},
            {lng:-52.535, lat:-26.207},
            {lng:-52.536, lat:-26.213},
            {lng:-52.534, lat:-26.214},
            {lng:-52.533, lat:-26.217},
            {lng:-52.534, lat:-26.224},
            {lng:-52.531, lat:-26.224},
            {lng:-52.526, lat:-26.229},
            {lng:-52.526, lat:-26.233},
            {lng:-52.531, lat:-26.24},
            {lng:-52.534, lat:-26.24},
            {lng:-52.533, lat:-26.243},
            {lng:-52.536, lat:-26.247},
            {lng:-52.543, lat:-26.249},
            {lng:-52.537, lat:-26.255},
            {lng:-52.537, lat:-26.261},
            {lng:-52.542, lat:-26.264},
            {lng:-52.546, lat:-26.264},
            {lng:-52.549, lat:-26.267},
            {lng:-52.549, lat:-26.272},
            {lng:-52.551, lat:-26.274},
            {lng:-52.556, lat:-26.274},
            {lng:-52.56, lat: -26.271},
            {lng:-52.565, lat:-26.272},
            {lng:-52.56, lat: -26.275},
            {lng:-52.56, lat: -26.282},
            {lng:-52.563, lat:-26.284},
            {lng:-52.57, lat: -26.283},
            {lng:-52.574, lat:-26.288},
            {lng:-52.578, lat:-26.288},
            {lng:-52.581, lat:-26.293},
            {lng:-52.586, lat:-26.293},
            {lng:-52.582, lat:-26.298},
            {lng:-52.584, lat:-26.303},
            {lng:-52.59, lat: -26.306},
            {lng:-52.6, lat:-26.304},
            {lng:-52.602, lat:-26.302},
            {lng:-52.605, lat:-26.305},
            {lng:-52.613, lat:-26.305},
            {lng:-52.617, lat:-26.303},
            {lng:-52.621, lat:-26.303},
            {lng:-52.623, lat:-26.305},
            {lng:-52.633, lat:-26.304},
            {lng:-52.633, lat:-26.308},
            {lng:-52.635, lat:-26.311},
            {lng:-52.641, lat:-26.312},
            {lng:-52.643, lat:-26.31},
            {lng:-52.647, lat:-26.31},
            {lng:-52.65, lat: -26.307},
            {lng:-52.66, lat: -26.305},
            {lng:-52.663, lat:-26.303},
            {lng:-52.683, lat:-26.28},
            {lng:-52.693, lat:-26.273},
            {lng:-52.703, lat:-26.272},
            {lng:-52.732, lat:-26.278},
            {lng:-52.757, lat:-26.26},
            {lng:-52.758, lat:-26.256},
            {lng:-52.755, lat:-26.251},
            {lng:-52.758, lat:-26.249},
            {lng:-52.764, lat:-26.251},
            {lng:-52.77, lat: -26.248},
            {lng:-52.774, lat:-26.243},
            {lng:-52.774, lat:-26.239},
            {lng:-52.782, lat:-26.24},
            {lng:-52.789, lat:-26.234},
            {lng:-52.789, lat:-26.231},
            {lng:-52.793, lat:-26.226},
            {lng:-52.798, lat:-26.226},
            {lng:-52.8, lat:-26.222},
            {lng:-52.804, lat:-26.221},
            {lng:-52.805, lat:-26.216},
            {lng:-52.795, lat:-26.204},
            {lng:-52.787, lat:-26.203},
            {lng:-52.79, lat: -26.201},
            {lng:-52.79, lat: -26.196},
            {lng:-52.799, lat:-26.192},
            {lng:-52.801, lat:-26.189},



            ];

            var polygon = new google.maps.Polygon({
                paths: pbCoords,
                strokeColor: '#FF0000',
                strokeOpacity: 0.4,
                //strokeWeigth: 2,
                //fillColor: '#FF0000',
                fillOpacity: 0
            });
            polygon.setMap(mapa);
        }

        locations.forEach(function(n, i){
            var marker = new google.maps.Marker({
                position: n.latlon,
                map: mapa,
                title: "Pato Branco",
                //icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                icon: "aedes3.png"
            });

            google.maps.event.addListener(marker, 'click', function(e){

                currentSelectedMarker = n;
                n.message.open(mapa, marker);
            });
        });

        if(autocomplete){

            bounds  = new google.maps.LatLngBounds();
            var initialLocation = new google.maps.LatLng(latitude, longitude);
            bounds.extend(initialLocation);
            var marker = new google.maps.Marker({
                position: initialLocation,
                animation: google.maps.Animation.BOUNCE,
                map: mapa,
                icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
            });
            mapa.fitBounds(bounds);      
            //mapa.panToBounds(bounds);
            lastMarker = marker
        }

        

        mapa.panTo(new google.maps.LatLng(latitude, longitude));

    



}, function errorCallback(response) {
    console.error(response);
});

}
;




google.maps.event.addDomListener(window, 'load',
    atualizar(-26.173 , -52.663));




});
