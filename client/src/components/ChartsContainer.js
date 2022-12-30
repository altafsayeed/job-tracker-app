import React, { useState } from "react";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppContext();
  return (
    <Wrapper>
      <h4>Your Monthly Applications</h4>
      <button
        type="button"
        className="switch-chart"
        onClick={() => setBarChart(!barChart)}
      >
        Switch Chart View
      </button>
      {barChart ? <AreaChart data={data} /> : <BarChart data={data} />}
    </Wrapper>
  );
};
export default ChartsContainer;
