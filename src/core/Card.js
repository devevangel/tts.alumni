import React from "react";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader,
  MDBPO,
} from "mdbreact";
import ShowImage from "./ShowImage";

const Card = ({ user }) => {
  return (
    <div className='col-lg-3 col-md-6 mb-4'>
      <div className='card'>
        <ShowImage item={user} url='user' />
        <div className='card-body text-center'>
          <Link to='/' className='dark-grey-text'>
            <h3>{user.name}</h3>
          </Link>
          <h5>
            <strong>
              <Link to='/' className='dark-grey-text'>
                {user.occupation}
              </Link>
            </strong>
          </h5>

          <MDBPopover placement='top' popover clickable id='popper1'>
            <MDBBtn>More</MDBBtn>
            <div>
              <MDBPopoverHeader className='text-center'>
                More...
              </MDBPopoverHeader>
              <MDBPopoverBody>Phone: {user.phone}</MDBPopoverBody>
              <MDBPopoverBody>address: {user.address}</MDBPopoverBody>
              <MDBPopoverBody>Occupation: {user.occupation}</MDBPopoverBody>
              <MDBPopoverBody>About: {user.about}</MDBPopoverBody>
            </div>
          </MDBPopover>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
