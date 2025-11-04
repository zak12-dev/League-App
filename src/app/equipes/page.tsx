"use client";

import TeamFilter from "./_components/teamFilter";

export default function Equipes() {
  return (
    <div className="bg-gray-100">
      <div className="  px-8 py-17 bg-gradient-to-r from-white to-gray-300 ">
        {" "}
        <h1 className=" text-5xl font-bold"> Equipes </h1>
      </div>
      <div>
        <TeamFilter />
      </div>
    </div>
  );
}
