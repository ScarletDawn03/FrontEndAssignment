
$(document).ready(function () {
    // Object storing descriptions
    const descriptions = {
        "Nasi Lemak": "Nasi Lemak is celebrated as Malaysia's national dish and embodies a rich blend of flavors and textures that make it a beloved staple across the country. The name Nasi Lemak translates to 'rich rice', reflecting the creamy, indulgent quality of the dish, which is achieved by cooking rice in coconut milk. This method imparts a subtle, fragrant aroma and a smooth, slightly creamy texture to the rice.Traditionally, Nasi Lemak is accompanied by a spicy sambal, a chili paste made from a mix of dried chilies, onions, garlic, and shrimp paste. The sambal adds a significant kick of heat and complexity, balancing the richness of the coconut milk.The dish is also served with crispy fried anchovies (ikan bilis), roasted peanuts, and fresh cucumber slices. The anchovies and peanuts provide a satisfying crunch, while the cucumber offers a refreshing contrast to the spiciness of the sambal.A hard-boiled or fried egg is a common addition, enriching the dish with its creamy yolk. In various regional and modern interpretations, Nasi Lemak might include extras such as rendang (a slow-cooked spiced meat dish), fried chicken, or sambal sotong (spicy squid), enhancing its depth and heartiness. Its blend of spicy, savory, and creamy elements makes it a cherished part of Malaysian culinary heritage, frequently found at street food stalls, restaurants, and home kitchens alike.",
        "Laksa": "Laksa is a flavorful and aromatic noodle soup that is a popular dish in Malaysia, showcasing the country’s rich culinary diversity. There are several regional variations of Laksa, but they all share a common base of noodles, usually served in a spicy, tangy broth.One of the most famous types is Curry Laksa, which features a rich, coconut milk-based curry soup, often spiced with chili, turmeric, and lemongrass. It is typically garnished with tofu puffs, bean sprouts, fish cakes, shrimp, and a boiled egg, and is often topped with a dollop of sambal.Another popular variation is Asam Laksa, particularly associated with Penang. This version has a tangy, fish-based broth made from tamarind, which gives it a distinctive sour taste. Asam Laksa usually includes thick rice noodles, mackerel fish, cucumber, onions, mint, and pineapple slices, topped with a spoonful of harum (a thick prawn paste).Laksa is cherished for its complex layers of flavors, combining spicy, sour, and creamy elements, making it a must-try dish for anyone exploring Malaysian cuisine.",
        "Satay": "Satay is a popular Malaysian dish consisting of skewered and grilled meat, typically served with a rich, flavorful peanut sauce. The meat, often chicken, beef, or lamb, is marinated in a mixture of spices and herbs, including turmeric, coriander, cumin, and lemongrass, which gives it a distinctive and aromatic flavor.After marinating, the meat is threaded onto bamboo skewers and grilled over an open flame, which imparts a smoky, charred taste. Satay is commonly served with a side of peanut sauce for dipping, which is made from ground peanuts, coconut milk, tamarind, and a touch of sweetness from palm sugar. Accompaniments often include cucumber slices, onions, and compressed rice cakes called ketupat.Satay is enjoyed as a snack, appetizer, or main dish, and is a favorite at street food stalls and restaurants across Malaysia. Its combination of tender, flavorful meat and creamy, slightly spicy peanut sauce makes it a beloved dish in Malaysian cuisine.",
        "Rendang": "Rendang is a rich and flavorful Indonesian-Malaysian dish renowned for its complex spices and slow-cooked tenderness. Traditionally, it is made with beef (though chicken and other meats can also be used) that is simmered in a mixture of coconut milk and a blend of spices until it becomes tender and deeply infused with flavor.The key to rendang lies in its spice paste, which typically includes ingredients such as ginger, garlic, turmeric, lemongrass, galangal, chilies, and shallots. This paste is cooked with coconut milk and simmered for several hours, allowing the meat to absorb the spices and develop a rich, aromatic flavor. The slow cooking process also helps the dish achieve a slightly dry and caramelized texture as the liquid reduces.There are regional variations of rendang. The Padang style from West Sumatra, Indonesia, is often characterized by its deep, spicy, and somewhat tangy flavor due to the use of tamarind or lime. In Malaysia, the dish might be slightly sweeter and less spicy, often enjoyed with nasi lemak (coconut rice) or ketupat (rice cakes).Rendang is often served during special occasions and festive celebrations, and its deep, complex flavors make it a cherished dish in Malaysian cuisine.",
        "Char Kuey Teow": "Char Kuey Teow is a beloved Malaysian stir-fried noodle dish, particularly popular in Penang. The dish features flat rice noodles (kuey teow) that are stir-fried over high heat with a mixture of ingredients, resulting in a smoky, savory flavor that is characteristic of this dish.Typically, Char Kuey Teow includes shrimp, Chinese sausage, eggs, bean sprouts, and chives, all cooked together in a wok. The noodles are flavored with a savory sauce made from soy sauce, chili paste, and sometimes a touch of oyster sauce. Some versions also include cockles, adding a unique briny flavor.The high-heat cooking method, often referred to as 'wok hei' (the breath of the wok), is essential in achieving the dish's distinctive taste and slightly charred aroma. Char Kuey Teow is known for its rich, umami flavor and is a favorite comfort food among Malaysians. It’s often enjoyed as a street food, with each vendor offering their own twist on this iconic dish.",
        "Roti Canai": "Roti Canai is a popular and versatile flatbread in Malaysian cuisine, known for its flaky texture and deliciously savory flavor. Originating from Indian cuisine, it has become a staple in Malaysia and is commonly enjoyed throughout the day.The preparation of roti canai involves kneading and stretching dough made from flour, water, and ghee (clarified butter). The dough is then folded and rolled out, creating layers that result in a crispy, flaky texture when cooked. The flatbread is typically pan-fried on a griddle or skillet until it turns golden brown and crispy.Roti Canai is often served with various accompaniments, including dhal (lentil curry), chicken or beef curry, or just a side of sugar for a sweet touch. It can also be enjoyed with a variety of dips and curries, making it a versatile choice for breakfast, lunch, or dinner. In some variations, you might find roti canai stuffed with ingredients like onions, eggs, or even chocolate, adding an extra layer of flavor to this beloved flatbread."
        };

    $('.food_content').on('click',  function () {
        //Hide the instruction
        $('#instruction').css('display', 'none');

        $('.food_desc').css('display', 'flex')

        // Get the food ID from the clicked food box
        var foodId = $(this).data('id');

        // Get the description from the JavaScript object
        var description = descriptions[foodId];

        //Get the image url
        var imageURL = 'images/Food/' + foodId + ' desc.jpg';

        //Update the header in the description container
        $('#food_header').text(foodId);

        // Update the text in the description container
        $('#description').text(description);

        //Update the image in the description container
        $('#food_image').attr('src', imageURL);
        $('#food_image').attr('alt', foodId);

        // Scroll to the description container
        $("html").animate({ scrollTop: $("#read_more").offset().top}, 10);
    });
});