import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = ():JSX.Element => {
return(
    <Box sx={{ display: 'flex', width: "100%", height: "80vh", justifyContent: "center", alignItems: "center" }}>
     <CircularProgress />
    </Box>
)
}

export default Loader;