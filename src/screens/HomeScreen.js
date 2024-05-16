import {Text, StyleSheet, Image, View} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import bd from '../BdImages.json';

export default function HomeScreen() {

    const listImages = [];
    for(let i = 0; i < bd.length; i++) {
        listImages.push(1)
    };

    return (
        <>
            <Text>{listImages[0]}</Text>

            {/* <Image source={require(bd.image1)} style={styles.images} /> */}
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
    images: {
        width: '100%',
        height: '100%'
    }
  });