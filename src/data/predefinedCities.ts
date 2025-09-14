export interface Place {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  image: string;
  address?: string;
  type: "attraction" | "restaurant" | "hotel";
  priceLevel?: string;
  openNow?: boolean;
}

export interface CityData {
  name: string;
  attractions: Place[];
  restaurants: Place[];
  hotels: Place[];
}

export const predefinedCities: CityData[] = [
  // 1. Vijayawada
  {
    name: "Vijayawada",
    attractions: [
      { id: "vjw-a1", name: "Kanaka Durga Temple", rating: 4.8, reviewCount: 15000, image: "https://images.unsplash.com/photo-1616843413393-364237f339b1?w=500&h=300&fit=crop", type: "attraction", address: "Indrakeeladri Hill" },
      { id: "vjw-a2", name: "Prakasam Barrage", rating: 4.5, reviewCount: 8000, image: "https://images.unsplash.com/photo-1598843531486-1d825a7220e6?w=500&h=300&fit=crop", type: "attraction", address: "Across Krishna River" },
    ],
    restaurants: [
      { id: "vjw-r1", name: "Babai Hotel", rating: 4.6, reviewCount: 5000, image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$", openNow: true },
      { id: "vjw-r2", name: "Sweet Magic", rating: 4.4, reviewCount: 3500, image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$$", openNow: true },
    ],
    hotels: [
      { id: "vjw-h1", name: "Novotel Vijayawada Varun", rating: 4.7, reviewCount: 4000, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$" },
      { id: "vjw-h2", name: "The Gateway Hotel", rating: 4.5, reviewCount: 3000, image: "https://images.unsplash.com/photo-1542314831-068cd1dbb5eb?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$" },
    ],
  },
  // 2. Hyderabad
  {
    name: "Hyderabad",
    attractions: [
        { id: "hyd-a1", name: "Charminar", rating: 4.7, reviewCount: 25000, image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&h=300&fit=crop", type: "attraction", address: "Old City, Hyderabad" },
        { id: "hyd-a2", name: "Golconda Fort", rating: 4.6, reviewCount: 18000, image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=500&h=300&fit=crop", type: "attraction", address: "Ibrahim Bagh, Hyderabad" },
    ],
    restaurants: [
        { id: "hyd-r1", name: "Paradise Biryani", rating: 4.5, reviewCount: 22000, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$$", openNow: true },
        { id: "hyd-r2", name: "Chutneys", rating: 4.4, reviewCount: 9000, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$", openNow: false },
    ],
    hotels: [
        { id: "hyd-h1", name: "Taj Falaknuma Palace", rating: 4.9, reviewCount: 5000, image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
        { id: "hyd-h2", name: "Trident Hyderabad", rating: 4.6, reviewCount: 6000, image: "https://images.unsplash.com/photo-1445019980597-93e0901b8965?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$" },
    ],
  },
  // 3. Mumbai
  {
    name: "Mumbai",
    attractions: [
        { id: "mum-a1", name: "Gateway of India", rating: 4.8, reviewCount: 50000, image: "https://images.unsplash.com/photo-1529124231393-2745152fac75?w=500&h=300&fit=crop", type: "attraction", address: "Apollo Bandar, Colaba" },
        { id: "mum-a2", name: "Marine Drive", rating: 4.7, reviewCount: 45000, image: "https://images.unsplash.com/photo-1562911791-c9a167818314?w=500&h=300&fit=crop", type: "attraction", address: "Netaji Subhash Chandra Bose Road" },
    ],
    restaurants: [
        { id: "mum-r1", name: "Leopold Cafe", rating: 4.3, reviewCount: 12000, image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$$", openNow: true },
        { id: "mum-r2", name: "Bademiya Kebab", rating: 4.5, reviewCount: 9500, image: "https://images.unsplash.com/photo-1626082924285-2c82c39a0442?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$", openNow: true },
    ],
    hotels: [
        { id: "mum-h1", name: "The Taj Mahal Palace", rating: 4.9, reviewCount: 8000, image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
        { id: "mum-h2", name: "The Oberoi, Mumbai", rating: 4.8, reviewCount: 7500, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
    ],
  },
  // 4. Delhi
  {
    name: "Delhi",
    attractions: [
        { id: "del-a1", name: "India Gate", rating: 4.7, reviewCount: 60000, image: "https://images.unsplash.com/photo-1588899756974-935759a29ad2?w=500&h=300&fit=crop", type: "attraction", address: "Rajpath, New Delhi" },
        { id: "del-a2", name: "Qutub Minar", rating: 4.6, reviewCount: 40000, image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7207?w=500&h=300&fit=crop", type: "attraction", address: "Mehrauli, New Delhi" },
    ],
    restaurants: [
        { id: "del-r1", name: "Karim's", rating: 4.4, reviewCount: 15000, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$", openNow: true },
        { id: "del-r2", name: "Indian Accent", rating: 4.8, reviewCount: 5000, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$$$$", openNow: false },
    ],
    hotels: [
        { id: "del-h1", name: "The Leela Palace", rating: 4.8, reviewCount: 7000, image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
        { id: "del-h2", name: "The Imperial", rating: 4.7, reviewCount: 6500, image: "https://images.unsplash.com/photo-1590490359854-dfba595a8539?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
    ],
  },
  // 5. Bengaluru
  {
    name: "Bengaluru",
    attractions: [
        { id: "blr-a1", name: "Lalbagh Botanical Garden", rating: 4.6, reviewCount: 30000, image: "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?w=500&h=300&fit=crop", type: "attraction", address: "Mavalli, Bengaluru" },
        { id: "blr-a2", name: "Bangalore Palace", rating: 4.4, reviewCount: 20000, image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=500&h=300&fit=crop", type: "attraction", address: "Vasanth Nagar, Bengaluru" },
    ],
    restaurants: [
        { id: "blr-r1", name: "Mavalli Tiffin Rooms (MTR)", rating: 4.6, reviewCount: 18000, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$", openNow: true },
        { id: "blr-r2", name: "Toit", rating: 4.7, reviewCount: 15000, image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$$", openNow: true },
    ],
    hotels: [
        { id: "blr-h1", name: "The Ritz-Carlton", rating: 4.8, reviewCount: 6000, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
        { id: "blr-h2", name: "ITC Gardenia", rating: 4.7, reviewCount: 5500, image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
    ],
  },
  // 6. Chennai
  {
    name: "Chennai",
    attractions: [
        { id: "che-a1", name: "Marina Beach", rating: 4.5, reviewCount: 40000, image: "https://images.unsplash.com/photo-1601614218822-225e070c7b3d?w=500&h=300&fit=crop", type: "attraction", address: "Marina Beach, Chennai" },
        { id: "che-a2", name: "Kapaleeshwarar Temple", rating: 4.8, reviewCount: 25000, image: "https://images.unsplash.com/photo-1563503163131-6e3e56c3825a?w=500&h=300&fit=crop", type: "attraction", address: "Mylapore, Chennai" },
    ],
    restaurants: [
        { id: "che-r1", name: "Saravana Bhavan", rating: 4.6, reviewCount: 20000, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$", openNow: true },
        { id: "che-r2", name: "Dakshin", rating: 4.7, reviewCount: 8000, image: "https://images.unsplash.com/photo-1599493356611-193e0a6e36b8?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$$$", openNow: true },
    ],
    hotels: [
        { id: "che-h1", name: "ITC Grand Chola", rating: 4.8, reviewCount: 9000, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
        { id: "che-h2", name: "The Leela Palace Chennai", rating: 4.7, reviewCount: 7500, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
    ],
  },
  // 7. Kolkata
  {
    name: "Kolkata",
    attractions: [
        { id: "kol-a1", name: "Victoria Memorial", rating: 4.7, reviewCount: 35000, image: "https://images.unsplash.com/photo-1596705572837-ac5bed785d1e?w=500&h=300&fit=crop", type: "attraction", address: "Maidan, Kolkata" },
        { id: "kol-a2", name: "Howrah Bridge", rating: 4.6, reviewCount: 30000, image: "https://images.unsplash.com/photo-1572039115256-1a523a54a72e?w=500&h=300&fit=crop", type: "attraction", address: "Howrah, Kolkata" },
    ],
    restaurants: [
        { id: "kol-r1", name: "Peter Cat", rating: 4.5, reviewCount: 15000, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$$", openNow: true },
        { id: "kol-r2", name: "Flurys", rating: 4.4, reviewCount: 10000, image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$$", openNow: true },
    ],
    hotels: [
        { id: "kol-h1", name: "The Oberoi Grand", rating: 4.8, reviewCount: 6000, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
        { id: "kol-h2", name: "ITC Royal Bengal", rating: 4.7, reviewCount: 5500, image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
    ],
  },
  // 8. Jaipur
  {
    name: "Jaipur",
    attractions: [
        { id: "jai-a1", name: "Hawa Mahal", rating: 4.7, reviewCount: 45000, image: "https://images.unsplash.com/photo-1524230507669-a0a9c08a98c2?w=500&h=300&fit=crop", type: "attraction", address: "Hawa Mahal Rd, Badi Choupad" },
        { id: "jai-a2", name: "Amber Palace", rating: 4.8, reviewCount: 40000, image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=500&h=300&fit=crop", type: "attraction", address: "Devisinghpura, Amer" },
    ],
    restaurants: [
        { id: "jai-r1", name: "Chokhi Dhani", rating: 4.5, reviewCount: 18000, image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$$$", openNow: true },
        { id: "jai-r2", name: "Laxmi Mishthan Bhandar", rating: 4.3, reviewCount: 12000, image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$", openNow: true },
    ],
    hotels: [
        { id: "jai-h1", name: "Rambagh Palace", rating: 4.9, reviewCount: 7000, image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
        { id: "jai-h2", name: "The Oberoi Rajvilas", rating: 4.9, reviewCount: 6500, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
    ],
  },
  // 9. Agra
  {
    name: "Agra",
    attractions: [
        { id: "agr-a1", name: "Taj Mahal", rating: 4.9, reviewCount: 100000, image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&h=300&fit=crop", type: "attraction", address: "Dharmapuri, Forest Colony, Tajganj" },
        { id: "agr-a2", name: "Agra Fort", rating: 4.7, reviewCount: 50000, image: "https://images.unsplash.com/photo-1599422059719-9f4c39c5b293?w=500&h=300&fit=crop", type: "attraction", address: "Rakabganj, Agra" },
    ],
    restaurants: [
        { id: "agr-r1", name: "Pinch of Spice", rating: 4.4, reviewCount: 9000, image: "https://images.unsplash.com/photo-1498654896293-37a11aa4003c?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$$", openNow: true },
        { id: "agr-r2", name: "Dasaprakash", rating: 4.3, reviewCount: 7000, image: "https://images.unsplash.com/photo-1550950158-d21949525418?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$", openNow: true },
    ],
    hotels: [
        { id: "agr-h1", name: "The Oberoi Amarvilas", rating: 4.9, reviewCount: 8000, image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
        { id: "agr-h2", name: "ITC Mughal", rating: 4.7, reviewCount: 7000, image: "https://images.unsplash.com/photo-1535827841776-24e39e513264?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
    ],
  },
  // 10. Goa
  {
    name: "Goa",
    attractions: [
        { id: "goa-a1", name: "Baga Beach", rating: 4.6, reviewCount: 60000, image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=500&h=300&fit=crop", type: "attraction", address: "Baga, North Goa" },
        { id: "goa-a2", name: "Fort Aguada", rating: 4.5, reviewCount: 35000, image: "https://images.unsplash.com/photo-1563278936-39138d6d84d1?w=500&h=300&fit=crop", type: "attraction", address: "Candolim, North Goa" },
    ],
    restaurants: [
        { id: "goa-r1", name: "Thalassa", rating: 4.7, reviewCount: 15000, image: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$$$", openNow: true },
        { id: "goa-r2", name: "Britto's", rating: 4.4, reviewCount: 18000, image: "https://images.unsplash.com/photo-1559329007-447de37f13b8?w=500&h=300&fit=crop", type: "restaurant", priceLevel: "$$$", openNow: true },
    ],
    hotels: [
        { id: "goa-h1", name: "Taj Exotica Resort & Spa", rating: 4.8, reviewCount: 9000, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
        { id: "goa-h2", name: "W Goa", rating: 4.7, reviewCount: 7000, image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=500&h=300&fit=crop", type: "hotel", priceLevel: "$$$$$" },
    ],
  },
];