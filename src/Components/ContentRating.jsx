import  { Component } from 'react'; 
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();

    this.state = {
      likes:0,
      dislikes:0,

      handleLike:()=>{
        this.setState((prevState) => ({
          likes: prevState.likes + 1
        }));

      },

      handleDislike:()=>{
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1
        }));

      }


  }
}
  render() {
    return (
     <>
      <div className="content-rating">
        <p>Is it better to work from home or in an office? <br/>Working from home offers flexibility and saves commuting time, while working in an office provides better collaboration and social interaction.</p>

        <div className="rating-buttons">
          <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>

        </div>
      </div>
     </>
    );
  }
}

export default ContentRating;
