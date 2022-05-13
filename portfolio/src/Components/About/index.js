import React from 'react';
import { AboutSection, AboutInfo, AboutTitle, InfoDir, InfoDesc, Span } from './style.js'

const About = () => {
    return (
      <AboutSection>
            <div className="container">
                <AboutInfo>
                    <AboutTitle><Span>This is</Span> Me</AboutTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid
                    </InfoDesc>
                </AboutInfo>
            </div>
        </AboutSection>
    )
}

export default About;