import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
// import Home from '../../components/Toolbar/Home/Home';
// import Work from '../../components/Toolbar/Work/Work';
import Projects from '../../components/Toolbar/Projects/Projects';
// import Blog from '../../components/Toolbar/Blog/Blog';
import Contact from '../../components/Toolbar/Contact/Contact';
import './MyWebsite.css';

class MyWebsite extends Component {    
    render () {        
        return (
            <Switch>
                {/* <Route path="/Home" component={Home}/> */}
                {/* <Route path="/Work" component={Work}/> */}
                <Route path="/" exact component={Projects}/>
                <Route path="/Projects" component={Projects}/>
                {/* <Route path="/Blog" component={Blog}/> */}
                <Route path="/Contact" component={Contact}/>
                <Route render={() => <div className='notFoundStyle'><h1>Why you do dis?</h1><img className='notFoundImageStyle' src={process.env.PUBLIC_URL + '/assets/angry.png'} alt="WHY!?"/></div>}/>
            </Switch>
        );
    }
}

export default MyWebsite;