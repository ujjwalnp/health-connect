import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// for button
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function InputField() {
    return (
        <>
            <Box 
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                className="flex"
            >
                <TextField fullWidth label="Prescribed Medicine" id="prescribedMedicine" />
                <Button variant="contained" color="success" className='ml-5'>
        Add
      </Button>
            </Box>
        </>

    );
}