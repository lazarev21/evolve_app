import Item from "../item";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import profile_photo from "../../../images/profile_photo.jpg";
//TODO
//ПРОПИСАТЬ ТИПЫ

export function RecomendationForUserItem({ userData }: any) {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} mt={"10px"}>
        <Avatar
          alt="Profile Photo"
          src={profile_photo}
          sx={{ width: 30, height: 30 }}
        />
        <Box display={"flex"} flexDirection={"column"} ml={"10px"}>
          <Typography
            variant="h6"
            component="h6"
            align="left"
            fontWeight={"500"}
            fontSize={"12px"}
            color={"#989898"}
          >
            Пользователь {userData.userName}
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            align="left"
            fontWeight={"600"}
            fontSize={"12px"}
            color={"#272727"}
          >
            {/*       TODO
          мапинг
          как сделать чтобы между итемами ставилась запятая? */}
            {userData.userRecomendations[0]}
            {`, `}
            {userData.userRecomendations[1]}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
