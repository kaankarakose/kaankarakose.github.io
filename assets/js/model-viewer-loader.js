// 3D Model Viewer Animation and Interactive Effects
document.addEventListener('DOMContentLoaded', function() {
  const modelViewer = document.querySelector('#profile-model');
  
  // Fix canvas sizing issues
  function fixCanvasSizing() {
    if (modelViewer) {
      // Get all canvas elements inside model-viewer
      const canvases = modelViewer.querySelectorAll('canvas');
      canvases.forEach(canvas => {
        // Force proper dimensions
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.minWidth = '12.5rem';
        canvas.style.minHeight = '12.5rem';
        
        // Set proper attributes
        const parent = canvas.parentElement;
        if (parent) {
          const parentWidth = parent.offsetWidth;
          const parentHeight = parent.offsetHeight;
          if (parentWidth > 0 && parentHeight > 0) {
            canvas.width = parentWidth * 2; // High resolution
            canvas.height = parentHeight * 2; // High resolution
          }
        }
      });
      
      // Force userInput container to proper size
      const userInput = modelViewer.querySelector('.userInput');
      if (userInput) {
        userInput.style.width = '100%';
        userInput.style.height = '100%';
        userInput.style.minWidth = '12.5rem';
        userInput.style.minHeight = '12.5rem';
        userInput.style.position = 'absolute';
        userInput.style.top = '0';
        userInput.style.left = '0';
      }
    }
  }
  
  // Call immediately
  fixCanvasSizing();
  
  // Also call after load
  if (modelViewer) {
    modelViewer.addEventListener('load', fixCanvasSizing);
    
    // Call on resize as well
    window.addEventListener('resize', fixCanvasSizing);
  }
  
  if (modelViewer) {
    // Enhanced animation settings
    let orbitAngle = 0;
    let tiltAngle = 75;
    let zoomLevel = 1.2;
    let isAnimating = true;
    let isHovering = false;
    let animationFrame;
    
    // Detect if on mobile device
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    // Adjust settings for mobile
    if (isMobile) {
      // Simplify animation for better performance on mobile
      zoomLevel = 1.5; // Show a bit more of the model
      tiltAngle = 65; // Adjust viewing angle for mobile
    }
    
    // Initial load animation
    modelViewer.addEventListener('load', () => {
      // Bounce animation effect when model first loads
      const startTime = Date.now();
      const duration = 1000; // 1 second for initial animation
      
      function initialAnimation() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Elastic bounce effect
        const scale = 0.8 + (0.2 * (1 + Math.sin(progress * Math.PI)));
        modelViewer.style.transform = `scale(${scale})`;
        
        if (progress < 1) {
          requestAnimationFrame(initialAnimation);
        } else {
          modelViewer.style.transform = 'scale(1)';
          startMainAnimation();
        }
      }
      
      initialAnimation();
    });
    
    // Main continuous animation
    function startMainAnimation() {
      function animate() {
        if (!isAnimating) return;
        
        if (!modelViewer.interacting) {
          // Smooth rotation effect - slower on mobile
          const rotationSpeed = isMobile ? 0.2 : 0.3;
          orbitAngle = (orbitAngle + rotationSpeed) % 360;
          
          // Add some vertical movement - gentle bobbing (reduced on mobile)
          const bobAmount = isMobile ? 0.5 : (isHovering ? 2 : 1);
          const baseTilt = isMobile ? 65 : 75;
          tiltAngle = baseTilt + Math.sin(Date.now() / 1000) * bobAmount;
          
          // Set the new orbit
          modelViewer.setAttribute('camera-orbit', 
            `${orbitAngle}deg ${tiltAngle}deg ${zoomLevel}m`);
        }
        
        animationFrame = requestAnimationFrame(animate);
      }
      
      animate();
      
      // Add interactive effects
      modelViewer.addEventListener('mouseenter', () => {
        isHovering = true;
        zoomLevel = 1.0; // Zoom in slightly on hover
      });
      
      modelViewer.addEventListener('mouseleave', () => {
        isHovering = false;
        zoomLevel = 1.2; // Return to original zoom level
      });
      
      // Add click effect
      modelViewer.addEventListener('click', () => {
        // Quick spin effect on click
        const startAngle = orbitAngle;
        const startTime = Date.now();
        const spinDuration = 800; // milliseconds
        
        // Temporarily stop main animation
        isAnimating = false;
        cancelAnimationFrame(animationFrame);
        
        function spinEffect() {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / spinDuration, 1);
          
          // Fast spin that gradually slows down
          const spinSpeed = 360 * (1 - Math.pow(progress - 1, 2));
          orbitAngle = startAngle + spinSpeed;
          
          modelViewer.setAttribute('camera-orbit', 
            `${orbitAngle}deg ${tiltAngle}deg ${zoomLevel}m`);
          
          if (progress < 1) {
            requestAnimationFrame(spinEffect);
          } else {
            // Resume normal animation
            isAnimating = true;
            animate();
          }
        }
        
        spinEffect();
      });
    }
  }
});
