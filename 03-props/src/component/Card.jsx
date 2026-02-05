import React from "react";

const Card = (props) => {
  console.log(props.age, props.user);

  return (
    <div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1764069970723-eff3e12de883?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Crow"
        />
        <h1>
          {props.user},{props.age}
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
