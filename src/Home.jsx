import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "./Redux/counterSlice";

const Home = () => {

// useSelector 
   const {counter} = useSelector( function (p) { return  p.doaa } )
  
  //  console.log(o.counter);

  // useDispatch
   const dispatch = useDispatch()
  return (
    <div className="home">
    <p className="">this is home page : {counter} </p>
    <br/>
    <div className="perant">
    <button className="btn" onClick={function(){dispatch(incrementCounter(10))}} > + </button>
    <button className="btn" onClick={function (){  dispatch(decrementCounter()) }} > - </button>

    </div>


    </div>
  );
}

export default Home;
































































// import { useSelector } from "react-redux";


// function Home() {
//  let {count} =  useSelector((doaa)=>doaa.counterrrrr )
//   return (
//     <div>
//       <h1> Home : {count} </h1>
//     </div>
//   );
// }

// export default Home;
// ========================================
