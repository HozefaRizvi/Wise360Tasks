import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CustomHeading } from '../../CustomComponents/CustomScreenItems';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function SleepMonitorScreen() {
  return (
    <LinearGradient
        colors={['#BBDDF2', 'white', 'white', '#FFE2E8']}
        style={styles.container}
      >
        <View style={styles.contentContainer}>
          <CustomHeading text="Screen to be Made.." color="#631970" marginTop={hp('2%')} />
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
