import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Button, Stack } from "@mui/material";
import { Typography } from '@mui/material';
import { colors } from "./colors";

export const CenteredBox = styled(Box) ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})

export const HeaderStyled = styled(Box)({
    display: "flex",
    width: "100%",
    height: "10vh",
    backgroundColor: colors.blueCecondary,
    gap: "15px",
    justifyContent: "center",
    alignItems: "center",
})

export const HeaderBlockLinks = styled(Box)({
    display: "flex",
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
})

export const HeaderBlockLanguages = styled(Box)({
    display: "flex",
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
})

export const ModalStyled = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    zIndex: "9999",
    backgroundColor: "grey",
    position: "absolute",
    left: 0,
    top: 0
})

export const CardHolder = styled(Box) ({
    display: "flex",
    gap: 25,
    flexWrap: "wrap",
    padding: 15
})

export const LearningScreenWrapper = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "90vh",
    overflow: "hidden"

})

export const ContainerZero = styled(Box)({
    width: "10px",
    height: "10px",
    position: "relative",
})

export const PopoverButton = styled(Button)({
  zIndex: 99,
  minWidth: 30,
  height: 30,
  borderRadius: 15,
  position: "absolute"
})


export const EmptyRoom = styled(Box)({
    position: "absolute",
    left: -955,
    top: -410,
    width: 1920,
    height: "90vh",
    zIndex: 1
})