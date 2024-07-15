import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function ElevateAppBar(props) {
    return (
        <React.Fragment>
            <AppBar style={{background: "#ffffff"}}>
                <Toolbar>
                    <Typography variant="h6" style={{color: "#26292d"}}>
                        <span role="img" aria-label="Clipboard">📋 </span>
                        <span role="img" aria-label="Grinning Face with Smiling Eyes">😄 </span>
                        Profile Technology Icons</Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}