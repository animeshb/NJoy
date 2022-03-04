import React from 'react'
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
        <div className='header'>Attractions</div>
        <br></br>
        <div className="gallery">
          <a target="_blank" href="img_5terre.jpg">
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Place 1</div>
            <div className="desc">Add a description of the image here</div>
          </a>
        </div>

        <div className="gallery">
          <a target="_blank" href="img_5terre.jpg">
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Place 2</div>
            <div className="desc">Add a description of the image here</div>
          </a>
        </div>
        
        <div className="gallery">
          <a target="_blank" href="img_5terre.jpg">
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Place 3</div>
            <div className="desc">Add a description of the image here</div>
          </a>
        </div>

        <div className="gallery">
          <a target="_blank" href="img_5terre.jpg">
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Place 4</div>
            <div className="desc">Add a description of the image here</div>
          </a>
        </div>

        <div className="gallery">
          <a target="_blank" href="img_5terre.jpg">
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Place 5</div>
            <div className="desc">Add a description of the image here</div>
          </a>
        </div>
        
        <div className="gallery">
          <a target="_blank" href="img_5terre.jpg">
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Place 6</div>
            <div className="desc">Add a description of the image here</div>
          </a>
        </div>

        <div className="gallery">
          <a target="_blank" href="img_5terre.jpg">
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Place 7</div>
            <div className="desc">Add a description of the image here</div>
          </a>
        </div>

        <div className="gallery">
          <a target="_blank" href="img_5terre.jpg">
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Place 8</div>
            <div className="desc">Add a description of the image here</div>
          </a>
        </div>

        <div className="gallery">
          <a target="_blank" href="img_5terre.jpg">
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Place 9</div>
            <div className="desc">Add a description of the image here</div>
          </a>
        </div>

        <div className="gallery">
          <a target="_blank" href="img_5terre.jpg">
            <img src={require('../images/home/forest.jpg')} />
            <div className='title'>Place 10</div>
            <div className="desc">Add a description of the image here</div>
          </a>
        </div>

    </>
  )
}

export default Gallery