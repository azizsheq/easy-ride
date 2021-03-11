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
            // console.log(first10);
            setInfo(first10)
        })
    },[])

    return (
        <div className="home-main-div">
            <div className="home-image-div">
                <h1>leaguepedia</h1>
            </div>
            <div className="home-card-div">
                {/* <h1>total data - {info.length}</h1> */}
                {
                    info.map(dt => <DataCard leagues={dt} key={dt.idLeague}/>)
                }
            </div>
        </div>
    );
};

export default Home;