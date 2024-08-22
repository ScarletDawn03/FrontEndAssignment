let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons with data-target attribute
    const seeMoreButtons = document.querySelectorAll('button[data-target]');

    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = document.querySelector(this.getAttribute('data-target'));
            if (targetSection) {
                // Smooth scroll to the section
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkImages() {
    document.querySelectorAll('.image-space img').forEach(img => {
        if (isInViewport(img)) {
            img.classList.add('enlarge');
        } else {
            img.classList.remove('enlarge'); // Optional: removes the enlargement if the image scrolls out of view
        }
    });
}

// Check on initial load and on scroll
document.addEventListener('DOMContentLoaded', checkImages);
document.addEventListener('scroll', checkImages);