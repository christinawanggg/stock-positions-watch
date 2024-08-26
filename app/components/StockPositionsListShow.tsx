'use client';
import React from 'react';
import positionTree from '../../ts_position_tree.json'; // replace with any json file you want to display the data of
import StockPositions from './StockPositions';

const StockPositionsList = () => {
    let positionTreeString = JSON.stringify(positionTree);
    const positionKeys = Object.keys(JSON.parse(positionTreeString));

    return (
        <div>
            <ul>
                {positionKeys.map((key) => {
                    return <li key={key} className='my-2'>
                            <p className="text-large py-2">{key}</p>
                            <StockPositions symbol={key}/>
                    </li>;
                })}
            </ul>
        </div>
        
    )
}

export default StockPositionsList;