import React from "react";
import { LineChart } from "@mui/x-charts";

const LineChartData = ({ series, xLabels }) => {
  return (
    <LineChart
      width={500}
      height={300}
      series={series}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
};

export default LineChartData;
