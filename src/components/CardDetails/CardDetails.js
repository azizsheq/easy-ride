import React, { useEffect, useState } from 'react';
import './CardDetails.css'
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faMapPin, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import { female } from '../../ConditionalPhoto/female.png'
import { male } from '../../ConditionalPhoto/male.png'


const CardDetails = () => {
    const {id} = useParams();
    
    const [league, setLeague] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data.teams);
            setLeague(data.teams);
        })
    }, [id]);

    // console.log("Team : ",league[0]?.strTeam);

    return (
        <div>
            <div>
                <img src={league[0]?.strStadiumThumb} alt=""/>
                <img src={league[0]?.strTeamBadge} alt=""/>
                
            </div>
            <div>
                <div>
                    <img src=""/>
                </div>
                <div>
                    <p>{league[0]?.strTeam}</p>
                    <p><FontAwesomeIcon icon={faMapPin}/> &nbsp; Founded: {league[0]?.intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFlag}/> &nbsp; Country: {league[0]?.strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol}/> &nbsp; Sport Type: {league[0]?.strSport}</p>
                    <p><FontAwesomeIcon icon={faMars}/> &nbsp; Gender: {league[0]?.strGender}</p>
                </div>
            </div>
            <div>
                <p>{league[0]?.strStadiumDescription}</p>

                <p>{league[0]?.strDescriptionEN}</p>
            </div>
            <div className="details-footer">
                <a href={`http://${league[0]?.strFacebook}`} target="_blank"><FontAwesomeIcon icon={faFacebookSquare}/></a>
                <a href={`http://${league[0]?.strTwitter}`}><FontAwesomeIcon icon={faTwitterSquare}/></a>
                <a href={`http://${league[0]?.strInstagram}`}><FontAwesomeIcon icon={faInstagramSquare}/></a>
            </div>
        </div>
    );
};

export default CardDetails;