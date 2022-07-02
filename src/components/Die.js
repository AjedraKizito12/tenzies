import React from "react";

function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59e391" : "white",
  };
  return (
    <div className="die_face" style={styles} onClick={props.holdDice}>
      <h2 className="die_num">{props.value}</h2>
    </div>
  );
}

export default Die;
