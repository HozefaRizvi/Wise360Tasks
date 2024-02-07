import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Modal, Portal, Text, TextInput, Button, Divider,Menu } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace 'FontAwesome' with the name of the icon set you're using

export default function CustomWaterReminderModal({ visible, onDismiss,onSave }) {
  const [title,settitle] = useState()
  const [time, setTime] = useState(new Date());
  const [quantity, setQuantity] = useState('');
  const [repeat, setRepeat] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showToDatePicker, setShowToDatePicker] = useState(false);
  const [quantityMenuVisible, setQuantityMenuVisible] = useState(false);
  const [repeatMenuVisible, setRepeatMenuVisible] = useState(false);
  const [timeMenuVisible, setTimeMenuVisible] = useState(false);
  const [timepicker,setfromtimepicker] =useState(false)
  const handleTimePress = () => {
    setfromtimepicker(true);
  };

  const handleQuantityPress = () => {
    setQuantityMenuVisible(true);
  };

  const handleRepeatPress = () => {
    setRepeatMenuVisible(true);
  };

  const handleQuantitySelect = (selectedQuantity) => {
    setQuantity(selectedQuantity);
    setQuantityMenuVisible(false);
  };

  const handleRepeatSelect = (selectedRepeat) => {
    
    setRepeat(selectedRepeat);
    setRepeatMenuVisible(false);
  };

  const handleFromDateChange = (event, selectedDate) => {
    setFromDate(selectedDate || new Date());
    setShowFromDatePicker(false);
  };
  const handlefromTimeChange = (event, selectedTime) => {
    setTime(selectedTime || new Date());
    setfromtimepicker(false);
  };
  const handleToDateChange = (event, selectedDate) => {
    setToDate(selectedDate || new Date());
    setShowToDatePicker(false);
  };

  const handleSave = () => {
    onSave(title, time.toLocaleTimeString(), quantity, repeat,fromDate,toDate);
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.heading}>Set Reminder</Text>
          <TextInput
            label="Title"
            mode="outlined"
            style={styles.textField}
            theme={{ colors: { primary: 'green' } }}
            onChangeText={(text)=>settitle(text)}
          />   
         <View style={styles.row}>
            <TouchableOpacity onPress={handleTimePress}>
              <Text>Time</Text>
            </TouchableOpacity>
            <Menu
            visible={quantityMenuVisible}
            onDismiss={() => setQuantityMenuVisible(false)}
            anchor={<Text onPress={handleQuantityPress}>Quantity</Text>}
          >
            <Menu.Item onPress={() => handleQuantitySelect('300ml')} title="300ml" />
            <Menu.Item onPress={() => handleQuantitySelect('600ml')} title="600ml" />
          </Menu>
          <Menu
            visible={repeatMenuVisible}
            onDismiss={() => setRepeatMenuVisible(false)}
            anchor={<Text onPress={handleRepeatPress}>Repeat</Text>}
          >
            <Menu.Item onPress={() => handleRepeatSelect('Daily')} title="Daily" />
            <Menu.Item onPress={() => handleRepeatSelect('Weekly')} title="Weekly" />
          </Menu>
          </View>
          <View style={styles.row}>
                <Text style={styles.value}> <Icon name="clock-o" size={12} color="green" /> {time.toLocaleTimeString()}</Text>
                <Text style={styles.value}>{quantity}</Text>
                <Text style={styles.value}>{repeat}</Text>
         </View>
          <Divider style={styles.divider} />
          <View style={styles.row}>
            <Text onPress={() => setShowFromDatePicker(true)}>From </Text>
            <Text onPress={() => setShowToDatePicker(true)}>To </Text>
         </View>
         <View style={styles.row}>
            <Text >{fromDate.toDateString()}</Text>
            <Text >{toDate.toDateString()}</Text>
         </View>
      {showFromDatePicker && (
        <DateTimePicker
            value={fromDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => handleFromDateChange(event, selectedDate)}
        />
        )}
       {timepicker && (
            <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={(event, selectedTime) => handlefromTimeChange(event, selectedTime)}
            />
        )}
        {showToDatePicker && (
        <DateTimePicker
            value={toDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => handleToDateChange(event, selectedDate)}
        />
        )}
          <View style={styles.row}> 
          <Button mode="outlined" onPress={onDismiss} style={styles.cancelButton}   labelStyle={{ color: 'green' }}>
            Cancel
          </Button>
          <Button mode="contained" onPress={handleSave} style={styles.saveButton}>
            Save
          </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
}
const styles = StyleSheet.create({
    modalContainer: {
        alignSelf: 'center',
        width: wp('89%'), 
        padding: wp('5%'),
        backgroundColor: 'white',
        borderRadius: wp('3%'),
      },
  modalContent: {
    alignItems: 'start',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textField: {
    width: '100%',
    marginBottom: 10,
    backgroundColor:'white',
    borderColor:'green'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  divider: {
    height: 2,
    backgroundColor: 'black',
    width: '100%',
    marginBottom: 10,
  },
  saveButton: {
    marginTop: 10,
    backgroundColor:'green'
  },
  cancelButton: {
    marginTop: 5,
    color: 'green',  
    borderColor: 'green',
  },
  value:{
    height: hp('3%'),
    width: wp('25%'), 
    backgroundColor: '#D9D9D9',
    textAlign: 'center',
    textAlignVertical: 'center',
    color:'green',
    overflow: 'hidden',
  }
});
