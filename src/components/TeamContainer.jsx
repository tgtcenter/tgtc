import React from "react";
import TeamCard from "./TeamCard";

const TeamContainer = () => {
  return (
    <div className="team-container">
      <TeamCard />
      <TeamCard />
      <TeamCard />
      {/* add as many TeamCard components as needed */}
    </div>
  );
};

export default TeamContainer;
