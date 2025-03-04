import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import NavBar from "../components/NavBar";
import DashboardCard from "../components/DashboardCard";
import ApplicationDataTable from "../components/ApplicationDataTable";
import PieChartData from "../components/PieChartData";
import LineChartData from "../components/LineChartData";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Grid2";  
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { dashboardData } from "../dashboard-data"; 

export default function Dashboard() {
  const pieData1 = [
    { id: 0, value: dashboardData.applications.total, label: 'Applications' },
    { id: 1, value: dashboardData.responses.total, label: 'Responses' },
    { id: 2, value: dashboardData.interviews.total, label: 'Interviews' }
  ];

  const pieData2 = [
    { id: 0, value: dashboardData.job_application_data.filter(apps => apps.response === "responded").length, label: 'Responded' },
    { id: 1, value: dashboardData.job_application_data.filter(apps => apps.response === "rejected").length, label: 'Rejected' },
    { id: 2, value: dashboardData.job_application_data.filter(apps => apps.response === "pending").length, label: 'Pending' }
  ];

  const applicationsData = [dashboardData.applications.total];
  const responsesData = [dashboardData.responses.total];
  const interviewsData = [dashboardData.interviews.total];
  const respondedData = [dashboardData.job_application_data.filter(app => app.response === "responded").length];
  const rejectedData = [dashboardData.job_application_data.filter(app => app.response === "rejected").length];
  const pendingData = [dashboardData.job_application_data.filter(app => app.response === "pending").length];

  const xLabels = ['February'];

  return (
    <>
      <NavBar />
      <Container sx={{ marginTop: 4 }}>
        <Grid2 container spacing={3}>
          <Grid2 size={4}>
            <DashboardCard
              icon={<WorkOutlineIcon fontSize="small" />}
              title="Applications"
              description={18}
              subDescription="+2 this month"
            />
          </Grid2>

          <Grid2 size={4}>
            <DashboardCard
              icon={<MarkunreadOutlinedIcon fontSize="small" />}
              title="Responses"
              description={8}
              subDescription="+2 this month"
            />
          </Grid2>

          <Grid2 size={4}>
            <DashboardCard
              icon={<PeopleOutlineIcon fontSize="small" />}
              title="Interviews"
              description={6}
              subDescription="+4 this month"
            />
          </Grid2>

          {/* Pie Charts */}
          <Grid2 size={6}>
            <PieChartData series={[{ data: pieData1 }]} />
          </Grid2>
          <Grid2 size={6}>
            <PieChartData series={[{ data: pieData2 }]} />
          </Grid2>

          {/* Line Charts */}
          <Grid2 size={6}>
            <LineChartData
              series={[
                { data: applicationsData, label: "Applications" },
                { data: responsesData, label: "Responses" },
                { data: interviewsData, label: "Interviews" },
              ]}
              xLabels={xLabels}
            />
          </Grid2>

          <Grid2 size={6}>
            <LineChartData
              series={[
                { data: respondedData, label: 'Responded' },
                { data: rejectedData, label: 'Rejected' },
                { data: pendingData, label: 'Pending' },
              ]}
              xLabels={xLabels}
            />
          </Grid2>

          <Grid2 size={12}>
            <ApplicationDataTable data={dashboardData.job_application_data} />
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
}
