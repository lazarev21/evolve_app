import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import profile_photo from "../../../images/profile_photo.jpg";

export function UserMiniCard({ userData }: any) {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexBasis={"40%"}
      m={"10px 0px 10px 15px"}
      /* minWidth={{ xxl: "180px", xl: "160px", lg: "160px" }} */
    >
      <Avatar
        alt="Profile Photo"
        src={profile_photo}
        sx={{ width: 30, height: 30 }}
      />
      <Typography
        variant="h6"
        component="h6"
        align="left"
        fontWeight={"500"}
        fontSize={{ xxl: "14px", xl: "14px", lg: "12px" }}
        color={"#272727"}
        ml={"10px"}
      >
        {userData.userName}
      </Typography>
    </Box>
  );
}
