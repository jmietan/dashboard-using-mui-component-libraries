import React from "react";
import { PieChart } from "@mui/x-charts";
import { valueFormatter } from '../utils/webUsageStats'; 

const PieChartData = ({ series }) => {
  return (
    <PieChart
      series={[
        {
          data: series[0].data,  
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter: valueFormatter,
        },
      ]}
      height={200}
      width={400}
    />
  );
};

export default PieChartData;