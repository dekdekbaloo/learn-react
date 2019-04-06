import React from 'react'

import ReactBox from '../ReactBox';

class ExampleOneOne extends React.Component {
  state = {
    greeting: 'Hello',
    name: 'World'
  }

  logoRef = React.createRef()

  handleChange = (name) => (e) => {
    this.setState({ [ name ]: e.target.value })
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
      <div className='lesson-one-example'>
        <div className='lesson-one-example__props'>
          <b>Props</b>
          <code>
            <pre>
              {`{\n\tgreeting:`} <input value={this.state.greeting} onChange={this.handleChange('greeting')} />
              {`,\n\tname:`} <input value={this.state.name} onChange={this.handleChange('name')} />
              {`\n}`}
            </pre>
          </code>
        </div>
        <div className='lesson-one-example__arrow'>↓</div>
        <ReactBox {...this.state}>
          {`<Component greeting="${this.state.greeting}" name="${this.state.name}" />`}
        </ReactBox>
        <div className='lesson-one-example__arrow'>↓</div>
        <div className='lesson-one-example__render'>
          <b>Virtual DOM</b><br />
          <div className='lesson-one-example__render-content'>
            {this.state.greeting} {this.state.name}
          </div>
        </div>
      </div>
    )
  }
}

export default ExampleOneOne
