import React from "react";


const styles = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItem: 'center',
    padding: '30px 20px 0',
    width: '70%',
    borderBottom: '1px solid #cecece',
    fontFamily: 'Roboto,sans-serif',
    fontWeight: '100',
    fontSize: '15px',
    color: "#333" ,
}

function ToDoItem() {
  return (
      <div style={styles}>
      <input type="checkbox" />
      <p>Placeholder text here.</p>
    </div>
  );
}

export default ToDoItem;
