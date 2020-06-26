import React from "react";
import { API } from "../config";
import { MDBCardImage } from "mdbreact";
import { Link } from "react-router-dom";

const ShowImage = ({ item, url }) => (
  <div>
    <MDBCardImage
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      className='img-fluid rounded-top mb-0'
      style={{ width: "100%", height: "auto" }}
      waves
    />
    <Link to='#'>
      <div className='mask rgba-white-slight'></div>
    </Link>
  </div>
);

export default ShowImage;

// ("https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg");
