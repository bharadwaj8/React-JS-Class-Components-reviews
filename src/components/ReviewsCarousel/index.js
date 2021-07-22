import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {count: 0}

  nextReview = () => {
    this.setState(prevState => {
      if (prevState.count === 3) {
        return {count: prevState.count}
      }
      return {count: prevState.count + 1}
    })
  }

  prevReview = () => {
    this.setState(prevState => {
      if (prevState.count === 0) {
        return {count: prevState.count}
      }
      return {count: prevState.count - 1}
    })
  }

  render() {
    const {reviewsData} = this.props
    console.log(reviewsData.length)
    const {count} = this.state
    console.log(count)
    return (
      <div className="bg">
        <h1 className="heading">Reviews</h1>
        <div className="carousel">
          <button
            id="leftArrow"
            className="button"
            type="button"
            onClick={this.prevReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="leftArrow"
            />
          </button>
          <div className="card">
            <img
              src={reviewsData[count].imgUrl}
              className="image"
              alt="{reviewsData[count].username}-avatar"
            />
            <p className="user-name">{reviewsData[count].username}</p>
            <p className="company-name">{reviewsData[count].companyName}</p>
            <p className="desc">{reviewsData[count].description}</p>
          </div>
          <button
            id="rightArrow"
            className="button"
            type="button"
            onClick={this.nextReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="rightArrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
