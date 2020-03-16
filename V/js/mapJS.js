window.onload = function () {
	alert("N'oubliez pas d'activer la geolocalisation !")
	//Chargement initial de la MAP

	var map = L.map('mapid').setView([48.798801, 2.16592], 10);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1Ijoic3hzbGFkZSIsImEiOiJjanQxZzE2MXgwYjQ5NDVwcWVjdmpxYTMyIn0.5yzT3DpyAUn00mwCbeeO9g'
	}).addTo(map);

	var coordsGPS = new Array();
	currentLocation();

	$("#macdo").click(function () {
		$.ajax({
			url: "./V/js/fr_crous_restauration_france_entiere.geojson",
			dataType: "json",
			success: function (data) {

				L.geoJson(data, {
					pointToLayer: function (feature, latlng) {
						var smallIcon;
						if(feature.properties.type == "Restaurant") {
							smallIcon = L.icon({
								iconUrl: './V/img/restaurant.png',
								iconSize: [30, 30]
							});
						}
						else if (feature.properties.type == "Caf\u00e9t\u00e9ria"){
							smallIcon = L.icon({
								iconUrl: './V/img/cafetaria.png',
								iconSize: [30, 30]
							});
						}
						else if (feature.properties.type == "Foodtruck"){
							smallIcon = L.icon({
								iconUrl: './V/img/foodtruck.png',
								iconSize: [40, 40]
							});
						}
						else if (feature.properties.type == "\u00e9picerie"){
							smallIcon = L.icon({
								iconUrl: './V/img/epicerie.png',
								iconSize: [40, 40]
							});
						}
						else if (feature.properties.type == "Sandwicherie"){
							smallIcon = L.icon({
								iconUrl: './V/img/sandwich.png',
								iconSize: [30, 30]
							});
						}
						else if (feature.properties.type == "Brasserie"){
							smallIcon = L.icon({
								iconUrl: './V/img/brasserie.png',
								iconSize: [30, 30]
							});
						}
						else {
							smallIcon = L.icon({
								iconUrl: './V/img/crous.png',
								iconSize: [45, 30]
							});
						}
						return L.marker(latlng, {icon: smallIcon});

					}, onEachFeature: function (feature, layer) {
						layer.bindPopup(
							"<input type='hidden' name='long' value=" + feature.geometry.coordinates[0] + " />" +
							"<input type='hidden' name='lat' value=" + feature.geometry.coordinates[1] + " />" +
							"<p class=title>" + feature.properties.title + " (" + feature.properties.type + ")</p>" +
							"<p>" + feature.properties.contact + "</p>" +
							"<img class=image src=" + feature.properties.photo + " alt=\" Photo indisponible\">" +
							"<input type='hidden' name='long' value=" + feature.geometry.coordinates[0] + " />" +
							"<input type='hidden' name='lat' value=" + feature.geometry.coordinates[1] + " />"
						);
					},
				}).addTo(map);
			},
			error: function (xhr) {
				alert(xhr.statusText)
			}
		});

	});
	
	map.on('popupopen', function (e) {
		coordsGPS[2] = e.popup._source.feature.geometry.coordinates[1];
		coordsGPS[3] = e.popup._source.feature.geometry.coordinates[0];
		go(coordsGPS[0], coordsGPS[1], coordsGPS[2], coordsGPS[3]);
	});

	function currentLocation() {
		var defaultLocation = ["48.798801","2.16592"];
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((function (position) {
				L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
				coordsGPS[0] = position.coords.latitude;
				coordsGPS[1] = position.coords.longitude;
			}));
		} else {
			alert("Votre géolocalisation est désactivé ! \n" + 
			"L'IUT Paris Descartes sera donc votre pseudo localisation.")
			L.marker([defaultLocation[0],defaultLocation[1]]).addTo(map);
			coordsGPS[0] = defaultLocation[0];
			coordsGPS[1] = defaultLocation[1];
		}
	}

	var route;
	function go(lat1,lon1,lat3,lon3) {
		if(route != null)
			route.remove();
		try {
			Gp.Services.route({
				startPoint: {
					x: lon1,
					y: lat1
				},
				endPoint: {
					x: lon3,
					y: lat3
				},
				graph: "Pieton",
				routePreference: "fastest",
				apiKey: "jhyvi0fgmnuxvfv0zjzorvdn",
				onSuccess: function(result) {
					var json = JSON.stringify(result);
					var obj = JSON.parse(json);
					var distance = obj.totalDistance;
					var min = Math.floor(obj.totalTime/60);
					alert(min + " min \n" + distance);
					route = L.geoJson(result.routeGeometry);
					route.addTo(map);
				},
				onFailure: function(e) {
					alert("Aucun itinéraire n'a été trouvé !");
				}
			});
			} catch (e) {
				console.log(e);
			}
	}

}