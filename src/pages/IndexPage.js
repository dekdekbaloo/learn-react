import React from 'react'
import { Link } from 'react-router-dom'

import './IndexPage.css'
import logo from '../images/logo.svg'

const IndexPage = () => (
  <div className='index-page'>
    <div>
      <div>
        <img className='index-page__logo' src={logo} alt='react-logo' />
      </div>
      <h1>มาเรียนรู้ React กันเถอะ</h1>
      <Link to='/lessons/one/'>
        <button>
          เริ่มเลย!
        </button>
      </Link>
    </div>
  </div>
)

export default IndexPage
