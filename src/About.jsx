import { useSelector } from "react-redux";

const About = () => {
  const {counter} =  useSelector(function (z) { return z.doaa  })
  // const {counter} =  useSelector( (z) => z.doaa  )
  // console.log(data);
  return (
    <div className="about">
    <p className="">this is about page : {counter} </p>
    </div>
  );
}

export default About;

















































// import { useSelector } from "react-redux"

// function About() {
//  let {count}= useSelector ((y)=>y.counterrrrr)
//  console.log(count);

//   return (
//     <div>
//       <h1> About  : {count} </h1>
//     </div>
//   )
// }

// export default About
// =====================================

