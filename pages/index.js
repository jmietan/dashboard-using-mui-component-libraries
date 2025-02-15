import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBar from "../components/NavBar";
import DashboardCard from "../components/DashboardCard";
import ApplicationDataTable from "../components/ApplicationDataTable";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";

const testData = [
  {
    id: 14,
    company: "Dans Super Company",
    position: "Professional Cat Sitter",
    applied: "2024-06-01",
    response: "responded",
    interview: "scheduled",
  },
  {
    id: 15,
    company: "Ricks Meme Company",
    position: "Professional Meme Maker",
    applied: "2024-06-05",
    response: "rejected",
    interview: "-",
  },
];

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard
              icon={<PsychologyAltIcon fontSize="small" />}
              title="Assignment Hours"
              description={5}
              subDescription="+5 hours more than yesterday"
            />
          </Grid>
          <Grid item xs={12}>
            <ApplicationDataTable data={testData} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
