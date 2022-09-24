import React, { useState } from "react";
import {
  ProductsContainer,
  ProductsHeading,
  ProductImg,
} from "./ProductsElements";
import "./product_menu.css";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./loadingSpinner";

function Products({ heading, data }) {
  let navigate = useNavigate();
  const [loadingIndex, setLoading] = useState(-1);

  function handleClick(movie, index) {
    if(movie.id === undefined){
      navigate("/movie", {
        state: {
          movie: movie,
        },
      });
    }else{
      setLoading(index);
    const requestBody = {
      query: `
        mutation{
          findMovie(movieFind: {id: "${movie.id}"}){
            id
            name
            description
            image
            timings
          }
        }
      `,
    };
    console.log(requestBody);
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
        navigate("/movie", {
          state: {
            movie: resData.data.findMovie,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <div className="wrapper">
        {data.map((movie, index) => {
          return (
            <div key={index}>
              {loadingIndex === index ? <LoadingSpinner key={index} /> : <div />}
              <ProductImg
                key={index}
                src={movie.image}
                alt={movie.image}
                disabled={loadingIndex > -1}
                onClick={() => handleClick(movie, index)}
              />
            </div>
          );
        })}
      </div>
    </ProductsContainer>
  );
}

export default Products;
