import React from "react";
import { Carousel } from "react-responsive-carousel";

const Carousel1 = () => (
  <div>
  <Carousel autoPlay={true} stopOnHover={false} infiniteLoop={true} showThumbs={false}>
    <div>
      <img alt="1" src={require("../images/home/highway5.jpg")} />
      <p className="legend">Highway 1</p>
    </div>
    <div>
      <img alt="2" src={require("../images/home/highway5.jpg")} />
      <p className="legend">Highway 2</p>
    </div>
    <div>
      <img alt="3" src={require("../images/home/highway5.jpg")} />
      <p className="legend">Highway 3</p>
    </div>
  </Carousel>
  </div>
);

export default Carousel1