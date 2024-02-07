import { TouchableOpacity, View } from 'react-native';
export const CustomTabbarButton = ({ children, onPress }) => {
    return (
      <TouchableOpacity
        style={{
          top: -51,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 40,
          backgroundColor: '#F0F0F2',
          height: 80,
          width: 80,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 4,
          elevation: 5,
        }}
        onPress={onPress}
      >
        <View>{children}</View>
      </TouchableOpacity>
    );
  };