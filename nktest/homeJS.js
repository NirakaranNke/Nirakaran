
	
// THIS IS THE JAVASCRIPT USED FOR THE CV


//FOR THE LOADER
window.onload = function(){
  document.querySelector(".load").style.display="none";
};



//FOR THE SIDEBAR(HAMBURGER)
  function sidebarFunction(x) {
	 	x.classList.toggle("change");


	 	 var z = document.querySelector(".nav");
    	 var navMenu = document.querySelector(".navMenu");
    if (z.style.width === "100%") {
        z.style.width = "0px";
    	navMenu.style.transform = "scale(0)";
    } 
    else {
        z.style.width = "100%";
    	navMenu.style.transform = "scale(1)";	
    }

	}


  const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const currentSection = Math.round(window.scrollY / window.innerHeight);
  sections.forEach((section, index) => {
    if (index === currentSection) {
      section.classList.add('active');
    }
    else {
      section.classList.remove('active');
      }
      });
      });



      const image = document.querySelector('#section3 .cardboard img');
      const sectionTop = document.querySelector('#section3').offsetTop;
      const sectionBottom = sectionTop + document.querySelector('#section3').offsetHeight;
      const windowHeight = window.innerHeight;
      
      function updateImagePosition() {
        const scrollPosition = window.pageYOffset;
      
        // check if section is in view
        if (scrollPosition + windowHeight > sectionTop && scrollPosition < sectionBottom) {
          const distanceFromTop = scrollPosition - sectionTop;
          const imagePosition = distanceFromTop * 0.5; // adjust the scrolling speed by changing this value
          image.style.transform = `translateX(${imagePosition}px)`;
      
          // add or remove the active class based on the image position
          if (!image.classList.contains('active')) {
            image.classList.add('active');
          }
        } else {
          // remove the active class if the section is not in view
          image.classList.remove('active');
        }
      }
      
      // update the image position on scroll
      window.addEventListener('scroll', updateImagePosition);
