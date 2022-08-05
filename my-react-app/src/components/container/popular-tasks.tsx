import Item from "./item";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { evolve_data } from "../../../../evolve_data";
import { formatDateForPopularTasks } from "../../core/utils/formate-date-for-poplar-tasks";

const popularTasksData = evolve_data.content.popularTasks;

export function PopularTasks() {
  return (
    <Item
      m={0}
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
        fontWeight={"600"}
        fontSize={"20px"}
        mt={"15px"}
        ml={"20px"}
      >
        Самые популярные задания
      </Typography>
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
          Задание "{popularTasksData[0].taskName}"
        </Typography>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxWidth={"350px"}
        mr={"15px"}
      >
        <Box display={"flex"} flexDirection={"column"} mt={"13px"} ml={"15px"}>
          <Typography
            variant="h6"
            component="h6"
            align="left"
            fontWeight={"500"}
            fontSize={{ xxl: "14px", xl: "14px", lg: "12px" }}
            color={"#272727"}
          >
            {formatDateForPopularTasks(popularTasksData[0].taskDateBegin)}
            {" - "}
            {formatDateForPopularTasks(popularTasksData[0].taskDateEnd)}
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            align="left"
            fontWeight={"500"}
            fontSize={{ xxl: "14px", xl: "14px", lg: "12px" }}
            color={"#272727"}
          >
            Всего выполнило: {popularTasksData[0].membersCount}
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} mt={"13px"} ml={"15px"}>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            sx={{ textTransform: "lowercase", fontSize: "11px" }}
          >
            Смотреть результаты
          </Button>
        </Box>
      </Box>
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
          Задание "{popularTasksData[1].taskName}"
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxWidth={"350px"}
        mr={"15px"}
      >
        <Box display={"flex"} flexDirection={"column"} mt={"13px"} ml={"15px"}>
          <Typography
            variant="h6"
            component="h6"
            align="left"
            fontWeight={"500"}
            fontSize={{ xxl: "14px", xl: "14px", lg: "12px" }}
            color={"#272727"}
          >
            {formatDateForPopularTasks(popularTasksData[1].taskDateBegin)}
            {" - "}
            {formatDateForPopularTasks(popularTasksData[1].taskDateEnd)}
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            align="left"
            fontWeight={"500"}
            fontSize={{ xxl: "14px", xl: "14px", lg: "12px" }}
            color={"#272727"}
          >
            Всего выполнило: {popularTasksData[1].membersCount}
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} mt={"13px"} ml={"15px"}>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            sx={{ textTransform: "lowercase", fontSize: "11px" }}
          >
            Смотреть результаты
          </Button>
        </Box>
      </Box>
    </Item>
  );
}
