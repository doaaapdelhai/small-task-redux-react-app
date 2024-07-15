import {  useDispatch, useSelector } from "react-redux";
import { incrementCounter  } from "./Redux/counterSlice";


const Nav = () => {
  const {counter} = useSelector(function (d){ return d.doaa })
  // console.log(a.counter);

  const dis  =  useDispatch();

  return (
    <div className="container">
    <div className="logo"> <p className=""> navbar  : {counter} </p> </div>
    <div className=""> 
    <ul className=""> 
    <li className=""> link1 </li>
    <li className="">link2</li>
    <li className="">link3</li>
    <button className="btn-nav" onClick={function(){dis(incrementCounter(10))}} > + </button>

     </ul> 
     
     </div>


    </div>
  );
}

export default Nav;



























































// import { useDispatch } from "react-redux"
// import { hyn2s, hyzwed } from "./counter/counterSlice"

// function Nav() {
//     let dispatcher=useDispatch()
//   return (
//     <div>
      
//        <h1> nav  <input type="text" /></h1>
//        <button onClick={()=>{
//         dispatcher(hyzwed())

//        }}>+</button>
//        <hr/>
//        <button onClick={()=>{
//         dispatcher(hyn2s())

//        }}>-</button>

//     </div>
//   )
// }

// export default Nav
 