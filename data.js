/* =====================================================================
   GL DINING — restaurant data (shared by every page)
   Edit hours, contact info, specials and menus here, not in the HTML.

   Hours:  one [open, close] pair per day, Sunday first, in 24-hour time.
           A close time after midnight adds 24 (2am = 26).
   Menus:  each item is ["Name", "Price", "Description", "Tags"]
           Tags: "V" = vegetarian, "GF" = gluten friendly.
           {h:"Heading"} starts a sub-section inside a category.
   ===================================================================== */
const VENUES = {
  blu: {
    name:"blu", eyebrow:"GL Dining · Downtown Norman", sub:"fine wine & food",
    lede:"A neighborhood gathering place since 2007. Wine flights, shareable plates, creative pizzas and weekend brunch, best enjoyed face to face.",
    addr:"201 S Crawford Ave, Norman, OK 73069", phone:"(405) 360-4258",
    photo:"img/blu-bar.jpg", photoAlt:"blu's bar with glowing glass-block counter and wine wall",
    gallery:["img/blu-sign.jpg","img/blu-wine-tasting.jpg","img/blu-happy-hour.jpg"],
    hours:[[10,24],[11,24],[11,24],[11,24],[11,24],[11,24],[10,24]],
    specials:[
      {img:"img/blu-wine-tasting.jpg", title:"Wine Tasting", when:"1st & 3rd Sunday · 4:00 pm", text:"Taste 6 wines paired with finger foods for $20. Seating is limited, so call (405) 360-4258 to reserve."},
      {img:"img/blu-happy-hour.jpg", title:"Happy Hour", when:"Every day · 3:00–6:00 pm", text:"½ price pizzas with a beverage purchase."},
      {img:"img/blu-bar.jpg", title:"Lunch: Pick 2 for $12", when:"Mon–Fri · 11:00 am–3:00 pm", text:"Choose any two from the Leaf, Bowl and Bread lunch menu."}
    ],
    menuNote:"V vegetarian · GF gluten friendly",
    menu:[
      {cat:"Share", items:[
        ["Mediterranean Plate","14.5","pita, goat cheese, olive tapenade, hummus","V"],
        ["Cheese & Charcuterie Board","19","Irish cheddar, gorgonzola, mozzarella, charcuterie",""],
        ["Sweet Potato Fries","10","remoulade","V"],
        ["Blu Chips","14.5","potato chips, gorgonzola dressing, cilantro","V"],
        ["Mac 'N' Cheese","10","mac, bacon, panko, cheese blend, cilantro",""],
        ["Calamari*","19","Thai chili sauce",""],
        ["Made to Order Guacamole","13","blu corn chips, salsa","V GF"],
        ["Chips & Salsa","7","blu corn tortilla chips","V GF"],
        ["Crab Cakes*","16","Maryland style, remoulade",""],
        ["Green Chile Queso","11","blu corn tortilla chips, pico, salsa","V GF"],
        ["Loaded Pub Fries","15.5","gorgonzola cream, green onion, bacon, parm",""],
        ["Seacuterie Board*","21","roasted shrimp, Maryland crab cake, blackened scallops, salmon rillettes",""],
        {h:"Bowl"},
        ["Roasted Red Pepper Soup","10","gouda, five cheese blend, ciabatta","V"],
        ["Black Bean Soup","8","tortilla strips, cilantro, sour cream","V GF"],
        ["Shrimp & Grits","15","blackened shrimp, jalapeño bleu cheese grits, gorgonzola cream","GF"]
      ]},
      {cat:"Pizza", note:"Available hand tossed, flatbread, or gluten free crust (+$2).", items:[
        ["The Garden","14","red sauce, mushroom, onion, squash, zucchini, tomato, bell pepper","V"],
        ["The Basic Bro","13.5","psst… that just means pepperoni, bro",""],
        ["Daisy If You Do","13.5","red sauce, romas, garlic, basil","V"],
        ["O.G. Cheese","12","here's lookin' at you, kid!","V"],
        ["This Little Figgy","15","caramelized onion, olive oil, bleu, balsamic reduction, figs, bacon",""],
        ["Backyard BBQ","15","bbq sauce, chicken, corn, red onions, bacon, cilantro",""],
        ["The Georgia Sow","15","peach emulsion, bleu, ham, sliced peaches, balsamic drizzle",""],
        ["The Truffle Shuffle","15","red sauce, wild mushrooms, truffle drizzle","V"],
        ["Two Pigs & A Fun Guy","14","red sauce, sausage, pepperoni, mushroom",""],
        ["Aww, Kale Yes","14","kale pesto, crispy kale, brussels sprouts","V"],
        ["The Taco Truck","15","pulled pork, evoo, queso fresco, white onion, jalapeño, cotija, cilantro, spicy green drizzle, lime",""],
        ["Club Med(iterranean)","14","olive pesto, rosemary, pepperoncinis, goat cheese, balsamic drizzle","V"],
        ["Pretty Fly for a White Pie","15","alfredo sauce, chicken, spinach, wild mushroom mix",""],
        ["Pickle Pie","13.5","ranch, pickles, red pepper flakes","V"],
        ["La Maria","14.5","pepperoni, Maria's secret mole sauce",""],
        ["GreekTT","14","hummus, green bell, red bell, banana pepper, jalapeño, oil & vinegar","V"]
      ]},
      {cat:"Tacos & Dillas", note:"Tacos: 3 served street style on corn, with cilantro & salsa.", items:[
        ["Blackened Chicken Tacos","11","pickled onion, queso fresco, sour cream, lime","GF"],
        ["Grilled Shrimp Tacos","12","brussels & kale blend, pico, remoulade, lime","GF"],
        ["Pulled Pork Tacos","11","pickled onion, queso fresco, sour cream, lime","GF"],
        ["Blackened Catfish Tacos","12","brussels & kale blend, pico, remoulade, lime","GF"],
        ["Mushroom Tacos","11","red & green bell pepper, pickled onion, queso fresco","V GF"],
        ["Chickpea Tacos","11","taco seasoned chickpeas, red & green bell pepper, pickled onion, queso fresco","V GF"],
        {h:"Dillas"},
        ["Chicken Quesadilla","14","pico de gallo, mushroom, sour cream, salsa",""],
        ["Veggie Quesadilla","13","squash, zucchini, bell peppers, mushroom, romas, black bean & corn relish, sour cream, salsa","V"],
        ["Pork Quesadilla","14","bleu cheese crumbles, pico de gallo, sour cream, lime, salsa",""],
        ["Spicy Chicken Ranch Quesadilla","14","sautéed poblanos & onions, spicy ranch, pico de gallo, sour cream, salsa",""]
      ]},
      {cat:"Burgers & Leaf", note:"Burgers available with the Impossible vegetarian patty (+$3). Add a protein to any salad: chicken, shrimp or scallops (+$4).", items:[
        ["Blu Burger*","14","bleu, arugula, bacon, sweet potato fries",""],
        ["The Cheddar Burger*","14","Irish cheddar, romaine, tomato, red onion, sweet potato fries",""],
        ["Spicy Poblano Burger*","14","spicy ranch, poblano, jalapeño, fried onion, pepper jack, sweet potato fries",""],
        {h:"Leaf"},
        ["Blu House Salad","6 / 10","spring mix, romaine, bleu crumbles, spicy walnuts, balsamic vinaigrette","V GF"],
        ["Spicy Chickpea Taco Salad","10 / 18","romaine, taco chickpeas, black olive, tomatoes, red onion, grilled poblano, avocado, corn, tortilla crisps, cilantro, spicy ranch","V GF"],
        ["The Seasonal Spinach Salad","6 / 11","baby spinach, seasonal fruit, bleu crumbles, spicy walnuts, seasonal vinaigrette","V GF"],
        ["Blackened Bay Scallop Caesar","10 / 18","arugula, romaine, croutons, radish, parmesan",""]
      ]},
      {cat:"Lunch", note:"Monday–Friday, 11 am–3 pm. Pick 2 for $12.", items:[
        {h:"Leaf"},
        ["Blu House Salad","","spring mix, romaine, bleu crumbles, spicy walnuts, balsamic vinaigrette","V GF"],
        ["Seasonal Spinach Salad","","baby spinach, seasonal fruit, bleu crumbles, spicy walnuts, seasonal vinaigrette","V GF"],
        ["Spicy Chickpea Taco Salad","","romaine, chickpeas, black olive, tomatoes, red onion, poblano, corn, tortilla crisps, avocado, spicy ranch","V GF"],
        ["Classic Caesar Salad","","arugula, romaine, croutons, radish, parmesan","V"],
        {h:"Bowl"},
        ["Roasted Red Pepper Soup","","gouda, five cheese blend","V"],
        ["Black Bean Soup","","tortilla strips, sour cream, cilantro","V GF"],
        ["Mac 'N' Cheese","","mac, cheese blend, cilantro","V"],
        {h:"Bread"},
        ["Hot Ham Sammich","","brie, strawberry, bacon, ciabatta",""],
        ["Beef 'N' Blu Sammich","","roast beef, bleu cheese dressing, bleu crumble, cilantro, ciabatta",""],
        ["Asian Turkey Sammich","","carrot, red pepper, green pepper, cucumber, asian dressing, ciabatta",""],
        ["Caprese Sammich","","mozzarella, hot house tomato, basil, evoo, balsamic vinegar, ciabatta","V"]
      ]},
      {cat:"Brunch", note:"Saturday & Sunday, 10 am–3 pm.", items:[
        ["Brunch Board","17","bacon, cheddar, cream cheese, hard boiled egg, avocado, english muffin, housemade jam, fruit","V"],
        ["Grand Marnier French Toast","13.5","croissants, maple syrup, fruit","V"],
        ["All American*","15","two eggs your way, breakfast ham, bacon, potato hash, toast, housemade jam",""],
        ["Salmon Blu Plate Special*","16","eggs scrambled with salmon, capers, cream cheese, red onion, dijon-cream sauce, potato hash","GF"],
        ["Veggie Blu Plate Special*","14","eggs scrambled with peppers, onion, squash, zucchini, mushroom, tomato, salsa, potato hash, fruit","V GF"],
        ["Pancake of the Day","13","a stack of three, bacon",""],
        ["Huevos Rancheros*","14","two eggs sunny side up over black bean corn smash, blu corn tortillas, ranchero sauce, potato hash","V GF"],
        ["Steak & Eggs*","19.5","top sirloin, two eggs your way, hollandaise, potato hash, fruit","GF"],
        ["The Old School Benny*","14.5","grilled ham, poached eggs, hollandaise, potato hash, fruit",""],
        ["Avocado Toast*","12","avocado salsa, two eggs looking at you, pico, dressed arugula","V"],
        ["Crab Cake Benedict*","14","one crab cake, poached egg, hollandaise, potato hash, fruit",""],
        ["Smothered Breakfast Burrito","15.5","scrambled egg, veggies, breakfast potatoes, smothered in queso, pico, bleu corn chips & salsa","V"],
        ["Vegetarian Benedict*","14","spinach, tomato, wild mushroom mix, poached eggs, hollandaise, potato hash, fruit","V"],
        ["Migas*","15","eggs scrambled with roasted red pepper, bell pepper, onion, chorizo, blu corn tortillas, black bean corn smash, potato hash","GF"],
        ["The Conundrum*","17.5","two fried chicken breasts, poached eggs, jalapeño bleu cheese grits, gorgonzola cream",""],
        ["Chilaquiles de Blu*","15.5","housemade blu tortilla chips, pulled pork, queso fresco, roasted potatoes, gorgonzola cream, pico, two eggs","GF"],
        ["Bayou Brunch*","17","blackened shrimp, jalapeño bleu cheese grits, two eggs, pico, gorgonzola or creole cream sauce","GF"],
        ["Tamales con Huevos*","16","two pork tamales, poached eggs, hollandaise, breakfast potatoes, black bean corn smash, pico, cilantro","GF"],
        ["The Cure*","15","potato hash, bacon, sautéed veggies, mushrooms, melted cheddar, two eggs & a Miller High Life in a bag",""],
        ["The Holy Mole*","15","three cheese enchiladas, Maria's mole, black bean corn mash, potato hash, pico, two eggs over medium","V"],
        ["Hummus Toast*","12","hummus, dressed arugula, two eggs looking at you, diced tomato, balsamic reduction","V"],
        {h:"Add ons"},
        ["Egg · Toast · English muffin · Avocado · Potato hash","2","each",""],
        ["Plain pancake · Bacon · Breakfast ham","3","each",""],
        ["Pancake of the day","3.5","",""],
        ["French toast","6","",""]
      ]},
      {cat:"Wine", note:"Ask your server about pairings.", items:[
        {h:"Wine flights"},
        ["Sweet Escape","12","Ercole Moscato, Dr. Konstantin Dry Riesling, Yalumba Viognier",""],
        ["Acid Trip","11","Guinigi Pinot Gris, La Freynelle Bordeaux, Chasing Venus Sauvignon Blanc",""],
        ["Guns & Roses","12","Poggio Costa Brut Rosé, Ca' del Sarto Rosé, Mariana Rosado",""],
        ["Crimson & Cream","12","Pacificana Chardonnay, Sean Minor Pinot Noir, Girasole Zinfandel",""],
        ["Passport","11","Catena 'Vista Flores' Malbec, Val Rois Red Blend, Gassier Syrah",""],
        ["Big Is Beautiful","14","Markham 'Six Stack' Merlot, Gen 5 Old Vine Zinfandel, Ultraviolet Cabernet",""],
        ["Night Cap","12","Niepoort White Port, Dow's Fine Ruby Port, Graham's 10 yr Tawny Port",""],
        ["Bubble Bath","12","Poggio Costa Prosecco, Cote Mas Cremant Brut, Cune Cava Brut",""],
        {h:"Sparkling & rosé by the glass"},
        ["Ercole Moscato","11","",""],["Poggio Costa Prosecco","9","",""],["Cote Mas Cremant Brut","10","",""],
        ["Poggio Costa Brut Rosé","9","",""],["Cune Cava Brut","10","",""],["La Gioiosa Prosecco Superiore","11","",""],
        ["Ca' del Sarto Rosé","9","",""],["Mariana Rosado","10","",""],
        {h:"White by the glass"},
        ["Dr. Konstantin Dry Riesling","10","",""],["M. Alexandrins Viognier","10","",""],["Guinigi Pinot Gris","10","",""],
        ["Foris Pinot Gris","9","",""],["Chasing Venus Sauvignon Blanc","10","",""],["Joseph Mellot Sauvignon Blanc","11","",""],
        ["La Freynelle Bordeaux","9","",""],["Pacificana Chardonnay","9","",""],["Broadside Chardonnay","11","",""],
        {h:"Red by the glass"},
        ["Pike Road Pinot Noir","15","",""],["Sean Minor Pinot Noir","12","",""],["Markham 6 Stack Merlot","14","",""],
        ["Catena Malbec","11","",""],["Val Rois Red Blend","12","",""],["La Posta Tinto Red Blend","12","",""],
        ["McPherson Mourvèdre","12","",""],["Girasole Zinfandel","12","",""],["Gen 5 Old Vine Zinfandel","12","",""],
        ["Gassier Syrah","11","",""],["Ultraviolet Cabernet Sauvignon","11","",""]
      ]},
      {cat:"Desserts", items:[
        ["La Baguette's Chocolate Cobbler","7","à la mode",""],
        ["New York Style Cheesecake","6","",""]
      ]}
    ]
  },

  library: {
    name:"The Library", eyebrow:"GL Dining · Across from campus", sub:"Bar & Grill · Est. 1920",
    lede:"An English-style meeting house in a 1920s home on Boyd Street. Hand-rolled pizzas, pub grub, a deep draft list and a shady patio, heated in winter and misted in summer.",
    addr:"607 W Boyd St, Norman, OK 73069", phone:"(405) 366-7465",
    photo:"img/library-patio.jpg", photoAlt:"The Library's brick patio under the trees",
    gallery:["img/library-bar.jpg","img/library-taps.jpg","img/library-patio.jpg"],
    hours:[[10,24],[11,24],[11,24],[11,24],[11,24],[11,26],[10,26]],
    specials:[
      {img:"img/library-taps.jpg", title:"Happy Hour", when:"Every day · 3:00–6:00 pm", text:"½ price pizzas with a beverage purchase, and every draft beer is $2 off the menu price."},
      {img:"img/library-bar.jpg", title:"MIO Beer Flights", when:"Made in Oklahoma", text:"Pick any 4 Oklahoma drafts, from Anthem, Stonecloud, COOP, Prairie, Roughtail, Skydance and 405 Brewing. Price varies slightly."}
    ],
    menuNote:"10\" hand-rolled pizzas · sandwiches come with pickle spear & chips",
    menu:[
      {cat:"Appetizers", items:[
        ["House Made Salsa","4.95","served with chips",""],
        ["Made-to-order Guacamole","9.95","served with chips & salsa",""],
        ["Spinach Queso Dip","10.95","served with chips & salsa",""],
        ["Roasted Garlic Hummus","8.95","served with toast points & carrots",""],
        ["Sourdough Pretzel","5.95 / 10.95","one or two, with IPA mustard, beer cheese, or ranch",""],
        {h:"Nachos · served with pico de gallo & salsa"},
        ["Cheese Only","9.95","half order 5.50",""],
        ["Veggie","11.95","green pepper, onion, mushrooms, tomatoes & black olives · half 6.95",""],
        ["Chicken","13.95","half order 7.95",""],
        ["House-smoked Pulled Pork","12.95","half order 7.50",""],
        ["Homemade Pot Roast","13.95","half order 7.95",""],
        {h:"Quesadillas · served with salsa"},
        ["Veggie","10.95","cheese, green peppers, red onions, black olives, mushrooms & tomatoes",""],
        ["Chicken","12.95","chicken, cheese, green peppers, red onions & tomatoes",""],
        ["House-smoked Pulled Pork","12.95","pulled pork, cheese, green peppers, red onions & tomatoes",""],
        ["Homemade Pot Roast","12.95","roast, cheese, green peppers, red onions & tomatoes",""]
      ]},
      {cat:"Salads & Soups", note:"Dressings: ranch, honey mustard, Italian, balsamic & oil, or raspberry vinaigrette.", items:[
        ["Library Salad","10.95","greens, cheese, tomatoes & mushrooms · add blackened chicken $4",""],
        ["Dinner Salad","5.95","greens, cheese, tomatoes & mushrooms",""],
        ["Pot Roast in a Bread Bowl","11.95","chunks of roast, gravy, green beans, corn & carrots in our baked sourdough bowl",""],
        ["Soup in a Bread Bowl","10.95","ask your server what we have today",""]
      ]},
      {cat:"Burgers & Sammies", note:"All sandwiches and burgers come with a pickle spear, potato chips and appropriate fixins.", items:[
        ["Library Cheeseburger","11.95","Angus beef, cheddar & all the proper veggies",""],
        ["The Onion Cheeseburger","11.95","Angus beef, American cheese & caramelized onion",""],
        ["Mushroom Swiss Burger","12.95","the Swiss deserve no credit for this one",""],
        ["Short Rib Grilled Cheese","13.95","Monterey, cheddar, caramelized onion, arugula",""],
        ["Parmesan Buttered Grilled Cheese","10.95","Monterey & cheddar",""],
        ["Mushroom Grilled Cheese","11.95","wild mushroom & arugula",""],
        ["Pot Roast Sliders","12.95","truffle oil mashed new potatoes & onion tanglers (no chips or pickle)",""],
        ["House Smoked Pulled Pork Sandwich","10.95","slaw, pickled red onion & BBQ sauce",""]
      ]},
      {cat:"Pizzas", note:"10\" pizzas on hand-rolled dough seasoned with olive oil, fresh herbs & cornmeal.", items:[
        ["Four Cheese","11.95","romano, parmesan, mozzarella & provolone",""],
        ["Tomato, Basil & Garlic","11.95","ripe red tomatoes over fresh cut basil & house-roasted garlic",""],
        ["Veggie Pie","11.95","black olives, red onions, mushrooms, tomatoes & green peppers",""],
        ["Pepperoni","12.95","generous amounts of thinly-sliced, spicy pepperoni",""],
        ["Italian Sausage","12.95","a hearty helping of chunky, crumbled sausage",""],
        ["Combo Pizza","13.95","the Veggie Pie plus Italian sausage & pepperoni",""],
        ["BBQ Chicken","13.95","chicken, bacon, cilantro & BBQ sauce",""],
        ["Chicken Alfredo","13.95","blackened chicken, mushrooms & a very creamy alfredo sauce",""],
        {h:"Sweets"},
        ["La Baguette's Chocolate Delight","6.95","à la mode",""],
        ["Salted Caramel Pretzel","5.95","chocolate or hot caramel sauce",""],
        ["Eli's New York Style Cheesecake","5.95","strawberry sauce",""]
      ]},
      {cat:"Draft Beer", note:"Happy hour every day 3–6: all drafts $2 off.", items:[
        {h:"Light"},
        ["Anthem Pollinator Pilsner","5.5","",""],["Michelob Ultra","4","",""],["Pabst Blue Ribbon","4","",""],
        ["Boulevard Tank 7 (10 oz)","6","",""],["Stella Artois","6","",""],["Blue Moon","5.5","",""],
        ["Boulevard Wheat","5.5","",""],["Anthem Golden One","5.5","",""],["Cowboy Cold","5.5","",""],
        ["Stonecloud Neon Sunshine","7","",""],["Pacifico","5.5","",""],["Yuengling","5.5","",""],["Corona Premier","5.5","",""],
        {h:"Pale"},
        ["Founders All Day IPA","6","",""],["COOP F5 IPA","7","",""],["Sierra Nevada Pale Ale","7","",""],
        ["Roughtail ERWO","7","",""],["Stonecloud Astrodog IPA","7","",""],["Skydance Fancy Dance IPA","7","",""],
        {h:"Amber"},
        ["COOP DNR (10 oz)","8","",""],["Shiner Bock","6","",""],["Abita Amber","8","",""],
        ["Skydance NDN Amber","6","",""],["Big Sky Moose Drool","5.5","",""],
        {h:"Dark"},
        ["Left Hand Milk Stout (10 oz)","7","",""],["Guinness","7","",""],["Prairie Bomb (10 oz)","8","",""],
        {h:"Fruit"},
        ["Lindeman's Framboise (10 oz)","11","",""],["Anthem Super Fancy","6","",""],
        ["Prairie Rainbow Sherbet","6","",""],["Angry Orchard","5.5","",""],
        {h:"Rotators"},
        ["Prairie Brewing Rotator","MKT","",""],["405 Brewing Rotator","MKT","",""],["Random Rotator","MKT","",""]
      ]},
      {cat:"Bottles & Wine", items:[
        {h:"Bottles & cans"},
        ["Miller Lite","4","",""],["Coors Lite","4","",""],["Dos Equis","5","",""],["COOP Schooner","6","",""],
        ["Fat Tire","5","",""],["Red Stripe","5","",""],["Negra Modelo","5","",""],["Dogfish Head SeaQuench","6","",""],
        ["Austin Pineapple","6","",""],["NUTRL Seltzer","6","",""],["Estrella Damm Daura","5","gluten free",""],
        {h:"White wine · glass / bottle"},
        ["Kendall Jackson Chardonnay","11 / 42","",""],["Riff Pinot Grigio","9.5 / 36","",""],
        ["Atlantique Sauvignon Blanc","8.5 / 33","",""],["Wente Riesling","9 / 34","",""],
        ["And Why Am I Mr. Pink Rosé","41","bottle",""],["Brut Opera Prima","4 / 17","",""],
        {h:"Red wine · glass / bottle"},
        ["Pullus Halozan Red Wine","9 / 34","",""],["Bodini Malbec","7 / 26","",""],["Pavette Pinot Noir","33","bottle",""],
        ["Colores Del Sol Malbec","30","bottle",""],["Ultraviolet Cab Sauvignon","8 / 31","",""],["Carnivor Zinfandel","7 / 27","",""],
        {h:"Canned (2 glasses) & house"},
        ["The Pinot Project Rosé","12","per can",""],["The Pinot Project Pinot Noir","12","per can",""],
        ["House Chardonnay (Angeline)","7","glass",""],["House Cabernet Sauvignon (Angeline)","7","glass",""]
      ]}
    ]
  }
};
