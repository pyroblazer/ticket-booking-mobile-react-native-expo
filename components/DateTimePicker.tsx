import React from 'react'
import { Platform } from 'react-native'
import { Button } from './Button';
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Text } from './Text';
import { HStack } from './HStack';

interface DateTimePickerProps {
  onChange: (date: Date) => void;  
  currentDate: Date;
}

export default function DateTimePicker(props: DateTimePickerProps) {
  if (Platform.OS === 'android') {
    return <AndroidDateTimePicker {...props} />;
  }

  if (Platform.OS === 'ios') {
    return <IOSDateTimePicker {...props} />;
  }

  return <WebDateTimePicker {...props} />;
}

const AndroidDateTimePicker = ({ onChange, currentDate }: DateTimePickerProps) => {
  const showDateTimePicker = () => {
    // Step 1: Pick date
    DateTimePickerAndroid.open({
      value: currentDate,
      mode: 'date',
      onChange: (_, selectedDate) => {
        if (!selectedDate) return;

        DateTimePickerAndroid.open({
          value: selectedDate,
          mode: 'time',
          is24Hour: true,
          onChange: (_, selectedTime) => {
            if (!selectedTime) return;

            const dateTime = new Date(selectedDate);
            dateTime.setHours(selectedTime.getHours());
            dateTime.setMinutes(selectedTime.getMinutes());
            onChange(dateTime);
          },
        });
      },
    });
  };

  return (
    <HStack p={10} alignItems='center' justifyContent='space-between'>
      <Text>{currentDate.toLocaleString()}</Text>
      <Button variant='outlined' onPress={showDateTimePicker}>
        Open DateTime Picker
      </Button>
    </HStack>
  );
};

const IOSDateTimePicker = ({ onChange, currentDate }: DateTimePickerProps) => {
  return (
    <RNDateTimePicker
      style={{ alignSelf: 'flex-start' }}
      value={currentDate}
      mode='datetime'
      display='default'
      onChange={(_, date) => {
        if (date) onChange(date);
      }}
    />
  );
};

const WebDateTimePicker = ({ onChange, currentDate }: DateTimePickerProps) => {
  const formatDateForInput = (date: Date) => {
    const pad = (n: number) => n.toString().padStart(2, '0');
    const yyyy = date.getFullYear();
    const MM = pad(date.getMonth() + 1);
    const dd = pad(date.getDate());
    const hh = pad(date.getHours());
    const mm = pad(date.getMinutes());
    return `${yyyy}-${MM}-${dd}T${hh}:${mm}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    if (!isNaN(selectedDate.getTime())) {
      onChange(selectedDate);
    }
  };

  return (
    <HStack p={10} alignItems='center' justifyContent='space-between'>
      <Text>{currentDate.toLocaleString()}</Text>
      <input
        type='datetime-local'
        value={formatDateForInput(currentDate)}
        onChange={handleChange}
        style={{
          border: '1px solid #ccc',
          borderRadius: 4,
          padding: 8,
          fontSize: 16,
        }}
      />
    </HStack>
  );
};