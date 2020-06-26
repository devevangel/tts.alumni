import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { createUser, getNames } from "../api";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBInput,
  MDBTooltip,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

const AddProduct = () => {
  const [fileValue, setFileValue] = useState("Add profile image");

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const [values, setValues] = useState({
    name: "",
    about: "",
    phone: "",
    address: "",
    names: [],
    photo: "",
    occupation: "",
    loading: false,
    error: "",
    createdUser: "",
    redirectToProfile: false,
    formData: "",
  });

  const {
    name,
    about,
    phone,
    address,
    names,
    occupation,
    loading,
    error,
    createdUser,
    redirectToProfile,
    formData,
  } = values;

  //load names and ser form data
  const init = () => {
    getNames().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, names: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createUser(formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          about: "",
          phone: "",
          photo: "",
          occupation: "",
          loading: false,
          createdUser: data.name,
        });
      }
    });
  };

  const newPostForm = () => (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md='6'>
          <MDBCard className='btn-outline-green mt-5 mb-5'>
            <MDBCardBody>
              <form onSubmit={clickSubmit}>
                <p className='h4 text-center py-4'>Join</p>
                <div className='input-group'>
                  <div className='custom-file'>
                    <input
                      type='file'
                      className='custom-file-input'
                      id='inputGroupFile01'
                      aria-describedby='inputGroupFileAddon01'
                      required
                      onInput={() => {
                        let fullPath = document.getElementById(
                          "inputGroupFile01",
                        ).value;
                        if (fullPath) {
                          var startIndex =
                            fullPath.indexOf("\\") >= 0
                              ? fullPath.lastIndexOf("\\")
                              : fullPath.lastIndexOf("/");
                          var filename = fullPath.substring(startIndex);
                          if (
                            filename.indexOf("\\") === 0 ||
                            filename.indexOf("/") === 0
                          ) {
                            filename = filename.substring(1);
                          }
                          setFileValue(filename);
                        }
                      }}
                      onChange={handleChange("photo")}
                    />
                    <label
                      className='custom-file-label'
                      htmlFor='inputGroupFile01'
                    >
                      {fileValue}
                    </label>
                  </div>
                </div>

                <br />

                <MDBInput
                  onChange={handleChange("name")}
                  type='text'
                  label='Fullname'
                  icon='user'
                  hint='e,g John Doe'
                  required
                />

                <br />

                <MDBInput
                  onChange={handleChange("about")}
                  type='textarea'
                  rows='2'
                  label='About'
                  icon='pencil-alt'
                  hint='e.g Hi, my name is John Doe'
                  maxLength='25'
                  required
                />

                <br />

                <MDBInput
                  onChange={handleChange("phone")}
                  type='number'
                  label='Telephone'
                  icon='phone-alt'
                  hint='e.g +23407058265247'
                  maxLength='11'
                  minLenght='11'
                  required
                />

                <br />

                <MDBInput
                  onChange={handleChange("address")}
                  type='text'
                  label='Address'
                  icon='map'
                  hint='e.g 118,Funsho Williams Avenue Surulere Lagos Nigeria'
                  required
                />

                <br />

                <MDBInput
                  onChange={handleChange("occupation")}
                  type='text'
                  label='Occupation'
                  icon='briefcase'
                  hint='e.g Student & Professional footballer'
                  required
                />

                <br />

                <div className='text-center py-4 mt-3'>
                  <MDBBtn className='btn btn-outline-green' type='submit'>
                    Add
                    <MDBIcon icon='plus' className='ml-2' />
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );

  const showError = () => (
    <div
      className='alert alert-danger'
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className='alert alert-info'
      style={{ display: createdUser ? "" : "none" }}
    >
      <h4>Your profile has been created go to alumni tab</h4>
    </div>
  );

  const showLoading = () => loading && <MDBIcon icon='spinner' spin />;

  return (
    <Layout
      title='Create A New Product'
      description={`G'day 'NAME', ready to create a new product`}
      className='container-fluid'
    >
      <MDBContainer>
        {showError()}
        {showSuccess()}
        {showLoading()}
        {newPostForm()}
      </MDBContainer>
    </Layout>
  );
};

export default AddProduct;
