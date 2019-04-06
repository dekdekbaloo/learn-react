import React from 'react'
import './styles.css'
import ExampleOneOne from './ExampleOneOne';
import ExampleOneTwo from './ExampleOneTwo';

class LessonOne extends React.Component {
  render () {
    return (
      <div className='lesson-one container'>
        <h1>บทที่ 1</h1>
        <h2>Component</h2>
        <h3>
          Component คืออะไร?
        </h3>
        <p>
          Component ก็คือ function ที่รับข้อมูลขาเข้า (props) แล้วแสดงผลออกมาทางหน้าจอ (virtual DOM)
        </p>
        <ExampleOneOne />
        <p>
          Props แต่ละอันสามารถเป็นข้อมูลประเภทใดก็ได้
        </p>
        <ExampleOneTwo />
      </div>
    )
  }
}

export default LessonOne
