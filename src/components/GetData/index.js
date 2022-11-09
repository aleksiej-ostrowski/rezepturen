//import { useState, useEffect } from 'React'
import React from "react";
import axios from "axios";

const baseURL = "https://aleksiej.website/random/";

export default function GetData({ jsonData }) {
  /* 
  const [get_d, setGet] = React.useState([]);
  const [error, setError] = React.useState(null);
  */

  React.useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        // console.log(response.data);
        // const o = response.data[0].recipes[0]
        // const keys_ = Object.keys(o);
        // console.log(o["title"]);

        // const o = response.data[0].recipes[0]
        // console.log(Object[o].map((x) => [x["id"]["$numberInt"], x["title"], x["image"], x["summary"], x["instructions"], x["license"], x["spoonacularSourceUrl"]]));

        console.log(response.data);

        // console.log(response.data[0].recipes[0]);
        // const o = response.data[0].recipes[0];

        // console.log("type = ", typeof get_d);

        // let vals = Object.values(o);

        /*  
        const info_all = response.data.map((x) => [
          x["recipes"][0]["id"],
          x["recipes"][0]["title"],
          x["recipes"][0]["image"],
          x["recipes"][0]["summary"],
          x["recipes"][0]["instructions"],
          x["recipes"][0]["license"],
          x["recipes"][0]["spoonacularSourceUrl"],
        ]);
        */

        jsonData = response.data.map((x) => [
          x["recipes"][0]["id"],
          x["recipes"][0]["title"],
          x["recipes"][0]["image"],
          x["recipes"][0]["summary"],
          x["recipes"][0]["instructions"],
          x["recipes"][0]["spoonacularSourceUrl"],

          x["recipes"][0]["extendedIngredients"].map((e) => [
            e["id"],
            e["original"],
            e["amount"],
            e["image"],
            e["aisle"],
          ]),
        ]);

        // console.log("typeof => ", typeof info_all);

        // setGet(info_all);

        // console.log(info_all);

        /*  
        const ing_all = response.data[0].recipes[0].extendedIngredients.map((x) => [
            x.id.$numberInt,
            x.original,
            x.image,
            x.aisle,
          ]);
        */

        /*  
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    */
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // if (error) return `Error: ${error.message}`;
  // if (!get_d) return "no data";

  console.log(jsonData);

  return jsonData;
}

// https://spoonacular.com/cdn/ingredients_100x100/

//
/*

import React from "react";
import axios from "axios";

export default function Get() {

  const [post, setPost] = React.useState(null);
  
  React.useEffect(() => 
  state = {
    recipes: [],
  };

  componentDidMount() {
    axios.get(`https://aleksiej.website/random/`)
      .then((res) => {
          const recipes = res.data;
          this.setState({ recipes });
      })
      .catch(function (error) {
          console.log(error);
      });
  }

  render() {
    return (

        {state.recipes.map(data => data)}

        // {this.state.recipes.map((data) => (
            // {data[Object.keys(data)[1]]}
        //)
        // )}

        
      //this.state.recipes.map((items) => {
      //return (
      //  <ul key={1}>
      //  {Object.keys(items)[1].map((key) => {
      //    return (
      //      <li key={key}>{key}:{items[key]}</li>
      //    )
      //  })}
      //  </ul>
      //)
    //}
     //)
     //
    );
  }
}

*/
