import React from 'react'
import { Route, Link } from 'react-router-dom';

import './LessonsPage.css'
import LessonOne from '../lessons/LessonOne';

const LessonsPage = ({ match }) => (
  <div className='lessons-page'>
    <Route path={`${match.url}/one/`}>
      <div className='lessons-page__nav container'>
        <Link to='/'>
          HOME
        </Link>
      </div>
      <LessonOne />
    </Route>
  </div>
)

export default LessonsPage
