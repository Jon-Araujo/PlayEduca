import { useState } from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import Swiper from 'react-native-deck-swiper';
import image1 from '../../assets/images/image1.jpeg';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.jpeg';


export default function HomeScreen() {
    const [cards, setCards] = useState([
        { id: 1, image: image1 },
        { id: 2, image: image2 },
        { id: 3, image: image3 }
      ]);

    return (
        <>
            <View style={styles.card}>
                <Swiper
                cards={cards}
                renderCard={(card) => {
                return (
                    <Image source={card.image} style={styles.images} />
                )
                }}
                onSwiped={(cardIndex) => {
                console.log(cardIndex);
                }} 
                infinite={true}
                horizontalSwipe={true}
                stackSize={3}
                stackSeparation={0}
                // backgroundColor='000'
                overlayLabels={{
                    left: {
                    title: 'Não',
                    style: {
                        label: {
                        backgroundColor: 'none',
                        borderWidth: 10,
                        borderColor: 'red',
                        color: 'red',
                        fontSize: 48,
                        },
                        wrapper: {
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-start',
                        marginTop: -70,
                        marginLeft: -160,
                        transform: [{ rotate: '30deg' }]
                        },
                    },
                    },
                    right: {
                    title: 'Gostei!',
                    style: {
                        label: {
                            borderWidth: 10,
                            borderColor: 'green',
                            color: 'green',
                            fontSize: 48,
                        },
                        wrapper: {
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            marginTop: -30,
                            marginLeft: 160,
                            transform: [{ rotate: '-30deg' }]
                        },
                    },
                    },
                }}
                />
            </View>
            <NavigationBar/>
        </>
    )
}

const styles = StyleSheet.create({
    images: {
        width: '100%',
        height: '75%'
    },
    card: {
        height: '85%',
    }
  });