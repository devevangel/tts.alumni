import React from "react";
import { MDBContainer } from "mdbreact";
import Menu from "./Menu";

const Layout = ({ className, children }) => (
  <div>
    <Menu />
    <MDBContainer className={className}>{children}</MDBContainer>
  </div>
);

export default Layout;
