import React, {Component} from 'react';
import Pulse from 'react-reveal/Pulse';
import VisibilitySensor from 'react-visibility-sensor';
import './InfoCard.css';

class InfoCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
    }

    onChange = (isVisible) => {
        this.setState({
            visible: isVisible
        });
    }

    render() {
        return (
            <div>
                <VisibilitySensor onChange={this.onChange}/>
                <Pulse when={this.state.visible}>
                    <div className="card">
                        <div className="card-title">
                            {this.props.title}
                        </div>
                        <div className="card-sub-header">
                            {this.props.subheader}
                        </div>
                        <div className="card-body">
                            {this.props.body}
                        </div>
                        {this.props.link != null && 
                        <a className="card-link" href={this.props.link} target="_blank" rel="noopener noreferrer">See this projects repository</a>}
                    </div>
                </Pulse>
            </div>
        )
    }
}

export default InfoCard;