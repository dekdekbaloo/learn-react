import React from 'react'

import './ReactBox.css'
import logo from '../images/logo.svg'

class ReactBox extends React.Component {
  logoRef = React.createRef()

  componentWillReceiveProps() {
    const logo = this.logoRef.current
    if (logo) {
      logo.className = logo.className.replace(' spin', '')
      setTimeout(() => {
        logo.className = logo.className + ' spin'
      })
    }
  }

  render () {
    return (
      <div className='react-box'>
        <div>
          {this.props.children}
        </div>
        <img
          ref={this.logoRef}
          className='react-box__logo'
          src={logo}
          alt='react-logo'
        />
      </div>
    )
  }
}

export default ReactBox
