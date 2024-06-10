navigator.geolocation.getCurrentPosition(getposition);// on récupère la position gps de l'utilisateur 

let myMap; // on déclare une variable pour notre carte
const mappa = new Mappa('Leaflet'); // on fait appel à la librairie js Leaflet

// variables pour récupérer la position gps de l'utilisateur
var position;
let userLat = 47.2040006;
let userLon = -1.5630606;

let mousePos;

let avatar;

// coordonnées de l'edna
let edna_lat = 47.2040006;
let edna_lng = -1.5630606;

// coordonnées de notre 1e zone
let zone1_lat = 54.99662269780288;
let zone1_lng = -7.325379542943982;

let zone2_lat = 52.51630197014307;
let zone2_lng = 13.377700382952398;

let zone3_lat = 51.51905196388599;
let zone3_lng = -0.1438663269861667;

let zone4_lat = 55.81876698908683;
let zone4_lng = 37.42670220975724;

let zone5_lat = 40.71157254234472;
let zone5_lng = -74.01322089171566;

let zone6_lat = 28.60874153511014;
let zone6_lng = -80.60384475982902;

let zone7_lat = -34.60362407120177;
let zone7_lng = -58.38162404814958;

let zone8_lat = 35.09822236144663;
let zone8_lng = 139.07663567168427;

let zone9_lat = 25.424345807595326;
let zone9_lng = 81.84887507669869;

let zone10_lat = 40.74984585310858;
let zone10_lng = -73.98569518199334;

let zone11_lat = -33.980046146506744;
let zone11_lng = 18.495693908406516;

let zone12_lat = 47.3828556670371;
let zone12_lng = 8.503823111768273;

let initial_lat = 47.21573238896582;// latitude de départ
let initial_lng = -1.5580351501417495;// longitude de départ

let sound1;
let sound2;
let sound3;
let sound4;
let sound5;
let sound6;
let sound7;
let sound8;
let sound9;
let sound10;
let sound11;
let sound12;

let icon1;
let icon2;
let icon3;
let icon4;
let icon5;
let icon6;
let icon7;
let icon8;
let icon9;
let icon10;
let icon11;
let icon12;

// variables pour notre avatar
let avatarLat;
let avatarLng;
let avatarPos;
let avatarPosX;
let avatarPosY;

// Calcul des distances
let distance_edna_avatar;
let distance_source1_avatar;
let distance_zone1_avatar;
let distance_zone2_avatar;
let distance_zone3_avatar;
let distance_zone4_avatar;
let distance_zone5_avatar;
let distance_zone6_avatar;
let distance_zone7_avatar;
let distance_zone8_avatar;
let distance_zone9_avatar;
let distance_zone10_avatar;
let distance_zone11_avatar;
let distance_zone12_avatar;

// variables qui vont nous permettre de dessiner les zones
let diametreSource1_lat = 47.199044159443524; 
let diametreSource1_lng = -1.561260223388672; 



function preload(){
  sound1 = loadSound('assets/bloody.mp3');
  sound2 = loadSound('assets/berlin.mp3');
  sound3= loadSound('assets/degaulle.mp3');
  sound4= loadSound('assets/moscow.mp3');
  sound5= loadSound('assets/twintowers.mp3');
  sound6= loadSound('assets/apollon.mp3');
  sound7= loadSound('assets/buenosaires.mp3');
  sound7.amp(0.2);
  sound8= loadSound('assets/japon.mp3');
  sound8.amp(0.2);
  sound9= loadSound('assets/inde.mp3');
  sound9.amp(0.3);
  sound10= loadSound('assets/market.mp3');
  sound10.amp(0.2);
  sound11= loadSound('assets/mandela.mp3');
  sound12= loadSound('assets/floria.mp3');
  
  avatar= loadImage('assets/wii mii.png')
  
  icon1= loadImage('assets/icones/gun_icon.png');
  icon2= loadImage('assets/icones/wall_icon.png');
  icon3= loadImage('assets/icones/microphone_icon.png');
  icon4= loadImage('assets/icones/rock_icon.png');
  icon5= loadImage('assets/icones/plane_icon.png');
  icon6= loadImage('assets/icones/rocket_icon.png');
  icon7= loadImage('assets/icones/football icon.png');
  icon8= loadImage('assets/icones/tsunami_icon.png');
  icon9= loadImage('assets/icones/walk_icon.png');
  icon10= loadImage('assets/icones/market icon.png');
  icon11= loadImage('assets/icones/racism_icon.png');
  icon12= loadImage('assets/icones/running_icon.png');
}


// Lets put all our map options in a single object
// lat and lng are the starting point for the map.
const options = {
  lat: initial_lat,
  lng: initial_lng,
  zoom: 2,// zoom de départ
  style: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
}

function setup(){
  canvas = createCanvas(640,640); 


  // Create a tile map with the options declared
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas);
} // fin de la fonction setup


function getposition(position) {
  userLat = position.coords.latitude
  userLon = position.coords.longitude

}

function draw(){
    
   // Clear the previous canvas on every frame
  clear();
  
  mousePos = myMap.fromPointToLatLng(mouseX,mouseY);// on convertit la position de la souris en coordonnées gps      
  let edna = myMap.latLngToPixel(47.2040006, -1.5630606); // on convertit la position gps en position XY
  let userPos = myMap.latLngToPixel(userLat, userLon); // idem
  let zone1Pos = myMap.latLngToPixel(zone1_lat, zone1_lng);
  let zone2Pos = myMap.latLngToPixel(zone2_lat, zone2_lng);
  let zone3Pos = myMap.latLngToPixel(zone3_lat, zone3_lng);
  let zone4Pos = myMap.latLngToPixel(zone4_lat, zone4_lng);
  let zone5Pos = myMap.latLngToPixel(zone5_lat, zone5_lng);
  let zone6Pos = myMap.latLngToPixel(zone6_lat, zone6_lng);
  let zone7Pos = myMap.latLngToPixel(zone7_lat, zone7_lng);
  let zone8Pos = myMap.latLngToPixel(zone8_lat, zone8_lng);
  let zone9Pos = myMap.latLngToPixel(zone9_lat, zone9_lng);
  let zone10Pos = myMap.latLngToPixel(zone10_lat, zone10_lng);
  let zone11Pos = myMap.latLngToPixel(zone11_lat, zone11_lng);
  let zone12Pos = myMap.latLngToPixel(zone12_lat, zone12_lng);
  
  if(mouseIsPressed){
    avatarPos = myMap.latLngToPixel(mousePos.lat, mousePos.lng); // on récupère la position en pixels de la position gps de l'avatar
    avatarPosX = avatarPos.x;  // on met à jour avatarPosX
    avatarPosY = avatarPos.y; // on met à jour avatarPosY
    avatarLat = mousePos.lat; // on met à jour avatarLat
    avatarLng = mousePos.lng; // on met à jour avatarLng  
    //print("mousePos.lat = " + mousePos.lat);    
    //print("mousePos.lng = " + mousePos.lng);
    distance_edna_avatar = abs(edna_lat-avatarLat)+abs(edna_lng-avatarLng);
    //print("distance_edna_avatar = " + distance_edna_avatar);
    
    distance_zone1_avatar = abs(zone1_lat-avatarLat)+abs(zone1_lng-avatarLng);
    print("distance_zone1_avatar = " + distance_zone1_avatar);
    
    distance_zone2_avatar = abs(zone2_lat-avatarLat)+abs(zone2_lng-avatarLng);
    print("distance_zone2_avatar = " + distance_zone2_avatar);
    
    distance_zone3_avatar = abs(zone3_lat-avatarLat)+abs(zone3_lng-avatarLng);
    print("distance_zone3_avatar = " + distance_zone3_avatar);
    
    distance_zone4_avatar = abs(zone4_lat-avatarLat)+abs(zone4_lng-avatarLng);
    print("distance_zone4_avatar = " + distance_zone4_avatar);
    
    distance_zone5_avatar = abs(zone5_lat-avatarLat)+abs(zone5_lng-avatarLng);
    print("distance_zone5_avatar = " + distance_zone5_avatar);
    
    distance_zone6_avatar = abs(zone6_lat-avatarLat)+abs(zone6_lng-avatarLng);
    print("distance_zone6_avatar = " + distance_zone6_avatar);
    
    distance_zone7_avatar = abs(zone7_lat-avatarLat)+abs(zone7_lng-avatarLng);
    print("distance_zone7_avatar = " + distance_zone7_avatar);
    
    distance_zone8_avatar = abs(zone8_lat-avatarLat)+abs(zone8_lng-avatarLng);
    print("distance_zone8_avatar = " + distance_zone8_avatar);
    
    distance_zone9_avatar = abs(zone9_lat-avatarLat)+abs(zone9_lng-avatarLng);
    print("distance_zone9_avatar = " + distance_zone9_avatar);
    
    distance_zone10_avatar = abs(zone10_lat-avatarLat)+abs(zone10_lng-avatarLng);
    print("distance_zone10_avatar = " + distance_zone10_avatar);
    
    distance_zone11_avatar = abs(zone11_lat-avatarLat)+abs(zone11_lng-avatarLng);
    print("distance_zone11_avatar = " + distance_zone11_avatar);
    
    distance_zone12_avatar = abs(zone12_lat-avatarLat)+abs(zone12_lng-avatarLng);
    print("distance_zone12_avatar = " + distance_zone12_avatar);
  }
  
  /*
  if(abs(edna_lat-mousePos.lat)<0.005 && abs(edna_lng-mousePos.lng)<0.005){
    print("l'utilisateur est entré dans la zone de l'EDNA")
  }
  */

  /////////////////////////////
  // EDNA /////////////////////
  /////////////////////////////

  // abs permet de calculer une valeur qui sera toujours positive pour obtenir la distance entre le centre de la zone 1 et la souris 
  if(distance_edna_avatar<0.005){
    print("l'avatar est entré dans la zone de l'EDNA")
  }
  // si on sort de la zone
  if(distance_edna_avatar>0.005){
    print("l'avatar est sorti de la zone de l'EDNA")
  }
  
  /////////////////////////////
  // ZONE 1 - Bloody Sunday (Derry, Irelande du Nord) ///////////////////
  /////////////////////////////
  if(distance_zone1_avatar<0.3 && !sound1.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound1.play();
  }
  // si on sort de la zone
  if(distance_zone1_avatar>0.3){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound1.stop();
  }

  
  /////////////////////////////
  // ZONE 2 - Chute du mur de Berlin (Berlin) ///////////////////
  /////////////////////////////
  if(distance_zone2_avatar<0.5 && !sound2.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound2.play();
  }
  // si on sort de la zone
  if(distance_zone2_avatar>0.5){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound2.stop();
  }
  
  
  /////////////////////////////
  // ZONE 3 - Appel du Général de Gaulle (Londres) ///////////////////
  /////////////////////////////
  if(distance_zone3_avatar<0.5 && !sound3.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound3.play();
  }
  // si on sort de la zone
  if(distance_zone3_avatar>0.5){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound3.stop();
  }
  
  /////////////////////////////
  // ZONE 4 - Monsters of Rock (Moscou)///////////////////
  /////////////////////////////
  if(distance_zone4_avatar<0.5 && !sound4.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound4.play();
  }
   //si on sort de la zone
  if(distance_zone4_avatar>0.5){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound4.stop();
  }
  
  /////////////////////////////
  // ZONE 5 - Twin Towers (New York)///////////////////
  /////////////////////////////
  if(distance_zone5_avatar<0.03 && !sound5.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound5.play();
  }
  // si on sort de la zone
  if(distance_zone5_avatar>0.03){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound5.stop();
  }
  
  /////////////////////////////
  // ZONE 6 - Apollo 11 (Floride) ///////////////////
  /////////////////////////////
  if(distance_zone6_avatar<0.5 && !sound6.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound6.play();
  }
  // si on sort de la zone
  if(distance_zone6_avatar>0.5){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound6.stop();
  }
  
  /////////////////////////////
  // ZONE 7 - Célébration coupe du monde 2022 (Buenos Aires)///////////////////
  /////////////////////////////
  if(distance_zone7_avatar<0.5 && !sound7.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound7.play();
  }
  // si on sort de la zone
  if(distance_zone7_avatar>0.5){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound7.stop();
  }
  
  /////////////////////////////
  // ZONE 8 - Tsunami et tremblement de terre 2011 (Japon)///////////////////
  /////////////////////////////
  if(distance_zone8_avatar<0.5 && !sound8.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound8.play();
  }
  // si on sort de la zone
  if(distance_zone8_avatar>0.5){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound8.stop();
  }
  
  /////////////////////////////
  // ZONE 9 - Maha Kumbh Mela (Inde)///////////////////
  /////////////////////////////
  if(distance_zone9_avatar<0.5 && !sound9.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound9.play();
  }
  // si on sort de la zone
  if(distance_zone9_avatar>0.5){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound9.stop();
  }
  
  /////////////////////////////
  // ZONE 10 - Crash boursier 2008 ///////////////////
  /////////////////////////////
  if(distance_zone10_avatar<0.03 && !sound10.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound10.play();
  }
  // si on sort de la zone
  if(distance_zone10_avatar>0.03){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound10.stop();
  }
  
  /////////////////////////////
  // ZONE 11 - Speech Nelson Mandela ///////////////////
  ///////////////////////////// 
  if(distance_zone11_avatar<0.5 && !sound11.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound11.play();
  }
  // si on sort de la zone
  if(distance_zone11_avatar>0.5){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound11.stop();
  }
  
  /////////////////////////////
  // ZONE 12 - 4x400m Exploit Floria Guei ///////////////////
  /////////////////////////////
  if(distance_zone12_avatar<0.5 && !sound12.isPlaying()){
    print("l'avatar est entré dans la zone de l'EDNA")
    sound12.play();
  }
  // si on sort de la zone
  if(distance_zone12_avatar>0.5){
    print("l'avatar est sorti de la zone de l'EDNA")
    sound12.stop();
  }
  
  fill("red");
  image(avatar,avatarPosX-25,avatarPosY-25,50,50);
  fill(255,0,0,150);
  fill(0,0,255,150);
  image(icon1,zone1Pos.x-25,zone1Pos.y-25);
  image(icon2,zone2Pos.x-25,zone2Pos.y-25);
  image(icon3,zone3Pos.x-25,zone3Pos.y-25);
  image(icon4,zone4Pos.x-25,zone4Pos.y-25);
  image(icon5,zone5Pos.x-25,zone5Pos.y-25);
  image(icon6,zone6Pos.x-25,zone6Pos.y-25);
  image(icon7,zone7Pos.x-25,zone7Pos.y-25);
  image(icon8,zone8Pos.x-25,zone8Pos.y-25);
  image(icon9,zone9Pos.x-25,zone9Pos.y-25);
  image(icon10,zone10Pos.x-25,zone10Pos.y-25);
  image(icon11,zone11Pos.x-25,zone11Pos.y-25);
  image(icon12,zone12Pos.x-25,zone12Pos.y-25);
  
} // fin de la fonction draw