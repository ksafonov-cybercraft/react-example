// import './App.css';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import {Calendar} from "react-date-range";
import {useEffect, useRef, useState} from "react";
import Dropdown from "./components/Dropdown";
// import {TextField} from "@mui/material"
// import TimePicker from '@mui/lab/TimePicker';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import TimePicker from "rc-time-picker"
// import 'rc-time-picker/assets/index.css';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TimePicker from 'rc-time-picker-date-fns';
import "rc-time-picker-date-fns/assets/index.css"
import "./App.css"
import {XCircleIcon} from "@heroicons/react/solid";
import TimePickerComponent from "./components/TimePicker/TimePicker";
import MuiPicker from "./components/MuiPicker/MuiPicker";





const App = () => {
    // const ref = useRef()
    // const [isVisible, setIsVisible] = useState(false)
    // const [date, setDate] = useState(new Date())
    // console.log(isVisible);
    // console.log(ref);
    //
    // let day = date.getDate();
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear();
    // return (
    //     <div ref={ref} style={{ width: "1000px", height: "1000px"}} className={"App"}>
    //         <input
    //             readOnly
    //             value={
    //                 `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`
    //             }
    //             style={{height: "30px", width: "325px",}}
    //             placeholder="Select date"
    //             onClick={() => setIsVisible(!isVisible)}
    //         />
    //         {isVisible && (
    //             <Dropdown isOpen={isVisible} onOutsideClick={setIsVisible} parentRef={ref}>
    //                 <div
    //                     style={{
    //                         width: "325px",
    //                         display: 'flex',
    //                         flexFlow: 'column nowrap',
    //                     }}
    //                 >
    //                     <Calendar
    //                         date={date}
    //                         onChange={(newDate) => setDate(newDate)}
    //                     />
    //                 </div>
    //             </Dropdown>)}
    //     </div>
    return (
        <div>
            <div style={{marginBottom: 300}}>
                <p>Time Picker</p>
                <TimePickerComponent />
            </div>
            <p>Mui Picker</p>
            <MuiPicker />
        </div>
    )
}

export default App;
