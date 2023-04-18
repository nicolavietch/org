import React from "react";
import "./MiOrg.css";

const MiOrg = ({ handleClick }) => {
  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <img src="/img/add.png" alt="add" onClick={handleClick} />
    </section>
  );
};

export default MiOrg;
