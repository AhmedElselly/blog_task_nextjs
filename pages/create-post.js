import React, { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { create } from "@/actions/postsApi";
import Head from "next/head";
import { useRouter } from "next/router";

const Editor = dynamic(() => import("@/components/Editor"), {
  ssr: false,
  loading: () => <p style={{ color: "#fff" }}>Loading...</p>,
});

const Create = () => {
  const [values, setValues] = useState({
    title: "",
    body: "",
    image: "",
  });

  const router = useRouter();

  const { title, body, image } = values;

  const handleChange = (e) => {
    const value =
      e.target.name === "image" ? e.target.files[0] : e.target.value;
    setValues({ ...values, [e.target.name]: value });
  };

  const handleTextChange = (data) => {
    setValues({ ...values, body: data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { token } = isAuthenticated();
    // const userId = isAuthenticated().user._id;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("image", image);
    create(formData).then((res) => {
      router.push(`/posts/${post._id}`);
    });
  };
  return (
    <Fragment>
      <Head>
        <title>Create post</title>
      </Head>
      
        <div
          style={{
            minHeight: 500,
            padding: 50,
            paddingTop: 150
          }}
        >
        <h4 style={{color:'#fff', marginBottom: 30}}>Create post</h4>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Title"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title"
              />
            </FloatingLabel>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: "#fff" }}>Upload image</Form.Label>
              <Form.Control
                className="form-control-lg"
                type="file"
                name="image"
                onChange={handleChange}
              />
            </Form.Group>        
            <Editor setBody={handleTextChange} body={body} />
            <Button type="submit" style={{ marginTop: 10 }}>
              Submit
            </Button>
          </Form>
        </div>

    </Fragment>
  );
};


export default Create;
