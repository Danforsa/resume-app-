import React, { Component } from 'react';
import { Grid, Cell,  Button } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import { link } from 'react-router';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://image.ibb.co/cU8Z7d/testimg.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Daniel Fortes</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>​ I have worked with:
            	Front-End: HTML, CSS, JavaScript, JQuery
              Back-End: Node.js, React, Python, PHP
​	            Frameworks: Express, Django
​	            Databases: MongoDb, SQL
Cloud Deployment, Redux, Babel, Webpack, Analytics</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Cape Town</p>
            <h5>Phone</h5>
            <p>084 087-4006</p>
            <h5>Email</h5>
            <p>daniel.m.fortes@me.com</p>
            <h6> Old Website build with Django framework:
            "https://quiet-plains-50970.herokuapp.com/"</h6>








            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2004}
              endYear={2007}
              schoolName="A.F.D.A"
              schoolDescription= " BA  Motion Picture Arts -  The South African School of Motion Picture Medium and Live Performance."
               />

               <Education
                 startYear={2017}
                 endYear={2018}
                 schoolName="HyperionDev"
                 schoolDescription="​Full Stack Web Developer Bootcamp - Designing & building dynamic data driven web applications and web sites."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2012}
              endYear={2017}
              jobName="Last Job"
              jobDescription="Apple iStore, Cape Town — Head Corporate Trainer."
              />

              <Experience
                startYear={2017}
                endYear={2018}
                jobName="Current Job"
                jobDescription=" Owned and run IT  support company The Whole Apple"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={80}
                    />
                    <Skills
                      skill="React"
                      progress={100}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
