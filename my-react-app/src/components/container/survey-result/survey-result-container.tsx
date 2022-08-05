import Item from "../item";
import { Typography } from "@mui/material";
import { SurveyResultPieChart } from "./survey-result-piechart";

export function SurveyResult() {
  return (
    <Item
      display={"flex"}
      flexDirection={"column"}
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
        Результат пульс-опроса №1
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        align="left"
        mt={"10px"}
        ml={"15px"}
        fontWeight={"600"}
        fontSize={"15px"}
      >
        Основные проблемы взаимодействия
      </Typography>

      <SurveyResultPieChart />
    </Item>
  );
}
