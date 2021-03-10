import React, { useEffect, useState } from 'react';
import DataCard from '../DataCard/DataCard';
import './Home.css'

const Home = () => {

    const [info, setInfo] =  useState([]);

    useEffect(() =>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const first10 = data.leagues.slice(0,12);
            console.log(first10);
            setInfo(first10)
        })
    },[])

    return (
        <div className="row">
            <h1>total data - {info.length}</h1>
            {/* {
                info.map(dt => <p>
                    {dt.idLeague}
                    {dt.strLeague}
                    {dt.strLeagueAlternate}
                    {dt.strSport}
                    </p>)
            } */}
            {
                info.map(dt => <DataCard leagues={dt} key={dt.idLeague}/>)
            }
        </div>
    );
};

export default Home;