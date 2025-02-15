import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const DashboardCard = ({ icon, title, description, subDescription }) => {
  return (
    <Card sx={{ minWidth: 200, padding: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" gap={1}>
          {icon}
          <Typography variant="h6">{title}</Typography>
        </Box>
        <Typography variant="h4">{description}</Typography>
        <Typography color="text.secondary">{subDescription}</Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
