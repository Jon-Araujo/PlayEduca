import {Text, StyleSheet} from 'react-native';
import NavigationBar from '../components/NavigationBar';

export default function SettingScreen() {
    return (
        <>
            <Text>SettingScreen</Text>
            <NavigationBar style={styles.container}/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });