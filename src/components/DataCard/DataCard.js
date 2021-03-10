import React from 'react';
import './DataCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import leagueImage from '../../Team Logo/image 15.png'

const DataCard = (props) => {
    // console.log(props);
    const {idLeague, strLeague, strLeagueAlternate, strSport} = props.leagues;
    // console.log(idLeague);

    const history = useHistory();
    
    const handleClick = (id) => {
        // console.log("Clicked ID : ", id);
        const url = `/leagueDetails/${id}`;
        history.push(url);
    };

    return (
        <div className="column">
            <div className="card">
                <img src={leagueImage} alt={strLeagueAlternate} />
                <div className="container">
                    <h4>{strLeague}</h4>
                    <small>{strLeagueAlternate}</small>
                    <p>{idLeague}</p>
                    <p>{strSport}</p>
                    <button 
                        className="btn-explore"
                        onClick={() => handleClick(idLeague)}
                    >Explore &nbsp; <FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
            </div>
        </div>
    );
};

export default DataCard;