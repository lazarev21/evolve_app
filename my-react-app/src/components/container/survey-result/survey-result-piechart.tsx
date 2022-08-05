import Item from "../item";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { PieChart, Pie, Cell } from "recharts";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { evolve_data } from "../../../../../evolve_data";
const pulseSurveysResult = evolve_data.content.pulseSurveysResult;

const dataSurvey = [
  {
    name: "conclusionFirst",
    value: pulseSurveysResult[0].results.conclusionFirst.percent,
    text: pulseSurveysResult[0].results.conclusionFirst.text,
  },
  {
    name: "conclusionSecond",
    value: pulseSurveysResult[0].results.conclusionSecond.percent,
    text: pulseSurveysResult[0].results.conclusionSecond.text,
  },
  {
    name: "conclusionThird",
    value: pulseSurveysResult[0].results.conclusionThird.percent,
    text: pulseSurveysResult[0].results.conclusionThird.text,
  },
  {
    name: "conclusionFourth",
    value: pulseSurveysResult[0].results.conclusionFourth.percent,
    text: pulseSurveysResult[0].results.conclusionFourth.text,
  },
];

const COLORS = ["#FFC123", "#63C756", "#4166F5", "#FF5C83"];

export function SurveyResultPieChart() {
  return (
    <Box
      display="flex"
      minHeight={{ xxl: "100px", xl: "100px", lg: "120px" }}
      alignItems={"center"}
    >
      <Box display={"flex"} alignItems={"center"} ml={"15px"}>
        <PieChart width={70} height={70}>
          <Pie
            data={dataSurvey}
            innerRadius={23}
            outerRadius={35}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
          >
            {dataSurvey.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <Box display={"flex"} flexDirection={"column"} ml={"10px"}>
          <Typography
            variant="h6"
            component="h6"
            align="left"
            fontWeight={"500"}
            fontSize={{ xxl: "14px", xl: "14px", lg: "12px" }}
            color={"#272727"}
          >
            <FiberManualRecordIcon
              sx={{ fontSize: "8px", color: `${COLORS[0]}` }}
            />
            {dataSurvey[0].value}% - {dataSurvey[0].text}
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            align="left"
            fontWeight={"500"}
            fontSize={{ xxl: "14px", xl: "14px", lg: "12px" }}
            color={"#272727"}
          >
            <FiberManualRecordIcon
              sx={{ fontSize: "8px", color: `${COLORS[1]}` }}
            />
            {dataSurvey[1].value}% - {dataSurvey[1].text}
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            align="left"
            fontWeight={"500"}
            fontSize={{ xxl: "14px", xl: "14px", lg: "12px" }}
            color={"#272727"}
          >
            <FiberManualRecordIcon
              sx={{ fontSize: "8px", color: `${COLORS[2]}` }}
            />
            {dataSurvey[2].value}% - {dataSurvey[2].text}
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            align="left"
            fontWeight={"500"}
            fontSize={{ xxl: "14px", xl: "14px", lg: "12px" }}
            color={"#272727"}
          >
            <FiberManualRecordIcon
              sx={{ fontSize: "8px", color: `${COLORS[3]}` }}
            />
            {dataSurvey[3].value}% - {dataSurvey[3].text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
