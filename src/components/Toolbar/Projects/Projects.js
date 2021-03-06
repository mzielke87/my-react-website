import React from 'react';

import InfoCard from '../../Body/InfoCard/InfoCard';
import '../../../App.css';

const Projects = () => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Projects</h1>
        </header>
        <p className="App-sub-header"></p>
        <div className="App-body">
        <InfoCard title={'This Website'} 
                      subheader={'My personal website (React)'}
                      body={'My static website built using React, React Router and AWS. Using AWS CodeCommit, CodeBuild and CodePipline to implement CI/CD.'}
                      link={'https://github.com/mzielke87/my-react-website'}/>
            <InfoCard title={'Project Iris'} 
                      subheader={'Gaze tracking software (C++)'} 
                      body={'My senior design project at UTA. A team of 4 developed this to work in conjunction with an Intel RealSense SR300 camera to track your gaze position on a computer screen as well as use that gaze position to help you select letters with a cursor to "type" hands free.'} 
                      link={'https://github.com/mzielke87/Project-Iris'}/>
            <InfoCard title={'Student Course Scheduling'} 
                      subheader={'Course scheduling Android app (Java)'} 
                      body={'This app was designed as a way to help students select courses with non overlapping times.'} 
                      link={'https://github.com/mzielke87/My-Projects/tree/master/Course%20Scheduling'}/>
            <InfoCard title={'MavBay'} 
                      subheader={'Mock Ebay like app (Java)'}
                      body={'Simple static app meant as way to introduce object oriented design principles.'}
                      link={'https://github.com/mzielke87/My-Projects/tree/master/OOP%20Project'}/>
        </div>
    </div>
);

export default Projects;