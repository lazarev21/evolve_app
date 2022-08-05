import ItemIndicator from "./item-indicator";
import ItemIndicatorContent from "./item-idicator-content";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { evolve_data } from "../../../../../evolve_data";

const indicatorsData = evolve_data.content.indicators;

export function Indicators() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
      }}
    >
      <ItemIndicator>
        <ItemIndicatorContent>
          <Typography
            variant="h5"
            component="h5"
            align="left"
            minHeight={"35px"}
            fontWeight={"500"}
            fontSize={{ xxl: "15px", xl: "15px", md: "13px" }}
            color={"white"}
          >
            Индекс вовлеченности
          </Typography>
        </ItemIndicatorContent>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"last baseline"}
          m={"0px 0px 0px 15px"}
        >
          <Typography
            variant="h5"
            component="div"
            fontWeight={"medium"}
            fontSize={{ xxl: "37px", xl: "37px", md: "28px" }}
            color={"white"}
            lineHeight={"1"}
            p={"0"}
          >
            {indicatorsData.engagementIndex.value}
          </Typography>
          <ArrowRightAltOutlinedIcon
            color="primary"
            sx={{ transform: "rotate(-90deg)", ml: "10px" }}
          />
          <Typography
            variant="h5"
            component="div"
            fontWeight={"think"}
            fontSize={"14px"}
            color={"white"}
          >
            +{indicatorsData.engagementIndex.growth}
          </Typography>
        </Box>
      </ItemIndicator>
      <ItemIndicator>
        <ItemIndicatorContent>
          <Typography
            variant="h5"
            component="h5"
            align="left"
            minHeight={"35px"}
            fontWeight={"500"}
            fontSize={{ xxl: "15px", xl: "15px", md: "13px" }}
            color={"white"}
          >
            Индекс активности
          </Typography>
        </ItemIndicatorContent>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"last baseline"}
          m={"0px 0px 0px 15px"}
        >
          <Typography
            variant="h5"
            component="div"
            fontWeight={"medium"}
            fontSize={{ xxl: "37px", xl: "37px", md: "28px" }}
            color={"white"}
            lineHeight={"1"}
            p={"0"}
          >
            {indicatorsData.activityIndex.value}
          </Typography>
          <ArrowRightAltOutlinedIcon
            color="primary"
            sx={{ transform: "rotate(-90deg)", ml: "10px" }}
          />
          <Typography
            variant="h5"
            component="div"
            fontSize={"14px"}
            fontWeight={"think"}
            color={"white"}
          >
            +{indicatorsData.activityIndex.growth}
          </Typography>
        </Box>
      </ItemIndicator>
      <ItemIndicator>
        <ItemIndicatorContent>
          <Typography
            variant="h5"
            component="h5"
            align="left"
            minHeight={"35px"}
            fontWeight={"500"}
            fontSize={{ xxl: "15px", xl: "15px", md: "13px" }}
            color={"white"}
          >
            Индекс роста доверия
          </Typography>
        </ItemIndicatorContent>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"last baseline"}
          m={"0px 0px 0px 15px"}
        >
          <Typography
            variant="h5"
            component="div"
            fontWeight={"medium"}
            fontSize={{ xxl: "37px", xl: "37px", md: "28px" }}
            color={"white"}
            lineHeight={"1"}
            p={"0"}
          >
            {indicatorsData.confidenceGrowthIndex.value}
          </Typography>
          <ArrowRightAltOutlinedIcon
            color="primary"
            sx={{ transform: "rotate(-90deg)", ml: "10px" }}
          />
          <Typography
            variant="h5"
            component="div"
            fontWeight={"think"}
            fontSize={"14px"}
            color={"white"}
          >
            +{indicatorsData.confidenceGrowthIndex.growth}
          </Typography>
        </Box>
      </ItemIndicator>
    </Box>
  );
}
