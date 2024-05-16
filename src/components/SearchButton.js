import {Alert, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function SearchButton() {
    return (
        <TouchableOpacity onPress={() => {Alert.alert('Botão pressionado!')}} style={styles.container}>
            <Icon name= 'search1' size={32} color='#fff' style={styles.icon} />
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
