import Box, { BoxProps } from "@mui/material/Box";

export default function ItemIndicator(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      minHeight={{
        xs: "100px",
        sd: "100px",
        md: "100px",
        lg: "100px",
        xl: "155px",
      }}
      width={"32%"}
      borderRadius={"13px"}
      sx={{
        background: "linear-gradient(90deg, #4166F5 0%, #3EB7FF 91.38%)",
        ...sx,
      }}
      {...other}
    />
  );
}
