import json
import os

cities_data = [
    {
        "id": "absheron",
        "name": "Absheron",
        "slug": "absheron",
        "region": "Absheron Peninsula",
        "population": "500,000+",
        "description": "The Absheron Peninsula, extending into the Caspian Sea, is the historical heart of Azerbaijan's oil industry and home to Baku's suburbs. Beyond the capital's edge lie unique natural phenomena like the constantly burning Yanar Dag (Fire Mountain) and the ancient Ateshgah Fire Temple, reflecting the region's Zoroastrian heritage. The peninsula also boasts charming coastal villages and beaches like Turkan and Pirallahı.",
        "heroImage": "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1280&auto=format&fit=crop",
        "bestTime": "April-June, September-October",
        "distanceFromBaku": "30 km",
        "transport": "Bus, taxi, commuter train",
        "topAttractions": [
            "Yanar Dag (Burning Mountain)",
            "Ateshgah Fire Temple",
            "Gobustan Rock Art (nearby)",
            "Pirallahı Island"
        ],
        "topRestaurants": [
            "Deniz Restaurant (Puta)",
            "Buta Garden",
            "Sea Breeze Restaurant"
        ],
        "topHotels": [
            "Fairmont Baku (Flame Towers)",
            "Four Seasons Baku",
            "JW Marriott Absheron"
        ],
        "content": {
            "intro": "The Absheron Peninsula is where Azerbaijan's relationship with fire and oil began. Just a short drive from Baku, this region offers a fascinating blend of industrial history, ancient Zoroastrian sites, and Caspian coastal relaxation.",
            "attractions": [
                {
                    "name": "Yanar Dag",
                    "description": "A mesmerizing natural gas fire that blazes continuously on a hillside near the Caspian Sea. The fire has been burning for decades, fueled by gas seeping through the porous sandstone."
                },
                {
                    "name": "Ateshgah Fire Temple",
                    "description": "A medieval castle-like structure built around a natural gas vent that once burned continuously. It was a major site of Zoroastrian worship and later a Hindu pilgrimage site."
                },
                {
                    "name": "Gobustan National Park",
                    "description": "While technically just south of the peninsula, this UNESCO site is easily accessible and features over 6,000 rock carvings dating back 40,000 years."
                }
            ],
            "whereToEat": [
                {
                    "name": "Deniz Restaurant",
                    "description": "Fresh seafood restaurant on Pirallahı Island with panoramic Caspian views."
                },
                {
                    "name": "Buta Garden",
                    "description": "Traditional Azerbaijani cuisine in a garden setting near the Ateshgah temple."
                }
            ],
            "tips": [
                "Visit Yanar Dag at sunset for the most dramatic views.",
                "Combine a trip to Ateshgah with Gobustan for a full day of history.",
                "The coastal road offers excellent driving and picnic spots."
            ],
            "touristMistakes": [
                "Trying to walk to Yanar Dag from Baku (too far).",
                "Missing the small museum at Ateshgah.",
                "Ignoring the wind on the peninsula's exposed coast."
            ],
            "hiddenGems": [
                "The mud volcanoes near Gobustan (accessible via 4x4).",
                "Local tea houses in Puta village.",
                "The abandoned oil derricks near the Caspian shore."
            ],
            "howToGetThere": "From Baku: 30 km via M29 highway. Bus 125 goes to Ateshgah, or take a taxi for Yanar Dag."
        }
    },
    {
        "id": "naftalan",
        "name": "Naftalan",
        "slug": "naftalan",
        "region": "Ganja-Dashkasan",
        "population": "30,000",
        "description": "Naftalan is a unique resort city famous for its 'Naftalan' crude oil, used for therapeutic baths since the 16th century. Unlike typical oil, this naphthalene-rich oil is used externally to treat skin conditions, joint pain, and rheumatism. The city has numerous sanatoriums and a distinct Soviet-era resort architecture.",
        "heroImage": "https://images.unsplash.com/photo-1505663919888-251d56347639?q=80&w=1280&auto=format&fit=crop",
        "bestTime": "Year-round (indoor spas)",
        "distanceFromBaku": "360 km",
        "transport": "Train, bus, or private car from Ganja",
        "topAttractions": [
            "Naftalan Sanatoriums",
            "Carpet Museum",
            "Ganja Gate"
        ],
        "topRestaurants": [
            "Goygun Restaurant",
            "Safa Restaurant",
            "Local diners near sanatoriums"
        ],
        "topHotels": [
            "Chinar Hotel & Spa",
            "Goygol Hotel",
            "Naftalan Resort Hotel"
        ],
        "content": {
            "intro": "Naftalan is not your typical tourist destination—it's a medical spa town where the primary attraction is a specific type of crude oil. Visitors come from all over the former Soviet Union to soak in naphthalene baths for healing purposes.",
            "attractions": [
                {
                    "name": "Naftalan Sanatoriums",
                    "description": "Historic bathhouses and modern spa resorts offering therapeutic oil treatments. The 'Goygun' and 'Chinar' sanatoriums are the most renowned."
                },
                {
                    "name": "Carpet Museum",
                    "description": "A small but rich collection of regional carpets and rugs, showcasing the weaving traditions of Ganja-Dashkasan."
                }
            ],
            "whereToEat": [
                {
                    "name": "Goygun Restaurant",
                    "description": "Located inside the Goygun sanatorium, serving hearty Azerbaijani meals."
                },
                {
                    "name": "Safa Restaurant",
                    "description": "Local favorite for plov and kebabs."
                }
            ],
            "tips": [
                "Book oil bath treatments in advance, especially during peak season.",
                "Consult a doctor before undergoing crude oil therapy.",
                "Bring swimwear and towels; provided ones may not fit well."
            ],
            "touristMistakes": [
                "Expecting a luxury spa experience (it's more medical/functional).",
                "Staying only one day (treatments require multiple sessions).",
                "Ignoring the local climate—dry and continental."
            ],
            "hiddenGems": [
                "The old Soviet-era sanatorium architecture.",
                "Nearby Ganja city (just 30km away) for cultural contrast.",
                "Local markets selling regional crafts."
            ],
            "howToGetThere": "From Baku: 360 km. Best approach is to fly/train to Ganja (1h flight) then take a 30min taxi to Naftalan."
        }
    },
    {
        "id": "shamakhi",
        "name": "Shamakhi",
        "slug": "shamakhi",
        "region": "Shirvan",
        "population": "100,000",
        "description": "Shamakhi is one of Azerbaijan's most ancient cities, serving as the capital of the Shirvanshahs for centuries. It's a city of poets, astronomers, and architects. The Juma Mosque (8th century) is one of the oldest in the Caucasus, and the Shamakhi Astrophysical Observatory is a world-class scientific facility.",
        "heroImage": "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1280&auto=format&fit=crop",
        "bestTime": "May-June, September-October",
        "distanceFromBaku": "120 km",
        "transport": "Bus, marshrutka, private car",
        "topAttractions": [
            "Juma Mosque",
            "Shamakhi Astrophysical Observatory",
            "Diri Baba Mausoleum",
            "Yeddi Gumbaz Mausoleums"
        ],
        "topRestaurants": [
            "Shamakhi Saray Restaurant",
            "Goychay Plov House",
            "Local tea houses"
        ],
        "topHotels": [
            "Shamakhi Hotel",
            "Dubendi Palace Hotel (nearby)",
            "Guesthouses in Old City"
        ],
        "content": {
            "intro": "Shamakhi whispers tales of ancient kings and star-gazing scientists. As one of the oldest cities in the Caucasus, it offers a profound journey through history, from the 8th-century Juma Mosque to the modern astrophysical observatory that peers into the universe.",
            "attractions": [
                {
                    "name": "Juma Mosque",
                    "description": "Built in 743 AD, this is one of the oldest mosques in the Caucasus. Its 13th-century restoration added the unique domed ceiling with 144 windows."
                },
                {
                    "name": "Shamakhi Astrophysical Observatory",
                    "description": "Founded in 1960, this observatory is one of the largest in the region, with telescopes studying solar activity and stellar objects."
                },
                {
                    "name": "Diri Baba Mausoleum",
                    "description": "A mysterious 15th-century mausoleum built into a cliff face, combining architectural styles of the Shirvanshah period."
                }
            ],
            "whereToEat": [
                {
                    "name": "Shamakhi Saray Restaurant",
                    "description": "Located in the historic caravanserai, serving authentic Shirvan cuisine."
                },
                {
                    "name": "Goychay Plov House",
                    "description": "Specializes in regional plov variations."
                }
            ],
            "tips": [
                "Visit the observatory at night for stargazing sessions (check schedule).",
                "Wear comfortable shoes for exploring the uneven historic sites.",
                "Try the local 'Shamakhi plov'—distinct from Baku style."
            ],
            "touristMistakes": [
                "Rushing through the Juma Mosque without noticing the ancient inscriptions.",
                "Skipping the mausoleums outside the city center.",
                "Missing the poet Nizami's connection to Shamakhi."
            ],
            "hiddenGems": [
                "The old silk road caravanserai ruins.",
                "Local carpet weaving workshops.",
                "The quiet cemeteries with ancient tombstones."
            ],
            "howToGetThere": "From Baku: 120 km via the Shamakhi highway (M4). Regular buses from Baku International Bus Terminal."
        }
    },
    {
        "id": "ismayilli",
        "name": "Ismayilli",
        "slug": "ismayilli",
        "region": "Ismayilli",
        "population": "75,000",
        "description": "Ismayilli is a picturesque district in central Azerbaijan, known for its lush forests, mineral springs, and the Tufandag Mountain Resort (though the resort is technically in Gabala, Ismayilli shares the region's beauty). The area is rich in historical sites like the 15th-century Basgal Fortress.",
        "heroImage": "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1280&auto=format&fit=crop",
        "bestTime": "June-September",
        "distanceFromBaku": "200 km",
        "transport": "Bus, marshrutka, car",
        "topAttractions": [
            "Basgal Fortress",
            "Ismayilli History Museum",
            "Lake Alyc",
            "Marash Rural Tourism"
        ],
        "topRestaurants": [
            "Marash Guesthouse Restaurant",
            "Ismayilli City Cafe",
            "Local kebab houses"
        ],
        "topHotels": [
            "Marash Hotel",
            "Tufandag Mountain Resort (Gabala)",
            "Guesthouses in Basgal"
        ],
        "content": {
            "intro": "Ismayilli is the green heart of Azerbaijan, a region of dense forests, clear rivers, and ancient stone fortresses. It's a place where rural tourism thrives, offering visitors a chance to stay in traditional guesthouses and experience authentic village life.",
            "attractions": [
                {
                    "name": "Basgal Fortress",
                    "description": "A 15th-century fortress complex with towers and walls, offering panoramic views of the surrounding valleys."
                },
                {
                    "name": "Lake Alyc",
                    "description": "A serene mountain lake perfect for picnics and light hiking, surrounded by pristine forests."
                },
                {
                    "name": "Marash Village",
                    "description": "A model for rural tourism, where visitors can stay in traditional homes and learn about carpet weaving and honey production."
                }
            ],
            "whereToEat": [
                {
                    "name": "Marash Guesthouse Restaurant",
                    "description": "Home-cooked meals using organic local ingredients."
                },
                {
                    "name": "Ismayilli City Cafe",
                    "description": "Casual dining with standard Azerbaijani dishes."
                }
            ],
            "tips": [
                "Stay in a guesthouse in Marash for the full rural experience.",
                "Bring hiking boots for exploring the forests.",
                "Visit in late spring for wildflower blooms."
            ],
            "touristMistakes": [
                "Expecting five-star resorts (it's more rustic).",
                "Forgetting to bring cash (ATMs are scarce).",
                "Missing the turnoff to Basgal Fortress."
            ],
            "hiddenGems": [
                "Hidden waterfalls in the remote villages.",
                "Local honey farms (Ismayilli is famous for honey).",
                "The ancient cemetery in Marash."
            ],
            "howToGetThere": "From Baku: 200 km via the M4 highway. Buses available from Baku International Bus Terminal."
        }
    },
    {
        "id": "khizi",
        "name": "Khizi",
        "slug": "khizi",
        "region": "Khizi",
        "population": "15,000",
        "description": "Khizi is a rapidly developing district north of Baku, known for its massive wind farms that power much of the capital. The landscape is a mix of semi-desert and rolling hills, with ancient rock carvings and the famous 'Seven Beauties' waterfalls.",
        "heroImage": "https://images.unsplash.com/photo-1469474932030-a20d84558266?q=80&w=1280&auto=format&fit=crop",
        "bestTime": "April-May, September-October",
        "distanceFromBaku": "70 km",
        "transport": "Bus, taxi, car",
        "topAttractions": [
            "Khizi Wind Farms",
            "Seven Beauties Waterfalls",
            "Gaval Stone",
            "Ancient Rock Carvings"
        ],
        "topRestaurants": [
            "Khizi Grill",
            "Wind Farm Cafe",
            "Local tea houses"
        ],
        "topHotels": [
            "Khizi Hotel",
            "Baku hotels (day trip)",
            "Guesthouses"
        ],
        "content": {
            "intro": "Khizi is Azerbaijan's green energy hub, where hundreds of wind turbines spin against a backdrop of ancient history. The district offers a unique combination of modern infrastructure and prehistoric sites, making it a fascinating day trip from Baku.",
            "attractions": [
                {
                    "name": "Khizi Wind Farms",
                    "description": "One of the largest wind farms in the Caucasus, with over 50 turbines generating clean energy for Baku."
                },
                {
                    "name": "Seven Beauties Waterfalls",
                    "description": "A series of seven cascading waterfalls in a lush valley, named after the Persian poem 'Haft Paykar'."
                },
                {
                    "name": "Gaval Stone",
                    "description": "A unique archaeological site with ancient petroglyphs and a massive stone believed to have ritual significance."
                }
            ],
            "whereToEat": [
                {
                    "name": "Khizi Grill",
                    "description": "Specializes in grilled meats and local kebabs."
                },
                {
                    "name": "Wind Farm Cafe",
                    "description": "Simple cafe with views of the turbines."
                }
            ],
            "tips": [
                "Bring a camera for the wind farm landscapes.",
                "Wear sturdy shoes for the waterfalls trail.",
                "Visit in spring when the steppe is green."
            ],
            "touristMistakes": [
                "Ignoring the wind—Khizi is breezy!",
                "Forgetting to bring water for the hike.",
                "Missing the small local museums in Khizi city."
            ],
            "hiddenGems": [
                "The abandoned Soviet radar station on Mount Shahdag.",
                "Local shepherd families offering homemade dairy products.",
                "The quiet valleys between the turbines."
            ],
            "howToGetThere": "From Baku: 70 km via the M3 highway. Regular buses from Baku."
        }
    },
    {
        "id": "goygol",
        "name": "Goygol",
        "slug": "goygol",
        "region": "Ganja-Dashkasan",
        "population": "20,000",
        "description": "Goygol is a charming city near the stunning Lake Goygol, one of Azerbaijan's most beautiful natural sites. The city is also known for its winemaking history and the famous Goygol Winery, established in 1860.",
        "heroImage": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1280&auto=format&fit=crop",
        "bestTime": "June-August",
        "distanceFromBaku": "380 km",
        "transport": "Train, bus, car",
        "topAttractions": [
            "Lake Goygol",
            "Goygol Winery",
            "Helenendorf (now Khanlar)",
            "Mount Kapaz"
        ],
        "topRestaurants": [
            "Goygol Winery Restaurant",
            "Lake View Cafe",
            "Local eateries"
        ],
        "topHotels": [
            "Goygol Hotel",
            "Ganja Hotels",
            "Guesthouses near lake"
        ],
        "content": {
            "intro": "Goygol is a postcard-perfect destination centered around a crystal-clear lake surrounded by lush mountains. The city's German colonial heritage adds a unique architectural flavor, and the local winery produces some of Azerbaijan's finest wines.",
            "attractions": [
                {
                    "name": "Lake Goygol",
                    "description": "A stunning alpine lake formed by an earthquake, with crystal-clear waters reflecting the surrounding mountains."
                },
                {
                    "name": "Goygol Winery",
                    "description": "One of the oldest wineries in the Caucasus, producing wines from local grape varieties since 1860."
                },
                {
                    "name": "Helenendorf",
                    "description": "The former German colony (now Khanlar) features well-preserved 19th-century architecture."
                }
            ],
            "whereToEat": [
                {
                    "name": "Goygol Winery Restaurant",
                    "description": "Wine pairing with traditional Azerbaijani dishes."
                },
                {
                    "name": "Lake View Cafe",
                    "description": "Casual dining with views of Lake Goygol."
                }
            ],
            "tips": [
                "Visit the winery for a tasting session.",
                "Hike around Lake Goygol for the best views.",
                "Try the local 'Goygol' wine variety."
            ],
            "touristMistakes": [
                "Swimming in the lake (it's protected).",
                "Missing the German heritage sites.",
                "Ignoring the weather—mountain climate can change quickly."
            ],
            "hiddenGems": [
                "The old cemetery with German tombstones.",
                "Small distilleries producing local brandy.",
                "The viewpoints on Mount Kapaz."
            ],
            "howToGetThere": "From Baku: 380 km. Fly to Ganja (1h) then drive 30min to Goygol."
        }
    },
    {
        "id": "mingachevir",
        "name": "Mingachevir",
        "slug": "mingachevir",
        "region": "Aran",
        "population": "100,000",
        "description": "Mingachevir, known as the 'City of Lights', is Azerbaijan's fourth-largest city, built around the massive Mingachevir Reservoir. The city has a rich archaeological history dating back to the Kura-Araxes culture (3000 BC) and is a hub for hydroelectric power.",
        "heroImage": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1280&auto=format&fit=crop",
        "bestTime": "May-September",
        "distanceFromBaku": "280 km",
        "transport": "Train, bus, car",
        "topAttractions": [
            "Mingachevir Reservoir",
            "Archaeological Museum",
            "City Beach",
            "Kura-Araxes Settlement"
        ],
        "topRestaurants": [
            "Khan Restaurant",
            "Seaside Cafe",
            "Local plov houses"
        ],
        "topHotels": [
            "Mingachevir Hotel",
            "City Hotel Mingachevir",
            "Guesthouses"
        ],
        "content": {
            "intro": "Mingachevir is a city of contrasts—ancient archaeological sites sit beside modern hydroelectric infrastructure, and a massive inland sea (reservoir) provides beaches in the middle of the steppe. It's a vital industrial center with a surprising amount of green space.",
            "attractions": [
                {
                    "name": "Mingachevir Reservoir",
                    "description": "The largest body of water in Azerbaijan, offering boating, fishing, and beach activities."
                },
                {
                    "name": "Archaeological Museum",
                    "description": "Showcases artifacts from the Kura-Araxes culture (3000-2000 BC) found in the region."
                },
                {
                    "name": "Kura-Araxes Settlement",
                    "description": "Ancient settlement ruins dating back to the Bronze Age, located near the city."
                }
            ],
            "whereToEat": [
                {
                    "name": "Khan Restaurant",
                    "description": "Traditional Azerbaijani cuisine with a focus on plov."
                },
                {
                    "name": "Seaside Cafe",
                    "description": "Casual dining with lake views."
                }
            ],
            "tips": [
                "Visit the reservoir for water sports in summer.",
                "Explore the archaeological sites with a guide.",
                "Try the local fish from the reservoir."
            ],
            "touristMistakes": [
                "Ignoring the industrial aspects (it's a working city).",
                "Missing the museum's collection of Bronze Age artifacts.",
                "Swimming in unauthorized reservoir areas."
            ],
            "hiddenGems": [
                "The old Soviet-era architecture.",
                "Local markets selling fresh fish.",
                "The quiet parks along the reservoir shore."
            ],
            "howToGetThere": "From Baku: 280 km via the M5 highway. Regular trains and buses available."
        }
    },
    {
        "id": "zagatala",
        "name": "Zagatala",
        "slug": "zagatala",
        "region": "Zagatala",
        "population": "35,000",
        "description": "Zagatala is a city in northwest Azerbaijan, known for its wildlife reserve, ancient trees, and diverse ethnic makeup. The Zagatala State Nature Reserve is home to endangered species like the Caucasian leopard and unique flora.",
        "heroImage": "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1280&auto=format&fit=crop",
        "bestTime": "May-October",
        "distanceFromBaku": "500 km",
        "transport": "Bus, car",
        "topAttractions": [
            "Zagatala Reserve",
            "Ancient Fortress",
            "Tree of Paradise",
            "Ethnographic Museum"
        ],
        "topRestaurants": [
            "Zagatala Restaurant",
            "Reserve Cafe",
            "Local eateries"
        ],
        "topHotels": [
            "Zagatala Hotel",
            "Reserve Guesthouse",
            "Local guesthouses"
        ],
        "content": {
            "intro": "Zagatala is a gateway to the Caucasus wilderness, where dense forests and mountain ranges shelter rare wildlife. The city itself is a blend of Lezgin, Avar, and Azerbaijani cultures, offering a unique cultural experience.",
            "attractions": [
                {
                    "name": "Zagatala State Nature Reserve",
                    "description": "Established in 1935, this reserve protects 20,000 hectares of forest and alpine meadows, home to brown bears, wolves, and the rare Caucasian leopard."
                },
                {
                    "name": "Ancient Fortress",
                    "description": "A 19th-century Russian fortress offering panoramic views of the city and surrounding mountains."
                },
                {
                    "name": "Tree of Paradise",
                    "description": "A 2,000-year-old plane tree, one of the oldest in the Caucasus."
                }
            ],
            "whereToEat": [
                {
                    "name": "Zagatala Restaurant",
                    "description": "Traditional dishes with a Lezgin influence."
                },
                {
                    "name": "Reserve Cafe",
                    "description": "Simple meals near the reserve entrance."
                }
            ],
            "tips": [
                "Visit the reserve with a certified guide.",
                "Respect the wildlife—do not feed animals.",
                "Bring binoculars for birdwatching."
            ],
            "touristMistakes": [
                "Attempting to enter the reserve without permission.",
                "Ignoring the cultural diversity of the region.",
                "Missing the ancient tree in the city center."
            ],
            "hiddenGems": [
                "The nearby Balakan region for more nature.",
                "Local craft workshops producing traditional items.",
                "The quiet mountain villages."
            ],
            "howToGetThere": "From Baku: 500 km. Bus journey takes ~8-10 hours. Fly to Ganja then drive 4 hours."
        }
    },
    {
        "id": "balakan",
        "name": "Balakan",
        "slug": "balakan",
        "region": "Balakan",
        "population": "50,000",
        "description": "Balakan is a lush, green district in northwest Azerbaijan, bordering Georgia. It's known for its tea plantations, tobacco fields, and the Balakan carpet weaving tradition. The region is also home to the Zagatala Reserve extension.",
        "heroImage": "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1280&auto=format&fit=crop",
        "bestTime": "June-September",
        "distanceFromBaku": "520 km",
        "transport": "Bus, car",
        "topAttractions": [
            "Balakan Carpet Museum",
            "Zagatala Reserve (extension)",
            "Tea Plantations",
            "Tobacco Fields"
        ],
        "topRestaurants": [
            "Balakan Restaurant",
            "Tea House",
            "Local cafes"
        ],
        "topHotels": [
            "Balakan Hotel",
            "Guesthouses",
            "Zagatala hotels (nearby)"
        ],
        "content": {
            "intro": "Balakan is a verdant district where tea leaves rustle in the breeze and hand-woven carpets tell stories of generations. Located on the Georgian border, it offers a unique blend of subtropical climate and traditional Azerbaijani rural life.",
            "attractions": [
                {
                    "name": "Balakan Carpet Museum",
                    "description": "A small museum showcasing the unique Balakan carpet style, known for its geometric patterns and rich colors."
                },
                {
                    "name": "Tea Plantations",
                    "description": "Visit the tea estates to see how local tea is processed and taste fresh brews."
                },
                {
                    "name": "Zagatala Reserve (Balakan Section)",
                    "description": "The western part of the reserve, accessible from Balakan, offers pristine forests and hiking trails."
                }
            ],
            "whereToEat": [
                {
                    "name": "Balakan Restaurant",
                    "description": "Serves local specialties like 'Balakan plov'."
                },
                {
                    "name": "Tea House",
                    "description": "Traditional tea tasting experience."
                }
            ],
            "tips": [
                "Visit tea plantations in summer for harvest season.",
                "Buy authentic Balakan carpets directly from weavers.",
                "Explore the border areas with caution (permits may be required)."
            ],
            "touristMistakes": [
                "Missing the chance to buy fresh tea leaves.",
                "Ignoring the cultural nuances of the border region.",
                "Underestimating the travel distance from Baku."
            ],
            "hiddenGems": [
                "The tobacco curing sheds.",
                "Hidden waterfalls in the forest.",
                "Local festivals celebrating harvest."
            ],
            "howToGetThere": "From Baku: 520 km. Bus journey takes ~9 hours. Fly to Ganja then drive 4.5 hours."
        }
    },
    {
        "id": "lerik",
        "name": "Lerik",
        "slug": "lerik",
        "region": "Lerik",
        "population": "80,000",
        "description": "Lerik is a high-altitude district in southern Azerbaijan, known for its extreme weather records (lowest temperature in Azerbaijan) and stunning mountain scenery. The region is home to the Lerik State Nature Reserve and ancient burial mounds.",
        "heroImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1280&auto=format&fit=crop",
        "bestTime": "June-September",
        "distanceFromBaku": "320 km",
        "transport": "Bus, car",
        "topAttractions": [
            "Lerik State Nature Reserve",
            "Mount Bazarduzu",
            "Ancient Burial Mounds",
            "Lerik Museum"
        ],
        "topRestaurants": [
            "Lerik Restaurant",
            "Mountain Cafe",
            "Local tea houses"
        ],
        "topHotels": [
            "Lerik Hotel",
            "Mountain Guesthouses",
            "Lankaran hotels (nearby)"
        ],
        "content": {
            "intro": "Lerik is a land of extremes—high mountains, deep valleys, and the coldest temperatures recorded in Azerbaijan. It's a paradise for hikers and nature lovers, with ancient history hidden in its caves and burial sites.",
            "attractions": [
                {
                    "name": "Lerik State Nature Reserve",
                    "description": "Protects 8,000 hectares of mountain ecosystems, home to rare species like the Caucasian snowcock."
                },
                {
                    "name": "Mount Bazarduzu",
                    "description": "The highest peak in Azerbaijan (4,466m), accessible via challenging trekking routes."
                },
                {
                    "name": "Ancient Burial Mounds",
                    "description": "Bronze Age burial sites scattered across the region, offering insights into early Caucasian civilizations."
                }
            ],
            "whereToEat": [
                {
                    "name": "Lerik Restaurant",
                    "description": "Traditional mountain cuisine."
                },
                {
                    "name": "Mountain Cafe",
                    "description": "Simple meals with views of the peaks."
                }
            ],
            "tips": [
                "Acclimatize before hiking at high altitudes.",
                "Bring warm clothing even in summer (nights are cold).",
                "Hire a local guide for trekking routes."
            ],
            "touristMistakes": [
                "Underestimating the altitude sickness risk.",
                "Ignoring weather warnings.",
                "Missing the ancient sites due to lack of signage."
            ],
            "hiddenGems": [
                "The Lerik Valley's hidden lakes.",
                "Local shepherd families offering homestays.",
                "The museum's collection of regional artifacts."
            ],
            "howToGetThere": "From Baku: 320 km via the M4 highway. Buses available from Baku International Bus Terminal."
        }
    },
    {
        "id": "astara",
        "name": "Astara",
        "slug": "astara",
        "region": "Astara",
        "population": "25,000",
        "description": "Astara is a border city on the Iran-Azerbaijan frontier, known for its subtropical climate, tea plantations, and the Astarachay River that divides the two nations. The city is a gateway to both Azerbaijani and Iranian cultures.",
        "heroImage": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1280&auto=format&fit=crop",
        "bestTime": "April-October",
        "distanceFromBaku": "320 km",
        "transport": "Bus, car",
        "topAttractions": [
            "Astara Border Market",
            "Tea Plantations",
            "Astarachay River",
            "Historic Mosques"
        ],
        "topRestaurants": [
            "Astara Restaurant",
            "Border Cafe",
            "Tea House"
        ],
        "topHotels": [
            "Astara Hotel",
            "Lankaran hotels (nearby)",
            "Guesthouses"
        ],
        "content": {
            "intro": "Astara is a city where two worlds meet. On one side of the Astarachay River lies Azerbaijan, on the other Iran. The subtropical climate creates lush tea plantations and rice paddies, making it a unique destination for cultural and nature tourism.",
            "attractions": [
                {
                    "name": "Astara Border Market",
                    "description": "A bustling market where Azerbaijani and Iranian traders meet, selling spices, textiles, and local produce."
                },
                {
                    "name": "Tea Plantations",
                    "description": "Visit the tea estates to see how local tea is grown and processed."
                },
                {
                    "name": "Astarachay River",
                    "description": "The river forms the natural border between Azerbaijan and Iran, with bridges connecting the two sides."
                }
            ],
            "whereToEat": [
                {
                    "name": "Astara Restaurant",
                    "description": "Serves local specialties like 'Astara plov' and fresh fish."
                },
                {
                    "name": "Border Cafe",
                    "description": "Casual dining with views of the border crossing."
                }
            ],
            "tips": [
                "Bring your passport if you plan to cross into Iran.",
                "Try the local tea—it's some of the best in Azerbaijan.",
                "Visit the market early for the best selection."
            ],
            "touristMistakes": [
                "Attempting to cross the border without proper documents.",
                "Ignoring the cultural differences between the two sides.",
                "Missing the subtropical flora unique to this region."
            ],
            "hiddenGems": [
                "The quiet rice paddies along the river.",
                "Local mosques with unique architectural blends.",
                "The hiking trails in the nearby Talysh Mountains."
            ],
            "howToGetThere": "From Baku: 320 km via the M4 highway. Regular buses available."
        }
    }
]

# Ensure content directory exists
os.makedirs('/root/travel-platform-azerbaijan/content/cities', exist_ok=True)

for city in cities_data:
    filename = f"/root/travel-platform-azerbaijan/content/cities/{city['id']}.json"
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(city, f, ensure_ascii=False, indent=2)
    print(f"Created {filename}")

print("All city files generated.")
