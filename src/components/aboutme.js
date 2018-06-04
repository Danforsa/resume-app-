import React, {Component } from 'react';
import {Grid, Cell ,List , ListItem, ListItemContent } from 'react-mdl';


class AboutMe extends Component {
  render() {
  return(
    <div className="contact-body">
    <Grid className="contact-grid">
    <Cell col={6}>
    <h2>Daniel Fortes</h2>
    <img
    src="https://image.ibb.co/cU8Z7d/testimg.png"
    alt="avatar"
    style={{height: '250px'}}
    />
    <p style={{ width:'75%' , margin:'auto',paddingTop:'1em'}}>Full Stack Web Developer capable of building websites and web interfaces from the ground up, with 5+ years of experience in technology training and general management. Fast learner and quick to pick up new technologies. Comfortable working in teams as well as individual work settings.
    </p>
    </Cell>
    
      </Grid>
    </div>
  )
 }
}
export default AboutMe;
