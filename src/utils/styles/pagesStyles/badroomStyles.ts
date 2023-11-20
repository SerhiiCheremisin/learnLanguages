import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Button, Stack } from "@mui/material";
import { Typography } from '@mui/material';
import { colors } from "../colors";

export const Bed = styled(Box)({
   position: "absolute",
   left: 450,
   top: 70,
   width: 400,
   height: 350,
   zIndex: 15,
})

export const Lamp = styled(Box)({
   position: "absolute",
   left: 345,
   top: 15,
   width: 400,
   height: 350,
   zIndex: 10,
})

export const Wardrobe = styled(Box)({
    position: "absolute",
    left: -950,
    top: -170,
    width: 600,
    height: 600,
    zIndex: 15,

})

export const EmptyRoom = styled(Box)({
    position: "absolute",
    left: -955,
    top: -410,
    width: 1920,
    height: "90vh",
    zIndex: 1
})