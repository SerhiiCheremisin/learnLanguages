import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Button, Stack } from "@mui/material";
import { Typography } from '@mui/material';
import { colors } from "../colors";

export const Setup = styled(Box)({
    position: "absolute",
    left: -550,
    top: -310,
    width: 840,
    height: 600,
    zIndex: 15,
})

export const TrashCan = styled(Box)({
    position: "absolute",
    left: -950,
    top: 40,
    width: 240,
    height: 300,
    zIndex: 15,
})

export const KitchenTable = styled(Box)({
    position: "absolute",
    left: 400,
    top: 50,
    width: 560,
    height: 300,
    zIndex: 15,
})

export const Dishes = styled(Box)({
    position: "absolute",
    left: 400,
    top: -20,
    width: 250,
    height: 165,
    zIndex: 15,
})