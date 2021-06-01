// Write you Code here
import {Component} from 'react'

import './index.css'

class InterviewQuestion extends Component {
  state = {showAnswer: false}

  onShowHideAnswer = () => {
    this.setState(previousState => ({
      showAnswer: !previousState.showAnswer,
    }))
  }

  render() {
    const {questionsData, selectedCategory, selectedLevel} = this.props

    const {showAnswer} = this.state

    const filteredQuestions = questionsData.filter(
      eachQuestion =>
        eachQuestion.language.includes(selectedCategory) &&
        eachQuestion.difficultyLevel.includes(selectedLevel),
    )

    const buttonArrowUrl = showAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'
      : 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'

    const buttonText = showAnswer ? 'Hide' : 'Show'

    const buttonArrowAlt = showAnswer ? 'up arrow' : 'down arrow'

    return (
      <>
        {filteredQuestions.map(eachQuestionData => (
          <div
            className="interview-question-main-container"
            key={eachQuestionData.id}
          >
            <div className="interview-question-category-container">
              <span
                className={`interview-question-category interview-question-category-${eachQuestionData.language.toLowerCase()}`}
              >
                {eachQuestionData.language}
              </span>
              <span
                className={`interview-question-category interview-question-category-${eachQuestionData.difficultyLevel.toLowerCase()}`}
              >
                {eachQuestionData.difficultyLevel}
              </span>
            </div>
            <h1 className="interview-question-text">
              {eachQuestionData.questionText}
            </h1>
            <button
              className="interview-question-show-hide-button"
              type="button"
              onClick={this.onShowHideAnswer}
            >
              {buttonText}
              <img
                className="interview-question-button-arrow-image"
                src={buttonArrowUrl}
                alt={buttonArrowAlt}
              />
            </button>
            {showAnswer && (
              <p className="interview-answer-text">
                {eachQuestionData.answerText}
              </p>
            )}
          </div>
        ))}
      </>
    )
  }
}

export default InterviewQuestion
