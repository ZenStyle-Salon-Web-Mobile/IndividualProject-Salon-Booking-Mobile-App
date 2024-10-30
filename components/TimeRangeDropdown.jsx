import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const generateTimeRanges = () => {
    const times = [];
    let hour = 20; // Start at 8:00 PM (24-hour format)

    while (true) {
        const start = hour % 24;
        const end = (hour + 1) % 24;

        const formatTime = (h) => {
            const period = h >= 12 && h < 24 ? 'PM' : 'AM';
            const hour12 = h % 12 || 12;
            return `${hour12}:00 ${period}`;
        };

        times.push({ label: `${formatTime(start)} - ${formatTime(end)}`, value: `${formatTime(start)} - ${formatTime(end)}` });

        hour += 1;
        if (hour === 17) break; // End at 5:00 PM
    }

    return times;
};

const TimeRangeDropdown = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [timeRanges] = useState(generateTimeRanges());

    return (

            <DropDownPicker
                open={open}
                value={value}
                items={timeRanges}
                setOpen={setOpen}
                setValue={setValue}
                placeholder="Select a time range"
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
            />

    );
};

const styles = StyleSheet.create({
    container: { padding: 20, flex: 1, alignItems: 'center', justifyContent: 'center' },
    label: { fontSize: 16, marginBottom: 10 },
    dropdown: {
        width: 200,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#009688',
    },
    dropdownContainer: {
        width: 200,
        borderColor: '#009688',
    },
});

export default TimeRangeDropdown;


