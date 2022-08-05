import { RecommendationsForUsers } from "./recomentations-for-users";
import Item from "../item";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Avatar from "@mui/material/Avatar";
import profile_photo from "../../images/profile_photo.jpg";
import { evolve_data } from "../../../../../evolve_data";

const recomendationData = evolve_data.content.recommendations;

export function Recomendation() {
  return (
    <Item
      m={0}
      minHeight={"350px"}
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
        fontWeight={"600"}
        fontSize={"20px"}
        mt={"20px"}
        ml={"15px"}
      >
        Рекомендации к улучшению
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        minHeight={{ xxl: "260px", xl: "260px", lg: "260px" }}
        ml={"15px"}
      >
        <Box display={"flex"} alignItems={"center"} mt={"20px"}>
          <KeyboardArrowDownOutlinedIcon
            color="primary"
            fontSize="small"
            sx={{ background: "#ED6A5F", borderRadius: "50px" }}
          />{" "}
          <Typography
            variant="h6"
            component="h6"
            align="left"
            fontWeight={"600"}
            fontSize={"15px"}
            ml={"10px"}
          >
            {recomendationData[0].title}
          </Typography>
        </Box>
        <RecommendationsForUsers
          recomendationData={recomendationData[0].users}
        />

        <Box display={"flex"} alignItems={"center"} mt={"20px"}>
          <KeyboardArrowDownOutlinedIcon
            color="primary"
            fontSize="small"
            sx={{
              background: "#63C756",
              borderRadius: "50px",
              transform: "rotate(180deg)",
            }}
          />{" "}
          <Typography
            variant="h6"
            component="h6"
            align="left"
            fontWeight={"600"}
            fontSize={"15px"}
            ml={"10px"}
          >
            {recomendationData[1].title}
          </Typography>
        </Box>
        <RecommendationsForUsers
          recomendationData={recomendationData[1].users}
        />
      </Box>
    </Item>
  );
}
