import React from 'react'
import './home.scss'
import HeaderComponent from '../header'
import Content from '../content'
import EvaluationComponent from '../evaluation'
import { useState } from 'react'

const HomePage = () => {
  const [evaluation, setEvaluation] = useState('ONGOING TRIAL')
  return (
    <div className='home-container'>
      <HeaderComponent />
      <hr className='first-line' />
      <hr className='second-line' />
      <div className='head'>
        <div className='title'> Trolling in the deep:</div>
        <div className='subtitle'>Detecting Manipulated Images with Deep Learning</div>
      </div>
      <hr className='first-line' />
      <hr className='second-line' />
      <span className='perpetrators'>By Julie Co, Joshua Dorado, Cedric Encarnacion, and Pauline Macaraeg</span>
      <Content onEvaluate={setEvaluation} />
      <hr className='first-line' />
      <hr className='second-line' />
      <EvaluationComponent
        verdict={evaluation}
      />
    </div>
  )
}

export default HomePage