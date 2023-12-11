var CRSPixel = L.Util.extend(L.CRS.Simple, {
	transformation: new L.Transformation(1,0,1,0)
});

var map = new L.Map('leaflet', {
	crs: CRSPixel,
	center: [0, 0],
	zoom: 0
});

var bounds = [[0,0], [750,523]];
var image = L.imageOverlay('BlueBL.png', bounds).addTo(map);

map.fitBounds(bounds);

 // Icon options
 var iconOptions = {
	iconUrl: 'Catmander_tag_(blue).png',
	iconSize: [30, 34]
 }
 // Creating a custom icon
 var customIcon = L.icon(iconOptions);
 
 // Creating Marker Options
 var markerOptions = {
	title: "Fight Location",
	clickable: true,
	draggable: false,
	icon: customIcon
 }
 
L.marker([420.909, 444.918], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:195538', {autoClose:true}).openPopup();
L.marker([424.269, 496.013], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:195806', {autoClose:true}).openPopup();
L.marker([551.325, 198.683], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:200401', {autoClose:true}).openPopup();
L.marker([523.696, 126.883], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:200719', {autoClose:true}).openPopup();
L.marker([546.447, 208.461], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:200927', {autoClose:true}).openPopup();
L.marker([547.236, 204.703], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:201010', {autoClose:true}).openPopup();
L.marker([350.304, 60.797], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:201312', {autoClose:true}).openPopup();
L.marker([348.523, 55.366], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:201519', {autoClose:true}).openPopup();
L.marker([488.882, 411.684], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:202336', {autoClose:true}).openPopup();
L.marker([531.004, 363.107], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:202819', {autoClose:true}).openPopup();
L.marker([539.109, 341.294], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:202954', {autoClose:true}).openPopup();
L.marker([566.435, 197.26], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:203139', {autoClose:true}).openPopup();
L.marker([541.426, 185.944], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:203352', {autoClose:true}).openPopup();
L.marker([394.754, 397.537], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:203825', {autoClose:true}).openPopup();
L.marker([542.04, 398.449], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:204202', {autoClose:true}).openPopup();
L.marker([543.084, 357.127], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:204406', {autoClose:true}).openPopup();
L.marker([534.646, 352.553], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:204750', {autoClose:true}).openPopup();
L.marker([488.571, 111.615], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:205117', {autoClose:true}).openPopup();
L.marker([505.785, 187.419], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:205233', {autoClose:true}).openPopup();
L.marker([81.611, 263.294], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:205955', {autoClose:true}).openPopup();
L.marker([106.891, 263.536], markerOptions).addTo(map).bindPopup('Date:20231209<br>Time:210100', {autoClose:true}).openPopup();

map.setView( [375, 261], 0);