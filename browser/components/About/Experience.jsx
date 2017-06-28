import React from 'react'

export default (props) =>
  <div className='experience'>
    <h2><strong>EXPERIENCE</strong></h2>
    <div className='experience-list'>
      <div className='col-sm-6 col-md-3 col-lg-3 experience-img'>
        <img src='https://media.swansonvitamins.com/images/items/master/SN954.png' />
      </div>
      <div className='col-sm-6 col-md-8 col-lg-8 exprience-summ'>
        <h4>RESEARCH ASSOCIATE :: THRESHOLD</h4>
        <ul>
          <li>Formulated new vitamin supplement products and updated the science of current products</li>
          <li>Reviewed an average of 30 clinical trials per week</li>
          <li>Took 25 products from idea to launch ready phase</li>
          <li>Formulated "Screen Time Stamina" from idea to launch, which won an award at Expo West this year</li>
        </ul>
      </div>
      <div className='clearfix' />


      <div className='col-sm-6 col-md-8 col-lg-8 exprience-summ'>
        <h4 className='sparkle'>CO-FOUNDER :: THE SPARKLE EFFECT, INC.</h4>
        <ul>
          <li>Started a non-profit to help high school students form special needs cheerleading teams</li>
          <li>Won a $25,000 Pepsi grant in 2010 for the non-profit</li>
          <li>Partnered with Varsity Spirits to give new teams up to $500 for uniforms</li>
          <li>Prepared workshops to help teams learn how to start their own special needs cheerleading teams</li>
        </ul>
      </div>
      <div className='col-sm-6 col-md-3 col-lg-3 experience-img'>
        <img className='oprah-img' src='oprah.jpg' />
      </div>
    </div>
  </div>
