const locations = [
    {
        city: 'Berlin',
        avgVegans: '80,000',
        restaurants: [
            {
                name: 'Cafe Vux',
                restaurantType: 'Coffee shop',
                address: 'Wipperstr 14 (at Kirchhofstrasse), Berlin, Germany, 12055'
            },
            {
                name: 'Brammibals Donuts - Potsdamer Platz',
                restaurantType: 'Donut Shop',
                address: 'Alte Potsdamer Straße 7, Berlin, Germany, 10785'
            },
            {
                name: 'Vaust Braugaststatte',
                restaurantType: 'Restaurant',
                address: 'Pestalozzistrasse 8, Berlin, Germany, 10625'
            },
            {
                name: 'Quy Nguyen - Vegan Living',
                restaurantType: 'South Vietnamese vegan cuisine restaurant',
                address: 'Oranienburger Str. 7, Berlin, Germany, 10178'
            },
            {
                name: 'Kopps',
                restaurantType: 'Fine dining vegan restaurant',
                address: 'Linienstr 94, Berlin, Germany, 10115'
            },
            {
                name: 'La Stella Nera',
                restaurantType: 'Vegan pizzeria',
                address: 'Leykestraße 18, Berlin, Germany, 12053'
            },
            {
                name: 'Cat Tuong',
                restaurantType: 'Vietnamese vegan cuisine ',
                address: 'Kastanienallee 89, Berlin, Germany, 10435'
            },
            {
                name: 'Lucky Leek',
                restaurantType: 'gourmet cuisine',
                address: 'Kollwitzstr 54, Berlin, Germany, 10405'
            },
            {
                name: 'Element Five',
                restaurantType: 'Vegan tapas gastrobar serving Asian fusion',
                address: 'Skalitzerstrasse 46b (at Spreewaldplatz), Berlin, Germany, 10997'
            },
            {
                name: 'Veg room',
                restaurantType: 'Vegan cafe',
                address: 'Triftstrasse 37, Berlin, Germany, 13353'
            }
        ]
    },
    {
        city: 'London',
        avgVegans: '540,000',
        restaurants: [
            {
                name: 'Purezza',
                restaurantType: 'Vegan Italian restaurant',
                address: '43 Pkwy, Camden, North West London, England, NW1 7PN'
            },
            {
                name: 'Biffs Jack Shack - Dalston',
                restaurantType: 'All-vegan pub',
                address: '33-35 Stoke Newington Rd, North London, England, N16 8BJ'
            },
            {
                name: 'Cafe Forty One',    // FIIIXXXXXXXX
                restaurantType: 'trgtrgtr',
                address: 'gtrgtrgtgr'
            },
            {
                name: 'Cafe Forty One',
                restaurantType: 'Cafe',
                address: '41-51 Inverness Terrace, Bayswater (at La Suite West Hotel), West London, England, W2 3JN'
            },
            {
                name: 'Essential Vegan Cafe',
                restaurantType: 'Brazilian-inspired vegan cafe',
                address: '6 Calvert Ave, East London, England, E2 7JP'
            },
            {
                name: 'Ethiopiques - South Bank',
                restaurantType: 'Vegan Ethiopian',
                address: 'South Bank Food Market, Waterloo, East London, England'
            },
            {
                name: 'The Vurger Co - Richmix Square',
                restaurantType: 'Burger Restaurant',
                address: 'Unit 9, Avant Garde, Richmix Square, East London, England, E1 6LD'
            },
            {
                name: 'Temple of Camden',
                restaurantType: 'Vegan fried chicken shop',
                address: '103a Camley St, North London, England, N1C 4PF'
            },
            {
                name: 'Rudys Dirty Vegan Diner',
                restaurantType: 'Vegan junk food restaurant',
                address: 'Unit 729-731 Camden Stables Market, North West London, England, NW1 8AH'
            },
            {
                name: 'Black Cat',
                restaurantType: 'Vegan cafe',
                address: '76 Clarence Rd, Hackney, East London, England, E5 8HB'
            }
        ]
    },
    {
        city: 'Amsterdam',
        avgVegans: 'nan',
        restaurants: [
            {
                name: 'Meatless District',
                restaurantType: 'Modern vegan bar & kitchen',
                address: 'Bilderdijkstraat 65-67, Amsterdam, Netherlands, 1053 KM'
            },
            {
                name: 'TerraZen Centre',
                restaurantType: 'Caribbean and Japanese restaurant',
                address: '19 hs Sint Jacobstraat, Amsterdam, Netherlands, 1012 NC'
            },
            {
                name: 'Vegabond - West',
                restaurantType: 'Vegan shop and deli counter',
                address: 'De Clercqstraat 48, Amsterdam, Netherlands, 1052NH'
            },
            {
                name: 'Deer Mama',
                restaurantType: 'Vegan mylk & burger bar',
                address: 'Ceintuurbaan 71, Amsterdam, Netherlands'
            },
            {
                name: 'Plant Based Sushi',
                restaurantType: 'Vegan sushi',
                address: 'OKO, Admiraal de Ruijterweg 331, Amsterdam, Netherlands, 1055 LZ'
            },
            {
                name: 'Kebabi',
                restaurantType: 'Vegan döner kebab joint',
                address: 'Overtoom 428, Amsterdam, Netherlands'
            },
            {
                name: 'Mooshka Vegan Soul Food',
                restaurantType: 'Restaurant',
                address: 'Van Woustraat 110, Amsterdam, Netherlands, 1073LS'
            },
            {
                name: 'Freaking Vegan',
                restaurantType: 'Vegan junk food bar',
                address: 'Botermarkt 29, Haarlem, Netherlands, 2011 XL'
            },
            {
                name: 'Chickpea',
                restaurantType: 'Falafel and pita eatery',
                address: 'Kleine Houtstraat 2A, Haarlem, Netherlands, 2011 DM'
            },
            {
                name: 'Nono Cakes',
                restaurantType: 'Wholesale bakery',
                address: 'Harriet Freezerstraat 108A, Amsterdam, Netherlands'
            }
        ]
    },
    {
        city: 'Bangkok',
        avgVegans: 'nan',
        restaurants: [
            {
                name: 'Bowon',
                restaurantType: 'Vegan eatery',
                address: 'Phra Sumen Rd, Bowon Niwet Rd, Bangkok, Thailand'
            },
            {
                name: 'Art Aharn Jay',
                restaurantType: 'Thai vegan food stall',
                address: '95/54 Tri Phet Rd, Khwaeng Wang Burapha Phirom, Bangkok, Thailand, 10200'
            },
            {
                name: 'Lee Jae Veg',
                restaurantType: 'Veggie food eatery',
                address: '204-208 Soi Yaowarat 8, Charoen Krung Rd Soi 14, Khet Samphantawongse, Bangkok, Thailand, 10110'
            },
            {
                name: 'Welfare Cafeteria - Kiosk 27',
                restaurantType: 'Vegan Thai dishes',
                address: 'Sayamindra Bldg, Siriraj Hospital (at Kiosk 27), Bangkok, Thailand, 10700'
            },
            {
                name: 'So Vegan - Yaowarat​',
                restaurantType: 'Restaurant',
                address: '527/6 Thanon Jaroenkrung, Bangkok, Thailand, 10100'
            },
            {
                name: 'Xian Yen',
                restaurantType: 'Buddhist vegetarian restaurant',
                address: '188/86-87 Charan Sanitwong Soi 28/2, Charan Sanitwong Rd, Bangkok Noi, Bangkok, Thailand, 10700'
            },
            {
                name: 'Rabiengboon - MBK',
                restaurantType: 'Food stall',
                address: '444 Phayathai Rd (at MBK food court, 6th floor, shop C.07), Bangkok, Thailand'
            },
            {
                name: 'Ton-Phon - The Phyll',
                restaurantType: 'Veggie restaurant',
                address: '10260, 2/3 Soi Sukhumvit 54, Bang Chak, Phra Khanong (at Onnuch Farm Complex/The Phyll), Bangkok, Thailand'
            },
            {
                name: 'Tien Sin - Si Wiang',
                restaurantType: 'Thai vegetarian eatery',
                address: 'Thanon Si Wiang, off Charoen Krung Rd (at opposite the turn off from Shangri La), Bangkok, Thailand'
            },
            {
                name: 'Veganerie - Siam Paragon',
                restaurantType: 'Vegan bakery and cafe',
                address: 'Ground Fl, 991 Rama 9 Rd, Pathumwan, Bangkok, Thailand, 10330'
            }
        ]
    },
    {
        city: 'Hanoi',
        avgVegans: 'nan',
        restaurants: [
            {
                name: 'Tam An Lac - Hoan Kiem',
                restaurantType: 'Vegan buffet restaurant',
                address: '70 Ly Thuong Kiet, P. Tran Hung Dao, Hanoi, Vietnam'
            },
            {
                name: 'Hà Thành',
                restaurantType: 'Vegan restaurant',
                address: '116 Ngo 166 Kim Ma, Ba Dinh, Hanoi, Vietnam, 844'
            },
            {
                name: 'Achi Vegan House',
                restaurantType: 'Vegan Vietnamese restaurant',
                address: '50 Thụy Khue, Tay Ho, Hanoi, Vietnam, 100000'
            },
            {
                name: 'Vegan Banh Mi - Food Cart',
                restaurantType: 'Vietnamese banh',
                address: '66B Tran Hung Dao, Hoan Kiem District , Hanoi, Vietnam'
            },
            {
                name: 'Minh Chay - Ma May',
                restaurantType: 'Vegan restauran',
                address: '30 Ma May, Hanoi, Vietnam'
            },
            {
                name: 'Roots Plant-Based Cafe',
                restaurantType: 'Cafe',
                address: '50 Phố Mã Mây, Hàng Buồm, Hoàn Kiếm, Hanoi, Vietnam'
            },
            {
                name: 'Tam An Lac - Dong Da District',
                restaurantType: 'Vegan, zen style eatery',
                address: 'B7 21 Alley, Pham Ngoc Thach St, Kim Lien Ward, Hanoi, Vietnam'
            },
            {
                name: 'Pho Chay',
                restaurantType: 'Simple street-side pho eatery',
                address: '168 Lo Duc, Dong Mac, Hai Ba Trung, Hanoi, Vietnam'
            },
            {
                name: 'Om Vegan Garden',
                restaurantType: 'Vegan restaurant',
                address: 'Số 63, đường 9, F361, An Dương, Phúc xá, Tây Hồ, Hanoi, Vietnam'
            },
            {
                name: 'Chay Moc Mien',
                restaurantType: 'Daily buffet',
                address: '104, 171 Alley (at Thái Hà St), Hanoi, Vietnam'
            }
        ]
    }
];

module.exports = locations;