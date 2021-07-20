import 'date-fns';
import React, { FC } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from 'moment';

interface Props {
    idx: number;
    date: string;
    onDateChange: (date: Date | null) => void;
    hasChanged: boolean
}

const DatePicker: FC<Props> = ({ idx, date, onDateChange, hasChanged }) => {
    // The first commit of Material-UI

    const handleDateChange = (date: Date | null) => {
        onDateChange(date)
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                style={{ width: "150px", border: hasChanged ? "2px solid #4C98BF" : "none" }}
                format="dd/MM/yyyy"
                margin="normal"
                id={"date-picker-inline" + idx}
                value={moment(date, 'DD/MM/yyyy').toDate()}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
}

export default DatePicker