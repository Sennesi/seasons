import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text : 'Le temps de la plage !',
        iconName : 'sun'
    },
    winter: {
        text : 'Le temps du Ski !',
        iconName :'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const obj = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${obj.iconName} icon`}/>
            <h1>{obj.text}</h1>
            <i className={`icon-right massive ${obj.iconName} icon`}/>
        </div>
    );
};

export default SeasonDisplay;