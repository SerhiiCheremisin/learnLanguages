import React from 'react';
import useGetLanguageState from '../hooks/useGetLanguageState';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import { PopoverButton } from '../utils/styles/commonStyles';
import { Box } from '@mui/material';

interface ICommonPopoverProps {
  left: number,
  top: number,
  word: any
}

const CommonPopover = ( { left, top, word } : ICommonPopoverProps ) => {

    const languages = useGetLanguageState();

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
      <Box sx={{position: "absolute", left: `${left}px`, top: `${top}px`}}>
        <PopoverButton sx={{padding: "5px", backgroundColor: "white"}} aria-describedby={id} variant="outlined" onClick={handleClick}>
          <img width="15px" src="/question.svg" alt="question mark" />
        </PopoverButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>{`${String(word[languages.motherLanguage]).toUpperCase()} `} 
                                    <img style={{width: "10px"}} src="/items/arrow-right-solid.svg" alt="arrow" /> {` ${String(word[languages.learningLanguage]).toUpperCase()}`}</Typography>
        </Popover>
      </Box>
    );
}

export default CommonPopover;
