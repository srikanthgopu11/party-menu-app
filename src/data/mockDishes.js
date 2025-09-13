// src/data/mockDishes.js
export const dishes = [
    {
        "id": 1,
        "name": "Kadhai Paneer",
        "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
        //"image": "https://placehold.co/300x200/F7D0B3/422402?text=Kadhai+Paneer",
        "image": "images/kadhai-paneer.png",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Paneer", "quantity": "200g" },
            { "name": "Onion", "quantity": "2 large" },
            { "name": "Capsicum", "quantity": "1 large" },
            { "name": "Tomato Puree", "quantity": "1 cup" }
        ]
    },
    {
        "id": 2,
        "name": "Chicken Tikka",
        "description": "Succulent chicken pieces marinated in yogurt and spices, grilled to perfection.",
        //"image": "https://placehold.co/300x200/FFD700/000000?text=Chicken+Tikka",
        "image": "images/chicken-tikka.png",
        "mealType": "STARTER",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Chicken Breast", "quantity": "300g" },
            { "name": "Yogurt", "quantity": "1/2 cup" },
            { "name": "Ginger-Garlic Paste", "quantity": "1 tbsp" },
            { "name": "Tikka Masala", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 3,
        "name": "Gulab Jamun",
        "description": "Deep-fried milk-solids balls soaked in rose-flavored sugar syrup.",
        //"image": "https://placehold.co/300x200/ADD8E6/000000?text=Gulab+Jamun",
        "image": "images/gulab-jamun.png",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "Khoya", "quantity": "200g" },
            { "name": "Sugar", "quantity": "1 cup" },
            { "name": "Rose Water", "quantity": "1 tsp" }
        ]
    },
    {
        "id": 4,
        "name": "Spring Rolls",
        "description": "Crispy fried rolls filled with seasoned vegetables.",
        //"image": "https://placehold.co/300x200/98FB98/000000?text=Spring+Rolls",
        "image": "images/spring-rolls.png",
        "mealType": "STARTER",
        "type": "VEG",
        "ingredients": [
            { "name": "Cabbage", "quantity": "1 cup shredded" },
            { "name": "Carrot", "quantity": "1/2 cup shredded" },
            { "name": "Noodles", "quantity": "1/4 cup cooked" },
            { "name": "Spring Roll Wrappers", "quantity": "10 sheets" }
        ]
    },
    {
        "id": 5,
        "name": "Dal Makhani",
        "description": "Black lentils cooked overnight with butter and cream.",
        //"image": "https://placehold.co/300x200/DAA520/000000?text=Dal+Makhani",
        "image": "images/dal-makhani.png",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Urad Dal", "quantity": "1 cup" },
            { "name": "Kidney Beans", "quantity": "1/4 cup" },
            { "name": "Butter", "quantity": "50g" },
            { "name": "Cream", "quantity": "1/4 cup" }
        ]
    },
    {
        "id": 6,
        "name": "Chicken Biryani",
        "description": "Fragrant basmati rice cooked with marinated chicken and aromatic spices.",
        //"image": "https://placehold.co/300x200/CD853F/000000?text=Chicken+Biryani",
        "image": "images/chicken-biryani.png",
        "mealType": "MAIN COURSE",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Basmati Rice", "quantity": "2 cups" },
            { "name": "Chicken", "quantity": "500g" },
            { "name": "Onions", "quantity": "2 sliced" },
            { "name": "Biryani Masala", "quantity": "3 tbsp" }
        ]
    },
    {
        "id": 7,
        "name": "Raita",
        "description": "Cool yogurt dip with cucumber and spices.",
        //"image": "https://placehold.co/300x200/B0E0E6/000000?text=Raita",
        "image": "images/raita.png",
        "mealType": "SIDES",
        "type": "VEG",
        "ingredients": [
            { "name": "Yogurt", "quantity": "2 cups" },
            { "name": "Cucumber", "quantity": "1/2 cup grated" },
            { "name": "Cumin Powder", "quantity": "1 tsp" }
        ]
    },
    {
        "id": 8,
        "name": "Samosa",
        "description": "Crispy pastry filled with spiced potatoes and peas.",
        //"image": "https://placehold.co/300x200/E8C48A/000000?text=Samosa",
        "image": "images/samosa.png",
        "mealType": "STARTER",
        "type": "VEG",
        "ingredients": [
            { "name": "Potatoes", "quantity": "2 large, boiled" },
            { "name": "Green Peas", "quantity": "1/2 cup" },
            { "name": "All-purpose Flour", "quantity": "1 cup" },
            { "name": "Cumin Seeds", "quantity": "1 tsp" }
        ]
    },
    {
        "id": 9,
        "name": "Palak Paneer",
        "description": "Paneer cubes in a creamy spinach gravy.",
        //"image": "https://placehold.co/300x200/90EE90/000000?text=Palak+Paneer",
        "image": "images/palak-paneer.png",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Paneer", "quantity": "200g" },
            { "name": "Spinach", "quantity": "1 bunch" },
            { "name": "Cream", "quantity": "1/4 cup" },
            { "name": "Ginger-Garlic Paste", "quantity": "1 tbsp" }
        ]
    },
    {
        "id": 10,
        "name": "Jalebi",
        "description": "Crispy, syrup-soaked coils of deep-fried batter.",
        //"image": "https://placehold.co/300x200/FFA07A/000000?text=Jalebi",
        "image": "images/jalebi.png",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "All-purpose Flour", "quantity": "1 cup" },
            { "name": "Yogurt", "quantity": "2 tbsp" },
            { "name": "Sugar", "quantity": "1.5 cup" },
            { "name": "Saffron Strands", "quantity": "few" }
        ]
    },
    {
        "id": 11,
        "name": "Pani Puri",
        "description": "Hollow crispy puris filled with spiced mashed potatoes and spicy tangy water.",
        //"image": "https://placehold.co/300x200/B0E0E6/000000?text=Pani+Puri",
        "image": "images/pani-puri.png",
        "mealType": "STARTER",
        "type": "VEG",
        "ingredients": [
            { "name": "Puri", "quantity": "12 pieces" },
            { "name": "Boiled Potatoes", "quantity": "1 cup mashed" },
            { "name": "Tamarind Chutney", "quantity": "2 tbsp" },
            { "name": "Mint Water", "quantity": "1 cup" }
        ]
    },
    {
        "id": 12,
        "name": "Chole Bhature",
        "description": "Spicy chickpea curry served with fluffy fried bread.",
        //"image": "https://placehold.co/300x200/FFDAB9/000000?text=Chole+Bhature",
        "image": "images/chole-bhature.png",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Chickpeas", "quantity": "1 cup, soaked" },
            { "name": "All-purpose Flour", "quantity": "2 cups" },
            { "name": "Yogurt", "quantity": "1/4 cup" },
            { "name": "Chole Masala", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 13,
        "name": "Fish Fry",
        "description": "Crispy fried fish marinated in Indian spices.",
        //"image": "https://placehold.co/300x200/ADD8E6/000000?text=Fish+Fry",
        "image": "images/fish-fry.png",
        "mealType": "STARTER",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Fish Fillet", "quantity": "300g" },
            { "name": "Ginger-Garlic Paste", "quantity": "1 tbsp" },
            { "name": "Red Chili Powder", "quantity": "1 tsp" },
            { "name": "Semolina", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 14,
        "name": "Kheer",
        "description": "Creamy rice pudding flavored with cardamom and nuts.",
        //"image": "https://placehold.co/300x200/FFFACD/000000?text=Kheer",
        "image": "images/kheer.png",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "Rice", "quantity": "1/4 cup" },
            { "name": "Milk", "quantity": "1 litre" },
            { "name": "Sugar", "quantity": "1/2 cup" },
            { "name": "Cardamom Powder", "quantity": "1/2 tsp" }
        ]
    },
    {
        "id": 15,
        "name": "Masala Papad",
        "description": "Crispy roasted papad topped with chopped onions, tomatoes, and spices.",
        //"image": "https://placehold.co/300x200/F0E68C/000000?text=Masala+Papad",
        "image": "images/masala-papad.png",
        "mealType": "SIDES",
        "type": "VEG",
        "ingredients": [
            { "name": "Papad", "quantity": "2 pieces" },
            { "name": "Onion", "quantity": "1/4 cup chopped" },
            { "name": "Tomato", "quantity": "1/4 cup chopped" },
            { "name": "Coriander Leaves", "quantity": "1 tbsp chopped" }
        ]
    },
    {
        "id": 16,
        "name": "Mushroom Tikka",
        "description": "Marinated mushrooms grilled to a tender perfection.",
        //"image": "https://placehold.co/300x200/DDA0DD/000000?text=Mushroom+Tikka",
        "image": "images/mushroom-tikka.png",
        "mealType": "STARTER",
        "type": "VEG",
        "ingredients": [
            { "name": "Mushrooms", "quantity": "200g" },
            { "name": "Yogurt", "quantity": "1/4 cup" },
            { "name": "Ginger-Garlic Paste", "quantity": "1 tbsp" },
            { "name": "Tikka Masala", "quantity": "1 tbsp" }
        ]
    },
    {
        "id": 17,
        "name": "Mutton Rogan Josh",
        "description": "Aromatic lamb curry with a rich, red gravy.",
        //"image": "https://placehold.co/300x200/CD5C5C/000000?text=Mutton+Rogan+Josh",
        "image": "images/mutton-rogan-josh.png",
        "mealType": "MAIN COURSE",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Mutton", "quantity": "500g" },
            { "name": "Yogurt", "quantity": "1/2 cup" },
            { "name": "Kashmiri Chili Powder", "quantity": "2 tbsp" },
            { "name": "Fennel Powder", "quantity": "1 tbsp" }
        ]
    },
    {
        "id": 18,
        "name": "Gajar Halwa",
        "description": "Sweet carrot pudding, a classic Indian dessert.",
        //"image": "https://placehold.co/300x200/FFB6C1/000000?text=Gajar+Halwa",
        "image": "images/gajar-halwa.png",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "Carrots", "quantity": "500g, grated" },
            { "name": "Milk", "quantity": "1 cup" },
            { "name": "Sugar", "quantity": "1/2 cup" },
            { "name": "Ghee", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 19,
        "name": "Vegetable Pulao",
        "description": "Fragrant rice dish cooked with mixed vegetables and spices.",
        //"image": "https://placehold.co/300x200/F0FFF0/000000?text=Vegetable+Pulao",
        "image": "images/vegetable-pulao.png",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Basmati Rice", "quantity": "1 cup" },
            { "name": "Mixed Vegetables", "quantity": "1 cup" },
            { "name": "Onion", "quantity": "1 medium" },
            { "name": "Garam Masala", "quantity": "1 tsp" }
        ]
    },
    {
        "id": 20,
        "name": "Chicken Lollipop",
        "description": "Fried chicken drumettes shaped like lollipops, spicy and juicy.",
        //"image": "https://placehold.co/300x200/FF6347/000000?text=Chicken+Lollipop",
        "image": "images/chicken-lollipop.png",
        "mealType": "STARTER",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Chicken Drumettes", "quantity": "8 pieces" },
            { "name": "Ginger-Garlic Paste", "quantity": "1 tbsp" },
            { "name": "Soy Sauce", "quantity": "1 tbsp" },
            { "name": "All-purpose Flour", "quantity": "1/4 cup" }
        ]
    },
    {
        "id": 21,
        "name": "Rasmalai",
        "description": "Soft cheese dumplings soaked in sweetened, flavored milk.",
        //"image": "https://placehold.co/300x200/FFDAB9/000000?text=Rasmalai",
        "image": "images/rasmalai.png",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "Paneer", "quantity": "200g" },
            { "name": "Milk", "quantity": "1 litre" },
            { "name": "Sugar", "quantity": "1 cup" },
            { "name": "Cardamom Pods", "quantity": "3-4" }
        ]
    },
    {
        "id": 22,
        "name": "Naan",
        "description": "Soft, leavened flatbread, perfect with curries.",
        //"image": "https://placehold.co/300x200/F5DEB3/000000?text=Naan",
        "image": "images/naan.png",
        "mealType": "SIDES",
        "type": "VEG",
        "ingredients": [
            { "name": "All-purpose Flour", "quantity": "2 cups" },
            { "name": "Yogurt", "quantity": "1/4 cup" },
            { "name": "Yeast", "quantity": "1 tsp" },
            { "name": "Milk", "quantity": "1/2 cup" }
        ]
    },
    {
        "id": 23,
        "name": "Hara Bhara Kebab",
        "description": "Healthy and flavorful patties made from spinach, peas, and potatoes.",
        //"image": "https://placehold.co/300x200/9ACD32/000000?text=Hara+Bhara+Kebab",
        "image": "images/hara-bhara-kebab.png",
        "mealType": "STARTER",
        "type": "VEG",
        "ingredients": [
            { "name": "Spinach", "quantity": "1 cup blanched" },
            { "name": "Green Peas", "quantity": "1/2 cup" },
            { "name": "Potatoes", "quantity": "2 boiled, mashed" },
            { "name": "Breadcrumbs", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 24,
        "name": "Butter Chicken",
        "description": "Creamy tomato-based curry with tender chicken pieces.",
        //"image": "https://placehold.co/300x200/FFDAB9/000000?text=Butter+Chicken",
        "image": "images/butter-chicken.png",
        "mealType": "MAIN COURSE",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Chicken", "quantity": "500g" },
            { "name": "Tomato Puree", "quantity": "1 cup" },
            { "name": "Butter", "quantity": "50g" },
            { "name": "Cream", "quantity": "1/4 cup" }
        ]
    },
    {
        "id": 25,
        "name": "Shahi Tukda",
        "description": "Fried bread slices soaked in sugar syrup, topped with rabri and nuts.",
        //"image": "https://placehold.co/300x200/F5DEB3/000000?text=Shahi+Tukda",
        "image": "images/shahi-tukda.png",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "Bread Slices", "quantity": "4" },
            { "name": "Milk", "quantity": "1 litre for rabri" },
            { "name": "Sugar", "quantity": "1/2 cup" },
            { "name": "Mixed Nuts", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 26,
        "name": "Plain Rice",
        "description": "Steamed basmati rice, a staple with any meal.",
        //"image": "https://placehold.co/300x200/FFFFFF/000000?text=Plain+Rice",
        "image": "images/plain-rice.png",
        "mealType": "SIDES",
        "type": "VEG",
        "ingredients": [
            { "name": "Basmati Rice", "quantity": "1 cup" },
            { "name": "Water", "quantity": "2 cups" }
        ]
    },
    {
        "id": 27,
        "name": "Aloo Tikki",
        "description": "Crispy potato patties served with chutneys.",
        //"image": "https://placehold.co/300x200/F0E68C/000000?text=Aloo+Tikki",
        "image": "images/aloo-tikki.png",
        "mealType": "STARTER",
        "type": "VEG",
        "ingredients": [
            { "name": "Potatoes", "quantity": "3 large, boiled" },
            { "name": "Coriander Leaves", "quantity": "2 tbsp chopped" },
            { "name": "Green Chillies", "quantity": "1 chopped" },
            { "name": "Cornflour", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 28,
        "name": "Malai Kofta",
        "description": "Paneer and potato dumplings in a rich, creamy gravy.",
        //"image": "https://placehold.co/300x200/FFDAB9/000000?text=Malai+Kofta",
        "image": "images/malai-kofta.png",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Paneer", "quantity": "100g, grated" },
            { "name": "Potatoes", "quantity": "1 boiled, mashed" },
            { "name": "Cream", "quantity": "1/2 cup" },
            { "name": "Cashew Paste", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 29,
        "name": "Phirni",
        "description": "Thick rice pudding made with ground rice, milk, and saffron.",
        //"image": "https://placehold.co/300x200/FFF8DC/000000?text=Phirni",
        "image": "images/phirni.png",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "Basmati Rice", "quantity": "1/4 cup, ground" },
            { "name": "Milk", "quantity": "750ml" },
            { "name": "Sugar", "quantity": "1/2 cup" },
            { "name": "Saffron Strands", "quantity": "few" }
        ]
    },
    {
        "id": 30,
        "name": "Garlic Naan",
        "description": "Soft naan bread flavored with fresh garlic and butter.",
        //"image": "https://placehold.co/300x200/F5DEB3/000000?text=Garlic+Naan",
        "image": "images/garlic-naan.png",
        "mealType": "SIDES",
        "type": "VEG",
        "ingredients": [
            { "name": "All-purpose Flour", "quantity": "2 cups" },
            { "name": "Minced Garlic", "quantity": "2 tbsp" },
            { "name": "Coriander Leaves", "quantity": "2 tbsp chopped" },
            { "name": "Butter", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 31,
        "name": "Chicken 65",
        "description": "Spicy, deep-fried chicken appetizer from South India.",
        //"image": "https://placehold.co/300x200/FF4500/000000?text=Chicken+65",
        "image": "images/chicken-65.png",
        "mealType": "STARTER",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Chicken Boneless", "quantity": "300g" },
            { "name": "Curry Leaves", "quantity": "a sprig" },
            { "name": "Red Chili Powder", "quantity": "1 tbsp" },
            { "name": "Rice Flour", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 32,
        "name": "Dum Aloo",
        "description": "Small potatoes cooked in a rich, spicy Kashmiri gravy.",
        //"image": "https://placehold.co/300x200/D2B48C/000000?text=Dum+Aloo",
        "image": "images/dum-aloo.png",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Baby Potatoes", "quantity": "500g" },
            { "name": "Yogurt", "quantity": "1/2 cup" },
            { "name": "Fennel Powder", "quantity": "1 tbsp" },
            { "name": "Dry Ginger Powder", "quantity": "1 tsp" }
        ]
    },
    {
        "id": 33,
        "name": "Besan Ladoo",
        "description": "Sweet balls made from roasted gram flour, ghee, and sugar.",
        //"image": "https://placehold.co/300x200/F7D0B3/422402?text=Besan+Ladoo",
        "image": "images/besan-ladoo.png",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "Gram Flour (Besan)", "quantity": "1 cup" },
            { "name": "Ghee", "quantity": "1/2 cup" },
            { "name": "Powdered Sugar", "quantity": "3/4 cup" },
            { "name": "Cardamom Powder", "quantity": "1/2 tsp" }
        ]
    },
    {
        "id": 34,
        "name": "Cucumber Salad",
        "description": "Refreshing salad with sliced cucumber, onions, and lemon.",
        //"image": "https://placehold.co/300x200/98FB98/000000?text=Cucumber+Salad",
        "image": "images/cucumber-salad.png",
        "mealType": "SIDES",
        "type": "VEG",
        "ingredients": [
            { "name": "Cucumber", "quantity": "1 large" },
            { "name": "Onion", "quantity": "1/2 sliced" },
            { "name": "Lemon Juice", "quantity": "1 tbsp" },
            { "name": "Salt and Pepper", "quantity": "to taste" }
        ]
    },
    {
        "id": 35,
        "name": "Paneer Tikka",
        "description": "Grilled paneer cubes marinated in yogurt and spices.",
        //"image": "https://placehold.co/300x200/FFD700/000000?text=Paneer+Tikka",
        "image": "images/paneer-tikka.png",
        "mealType": "STARTER",
        "type": "VEG",
        "ingredients": [
            { "name": "Paneer", "quantity": "200g" },
            { "name": "Yogurt", "quantity": "1/2 cup" },
            { "name": "Capsicum", "quantity": "1, diced" },
            { "name": "Onion", "quantity": "1, diced" }
        ]
    },
    {
        "id": 36,
        "name": "Rajma Chawal",
        "description": "Kidney bean curry served with steamed rice, a North Indian favorite.",
        //"image": "https://placehold.co/300x200/CD5C5C/000000?text=Rajma+Chawal",
        "image": "images/rajma-chawal.png",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Kidney Beans (Rajma)", "quantity": "1 cup, soaked" },
            { "name": "Basmati Rice", "quantity": "1 cup" },
            { "name": "Tomato Puree", "quantity": "1/2 cup" },
            { "name": "Rajma Masala", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 37,
        "name": "Kulfi",
        "description": "Traditional Indian frozen dessert, similar to ice cream.",
        //"image": "https://placehold.co/300x200/F0FFF0/000000?text=Kulfi",
        "image": "images/kulfi.png",
        "mealType": "DESSERT",
        "type": "VEG",
        "ingredients": [
            { "name": "Full Cream Milk", "quantity": "1 litre" },
            { "name": "Sugar", "quantity": "1/2 cup" },
            { "name": "Cardamom Powder", "quantity": "1/2 tsp" },
            { "name": "Pistachios", "quantity": "2 tbsp chopped" }
        ]
    },
    {
        "id": 38,
        "name": "Boondi Raita",
        "description": "Cool yogurt dip with crispy gram flour pearls (boondi).",
        //"image": "https://placehold.co/300x200/B0E0E6/000000?text=Boondi+Raita",
        "image": "images/boondi-raita.png",
        "mealType": "SIDES",
        "type": "VEG",
        "ingredients": [
            { "name": "Yogurt", "quantity": "2 cups" },
            { "name": "Boondi", "quantity": "1/2 cup" },
            { "name": "Cumin Powder", "quantity": "1 tsp" },
            { "name": "Chaat Masala", "quantity": "1 tsp" }
        ]
    },
    {
        "id": 39,
        "name": "Chicken Seekh Kebab",
        "description": "Minced chicken mixed with spices, skewered and grilled.",
        //"image": "https://placehold.co/300x200/DDA0DD/000000?text=Chicken+Seekh+Kebab",
        "image": "images/chicken-seekh-kebab.png",
        "mealType": "STARTER",
        "type": "NON-VEG",
        "ingredients": [
            { "name": "Minced Chicken", "quantity": "300g" },
            { "name": "Ginger-Garlic Paste", "quantity": "1 tbsp" },
            { "name": "Green Chillies", "quantity": "2 chopped" },
            { "name": "Coriander Leaves", "quantity": "2 tbsp" }
        ]
    },
    {
        "id": 40,
        "name": "Aloo Gobhi",
        "description": "Dry curry made with potatoes and cauliflower florets.",
        //"image": "https://placehold.co/300x200/F7D0B3/422402?text=Aloo+Gobhi",
        "image": "images/aloo-gobhi.png",
        "mealType": "MAIN COURSE",
        "type": "VEG",
        "ingredients": [
            { "name": "Potatoes", "quantity": "2 medium, diced" },
            { "name": "Cauliflower", "quantity": "1 medium, florets" },
            { "name": "Cumin Seeds", "quantity": "1 tsp" },
            { "name": "Turmeric Powder", "quantity": "1/2 tsp" }
        ]
    }
];