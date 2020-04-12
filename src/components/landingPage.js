import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}> 
                        <div className="avatar-img">
                            <img src="https://ca.slack-edge.com/T02SA6VTR-UMD8M1KHC-90909baa1183-512" alt="avatar"/> 
                        </div>
                        <div className="banner-text">
                            <h1>iOS Developer</h1>
                            <hr/>
                            <p> Swift | Xcode | Cocoapods | Fastlane | Firebase | Node | Git | Jira | Testing | Automation | Agile working</p>
                            <div className="social-links"> 

                                {/* LinkedIn */}
                                <a href="https://uk.linkedin.com/in/leke-abolade-26015872" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/aabolade" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                     </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage