import React from 'react';
import Pulse from 'react-reveal/Pulse';
import InfoCard from '../../Body/InfoCard/InfoCard';
import '../../../App.css';

const Work = () => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Work</h1>
        </header>
        <p className="App-sub-header">
            You guessed it, under construction here too!
        </p>
        <div className="App-body">
            <Pulse>
                <InfoCard title={'Software Engineer'} subheader={'Buxton Co'} body={''}/>
                <InfoCard title={'Office Operations Manager'} subheader={'Integrity Trucking and Construction Services, Inc.'} body={''}/>
                <InfoCard title={'Computer Technician'} subheader={'DCT Systems Group'} body={''}/>
            </Pulse>
        </div>
    </div>
)

export default Work;