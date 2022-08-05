import Item from "../item";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Avatar from "@mui/material/Avatar";
import profile_photo from "../../images/profile_photo.jpg";
import { PieChart, Pie, Cell } from "recharts";

import { ActiveUsersContainer } from "./active-users-container";

import { evolve_data } from "../../../../../evolve_data";

const participantsData = evolve_data.content.participants;

const data = [
  { name: "Male", value: participantsData.gender.male },
  { name: "Female", value: participantsData.gender.female },
];

const COLORS = ["#4166F5", "#FF5C83"];

export function Participants() {
  return (
    <Item
      m={"0px 0px 20px 0px"}
      minHeight={"255px"}
      minWidth={"100%"}
      boxSizing={"border-box"}
      boxShadow={
        "0px 4px 8px rgba(16, 24, 40, 0.1), 0px 2px 4px rgba(16, 24, 40, 0.06)"
      }
      borderRadius={"13px"}
      sx={{
        background: "#fff",
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        align="left"
        mt={"20px"}
        ml={"15px"}
        fontWeight={"600"}
        fontSize={"20px"}
      >
        Всего участников: {participantsData.count}
      </Typography>
      <Box display={"flex"} alignItems={"center"} mt={"15px"} ml={"15px"}>
        <PieChart width={40} height={40}>
          <Pie
            data={data}
            innerRadius={12}
            outerRadius={20}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((entry, index) => (
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
            fontSize={"14px"}
            color={"#272727"}
          >
            Женщины: {data[1].value}
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            align="left"
            fontWeight={"500"}
            fontSize={"14px"}
            color={"#272727"}
          >
            Мужчины: {data[0].value}
          </Typography>
        </Box>
      </Box>
      <ActiveUsersContainer participantsData={participantsData} />
    </Item>
  );
}
