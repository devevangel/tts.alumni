import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getUsers } from "../api";
import { MDBContainer } from "mdbreact";

const Home = () => {
  const [userByArrival, setUsersByArrival] = useState([]);

  const [error, setError] = useState(false);

  const loadUsersByArrival = () => {
    getUsers("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setUsersByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadUsersByArrival();
  }, []);

  return (
    <Layout>
      <MDBContainer fluid>
        <h1 className='text-center'>SET 2012</h1>
        <div className='text-center mb-4'>
          <div className='row wow fadeIn'>
            {userByArrival.map((user, i) => (
              <Card key={i} user={user} />
            ))}
          </div>
        </div>
      </MDBContainer>
    </Layout>
  );
};

export default Home;
