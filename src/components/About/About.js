import React, {useState, useEffect} from 'react';

import './About.scss';

const axios = require('axios');

let admHost = process.env.REACT_APP_ADMIN_HOST;

function About() {

    const [data, setData] = useState({ page: [] });

    useEffect(()=>{
        const url = admHost + '/wp/v2/pages/11';

        async function fetchData() {
            const result = await axios(url);
       
            setData(result.data)
        }

        fetchData();
       
    },[]);

    console.log(data.content);
    let content = data.content;

    return (
        <div className="about-wrapper">
<h3>{content.protected}</h3>
    <div></div>
            <button>increment</button>
        </div>
    )
}

export default About;