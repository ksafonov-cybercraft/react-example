import React, {useState} from 'react';
import TimePicker from '@mui/lab/TimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {InputBase, InputLabel} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const Input = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#fcfcfb' ,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))

const MuiPicker = () => {
    const [value, setValue] = useState(new Date())
    const [open, setIsOpen] = useState(false)

    return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                        open={open}
                        value={value}
                        onChange={setValue}
                        renderInput={(params) => {
                            console.log(params);
                            return (
                                <>
                                    <InputLabel shrink>
                                        Time
                                    </InputLabel>
                                    <Input onClick={() => setIsOpen(!open)} {...params}/>
                                </>
                            )
                        }}
                    />
            </LocalizationProvider>
    );
};

export default MuiPicker;