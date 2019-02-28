function initMap() {
	// add your code here

	L.mapquest.key = 'hMt23F52TqcnvsoUneDMd5mqA7CgjIGS';

	var map = L.mapquest.map('map', {
		center: [32.878797, -117.235918],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});



	L.marker([32.88, -117.237]).addTo(map);
}