import React from 'react';
import './DataCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const DataCard = (props) => {
    // console.log(props);
    const {idLeague, strLeague, strLeagueAlternate, strSport} = props.leagues;
    // console.log(idLeague);
    return (
        <div className="column">
            <div className="card">
                <img src="../../Team Logo/image 23.png" alt={strLeagueAlternate} />
                <div className="container">
                    <h4>{strLeague}</h4>
                    <small>{strLeagueAlternate}</small>
                    <p>{idLeague}</p>
                    <p>{strSport}</p>
                    <button className="btn-explore">Explore &nbsp; <FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
            </div>
        </div>
    );
};

export default DataCard;