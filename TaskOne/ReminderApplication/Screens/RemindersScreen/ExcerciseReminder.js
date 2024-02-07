import React ,{useState}from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Provider as PaperProvider } from 'react-native-paper';


//export Custom Items
import { CustomAddButton } from '../../CustomComponents/CustomScreenItems';
import { CustomHeading } from '../../CustomComponents/CustomScreenItems';
import { CustomSubheading } from '../../CustomComponents/CustomScreenItems';
import ExcerciseReminderModal from '../../CustomComponents/ExcerciseReminderModal';

export default function ExcerciseReminderScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
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
          source={require('../../assets/exercise.jpg')}
          style={styles.image}
        />
        <CustomHeading text="Empty in Drink Water" color="#631970" marginTop={hp('2%')} />
        <CustomSubheading text="Add a water and it will show here" color="gray" marginTop={hp('1%')} />
        <CustomAddButton onPress={handleAddButtonPress}/>
      </View>
    </LinearGradient>
    <ExcerciseReminderModal visible={isModalVisible} onDismiss={hideModal}/>
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
    width: wp('60%'),
    height: hp('20%'),
    resizeMode: 'contain',
    borderRadius:wp('4%')
  },
});
