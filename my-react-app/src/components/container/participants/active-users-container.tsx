import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import { UserMiniCard } from "./user-mini-cart";

export function ActiveUsersContainer({ participantsData }: any) {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} mt={"13px"} ml={"15px"}>
        <KeyboardArrowDownOutlinedIcon
          color="primary"
          fontSize="small"
          sx={{
            background: "#3366FF",
            borderRadius: "50px",
            transform: "rotate(-90deg)",
          }}
        />
        <Typography
          variant="h6"
          component="h6"
          align="left"
          fontWeight={"600"}
          fontSize={"15px"}
          ml={"10px"}
        >
          Самые активные пользователи
        </Typography>
      </Box>
      <ActiveUsers participantsData={participantsData} />
    </>
  );
}

function ActiveUsers({ participantsData }: any) {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      justifyContent={"flex-start"}
      alignContent={"flex-start"}
      minHeight={{ xxl: "100px", xl: "100px", lg: "100px" }}
      m={"10px 0px 0px 0px"}
    >
      {participantsData.activeUsers.map((item: any, index: number) => (
        <UserMiniCard key={index} userData={item} />
      ))}
    </Box>
  );
}
