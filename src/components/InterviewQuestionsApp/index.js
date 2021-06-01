// Write you Code here
import {Component} from 'react'

import './index.css'

import Filters from '../Filters'

import InterviewQuestion from '../InterviewQuestion'

class InterviewQuestionsApp extends Component {
  state = {selectedCategory: '', selectedLevel: ''}

  showSelectedCategory = language => {
    if (language === 'ALL') {
      this.setState({selectedCategory: ''})
    } else {
      this.setState({selectedCategory: language})
    }
  }

  showSelectedLevel = level => {
    if (level === 'ALL') {
      this.setState({selectedLevel: ''})
    } else {
      this.setState({selectedLevel: level})
    }
  }

  render() {
    const {selectedCategory, selectedLevel} = this.state

    const {questionsData, levelsData, categoryData} = this.props
    return (
      <div className="interview-questions-app-main-container">
        <div className="interview-questions-app-header-container">
          <div className="interview-questions-app-header-title-container">
            <h1 className="interview-questions-app-header-title">
              30 Seconds of Interviews
            </h1>
          </div>
          <div className="interview-questions-app-header-image-container">
            <img
              className="interview-questions-app-header-image"
              src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
              alt="header"
            />
          </div>
        </div>
        <div className="interview-questions-app-bottom-container">
          <div className="interview-questions-app-filters-container">
            <Filters
              filterOptionsCategory={categoryData}
              filterOptionslevel={levelsData}
              showSelectedCategory={this.showSelectedCategory}
              showSelectedLevel={this.showSelectedLevel}
            />
          </div>
          <div className="interview-questions-app-questiondata-container">
            <InterviewQuestion
              questionsData={questionsData}
              selectedCategory={selectedCategory}
              selectedLevel={selectedLevel}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
