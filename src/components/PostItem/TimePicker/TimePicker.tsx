import 'date-fns';
import React, { FC } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
} from '@material-ui/pickers';
import { BiTime } from 'react-icons/bi';
import moment from 'moment';

interface Props {
    idx: number;
    time: string;
    onTimeChange: (time: Date | null) => void;
    hasChanged: boolean;
}

const DatePicker: FC<Props> = ({ idx, time, onTimeChange, hasChanged }) => {
    // The first commit of Material-UI

    const handleDateChange = (t: Date | null) => {
        onTimeChange(t)
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
                style={{ width: "100px", marginRight: 20, border: hasChanged ? "2px solid #4C98BF" : "none" }}
                disableToolbar
                placeholder="08:00 AM"
                mask="__:__ _M"
                format="HH:mm"
                margin="normal"
                keyboardIcon={<BiTime />}
                id={"tile-picker-inline" + idx}
                value={moment("01/01/2021:" + time, 'DD/MM/yyyy:HH:mm').toDate()}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
            />
        </MuiPickersUtilsProvider>
    );
}

export default DatePicker