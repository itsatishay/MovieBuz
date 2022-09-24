import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./addValuesEle.css";

function AddValuesData() {
  const [movieName, setName] = useState("");
  const [movieDescription, setDescription] = useState("");
  const [movieImage, setImage] = useState("");
  const [moviePrice, setPrice] = useState("");
  const [movieTimings, setTimings] = useState("");
  const [movieCategory, setCategory] = useState("");

  function submitBtn() {
    const timings = movieTimings.split(",");
    const movieData = {
      img: movieImage,
      alt: movieName,
      name: movieName,
      desc: movieDescription,
      price: parseFloat(moviePrice),
      timings: timings,
      category: movieCategory,
    };
    const requestBody = {
      query: `
        mutation {
          createMovie(movieInput: {name: "${movieData.name}", image: "${movieData.img}", 
          description: "${movieData.desc}", price: ${movieData.price}, timings: ${JSON.stringify(movieData.timings)},
          category: "${movieData.category}"}){
            id,
            name
          }
        }
      `
    };
    console.log(requestBody)
    fetch("http://localhost:3002/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed");
        }
        return res.json();
      })
      .then((resData) => {
        clearForm();
        console.log(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function clearForm() {
    setName("");
    setDescription("");
    setImage("");
    setPrice("");
    setTimings("");
    setCategory("");
  }

  return (
    <div className="column">
      <div className="row">
        <TextField
          value={movieName}
          label="Enter movie name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="row">
        <TextField
          value={movieDescription}
          label="Enter movie description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div className="row">
        <TextField
          value={movieImage}
          label="Enter movie image url"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
      </div>
      <div className="row">
        <TextField
          value={moviePrice}
          label="Enter movie price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <div className="row">
        <TextField
          value={movieTimings}
          label="Enter movie timings"
          onChange={(e) => {
            setTimings(e.target.value);
          }}
        />
      </div>
      <div className="row">
        <TextField
          value={movieCategory}
          label="Enter movie category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
      </div>
      <div className="row">
        <div className="submit" onClick={submitBtn}>
          Submit
        </div>
      </div>
    </div>
  );
}

export default AddValuesData;
