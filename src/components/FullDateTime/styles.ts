import { makeStyles, Theme } from "@material-ui/core/styles";
import { FullDateTimeProps } from ".";
import { truncatedTextStyle } from "../../utils/truncatedTextStyle";

export const useStyles = makeStyles<Theme, Pick<FullDateTimeProps, "size">>(
  ({ palette: { text } }) => ({
    time: {
      color: text.primary,
      fontSize: ({ size }) => (size === "md" ? "0.9rem" : "0.8rem"),
      opacity: 0.6,
      ...truncatedTextStyle(),
      margin: ({ size }) => (size === "md" ? "0.4rem 0" : 0),
    },
  })
);
