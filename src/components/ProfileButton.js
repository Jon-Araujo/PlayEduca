import {Alert, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function ProfileButton() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.container}>
            <Icon name="profile" size={32} color="#fff" style={styles.icon} />
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
    }
});