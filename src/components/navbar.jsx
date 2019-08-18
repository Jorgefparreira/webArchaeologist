import React, { Component } from 'react';


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      height: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll); 
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  } 

  handleScroll = () => {
    if(document.documentElement.scrollTop === 0){
      this.setState({ height: 0 });
    } else {
      const height = this.divElement.clientHeight;
      this.setState({ height: height });
    }    
  }  

  render() {

    return (
      <nav className="navbar navbar-expand-lg nav" ref={ (divElement) => this.divElement = divElement} style={{transform: `translateY(-${this.state.height}px)`}}>
        <div className="navbar-brand"><img className="brand-img" alt="Web Arch Logo" src={require('../assets/brand.png')}></img> Web-Arch</div>
      </nav>
    );
  }
}
  
  export default Navbar;

