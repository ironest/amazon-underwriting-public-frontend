import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

class NewsCarousel extends Component {

  state = {
    // news: []
  }

  componentDidMount(){
    axios.get(`${process.env.REACT_APP_BASEURL}/news`)
    .then(response => {
        this.setState( {news: response.data} )
    })
    .catch(error => {
        console.log(error);
    });
  }

  render() {

    const {news} = this.state

    return(

      <div className="carousel" >

        {
          news &&
          <Carousel infiniteLoop autoPlay={true} swipeable={true} stopOnHover={true} emulateTouch showThumbs={false} >
            {
              news.map( (item, idx) => {
                return (
                  <div key={idx} style={{backgroundImage: `url(${item.image})`}} className="image-fix" >
                    <h2>{item.title}</h2>
                    <p>{item.paragraph}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" >{item.button}</a>
                  </div>
                )
              })
            }
            
          </Carousel>
        }
      </div>
    )
  }
}

export default NewsCarousel;