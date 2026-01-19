
/* =======================
   CONFIG MAPPA
======================= */
const MAP_WIDTH = 21617;
const MAP_HEIGHT = 16785;

const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -4,
  maxZoom: 3
});

const bounds = [[0, 0], [MAP_HEIGHT, MAP_WIDTH]];
L.imageOverlay('rdr2-map.png', bounds).addTo(map);
map.setView([MAP_HEIGHT / 2, MAP_WIDTH / 2], -2);
map.setMaxBounds(bounds);

/* =======================
   ICONE CAVALLI
======================= */
const horseIcons = {
  elite: L.icon({
    iconUrl: 'icons/horse-elite.png',
    iconSize: [36, 36],
    iconAnchor: [18, 18]
  }),
  medium: L.icon({
    iconUrl: 'icons/horse-medium.png',
    iconSize: [36, 36],
    iconAnchor: [18, 18]
  }),
  low: L.icon({
    iconUrl: 'icons/horse-low.png',
    iconSize: [36, 36],
    iconAnchor: [18, 18]
  })
};

/* =======================
   CAVALLI (EDITI SOLO QUI)
======================= */


const HORSES = [
  {
  
  name: "Ungherese Mezzosangue",
  tier: "low",
  x: 12152, 
  y: 10340,
  bliPrice: 550,
  coat: "Flaxen Chestnut",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/hungarian-flaxen-chestnut.png"

  },
  {
  name: "Olandese Sangue Caldo",
  tier: "medium",
  x: 16437, 
  y: 8883,
  bliPrice: 1050,
  coat: "Chocolate Roan",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/dutchwarmblood-chocolate.png"

  },
  {
  name: "Olandese Sangue Caldo",
  tier: "medium",
  x: 17721, 
  y: 12837,
  bliPrice: 2187,
  coat: "War Vets",
  training: 220,
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  valueOld: 880,
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/dutchwarmblood-war-vets.png"

  },
  {
  name: "Olandese Sangue Caldo",
  tier: "medium",
  x: 17479,
   y: 9378,
  bliPrice: 768,
  coat: "Seal Brown",
  training: 76.8,
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  valueOld: 307.2,
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/dutchwarmblood-seal-brown.png"

  },
  {
  name: "Missouri Fox Trotter",
  tier: "elite",
  x: 12075, 
  y: 9058,
  bliPrice: 2500,
  coat: "Dapple Grey",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/fox-trotter-dapple-grey.png"

  },
  {
  name: "Missouri Fox Trotter",
  tier: "elite",
  x: 16132, 
  y: 11366,
  bliPrice: 2500,
  coat: "Dapple Grey",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/fox-trotter-dapple-grey.png"

  },
  {
  name: "Missouri Fox Trotter",
  tier: "elite",
  x: 9331, 
  y: 4853,
  bliPrice: 2500,
  coat: "Sable Champagne",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/fox-trotter-sable-champagne.png"

  },
  {
  name: "Missouri Fox Trotter",
  tier: "elite",
  x: 10054, 
  y: 10944,
  bliPrice: 2500,
  coat: "Sable Champagne",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/fox-trotter-sable-champagne.png"

  },
  {
  name: "Missouri Fox Trotter",
  tier: "elite",
  x: 9960, 
  y: 12641,
  bliPrice: 2500,
  coat: "Blue Roan",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/fox-trotter-blue-roan.png"

  },
  {
  name: "Turcomanno",
  tier: "elite",
  x: 19096, 
  y: 11807,
  bliPrice: 2500,
  coat: "Silver",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/turkoman-silver.png"

  },
  {
  name: "Turcomanno",
  tier: "elite",
  x: 16893, 
  y: 14087,
  bliPrice: 2500,
  coat: "Chestnut",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/turkoman-chestnut.png"

  },
  {
  name: "Turcomanno",
  tier: "elite",
  x: 17748, 
  y: 11399,
  bliPrice: 2500,
  coat: "Gold",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/turkoman-gold.png"

  },
  {
  name: "Turcomanno",
  tier: "elite",
  x: 11883, 
  y: 13097,
  bliPrice: 2500,
  coat: "Grey",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/turkoman-grey.png"

  },
  {
  name: "Turcomanno",
  tier: "elite",
  x: 15198, 
  y: 10226,
  bliPrice: 2500,
  coat: "Black",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/turkoman-black.png"

  },
  {
  name: "Turcomanno",
  tier: "elite",
  x: 12356, 
  y: 15552,
  bliPrice: 2500,
  coat: "Perlino",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/turkoman-perlino.png"

  },
  {
  name: "Gypsy Cob",
  tier: "elite",
  x: 15086,
  y: 7552,
  bliPrice: 2500,
  coat: "Splashed Bay",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/gypsycob-splashed-bay.png"

  },
  {
  name: "Gypsy Cob",
  tier: "elite",
  x: 19270, 
  y: 14258,
  bliPrice: 2500,
  coat: "Piebald",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/gypsycob-piebald.png"

  },
  {
  name: "Mustang",
  tier: "elite",
  x: 12425,
  y: 11967,
  bliPrice: 2500,
  coat: "Black Overo",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/mustang-black-overo.png"

  },
  {
  name: "Mustang",
  tier: "elite",
  x: 13406, 
  y: 12904,
  bliPrice: 2500,
  coat: "Buckskin",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/mustang-buckskin.png"

  },
  {
  name: "Mustang",
  tier: "elite",
  x: 8582, 
  y: 7315,
  bliPrice: 2500,
  coat: "Red Dun Overo",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/mustang-red-dun-overo.png"

  },
  {
  name: "Kladruber",
  tier: "medium",
  x: 11198, 
  y: 11316,
  bliPrice: 768,
  coat: "Bianco",
  training: 76.8,
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  valueOld: 307.2,
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/kladruber-bianco.png"

  },
  {
  name: "Shire",
  tier: "medium",
  x: 11358, 
  y: 11254,
  bliPrice: 1300,
  coat: "Raven Black",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/shire-black.png"

  },
  {
  name: "Arabo",
  tier: "elite",
  x: 19238, 
  y: 14520,
  bliPrice: 2187,
  coat: "Bianco",
  training: 218.7,
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  valueOld: 874.8,
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/arabian-white.png"

  },
  {
  name: "Arabo",
  tier: "elite",
  x: 7084, 
  y: 3818,
  bliPrice: 2187,
  coat: "Rose Grey",
  training: 218.7,
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  valueOld: 874.8,
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/arabian-rose-grey.png"

  },
  {
  name: "Ardennese",
  tier: "medium",
  x: 15165, 
  y: 10215,
  bliPrice: 1050,
  coat: "Iron Grey Roan",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/ardennese-iron-grey-roan.png"

  },
  {
  name: "Ardennese",
  tier: "low",
  x: 18314, 
  y: 12010,
  bliPrice: 768,
  coat: "Bay Roan",
  training: 76.8,
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  valueOld: 307.2,
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/ardennese-bay-roan.png"

  },
  {
  name: "Belga Da Tiro",
  tier: "low",
  x: 13784, 
  y: 8788,
  bliPrice: 175,
  coat: "Mealy Chestnut",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/belga-da-tiro-mealy-chestnut.png"

  },
  {
  name: "Trottatore del Norfolk",
  tier: "elite",
  x: 7532, 
  y: 3708,
  bliPrice: 2500,
  coat: "Dapple Buckskin",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/norfolk-dapple-buckskin.png"

  },
  
  {
  name: "Trottatore del Norfolk",
  tier: "medium",
  x: 14370, 
  y: 10048,
  bliPrice: 1175,
  coat: "Rose Grey",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/norfolk-rose-grey.png"

  },
  {
  name: "Trottatore del Norfolk",
  tier: "medium",
  x: 9926, 
  y: 7922,
  bliPrice: 1175,
  coat: "Piebald Roan",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/norfolk-piebald-roan.png"

  },
  {
  name: "American Paint",
  tier: "low",
  x: 15102, 
  y: 13755,
  bliPrice: 550,
  coat: "Tobiano",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/american-paint-tobiano.png"

  },
  {
  name: "Criollo",
  tier: "low",
  x: 15775, 
  y: 8920,
  bliPrice: 768,
  coat: "Dun",
  training: 76.8,
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  valueOld: 307.2,
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/criollo-dun.png"

  },
  {
  name: "Ungherese Mezzosangue",
  tier: "low",
  x: 10511, 
  y: 6740,
  bliPrice: 768,
  coat: "Dark Dapple Grey",
  training: 76.8,
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  valueOld: 307.2,
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/hungarian-grey.png"

  },
  {
  name: "American Paint",
  tier: "low",
  x: 15521, 
  y: 9798,
  bliPrice: 550,
  coat: "Overo",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/american-paint-overo.png"

  },
  {
  name: "Trottatore del Norfolk",
  tier: "elite",
  x: 17652, 
  y: 10248,
  bliPrice: 2500,
  coat: "Spotted Tricolor",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/norfolk-spotted-tricolor.png"

  },
  {
  name: "Trottatore del Norfolk",
  tier: "elite",
  x: 14110, 
  y: 13740,
  bliPrice: 2500,
  coat: "Spotted Tricolor",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/norfolk-spotted-tricolor.png"

  },
  {
  name: "Andaluso",
  tier: "low",
  x: 6996, 
  y: 5228,
  bliPrice: 1050,
  coat: "Perlino",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/andaluso-perlino.png"

  },
  {
  name: "Andaluso",
  tier: "low",
  x: 8578, 
  y: 9729,
  bliPrice: 1050,
  coat: "Perlino",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/andaluso-perlino.png"

  },
  {
  name: "Andaluso",
  tier: "low",
  x: 8877, 
  y: 7059,
  bliPrice: 1050,
  coat: "Rose Grey",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/andaluso-rose-grey.png"

  },
  {
  name: "Purosangue Inglese",
  tier: "medium",
  x: 8525, 
  y: 10470,
  bliPrice: 1750,
  coat: "Brindle",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/purosangue-brindle.png"

  },
  {
  name: "Purosangue Inglese",
  tier: "low",
  x: 10870, 
  y: 14576,
  bliPrice: 768,
  coat: "Blood Bay",
  training: 76.8,
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  valueOld: 307.2,
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/purosangue-blood-bay.png"

  },
  {
  name: "Tennessee Walker",
  tier: "low",
  x: 17650, 
  y: 10028,
  bliPrice: 768,
  coat: "Flaxen Roan",
 training: 76.8,
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  valueOld: 307.2,
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/tennesse-walker-flaxen-roan.png"

  },
  {
  name: "Bretone",
  tier: "low",
  x: 10444, 
  y: 9790,
  bliPrice: 768,
  coat: "Sorrel",
 training: 76.8,
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  valueOld: 307.2,
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/bretone-sorrel.png"

  },
  {
  name: "Bretone",
  tier: "elite",
  x: 11928,
  y: 13116,
  bliPrice: 2500,
  coat: "Steal Grey",
  get training() { 
    return  this.bliPrice * 0.1;
  },
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  get valueOld() { 
    return this.bliPrice * 0.4;
  },
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/bretone-steal-grey.png"

  },
  {
  name: "Bretone",
  tier: "low",
  x: 12300,
  y: 9842,
  bliPrice: 768,
  coat: "Red Roan",
 training: 76.8,
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  valueOld: 307.2,
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/bretone-red-roan.png"

  },
  {
  name: "Nokota",
  tier: "low",
  x: 11778, 
  y: 11694,
  bliPrice: 768,
  coat: "White Roan",
 training: 76.8,
  get valueYoung() { 
    return this.bliPrice * 0.5;
  },
  valueOld: 307.2,
  get trainingYoung() {
    return this.valueYoung + this.training
  },
  get trainingOld() {
    return this.valueOld + this.training
  },
  image: "images/nokota-white-roan.png"

  },





  
];


/* =======================
   CREA MARKER
======================= */
let markers = [];

function loadHorses(list) {
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  list.forEach(h => {
    const marker = L.marker(
      [h.y, h.x],
      { icon: horseIcons[h.tier] }
    ).addTo(map);

    marker.bindPopup(`
  <b>${h.name}</b><br><br>
  Manto: <b>${h.coat}</b><br><br>
  <button class="western-btn" onclick='openHorsePanel(${JSON.stringify(h)})'>
    💵 Prezzo
  </button>
`);


    markers.push(marker);
  });
}

loadHorses(HORSES);

/* =======================
   SEARCH
======================= */
const search = document.getElementById('search');

search.addEventListener('input', () => {
  const value = search.value.toLowerCase();

  loadHorses(
    HORSES.filter(h =>
      h.name.toLowerCase().includes(value)
    )
  );
});

/* =======================
   LETTORE COORDINATE (DEV)
======================= */
const DEV_MODE = false;

let coordsEnabled = false;
let lastCoords = null;

const coordsBox = document.getElementById('coords-box');
const toggleBtn = document.getElementById('toggle-coords');
const coordsText = document.getElementById('coords');
const copyBtn = document.getElementById('copy-coords');

if (!DEV_MODE) {
  if (coordsBox) coordsBox.style.display = 'none';
  if (toggleBtn) toggleBtn.style.display = 'none';
  if (copyBtn) copyBtn.style.display = 'none';

  coordsEnabled = false;
} else {
  toggleBtn.addEventListener('click', () => {
    coordsEnabled = !coordsEnabled;
    toggleBtn.classList.toggle('active', coordsEnabled);
    map.getContainer().classList.toggle('coords-active', coordsEnabled);
  });

  map.getContainer().addEventListener('click', e => {
    if (!coordsEnabled) return;

    const latlng = map.mouseEventToLatLng(e);

    lastCoords = {
      x: Math.round(latlng.lng),
      y: Math.round(latlng.lat)
    };

    coordsText.textContent = `X: ${lastCoords.x} | Y: ${lastCoords.y}`;
  });

  copyBtn.addEventListener('click', () => {
    if (!lastCoords) return;

    const text = `x: ${lastCoords.x}, y: ${lastCoords.y}`;

    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    copyBtn.textContent = 'Copiato ✔';
    setTimeout(() => copyBtn.textContent = 'Copia', 1200);
  });
}



window.openHorsePanel = function(horse) {
  
  document.getElementById('hp-name').textContent = horse.name;
  document.getElementById('hp-coat').textContent = horse.coat;
  document.getElementById('hp-training').textContent = horse.training;
  document.getElementById('hp-value-young').textContent = horse.valueYoung;
  document.getElementById('hp-value-old').textContent = horse.valueOld;
  document.getElementById('hp-training-young').textContent = horse.trainingYoung;
  document.getElementById('hp-training-old').textContent = horse.trainingOld;
  document.getElementById('hp-image').src = horse.image;

  document.getElementById('horse-panel').classList.add('open');
};


document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('horse-panel').classList.remove('open');
  }
});

/* =======================
   COPIA COORDINATE
======================= */

if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    if (!lastCoords) return;

    const text = `x: ${lastCoords.x}, y: ${lastCoords.y}`;

    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    copyBtn.textContent = 'Copiato ✔';
    setTimeout(() => copyBtn.textContent = 'Copia', 1200);
  });
}

