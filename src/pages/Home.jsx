import { GlobalContext} from "../App";
import React from "react";

function Home () {
  const [toDoList, setToDoList] = React.useContext(GlobalContext);

  return (
    <>
    <h1> Welcome! </h1>
    <div>
      <h2> Today you have {toDoList.length} tasks to do.</h2>
    </div>
    </>
  )
}
  
  export default Home;