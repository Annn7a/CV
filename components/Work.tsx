import React from "react";

interface Props {
  name: string;
  period: string;
  activites: string[];
}

function Work(props: Props) {
  const { name, period, activites } = props;

  return (
    <div className="leading-loose">
      <h2 className="text-2xl font-semibold pb-1">{name}</h2>
      <p className="text-lg font-normal text-gray-500 mb-2.5">{period}</p>

      <ul className="list-disc list-inside pl-7">
        {activites.map((activity, key) => (
          <li key={key}>{activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default Work;
