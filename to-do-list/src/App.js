import React from "react";
import ToDoItem from "./ToDoItem";

const styles = {
  backgroundColor: "white",
  margin: "auto",
  width: "50%",
  display: "flex",
  flexDirection: "column",
  alignItem: "center",
  border: "1px solid #efefef",
  padding: "30px",
};

function App() {
  return (
    <div style={styles}>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export default App;
