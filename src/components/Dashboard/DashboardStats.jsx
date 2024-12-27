
import { Grid, Card, CardContent, Typography, Paper } from "@mui/material";
import { DASHBOARD_STATS } from "../utils/mockData";

const DashboardStats = () => {
  return (
    <>
      <Grid container spacing={3}>
        {DASHBOARD_STATS.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {stat.title}
                </Typography>
                <Typography variant="h4">{stat.value}</Typography>
                <Typography
                  variant="body2"
                  color={
                    stat.change.startsWith("+") ? "success.main" : "error.main"
                  }
                >
                  {stat.change} from last month
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ mt: 4, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Recent Activity
        </Typography>
        {/* Add recent activity content here */}
      </Paper>
    </>
  );
};

export default DashboardStats;
