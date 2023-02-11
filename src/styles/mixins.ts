import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";

export const textOverflowMixin = (line: number): SxProps<Theme> => {
  return {
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
    WebkitLineClamp: String(line),
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
}

export const rem = (pixel: number) => {
  return `${pixel/16}rem`;
}