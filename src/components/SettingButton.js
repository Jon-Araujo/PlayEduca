import {Alert, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function SettingButton() {
    const Navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => Navigation.navigate('Setting')} style={styles.container}>
            <Icon name="settings" size={32} color="#fff" style={styles.icon} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#85e085',
        padding: '3%',
        width: '18%',
        borderRadius: 20
    },
    icon: {
        textAlign: 'center',
        // fontSize: 40
    }
});