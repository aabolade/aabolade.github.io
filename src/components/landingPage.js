import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}> 
                        <img src={process.env.PUBLIC_URL + '/TAB261018-163.jpg'} alt="dsomethnig"/> 
                        {/* <img src="https://ca.slack-edge.com/T02SA6VTR-UMD8M1KHC-90909baa1183-512" alt="profile"
                        className="profile-image"
                        /> */}
                     </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage