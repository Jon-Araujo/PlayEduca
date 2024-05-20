import {Alert, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchButton() {
    return (

        <TouchableOpacity onPress={() => {Alert.alert('Botão pressionado!')}} style={styles.container}>
            <Feather name="search" size={32} color="#fff" style={styles.icon} />
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
