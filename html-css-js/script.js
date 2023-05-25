
    let addButton = document.getElementById('addButton');
    let counter = document.getElementById('counter');
    let count = 3;
    let removeButton = document.getElementById('removeButton');


    addButton.addEventListener('click', function() {
      let gridContainer = document.querySelector('.grid-container');
      let newGridItem = document.createElement('div');
      newGridItem.className = 'grid-item';
      newGridItem.innerHTML = '<img src="https://cdn.pixabay.com/photo/2012/04/01/18/44/circle-23965_1280.png" alt="New Image">';
      gridContainer.appendChild(newGridItem);

    count++;
    counter.innerHTML = count;
    });

    removeButton.addEventListener('click', function() {
        let gridItems = document.querySelectorAll('.grid-item');
        if (gridItems.length > 0) {
          let lastGridItem = gridItems[gridItems.length - 1];
          lastGridItem.remove();
          count--;
          counter.innerHTML = count;
        }
      });

  
