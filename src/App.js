import React, {useState} from "react";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { topTrendingLocal, newArrivalsLocal } from "./components/Products/data";
import { GlobalStyle } from "./globalStyles";

/*
Open http://localhost:3000/add to add new movies to top trending and new arrivals list.
while adding timings. Use this format: time1,time2
example for timings input: 11:00 am,12:00 pm,1:00 pm,1:30 pm
to add a movie into top trending list mention top trending in category
to add a movie into new arrivals list mention new arrivals in category
*/

/*
In default i will pass JSON data from ./components/Products/data local file.
to fetch data from your database change topTrendingLocal to topTrending and 
newArrivalLocal to newArrival
*/

function App() {
  const [topTrending, setTopTrending] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  function getMovies() {
    const requestBody = {
      query: `
        query{
          movies{
            id
            image
            category
          }
        }
      `,
    };
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
        proccessData(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function proccessData(jsonData) {
    var top = [];
    var newA = [];
    for (let index = 0; index < jsonData.data.movies.length; index++) {
      if (jsonData.data.movies[index].category === "top trending") {
        top.push(jsonData.data.movies[index]);
      } else if (jsonData.data.movies[index].category === "new arrivals") {
        newA.push(jsonData.data.movies[index]);
      }
    }
    setTopTrending(top);
    setNewArrivals(newA);
  }

  getMovies();

  return (
    <div>
      <GlobalStyle />
      <Hero />
      <Products heading="Top Trending" data={topTrendingLocal} />
      <Feature />
      <Products heading="New Arrivals" data={newArrivalsLocal} />
    </div>
  );
}

export default App;
