import Item from "./item";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { evolve_data } from "../../../../evolve_data";

const batteryData = evolve_data.content.battery;
const batteryPreviousPercent = batteryData.currentValue - batteryData.growth;
const batteryRemainderPercent = 100 - batteryData.currentValue;
//TODO
//вынести все цвтета, бекграунды
//
export function Battery() {
  return (
    <Box
      display={"flex"}
      position={"relative"}
      minWidth={"100%"}
      minHeight={155}
      m={"0px 0px 25px 0px"}
      borderRadius={13}
    >
      <Item
        minHeight={"100%"}
        minWidth={`${batteryPreviousPercent}%`}
        boxSizing={"border-box"}
        sx={{
          background: "linear-gradient(90deg, #4166F5 0%, #3EB7FF 91.38%)",
          borderRadius: "13px 0px 0px 13px",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"last baseline"}
          ml={"23px"}
          mt={"21px"}
        >
          <Typography
            variant="h5"
            component="div"
            fontWeight={"medium"}
            fontSize={"37px"}
            color={"white"}
            p={0}
          >
            {batteryData.currentValue}%
          </Typography>
          <Typography
            variant="h5"
            component="div"
            fontWeight={"think"}
            fontSize={"12px"}
            bgcolor={"#FFA500"}
            color={"white"}
            height={"14px"}
            borderRadius={"15px"}
            p={"2px"}
            ml={"10px"}
          >
            +{batteryData.growth}% за {batteryData.amountOfDays} дней
          </Typography>
        </Box>
        <Typography
          variant="h5"
          component="h5"
          align="left"
          mt={"10px"}
          ml={"23px"}
          fontWeight={"500"}
          fontSize={"22px"}
          color={"white"}
        >
          Team-battery
        </Typography>
        <Typography
          variant="h5"
          component="span"
          align="left"
          position={"absolute"}
          mt={"0px"}
          ml={"23px"}
          fontWeight={"medium"}
          fontSize={"11px"}
          color={"white"}
        >
          вовлеченность + командная работа + социализация команды + активность
          сотрудников + потенциал к росту
        </Typography>
      </Item>
      <Item
        minHeight={"100%"}
        minWidth={`${batteryData.growth}%`}
        sx={{
          background: "#FFA500",
          borderRadius: "0px",
        }}
      ></Item>
      <Item
        minHeight={"100%"}
        minWidth={`${batteryRemainderPercent}%`}
        sx={{
          background: "#C3CBDB",
          borderRadius: "0px 13px 13px 0px",
        }}
      ></Item>
    </Box>
  );
}
