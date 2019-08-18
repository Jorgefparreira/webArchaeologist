import React, { Component } from 'react';

class VoltAd extends Component {
  render() {      
    return (
      <section id="voltad" class="scroll-margin">
        <div class="header">
          <h1>VOLT&trade; Ad</h1>
        </div>
        <div class="projects-return">
          <a href="/#work"><h3><span class="{{swing}}"><i class="fas fa-angle-double-left"></i></span> Work</h3></a>
        </div> 
        <iframe title="Vold ad" src="https://volt-bikes-ad.netlify.com/" id="voltad-iframe"></iframe>
      </section>        
    );
  }
}

export default VoltAd;