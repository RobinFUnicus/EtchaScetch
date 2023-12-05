const grid = document.getElementsByClassName('grid')[0];
changeGridSize(16);



function changeGridSize(newSize){
    //remove old grid if any
    let oldgrid = grid.children;
    if(oldgrid.length > 0){
        oldgrid = Array.from(oldgrid);
        oldgrid.forEach(oldSquare => {
            if(oldSquare.classList.contains('row'))
            oldSquare.remove();
        });
    }

    //create the new grid
    for(let i=0; i<newSize; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        for(let y = 0; y<newSize; y++){
            let square = document.createElement('div');
            square.classList.add('square');
            square.onmouseover = function(){
                square.style.backgroundColor = 'blue';
            };
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

function changeGridSizeButton(){
    let newSize = window.prompt("What size would you like to change the grid to?");
    if(newSize <= 100){
        changeGridSize(newSize);
    }else{
        alert('Please choose a number between 1 and 100');
        changeGridSizeButton();
    }
    
}