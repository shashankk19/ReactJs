import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {value: 0}

  beforeOne = () => {
    const {value} = this.state
    if (value > 0) {
      this.setState(prevState => ({
        value: prevState.value - 1,
      }))
    }
  }

  AfterOne = () => {
    const {value} = this.state
    const {reviewsList} = this.props
    if (value < reviewsList.length - 1) {
      this.setState(prevState => ({
        value: prevState.value + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {value} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[value]
    return (
      <div className="container">
        <h1>Reviews</h1>
        <div className="card">
          <button
            className="button"
            onClick={this.beforeOne}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="icon"
              alt="left arrow"
            />
          </button>
          <div className="card2">
            <img src={imgUrl} className="image" alt={username} />
            <p className="head">{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button
            className="button"
            onClick={this.AfterOne}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="icon"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
