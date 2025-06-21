// Enhanced navigation and user interactions for the artbook

export function initializeNavigation() {
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return; // Don't interfere with form inputs
    }

    switch (e.key) {
      case 'ArrowLeft':
      case 'h':
        navigateToPrevious();
        break;
      case 'ArrowRight':
      case 'l':
        navigateToNext();
        break;
      case 'ArrowUp':
      case 'k':
        navigateToOverview();
        break;
      case 'Escape':
        navigateToHome();
        break;
    }
  });

  // Touch/swipe navigation for mobile
  let touchStartX = 0;
  let touchStartY = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  });

  document.addEventListener('touchend', (e) => {
    if (!touchStartX || !touchStartY) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchStartX - touchEndX;
    const deltaY = touchStartY - touchEndY;
    
    const minSwipeDistance = 50;
    
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        // Swipe left - next
        navigateToNext();
      } else {
        // Swipe right - previous
        navigateToPrevious();
      }
    }
    
    touchStartX = 0;
    touchStartY = 0;
  });
}

function navigateToPrevious() {
  const prevButton = document.querySelector('.nav-button.prev');
  if (prevButton) {
    window.location.href = prevButton.href;
  }
}

function navigateToNext() {
  const nextButton = document.querySelector('.nav-button.next');
  if (nextButton) {
    window.location.href = nextButton.href;
  }
}

function navigateToOverview() {
  const overviewButton = document.querySelector('.nav-button.overview');
  if (overviewButton) {
    window.location.href = overviewButton.href;
  }
}

function navigateToHome() {
  window.location.href = '/';
}

// Image zoom functionality
export function initializeImageInteractions() {
  const images = document.querySelectorAll('.response-image');
  
  images.forEach(img => {
    img.addEventListener('click', () => {
      toggleImageZoom(img);
    });
  });
}

function toggleImageZoom(img) {
  const isZoomed = img.classList.contains('zoomed');
  
  if (isZoomed) {
    img.classList.remove('zoomed');
    document.body.classList.remove('image-zoomed');
  } else {
    img.classList.add('zoomed');
    document.body.classList.add('image-zoomed');
  }
}

// Progress tracking
export function initializeProgressTracking() {
  const currentPath = window.location.pathname;
  const pathParts = currentPath.split('/').filter(Boolean);
  
  if (pathParts.length >= 3 && pathParts[0] === 'interview') {
    const interviewId = pathParts[1];
    const questionId = pathParts[2];
    
    // Store progress in localStorage
    const progress = JSON.parse(localStorage.getItem('artbook-progress') || '{}');
    
    if (!progress[interviewId]) {
      progress[interviewId] = [];
    }
    
    if (!progress[interviewId].includes(questionId)) {
      progress[interviewId].push(questionId);
    }
    
    localStorage.setItem('artbook-progress', JSON.stringify(progress));
    
    // Add visual indicators for completed questions
    updateProgressIndicators(progress);
  }
}

function updateProgressIndicators(progress) {
  const questionCards = document.querySelectorAll('.question-card');
  
  questionCards.forEach(card => {
    const link = card.querySelector('a');
    if (!link) return;
    
    const href = link.getAttribute('href');
    const pathParts = href.split('/').filter(Boolean);
    
    if (pathParts.length >= 3) {
      const interviewId = pathParts[1];
      const questionId = pathParts[2];
      
      if (progress[interviewId] && progress[interviewId].includes(questionId)) {
        card.classList.add('completed');
      }
    }
  });
}