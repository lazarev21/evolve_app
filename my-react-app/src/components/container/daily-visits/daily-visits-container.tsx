import Item from "../item";
import { Typography } from "@mui/material";
import DailyVisitsChart from "./daily-visits-chart";

export function DailyVisitsContainer() {
  return (
    <Item
      m={"20px 0px 0px 0px"}
      minHeight={{
        xs: "195px",
        sm: "195px",
        md: "195px",
        lg: "195px",
        xl: "167.5px",
      }}
      minWidth={"100%"}
      boxSizing={"border-box"}
      borderRadius={"13px"}
      boxShadow={
        "0px 4px 8px rgba(16, 24, 40, 0.1), 0px 2px 4px rgba(16, 24, 40, 0.06);"
      }
      sx={{
        background: "#fff",
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        align="left"
        mt={"10px"}
        ml={"15px"}
        fontWeight={"600"}
        fontSize={"20px"}
      >
        Количество ежедневных заходов
      </Typography>
      <DailyVisitsChart />
    </Item>
  );
}
