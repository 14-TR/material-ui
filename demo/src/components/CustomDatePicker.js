import * as React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function ButtonField(props) {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { 'aria-label': ariaLabel } = {},
  } = props;

  return (
    <Button
      variant="outlined"
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
      size="small"
      onClick={() => setOpen?.((prev) => !prev)}
      startIcon={<CalendarTodayRoundedIcon fontSize="small" />}
      sx={{ minWidth: 'fit-content', margin: '5px' }}
    >
      {label ? `${label}` : 'Pick a date'}
    </Button>
  );
}

ButtonField.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inputProps: PropTypes.shape({
    'aria-label': PropTypes.string,
  }),
  InputProps: PropTypes.shape({
    endAdornment: PropTypes.node,
    startAdornment: PropTypes.node,
  }),
  label: PropTypes.node,
  setOpen: PropTypes.func,
};

export default function TwoDatePicker() {
  const [startDate, setStartDate] = React.useState(dayjs().startOf('day'));
  const [endDate, setEndDate] = React.useState(dayjs().endOf('day'));
  const [openStart, setOpenStart] = React.useState(false);
  const [openEnd, setOpenEnd] = React.useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* From Date Picker */}
        <DatePicker
          value={startDate}
          label={startDate == null ? null : startDate.format('MMM DD, YYYY')}
          onChange={(newValue) => setStartDate(newValue)}
          slots={{ field: ButtonField }}
          slotProps={{
            field: { setOpen: setOpenStart },
            nextIconButton: { size: 'small' },
            previousIconButton: { size: 'small' },
          }}
          open={openStart}
          onClose={() => setOpenStart(false)}
          onOpen={() => setOpenStart(true)}
          views={['day', 'month', 'year']}
        />

        {/* To Date Picker */}
        <DatePicker
          value={endDate}
          label={endDate == null ? null : endDate.format('MMM DD, YYYY')}
          onChange={(newValue) => setEndDate(newValue)}
          slots={{ field: ButtonField }}
          slotProps={{
            field: { setOpen: setOpenEnd },
            nextIconButton: { size: 'small' },
            previousIconButton: { size: 'small' },
          }}
          open={openEnd}
          onClose={() => setOpenEnd(false)}
          onOpen={() => setOpenEnd(true)}
          views={['day', 'month', 'year']}
        />
      </div>
    </LocalizationProvider>
  );
}
