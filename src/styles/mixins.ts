import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";


export const rem = (pixel: number) => {
  return `${pixel/16}rem`;
}

export const textOverflowMixin = (line: number): SxProps<Theme> => {
  return {
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
    WebkitLineClamp: String(line),
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
}

export const baseBoxShadow: SxProps<Theme> = {
  boxShadow: `0 ${rem(3)} ${rem(6)} ${rem(-4)} rgba(0, 0, 0, 0.12), 0 ${rem(6)} ${rem(6)} 0 rgba(0, 0, 0, 0.08), 0 ${rem(9)} ${rem(28)} ${rem(8)} rgba(0, 0, 0, 0.05)`
}

export const resetButton: SxProps<Theme> = {
  minWidth: 0,
  padding: 0
}
