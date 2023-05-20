import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function About() {
    return (
        <div>
        <section className="about-box section-box" id="about">
            <div className="section-header">
                <h3 className="aboutme h1-title text-center">About Me</h3>
            </div>
        </section>
        <section id="about">

            <div class="container-fluid">
        
              <div class="row fact-boxes">
                <div class="fact-box col-lg-4">
                  <i class="icon-img fas fa-code fa-6x"></i>
                  <h3 class="fact-title">Coding</h3>
                  <p>I started my coding journey in November 2020 and fell in love and decided to make a career out of it. I love how coding lets you creatively solve problems and never has a dull moment. Plus I made my own website 👩‍💻</p>
                </div>
        
                <div class="fact-box col-lg-4">
                  <i class="icon-img fas fa-cookie-bite fa-6x"></i>
                  <h3 class="fact-title">Cookie Crumbs</h3>
                  <p>  Did I mention that I bake? Please give me a reason to keep baking yummy delicious cookies and cakes</p>
                </div>
        
                <div class="fact-box col-lg-4">
                  {/* <i class="icon-img fas fa-university fa-6x"></i> */}
                  <i class="icon-img fas fa-heart-pulse fa-6x"></i>
                  <h3 class="fact-title">Love</h3>
                  <p> I am a coder and a licensed cottage food producer.</p>
                </div>
              </div>
        
        
            </div>
        </section>
        </div>
        
    )
}
export default About;