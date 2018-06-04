import React, {Component } from 'react';
import {Grid, Cell ,List , ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
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
    <Cell col={6}>
    <h2>Contact Me</h2>
    <hr/>
<div className="contact-list">
  <List>
  <ListItem>
  <ListItemContent style={{fontSize: '30px',fontFamily:'Anton'}}>
  <i className="fa fa-phone-square" aria-hidden="true" />
  (+27)84-0874006
  </ListItemContent>
  </ListItem>

  <ListItem>
  <ListItemContent style={{fontSize: '30px',fontFamily:'Anton'}}>
  <i className="fa fa-fax" aria-hidden="true" />
  (+27)84-0874006
  </ListItemContent>
  </ListItem>

  <ListItem>
  <ListItemContent style={{fontSize: '30px',fontFamily:'Anton'}}>
  <i className="fa fa-envelope" aria-hidden="true" />
  daniel.m.fortes@me.com
  </ListItemContent>
  </ListItem>

  <ListItem>
  <ListItemContent style={{fontSize: '30px',fontFamily:'Anton'}}>
  <i className="fa fa-skype" aria-hidden="true" />
  daniel.m.fortes@me.com
  </ListItemContent>
  </ListItem>
</List>

</div>
</Cell>
      </Grid>
    </div>
  )
 }
}

export default Contact;
