$(document).ready(function () {
    // Function to get favourites from localStorage
    function getfavourites() {
        const favourites = localStorage.getItem('favourites');

        if (favourites) {
            return JSON.parse(favourites);
        } else {
            return [];
        }
    }

    // Function to save favourites to localStorage
    function savefavourites(favourites) {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }

    // Function to initialize the favourite button state
    function initializefavourites() {
        const favourites = getfavourites();
        $('.favourite').each(function () {
            const foodId = $(this).data('id');
            
            for(var i = 0; i < favourites.length; i++){
                if(favourites[i] == foodId)
                    $(this).addClass('favourited');
            }   
        });
    }

    // Click event handler for favourite buttons
    $('.favourite').on('click', function () {
        const foodId = $(this).data('id');
        let favourited = false;
        let favourites = getfavourites();

        for (var i = 0; i < favourites.length; i++) {
            if (favourites[i] == foodId) {
                // Remove from favourites
                favourites.splice(i, 1);
                $(this).removeClass('favourited');
                favourited = true;
                i = favourites.length;
            }
        }

        if (favourited == false) {
            // Add to favourites
            favourites.push(foodId);
            $(this).addClass('favourited');
        }

        savefavourites(favourites);
    });

    function filterFavourites() {
        const favourites = getfavourites();

        $('.food_box').hide(); //Hide all food items

        $('.food_box').each(function () {
            let foodId = $(this).data('id');
            foodId = foodId.slice(0, -3) //remove box from the id to compare with favourites id
            
            for(var i = 0; i < favourites.length; i++){
                if(foodId == favourites[i])
                    $(this).show();
            }
        });
    }

    $('#filter_button').on('click', function () {
        filterFavourites();
    });

    function showAllFoods() {
        $('.food_box').show();  // Show all food items
    }
    
    // Event handler to reset filter and show all items
    $('#show_all').on('click', function () {
        showAllFoods();
    });


    // Initialize favourite buttons on page load
    initializefavourites();
});