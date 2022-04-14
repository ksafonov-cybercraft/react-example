import React, {useState} from 'react';
import {XCircleIcon} from "@heroicons/react/solid";
import TimePicker from "rc-time-picker-date-fns";
import "rc-time-picker-date-fns/assets/index.css"


const TimePickerComponent = () => {
    const [value, setValue] = useState(new Date())
    console.log(value, "Time Picker");

    return (
        <div>
            <TimePicker
                value={value}
                onChange={setValue}
                placeholder={"00:00"}
                showSecond={false}
                onAmPmChange={setValue}
                use12Hours={true}
                inputIcon={<XCircleIcon style={{height: 10, width: 10}}/>}
            />
        </div>
    );
};

export default TimePickerComponent;