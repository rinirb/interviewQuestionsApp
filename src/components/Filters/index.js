// Write you Code here
import {Component} from 'react'

import './index.css'

class Filters extends Component {
  selectedCategory = event => {
    const {showSelectedCategory} = this.props
    showSelectedCategory(event.target.value)
  }

  selectedLevel = event => {
    const {showSelectedLevel} = this.props
    showSelectedLevel(event.target.value)
  }

  render() {
    const {filterOptionsCategory, filterOptionslevel} = this.props

    return (
      <div className="filters-main-container">
        <div className="filters-title-option-container">
          <h1 className="filters-title">LANGUAGE</h1>
          <select className="filters-select" onChange={this.selectedCategory}>
            {filterOptionsCategory.map(eachCategory => (
              <option className="filters-option" key={eachCategory.id}>
                {eachCategory.language}
              </option>
            ))}
          </select>
        </div>
        <div className="filters-title-option-container">
          <h1 className="filters-title">DIFFICULTY LEVEL</h1>
          <select className="filters-select" onChange={this.selectedLevel}>
            {filterOptionslevel.map(eachLevel => (
              <option className="filters-option" key={eachLevel.id}>
                {eachLevel.level}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}

export default Filters
