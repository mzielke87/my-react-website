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
            <InfoCard title={'Project Iris'} 
                        subheader={'Gaze tracking software'} 
                        body={'This was my senior design project while attending UTA. Me and 3 other students developed this software to work in conjunction with an Intel RealSense SR300 camera to effectively track your gaze position on a computer screen as well as use that gaze position to help you select letters with a cursor on the screen to "type" hands free.'} 
                        link={'https://github.com/mzielke87/Project-Iris'}/>
        </div>
    </div>
)

export default Projects;