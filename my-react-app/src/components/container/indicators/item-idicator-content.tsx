import Box, { BoxProps } from "@mui/material/Box";

export default function ItemIndicatorContent(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      m={{
        xxl: "21px 15px 15px 15px",
        xl: "21px 15px 15px 15px",
        md: "10px 10px 10px 10px",
      }}
      borderRadius={2}
      sx={{
        ...sx,
      }}
      {...other}
    />
  );
}
