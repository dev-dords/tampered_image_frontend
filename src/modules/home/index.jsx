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
      <hr className='first-line' />
      <hr className='second-line' />
      <div className='footer'>
        <span className='warning' style={{ marginTop: '5px' }}>‼️This early version is still evolving! We’re expanding test cases and continuously enhancing the model for better accuracy and reliability. </span>
        <br />
        <span className='warning'>📩 See any bugs and mispredictions? Don’t worry—we value your feedback! Please let us know by sharing your thoughts: jdorado.MSDSPT2025B@aim.edu</span>
      </div>
    </div>)
}

export default HomePage