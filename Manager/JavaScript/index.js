// To Select All the Images
const imgs = document.querySelectorAll('.headerSlider ul img');

// To Select All Control Buttons
const preBtn = document.querySelector('.controlPrevious');

const nextBtn = document.querySelector('.controlNext');

let n = 0;

function changeSlide() {
  
  for (let i = 0; i < imgs.length; i++) {
    
    imgs[i].style.display = 'none';

  }

  imgs[n].style.display = 'block';
  
}

changeSlide();


preBtn.addEventListener('click', (e) => {

  if (n > 0 ) {
    
    // This will Decrease the Value by 1
    n--;

  }

  else {
    n = imgs.length - 1;
  }

  changeSlide();
  
} )


nextBtn.addEventListener('click', (e) => {

  if (n < imgs.length - 1) {
    
    // This will Decrease the Value by 1
    n++;

  }

  else {
    n = 0;
  }

  changeSlide();
  
} )


// Row 3 Scrolling JS
const scrollContainer = document.querySelectorAll('.products');

for (const item of scrollContainer) {
  item.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}