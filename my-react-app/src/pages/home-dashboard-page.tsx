import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Battery } from "../components/container/battery";
import { Participants } from "../components/container/participants/participants";
import { Recomendation } from "../components/container/recomendations/recomendations";
import { PopularTasks } from "../components/container/popular-tasks";
import { Indicators } from "../components/container/indicators/indicators";
import { SurveyResult } from "../components/container/survey-result/survey-result-container";
import { DailyVisitsContainer } from "../components/container/daily-visits/daily-visits-container";

export function HomeDashboardPage() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 92px)",
        m: {
          xxl: "0 auto",
          xl: "0 auto",
          lg: "0 auto",
          md: "0 auto",
          sm: "0 auto",
          sx: "0 auto",
        },
      }}
    >
      <Grid
        container
        spacing={2}
        xl={10}
        lg={11}
        md={11}
        sm={8}
        xs={11}
        xxl={8}
        sx={{ m: "auto" }}
      >
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Battery />
            <Recomendation />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Participants />
            <PopularTasks />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Indicators />
            <SurveyResult />
            <DailyVisitsContainer />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
