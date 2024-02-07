import React , { useState }from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Provider as PaperProvider } from 'react-native-paper';

//export Custom Items
import { CustomAddButton } from '../../CustomComponents/CustomScreenItems';
import { CustomHeading } from '../../CustomComponents/CustomScreenItems';
import { CustomSubheading } from '../../CustomComponents/CustomScreenItems';
import CustomWaterReminderModal from '../../CustomComponents/WaterREminderModal';

export default function DrinkWaterReminderScreen() {
  //States
  const [isModalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [selectedRepeat, setSelectedRepeat] = useState('');
  const[selectedfromDate,setFromDate] = useState('');
  const[selectedtoDate,setToDate] = useState('');

  // Function to update the selected values
  const handleSaveModal = (title, time, quantity, repeat,fromDate,toDate) => {
    setSelectedTitle(title);
    setSelectedTime(time);
    setSelectedQuantity(quantity);
    setSelectedRepeat(repeat);
    setFromDate(fromDate)
    setToDate(toDate)
    hideModal();
  };
  //ModalOpens
  const handleAddButtonPress = () => {
    showModal();
  };
  return (
    <PaperProvider>
      <LinearGradient
        colors={['#BBDDF2', 'white', 'white', '#FFE2E8']}
        style={styles.container}
      >
        <View style={styles.contentContainer}>
          <Image
            source={require('../../assets/Logo.png')}
            style={styles.image}
          />
          <CustomHeading text="Empty in Drink Water" color="#631970" marginTop={hp('2%')} />
          <CustomSubheading text="Add a water and it will show here" color="gray" marginTop={hp('1%')} />
          <CustomAddButton onPress={handleAddButtonPress} />
        </View>
      </LinearGradient>
      <CustomWaterReminderModal visible={isModalVisible} onDismiss={hideModal} onSave={handleSaveModal} />
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: wp('40%'),
    height: hp('20%'),
    resizeMode: 'contain',
  },
});
