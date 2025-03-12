// Loader JavaScript
function stopLoading() {
    // Delay to ensure content is ready
    setTimeout(function() {
      // Hide loader with fade out effect
      const loader = document.getElementById('loader');
      loader.style.opacity = '0';
      
      // Show content with fade in effect
      const allContent = document.getElementById('all');
      allContent.style.display = 'block';
      
      // Add a small delay before starting opacity transition
      setTimeout(function() {
        allContent.classList.add('visible');
        
        // Remove loader from DOM after transition completes
        setTimeout(function() {
          loader.style.display = 'none';
        }, 1500);
      }, 100);
    }, 1500); // Adjust this value to control how long the loader displays
    
    // Add scroll reveal effects
    addScrollReveal();
  }
  
  // Add scroll reveal animations to sections
  function addScrollReveal() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Add specific animations to elements within section
          const heading = entry.target.querySelector('h1');
          const video = entry.target.querySelector('video');
          const paragraphs = entry.target.querySelectorAll('p');
          
          if (heading) heading.style.animation = 'fadeInUp 1s forwards';
          if (video) {
            video.style.opacity = '0';
            setTimeout(() => {
              video.style.animation = 'fadeInUp 1s forwards';
              video.style.opacity = '1';
            }, 300);
          }
          if (paragraphs.length) {
            paragraphs.forEach((p, index) => {
              p.style.opacity = '0';
              setTimeout(() => {
                p.style.animation = 'fadeInUp 1s forwards';
                p.style.opacity = '1';
              }, 300 + (index * 200));
            });
          }
        }
      });
    }, {
      threshold: 0.2
    });
    
    sections.forEach(section => {
      observer.observe(section);
    });
  }
  
  // Handle videos to ensure they play properly
  document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.play().catch(error => {
        console.log('Auto-play was prevented. User interaction required.');
        // Add a play button overlay if needed
      });
    });
  });