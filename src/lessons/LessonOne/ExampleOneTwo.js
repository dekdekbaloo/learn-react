import React from 'react'

import ReactBox from '../ReactBox';

class ExampleOneTwo extends React.Component {
  state = {
    newFruit: 'มะละกอ',
    fruits: [ 'แตงโม', 'ส้มโอ', 'มะพร้าวน้ำหอม' ],
    animals: {
      tiger: {
        count: 1
      },
      lion: {
        count: 2
      },
      bull: {
        count: 3
      }
    }
  }

  handleChange = (name) => (e) => {
    this.setState({ [ name ]: e.target.value })
  }

  addFruit = () => {
    this.setState(({ newFruit, fruits }) => ({
      fruits: fruits.concat(newFruit)
    }))
  }

  removeLastFruit = () => {
    this.setState(({ newFruit, fruits }) => ({
      fruits: fruits.slice(0, -1)
    }))
  }

  render () {
    const { newFruit, fruits, animals } = this.state

    return (
      <div className='lesson-one-example'>
        <div className='lesson-one-example__props'>
          <b>Props</b>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: 50 }}>
              <label htmlFor='newFruit'>Fruit: </label>
              <input id='newFruit' value={newFruit} onChange={this.handleChange('newFruit')} /><br />
              <button onClick={this.addFruit}>
                เพิ่ม fruit
            </button>
              &nbsp;
            <button onClick={this.removeLastFruit}>
                ลบ fruit สุดท้าย
            </button>
            </div>
            <code>
              <pre>
                {`{\n\tfruits:`} {JSON.stringify(fruits)} {'// array'}
                {`,\n\tanimals:`} {
                  JSON.stringify(animals, null, 4)
                    .split('\n')
                    .map((line, i) => `${i === 0 ? '' : '\t'}${line}${i === 0 ? ' // object' : ''}\n`)
                }
                {`}`}
              </pre>
            </code>
          </div>
        </div>
        <div className='lesson-one-example__arrow'>↓</div>
        <ReactBox fruits={fruits} animals={animals}>
          {'<SingASong fruits={fruits} animals={animals} />'}
        </ReactBox>
        <div className='lesson-one-example__arrow'>↓</div>
        <div className='lesson-one-example__render'>
          <b>Virtual DOM</b><br />
          <div className='lesson-one-example__render-content'>
            {fruits.map(fruit => (
              <div key={fruit}>
                โอ้นั้นมันบัก <b>{fruit}</b>!
              </div>
            ))}
            <br />
            {Object.keys(animals).map((animal) => {
              const { count } = animals[animal]
              return (
                <div key={animal}>
                  ฉันมี {animal} {count} ตัว
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default ExampleOneTwo
