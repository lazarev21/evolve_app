import Box, { BoxProps } from "@mui/material/Box";

export default function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        borderRadius: 2,
        /* fontSize: "20px",
          fontWeight: "500", */
        ...sx,
      }}
      {...other}
    />
  );
}
