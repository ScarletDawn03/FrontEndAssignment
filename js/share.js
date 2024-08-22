document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    var currentUrl = encodeURIComponent(window.location.href);

    // Social media base URLs
    var facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=";
    var twitterUrl = "https://twitter.com/intent/tweet?url=";
    var instagramUrl = "https://www.instagram.com/"; 
    var emailUrl = "mailto:?subject=Check this out&body=" + currentUrl;

    // Update social media links
    document.querySelector(".social_icon.facebook").href = facebookUrl + currentUrl;
    document.querySelector(".social_icon.twitter").href = twitterUrl + currentUrl;
    document.querySelector(".social_icon.instagram").href = instagramUrl; 
    document.querySelector(".social_icon.email").href = emailUrl;
});