import React from 'react';

function Game() {

    let grid = [];

    for (let i = 0; i < 16; i++) {
        let column = [];
        for (let j = 0; j < 10; j++) {
            column.push(0);
        }
        grid.push(column);
    }

    console.log(grid);
    return (

        <div className='game'>

            <div className='grid'>
                {grid.map((row, outerIndex) => row.map((val, innerIndex) =>
                 <div className='cell'
                  key={outerIndex + ',' + innerIndex} 
                  > </div>))}
            </div>

        </div>
    );
}

export default Game;
