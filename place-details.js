/**
 * Long-form copy for each map pin (modal “About this place”).
 * Day-wide narrative also comes from itinerary.js (DAY_ITINERARY).
 */
var PLACE_DETAILS = {
  d1:
    "Departure from Ahmedabad — the start of your journey toward the Himalayas.\n\n" +
    "You leave Ahmedabad for the northern leg of the trip (train or flight per your booking). " +
    "Use this time to rest, hydrate, and double-check tickets, ID, and layers for the hills ahead.",

  d2a:
    "Chandigarh — arrival and the beginning of the road trip into Himachal.\n\n" +
    "After you reach Chandigarh, you meet the hills sector of the tour. " +
    "From here the group heads toward Shimla by road (about 113 km, roughly 3–4 hours). " +
    "Use any short stop to stretch, snack, and enjoy the change from plains to Shivalik foothills.",

  d2b:
    "Shimla — colonial hill station and your first major hill stay.\n\n" +
    "Shimla is a charming town with Mall Road, ridge views, and deodar-clad slopes. " +
    "After checking in, you can relax in the afternoon. In the evening, a walk on Mall Road " +
    "is ideal for views of the Himalayas, local snacks, and the buzz of the pedestrian stretch.",

  d3a:
    "Jakhu Temple — Hanuman temple on Jakhu Hill above Shimla.\n\n" +
    "This iconic temple is dedicated to Lord Hanuman and sits atop Jakhu Hill. " +
    "The climb or drive rewards you with sweeping views over Shimla and the surrounding mountains — " +
    "a strong start before you roll toward Kufri and Narkanda.",

  d3b:
    "Kufri — hill station en route with views and small attractions.\n\n" +
    "Kufri is known for adventure options, open views, and green slopes. " +
    "Highlights often include Kufri Fun World (zip-lining, go-karting, horse riding) " +
    "and Green Valley — a viewpoint suited for photos and a quick pause before the road climbs toward Narkanda.",

  d3c:
    "Narkanda — orchards, ridge air, and a quieter hill night.\n\n" +
    "After Shimla and Kufri, Narkanda is a pleasant higher stop with apple orchards and local character. " +
    "In the evening you can stroll orchards or browse the small market for woollens and souvenirs.",

  d4a:
    "Rampur — Satluj-side town, classic breakfast and river outlook.\n\n" +
    "Start early from Narkanda and wind through pine and apple country. " +
    "Rampur sits along the Satluj and works well for a breakfast break with tranquil river views before pushing deeper into Kinnaur.",

  d4b:
    "Bhimakali Temple, Sarahan — wooden temple architecture and mountain panorama.\n\n" +
    "A worthwhile detour: this wooden temple is an architectural gem with intricate carvings " +
    "and commanding Himalayan views — a spiritual and photographic highlight on the way toward Sangla and Chitkul.",

  d4c:
    "Sangla Valley — Baspa River, terraces, and Kinnauri villages.\n\n" +
    "Sangla is loved for terraced fields, traditional wooden houses, and the blue-green Baspa. " +
    "The drive is scenic — take time for viewpoints before you reach Chitkul at the valley head.",

  d4d:
    "Chitkul — last inhabited village near the Indo-Tibetan border.\n\n" +
    "Walk the village lanes, visit Mathi Temple (local goddess), and stroll the Baspa riverside for quiet views. " +
    "Chitkul feels remote and pristine — pace yourself, breathe the altitude, and enjoy the borderland atmosphere.",

  d5a:
    "Kalpa — Kinnaur Kailash views and Narayan–Nagini Temple.\n\n" +
    "Driving from Chitkul toward the Spiti side, Kalpa offers huge views of the Kinnaur Kailash range " +
    "and a peaceful stop at the ancient Narayan–Nagini Temple amid orchards and slate-roof homes.",

  d5b:
    "Nako — high-altitude lake and ancient monastery.\n\n" +
    "Nako Lake sits in a stark, beautiful bowl — ideal for a calm circuit and photos. " +
    "The old Nako Monastery adds Buddhist heritage and a sense of the trans-Himalayan Buddhist belt you’re entering.",

  d5c:
    "Tabo Monastery — often called the “Ajanta of the Himalayas.”\n\n" +
    "Tabo’s gompa complex is famous for ancient murals, sculpture, and meditation caves. " +
    "Many tour books describe it as a UNESCO World Heritage site; confirm current notices on site. " +
    "Arrive with time to walk the compound slowly before settling in for the night.",

  d6a:
    "Dhankar Monastery — cliff-top gompa over the Spiti River.\n\n" +
    "Over 1,000 years old, Dhankar clings to a spur above the river with prayer halls and stupas. " +
    "The setting is dramatic — allow time to explore gently and absorb the scale of the valley.",

  d6b:
    "Kaza — Spiti’s main hub, market, and cafés.\n\n" +
    "Kaza is the largest town in Spiti — ideal for woollens, handicrafts, groceries, and a hot meal. " +
    "Use the market to feel local life and pick up small souvenirs before village loops on the following days.",

  d7a:
    "Komic — among the world’s highest villages with road access.\n\n" +
    "Roughly 4,513 m, Komic offers vast views, mud-brick homes, and a sense of isolation at the roof of the valley. " +
    "Move slowly, respect altitude, and enjoy the silence and peaks.",

  d7b:
    "Langza — Buddha statue, fossils, and wide valley views.\n\n" +
    "The hilltop Buddha statue overlooks the village and fossils lie scattered on slopes from an ancient seabed. " +
    "Langza is a favourite for photography and quiet wandering.",

  d7c:
    "Hikkim — world’s highest post office.\n\n" +
    "At about 4,400 m, you can send a postcard from one of the most remote post offices on Earth — " +
    "a memorable, light-hearted stop in an otherwise austere landscape.",

  d7d:
    "Key Monastery — iconic Spiti gompa above the river.\n\n" +
    "Perched near ~4,166 m, Key is a centre of learning with old murals, courtyards, and huge views down-valley. " +
    "Circle the outer path for angles of the monastery against the cliffs.",

  d8:
    "Chandra Taal — “Moon Lake” at high altitude.\n\n" +
    "Near 4,300 m, the crescent lake sits between barren ridges and green pockets — surreal light at dawn and dusk. " +
    "Walk respectfully around the lake if permitted, then camp nearby for a night under bright stars (weather permitting).",

  d9a:
    "Atal Tunnel — 9.02 km tunnel under Rohtang.\n\n" +
    "India’s longest highway tunnel links Lahaul–Spiti with Kullu–Manali, avoiding the old Rohtang pass in most weather. " +
    "The approach from the north is a dramatic shift from cold desert to greener valleys.",

  d9b:
    "Naggar — quiet town above the Beas with castle and old lanes.\n\n" +
    "Naggar offers Naggar Castle, small temples, and forested views without central Manali’s crowds — " +
    "a peaceful base before a full sightseeing day in Manali.",

  d10a:
    "Paragliding at Dobhi (outside Manali).\n\n" +
    "A classic tandem slot over the valley — panoramic views of peaks, forests, and the Beas system. " +
    "Remember: water and aero sports are banned in Himachal from 15 July–15 September for monsoon safety.",

  d10b:
    "Hadimba Devi Temple — wooden temple in a deodar grove.\n\n" +
    "Dedicated to Goddess Hadimba, this four-tier wooden shrine sits in cedar forest — quiet, mossy, and deeply local. " +
    "Combine with old Manali lanes nearby.",

  d10c:
    "Manu Temple, Vashisht hot springs, Mall Road.\n\n" +
    "Manu Temple honours the sage; Vashisht offers natural hot pools in a village setting; Mall Road is the main " +
    "evening stroll for shops and cafés. Pace the day between culture, soak, and people-watching.",

  d11a:
    "Chandigarh — day use before the night train.\n\n" +
    "With luggage stored at the station if needed, explore by auto or app cab: Rock Garden, Sukhna Lake, Rose Garden, " +
    "Elante Mall, or Chandigarh Haat for crafts — a relaxed urban day before boarding.",

  d11b:
    "Chandigarh Junction — train 19412 toward Ahmedabad.\n\n" +
    "Daulatpur Chandigarh Express (19412) — departure 05:55 PM (17:55) from Chandigarh Junction. " +
    "Reach the platform early, keep ticket and ID ready, and confirm coach/seat on your PNR.",

  d12:
    "Ahmedabad area — arrival at Gandhinagar Capital.\n\n" +
    "Scheduled arrival about 15:00 (3:00 PM) at Gandhinagar Capital — always reconfirm on your ticket or rail apps. " +
    "Time to say goodbye with photos and memories from Spiti and Himachal."
};
