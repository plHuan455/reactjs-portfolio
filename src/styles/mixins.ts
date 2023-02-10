import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";

export const textOverflow = (line: number): SxProps<Theme> => {
  return {
    '-webkit-box-orient': 'vertical',
    'display': '-webkit-box',
    '-webkit-line-clamp': line,
    'overflow': 'hidden',
    textOverflow: 'ellipsis',
  }
}

export const rem = (pixel: number) => {
  return `${pixel/16}rem`;
}