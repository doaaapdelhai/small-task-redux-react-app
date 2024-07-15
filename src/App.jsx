
import About from "./About";
import Home from "./Home";
import Nav from "./Nav";
import {} from "./App.css";
import Category from "./Category";
import { Provider } from "react-redux";
import { myStore } from "./Redux/mySore";

const App = () => {
  return (
    <div>
    <Provider store={myStore} >

  
      <Nav/>
    <Home/>
    <About/>
    <Category/>

    
    </Provider>
    </div>
  );
}

export default App;




















































































// import About from "./About";
// import Home from "./Home";
// import Nav from "./Nav";

// import { Provider } from 'react-redux';
// import { store } from "./store";

// const App = () => {
//   return (
//     <div>
//       <Provider store={store}>
    //   <Nav/>
    // <Home/>
    // <About/>
//     </Provider>
//     </div>
//   );
// }

// export default App;
// // https://youtu.be/9zySeP5vH9c
// =====================================




























