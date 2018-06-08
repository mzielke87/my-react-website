import React from 'react';

import InfoCard from '../../Body/InfoCard/InfoCard';
import '../../../App.css';

const Projects = () => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Projects</h1>
        </header>
        <p className="App-sub-header">
            This one too!
        </p>
        <div className="App-body">
            {/* include links to all work on github with description for each */}
            <InfoCard title={'Project Iris'} subheader={'Gaze tracking software'} body={''} link={'https://github.com/mzielke87/Project-Iris'}/>
        </div>
    </div>
)

export default Projects;