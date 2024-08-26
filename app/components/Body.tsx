'use client';
import React, { useState } from 'react';
import StockPositionsList from './StockPositionsList';
import StockPositionsListShow from './StockPositionsListShow';

const Body = () => {
    const [showAccordion, setShowAccordion] = useState(true);
    let ec = document.getElementById('expandcollapse');

    if (ec) {
        if (!showAccordion) {
            ec.textContent = 'Collapse All';
        } else {
            ec.textContent = 'Expand All';
        }
    }

    return (
        <div>
            <div id="expandcollapse" className='hover:cursor-pointer font-light' onClick={() => { setShowAccordion(!showAccordion); }}>
                Expand All
            </div>
            <div>
                {showAccordion ? <StockPositionsList /> : <StockPositionsListShow /> }
            </div>
        </div>
    )
}

export default Body