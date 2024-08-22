let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  // Wrap around if index goes out of bounds
  currentIndex = (index + totalSlides) % totalSlides;

  // Update the transform to slide to the correct position
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update indicators
  updateIndicators();
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function currentSlide(index) {
  showSlide(index);
}

function updateIndicators() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === currentIndex) {
      dot.classList.add("active");
    }
  });
}

function showDescription(id) {
  const header = {
    'Malay': 'Malay',
    'Chinese': 'Chinese',
    'Indian': 'Indian',
    'Kadazan-Dusun': 'Kadazan-Dusun',
    'Iban': 'Iban'
  };
  
  const descriptions = {
    'Malay': 'The Malays, predominantly Muslim, are the largest ethnic group and play a significant role in the country\'s cultural and political life. Their traditions include vibrant festivals such as Hari Raya, and their cuisine is well-known for dishes like nasi lemak and rendang.',
    'Chinese': 'The Chinese community in Malaysia is diverse, with many speaking various dialects like Mandarin, Cantonese, and Hokkien. They celebrate festivals such as Chinese New Year and contribute richly to Malaysia’s cultural landscape.',
    'Indian': 'Indians in Malaysia, predominantly Tamil, have a cultural heritage marked by colorful festivals like Deepavali and unique cuisine, including biryani and dosai. Their traditions also include classical dance forms and vibrant celebrations.',
    'Kadazan-Dusun': 'The Kadazan-Dusun people, native to Sabah, have a rich cultural heritage that includes the Kaamatan harvest festival and traditional practices involving nature spirits. Their cuisine features dishes like hinava and bamboo chicken.',
    'Iban': 'The Iban, an indigenous group from Sarawak, are known for their longhouses and traditional rituals. Their celebrations, such as the Gawai Dayak festival, and their cuisine, which includes manok pansuh and tuak, reflect their deep-rooted cultural practices.'
  };
  
  document.getElementById('description-header').innerHTML = header[id];
  document.getElementById('description-text').innerHTML = descriptions[id];
  document.getElementById('description-overlay').style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function hideDescription() {
  document.getElementById('description-overlay').style.display = 'none';
  document.body.style.overflow = 'auto'; // Allow scrolling
}

