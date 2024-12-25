document.getElementById('whatsapp_redirect').addEventListener('click', function() {
    const url = 'https://wa.me/+916005846156" target="_blank'; 
    window.location.href = url;
  });









  const avatar = document.querySelector('.avatar img');
  const avatarContainer = document.querySelector('.avatar');
  
  avatarContainer.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = avatar.getBoundingClientRect();
  
      // Calculate distances from each corner
      const topLeft = Math.sqrt(Math.pow(clientX - left, 2) + Math.pow(clientY - top, 2));
      const topRight = Math.sqrt(Math.pow(clientX - (left + width), 2) + Math.pow(clientY - top, 2));
      const bottomLeft = Math.sqrt(Math.pow(clientX - left, 2) + Math.pow(clientY - (top + height), 2));
      const bottomRight = Math.sqrt(Math.pow(clientX - (left + width), 2) + Math.pow(clientY - (top + height), 2));
  
      // Find the minimum distance to a corner
      const minDistance = Math.min(topLeft, topRight, bottomLeft, bottomRight);
  
      let tiltX = 0;
      let tiltY = 0;
  
      // Determine tilt based on the closest corner
      if (minDistance === topLeft) {
          tiltX = -10; // Tilt up for top-left
          tiltY = -10; // Tilt left for top-left
      } else if (minDistance === topRight) {
          tiltX = -10; // Tilt up for top-right
          tiltY = 10; // Tilt right for top-right
      } else if (minDistance === bottomLeft) {
          tiltX = 10; // Tilt down for bottom-left
          tiltY = -10; // Tilt left for bottom-left
      } else if (minDistance === bottomRight) {
          tiltX = 10; // Tilt down for bottom-right
          tiltY = 10; // Tilt right for bottom-right
      }
  
      // Apply the transform based on the closest corner
      avatar.style.transform = `translateZ(20px) rotateY(${tiltY}deg) rotateX(${tiltX}deg)`;
  });
  
  // Reset transformation on mouse leave
  avatarContainer.addEventListener('mouseleave', () => {
      avatar.style.transform = 'translateZ(0) rotateY(0) rotateX(0)';
  });
  