import { useDispatch } from "react-redux";
import { pizzaFunc } from "./Redux/APISlice";
import { useEffect, useState } from "react";

const About = () => {
  const [titles, setTitles] = useState([]);

  // useDispatch
  const dispatch = useDispatch();

  async function getProductX() {
    let x = await dispatch(pizzaFunc());
    setTitles(x.payload.recipes.slice(0, 4).map((item) => item.title));
  }

  useEffect(() => {
    getProductX();
  }, []);

  return (
    <div className="about">
    <h2 className="title">product from API :  </h2>
       {titles.map((title, index) => (
        <p className="p-fetch"  key={index}>{title}</p>
      ))}
    </div>
  );
};

export default About;
