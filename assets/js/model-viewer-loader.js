// 3D Model Viewer Animation and Interactive Effects
document.addEventListener('DOMContentLoaded', function() {
  const modelViewer = document.querySelector('#profile-model');
  
  if (modelViewer) {
    // Enhanced animation settings
    let orbitAngle = 0;
    let tiltAngle = 75;
    let zoomLevel = 1.2;
    let isAnimating = true;
    let isHovering = false;
    let animationFrame;
    
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
          // Smooth rotation effect
          orbitAngle = (orbitAngle + 0.3) % 360;
          
          // Add some vertical movement - gentle bobbing
          const bobAmount = isHovering ? 2 : 1;
          tiltAngle = 75 + Math.sin(Date.now() / 1000) * bobAmount;
          
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
