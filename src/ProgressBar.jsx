import React from 'react';

export default function ProgressBar({ stagesCount, currentStage }) {
    // Use currentStage to set appropriate classes using ternary operator
    const stagesList = [...Array(stagesCount)].map((_, idx) => {
        
        let connectorLinkClass = 'connector-progress';
        let stageClass = 'stage';
        
        if (idx < currentStage) {
            connectorLinkClass += ' full';
            stageClass += ' complete';
        }
        else if (idx === currentStage) {
            connectorLinkClass += ' half'
            stageClass += ' complete';
        }
        else {
            connectorLinkClass += ' none';
            stageClass += ' incomplete';
        }

        let connector = (
            <div className='connector'>
                <div className={connectorLinkClass}></div>
            </div>
        );

        if (idx === stagesCount - 1) {
            connector = null;
        }

        return (
            <React.Fragment key={idx} >
                <div className={stageClass}>
                    {idx + 1}
                </div>
                {connector}
            </React.Fragment >
        );
    });
    
    return (
        <div id="progress-bar">
            {stagesList}
        </div>
    );
}