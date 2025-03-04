import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const DashboardCard = ({ icon, title, description, subDescription }) => {
  return (
    <Card sx={{ minWidth: 200, padding: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" gap={1} color="text.secondary">
          {icon}
          <Typography variant="h6" color="text.secondary">{title}</Typography>
        </Box>
        <Typography variant="h4" color="text.secondary">{description}</Typography>
        <Typography color="text.secondary">{subDescription}</Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
