// 3D Model Viewer Loading Animation and Performance Optimization
document.addEventListener('DOMContentLoaded', function() {
  const modelViewer = document.querySelector('model-viewer');
  
  if (modelViewer) {
    const progressBar = modelViewer.querySelector('.progress-bar');
    const updateBar = modelViewer.querySelector('.update-bar');
    
    // Better loading progress visualization
    modelViewer.addEventListener('progress', (event) => {
      if (progressBar && updateBar) {
        const progress = event.detail.totalProgress * 100;
        updateBar.style.width = `${progress}%`;
        
        if (progress === 100) {
          progressBar.classList.add('hide');
        } else {
          progressBar.classList.remove('hide');
        }
      }
    });
    
    // Add load event handling for performance optimization
    modelViewer.addEventListener('load', () => {
      // Once loaded, apply smooth animations and transitions
      modelViewer.setAttribute('reveal', 'auto');
      
      // Add initial mouse-over effects
      modelViewer.addEventListener('mouseenter', () => {
        modelViewer.setAttribute('auto-rotate', 'true');
        modelViewer.setAttribute('camera-orbit', '0deg 65deg 1.2m');
      });
      
      modelViewer.addEventListener('mouseleave', () => {
        modelViewer.setAttribute('auto-rotate', 'true');
        modelViewer.setAttribute('camera-orbit', '0deg 75deg 1.2m');
      });
    });
    
    // Handle model interaction with smoother transitions
    modelViewer.addEventListener('camera-change', () => {
      // The user is interacting with the model, let them control it
    });
    
    // Custom subtle animation rather than full auto-rotation
    // This creates a gentler rocking motion that's less distracting
    let animationActive = true;
    let animationDirection = 1;
    let currentAngle = 0;
    
    function animateModel() {
      if (!animationActive || modelViewer.interacting) return;
      
      currentAngle += (0.2 * animationDirection);
      
      // Create a gentle rocking motion between -15 and 15 degrees
      if (currentAngle > 15) {
        animationDirection = -1;
      } else if (currentAngle < -15) {
        animationDirection = 1;
      }
      
      // Apply the subtle rotation
      const orbit = modelViewer.getAttribute('camera-orbit');
      const orbits = orbit.split(' ');
      if (orbits.length >= 3) {
        modelViewer.setAttribute('camera-orbit', `${currentAngle}deg ${orbits[1]} ${orbits[2]}`);
      }
      
      requestAnimationFrame(animateModel);
    }
    
    // Start the animation
    requestAnimationFrame(animateModel);
  }
});
