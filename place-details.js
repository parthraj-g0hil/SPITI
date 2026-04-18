/**
 * Long-form copy for each map pin (modal “About this place”).
 * Main names use <strong class="place-name"> for styling with the day itinerary.
 */
var PLACE_DETAILS = {
  d1:
    "Departure from <strong class=\"place-name\">Ahmedabad</strong> — the start of your journey toward the Himalayas.\n\n" +
    "You leave <strong class=\"place-name\">Ahmedabad</strong> for the northern leg of the trip (train or flight per your booking). " +
    "Use this time to rest, hydrate, and double-check tickets, ID, and layers for the hills ahead.",

  d2a:
    "<strong class=\"place-name\">Chandigarh</strong> — arrival and the beginning of the road trip into Himachal.\n\n" +
    "After you reach Chandigarh, you meet the hills sector of the tour. " +
    "From here the group heads toward <strong class=\"place-name\">Shimla</strong> by road (about 113 km, roughly 3–4 hours). " +
    "Use any short stop to stretch, snack, and enjoy the change from plains to Shivalik foothills.",

  d2b:
    "<strong class=\"place-name\">Shimla</strong> — colonial hill station and your first major hill stay.\n\n" +
    "Shimla is a charming town with <strong class=\"place-name\">Mall Road</strong>, ridge views, and deodar-clad slopes. " +
    "After checking in, you can relax in the afternoon. In the evening, a walk on Mall Road " +
    "is ideal for views of the <strong class=\"place-name\">Himalayas</strong>, local snacks, and the buzz of the pedestrian stretch.",

  d3a:
    "<strong class=\"place-name\">Jakhu Temple</strong> — Hanuman temple on <strong class=\"place-name\">Jakhu Hill</strong> above Shimla.\n\n" +
    "This iconic temple is dedicated to Lord Hanuman and sits atop Jakhu Hill. " +
    "The climb or drive rewards you with sweeping views over <strong class=\"place-name\">Shimla</strong> and the surrounding mountains — " +
    "a strong start before you roll toward <strong class=\"place-name\">Kufri</strong> and <strong class=\"place-name\">Narkanda</strong>.",

  d3b:
    "<strong class=\"place-name\">Kufri</strong> — hill station en route with views and small attractions.\n\n" +
    "Kufri is known for adventure options, open views, and green slopes. " +
    "Highlights often include <strong class=\"place-name\">Kufri Fun World</strong> (zip-lining, go-karting, horse riding) " +
    "and <strong class=\"place-name\">Green Valley</strong> — a viewpoint suited for photos and a quick pause before the road climbs toward Narkanda.",

  d3c:
    "<strong class=\"place-name\">Narkanda</strong> — orchards, ridge air, and a quieter hill night.\n\n" +
    "After Shimla and Kufri, Narkanda is a pleasant higher stop with apple orchards and local character. " +
    "In the evening you can stroll orchards or browse the small market for woollens and souvenirs.",

  d4a:
    "<strong class=\"place-name\">Rampur</strong> — <strong class=\"place-name\">Satluj</strong>-side town, classic breakfast and river outlook.\n\n" +
    "Start early from Narkanda and wind through pine and apple country. " +
    "Rampur sits along the Satluj and works well for a breakfast break with tranquil river views before pushing deeper into Kinnaur.",

  d4b:
    "<strong class=\"place-name\">Bhimakali Temple, Sarahan</strong> — wooden temple architecture and mountain panorama.\n\n" +
    "A worthwhile detour: this wooden temple is an architectural gem with intricate carvings " +
    "and commanding Himalayan views — a spiritual and photographic highlight on the way toward <strong class=\"place-name\">Sangla</strong> and <strong class=\"place-name\">Chitkul</strong>.",

  d4c:
    "<strong class=\"place-name\">Sangla Valley</strong> — <strong class=\"place-name\">Baspa River</strong>, terraces, and Kinnauri villages.\n\n" +
    "Sangla is loved for terraced fields, traditional wooden houses, and the blue-green Baspa. " +
    "The drive is scenic — take time for viewpoints before you reach Chitkul at the valley head.",

  d4d:
    "<strong class=\"place-name\">Chitkul</strong> — last inhabited village near the Indo-Tibetan border.\n\n" +
    "Walk the village lanes, visit <strong class=\"place-name\">Mathi Temple</strong> (local goddess), and stroll the Baspa riverside for quiet views. " +
    "Chitkul feels remote and pristine — pace yourself, breathe the altitude, and enjoy the borderland atmosphere.",

  d5a:
    "<strong class=\"place-name\">Kalpa</strong> — <strong class=\"place-name\">Kinnaur Kailash</strong> views and <strong class=\"place-name\">Narayan–Nagini Temple</strong>.\n\n" +
    "Driving from Chitkul toward the Spiti side, Kalpa offers huge views of the Kinnaur Kailash range " +
    "and a peaceful stop at the ancient Narayan–Nagini Temple amid orchards and slate-roof homes.",

  d5b:
    "<strong class=\"place-name\">Nako</strong> — high-altitude lake and ancient monastery.\n\n" +
    "<strong class=\"place-name\">Nako Lake</strong> sits in a stark, beautiful bowl — ideal for a calm circuit and photos. " +
    "The old <strong class=\"place-name\">Nako Monastery</strong> adds Buddhist heritage and a sense of the trans-Himalayan Buddhist belt you’re entering.",

  d5c:
    "<strong class=\"place-name\">Tabo Monastery</strong> — often called the “Ajanta of the Himalayas.”\n\n" +
    "Tabo’s gompa complex is famous for ancient murals, sculpture, and meditation caves. " +
    "Many tour books describe it as a UNESCO World Heritage site; confirm current notices on site. " +
    "Arrive with time to walk the compound slowly before settling in for the night.",

  d6a:
    "<strong class=\"place-name\">Dhankar Monastery</strong> — cliff-top gompa over the <strong class=\"place-name\">Spiti River</strong>.\n\n" +
    "Over 1,000 years old, Dhankar clings to a spur above the river with prayer halls and stupas. " +
    "The setting is dramatic — allow time to explore gently and absorb the scale of the valley.",

  d6b:
    "<strong class=\"place-name\">Kaza</strong> — Spiti’s main hub, market, and cafés.\n\n" +
    "Kaza is the largest town in <strong class=\"place-name\">Spiti Valley</strong> — ideal for woollens, handicrafts, groceries, and a hot meal. " +
    "Use the market to feel local life and pick up small souvenirs before village loops on the following days.",

  d7a:
    "<strong class=\"place-name\">Komic</strong> — among the world’s highest villages with road access.\n\n" +
    "Roughly 4,513 m, Komic offers vast views, mud-brick homes, and a sense of isolation at the roof of the valley. " +
    "Move slowly, respect altitude, and enjoy the silence and peaks.",

  d7b:
    "<strong class=\"place-name\">Langza</strong> — Buddha statue, fossils, and wide valley views.\n\n" +
    "The hilltop Buddha statue overlooks the village and fossils lie scattered on slopes from an ancient seabed. " +
    "Langza is a favourite for photography and quiet wandering.",

  d7c:
    "<strong class=\"place-name\">Hikkim</strong> — world’s highest post office.\n\n" +
    "At about 4,400 m, you can send a postcard from one of the most remote post offices on Earth — " +
    "a memorable, light-hearted stop in an otherwise austere landscape.",

  d7d:
    "<strong class=\"place-name\">Key Monastery</strong> — iconic Spiti gompa above the river.\n\n" +
    "Perched near ~4,166 m, Key is a centre of learning with old murals, courtyards, and huge views down-valley. " +
    "Circle the outer path for angles of the monastery against the cliffs.",

  d8:
    "<strong class=\"place-name\">Chandra Taal</strong> — “Moon Lake” at high altitude.\n\n" +
    "Near 4,300 m, the crescent lake sits between barren ridges and green pockets — surreal light at dawn and dusk. " +
    "Walk respectfully around the lake if permitted, then camp nearby for a night under bright stars (weather permitting).",

  d9a:
    "<strong class=\"place-name\">Atal Tunnel</strong> — 9.02 km tunnel under <strong class=\"place-name\">Rohtang</strong>.\n\n" +
    "India’s longest highway tunnel links <strong class=\"place-name\">Lahaul–Spiti</strong> with <strong class=\"place-name\">Kullu–Manali</strong>, avoiding the old Rohtang pass in most weather. " +
    "The approach from the north is a dramatic shift from cold desert to greener valleys.",

  d9b:
    "<strong class=\"place-name\">Naggar</strong> — quiet town above the <strong class=\"place-name\">Beas</strong> with castle and old lanes.\n\n" +
    "Naggar offers <strong class=\"place-name\">Naggar Castle</strong>, small temples, and forested views without central <strong class=\"place-name\">Manali</strong>’s crowds — " +
    "a peaceful base before a full sightseeing day in Manali.",

  d10a:
    "Paragliding at <strong class=\"place-name\">Dobhi</strong> (outside <strong class=\"place-name\">Manali</strong>).\n\n" +
    "A classic tandem slot over the valley — panoramic views of peaks, forests, and the Beas system. " +
    "Remember: water and aero sports are banned in Himachal from 15 July–15 September for monsoon safety.",

  d10b:
    "<strong class=\"place-name\">Hadimba Devi Temple</strong> — wooden temple in a deodar grove.\n\n" +
    "Dedicated to Goddess Hadimba, this four-tier wooden shrine sits in cedar forest — quiet, mossy, and deeply local. " +
    "Combine with old Manali lanes nearby.",

  d10c:
    "<strong class=\"place-name\">Manu Temple</strong>, <strong class=\"place-name\">Vashisht</strong> hot springs, <strong class=\"place-name\">Mall Road</strong>.\n\n" +
    "Manu Temple honours the sage; Vashisht offers natural hot pools in a village setting; Mall Road is the main " +
    "evening stroll for shops and cafés. Pace the day between culture, soak, and people-watching.",

  d11a:
    "<strong class=\"place-name\">Chandigarh</strong> — day use before the night train.\n\n" +
    "With luggage stored at the station if needed, explore by auto or app cab: <strong class=\"place-name\">Rock Garden</strong>, <strong class=\"place-name\">Sukhna Lake</strong>, <strong class=\"place-name\">Rose Garden</strong>, " +
    "<strong class=\"place-name\">Elante Mall</strong>, or <strong class=\"place-name\">Chandigarh Haat</strong> for crafts — a relaxed urban day before boarding.",

  d11b:
    "<strong class=\"place-name\">Chandigarh Junction</strong> — train 19412 toward <strong class=\"place-name\">Ahmedabad</strong>.\n\n" +
    "Daulatpur Chandigarh Express (19412) — departure 05:55 PM (17:55) from Chandigarh Junction. " +
    "Reach the platform early, keep ticket and ID ready, and confirm coach/seat on your PNR.",

  d12:
    "<strong class=\"place-name\">Ahmedabad</strong> area — arrival at <strong class=\"place-name\">Gandhinagar Capital</strong>.\n\n" +
    "Scheduled arrival about 15:00 (3:00 PM) at Gandhinagar Capital — always reconfirm on your ticket or rail apps. " +
    "Time to say goodbye with photos and memories from <strong class=\"place-name\">Spiti</strong> and Himachal."
};
