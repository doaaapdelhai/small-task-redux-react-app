import { useDispatch, useSelector } from "react-redux";
import {decrementCounter} from './Redux/counterSlice.js'
const Category = () => {

 const {counter} =  useSelector(function (state){  return state.doaa  }); //hook in react-redux => 
//  console.log(w.counter);

const dis = useDispatch()
  return (
    <div className="category">
   
    <p className="">this is category page :  {counter} </p>    {/*  {counter} => i destract this from doaa */}
      <button className="btn-cat" onClick={function(){ dis(decrementCounter()) }}> - </button>
    </div>
  );
}

export default Category;
