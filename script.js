 let isDragging = false;
  let startX;
  let scrollLeft;

  function startDrag(event) {
    isDragging = true;
	  
    startX = event.pageX - document.querySelector('.items').offsetLeft;
    scrollLeft = document.querySelector('.items').scrollLeft;
  }

  function drag(event) {
    if (!isDragging) return;
    const x = event.pageX - document.querySelector('.items').offsetLeft;
    const walk = (x - startX) * 2; // Adjust the multiplier for smoother/faster scrolling
    document.querySelector('.items').scrollLeft = scrollLeft - walk;
  }

  function endDrag() {
    isDragging = false;
  }

  function handleItemClick(item) {
    // Handle click on each item if needed
    console.log('Clicked on item:', item.textContent);
  }