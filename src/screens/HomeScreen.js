import { useState } from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import NavigationBar from '../components/NavigationBar';
import Swiper from 'react-native-deck-swiper';
import WebView from 'react-native-webview';


export default function HomeScreen() {
    const [cards, setCards] = useState([
        { id: 0, video: 'https://youtube.com/shorts/IMoaozWU6lw?si=4AndfdKGyDCA-bex'},
        { id: 1, video: 'https://youtube.com/shorts/z2oPnwQGs58?si=wqkHvHvQYS2S5iRF'},
        { id: 2, video: 'https://youtube.com/shorts/RxMz56K7IqQ?si=SxYJmFqktiK8WhYc'}
      ]);

      
    const [activeIndex, setActiveIndex] = useState(0);

    const removeYTActions = () => {
        const Buttons = document.querySelector('.action-container');
        const Metadata = document.querySelector('.metadata-container');
        if (Buttons) Buttons.parentNode.removeChild(Buttons);
        if (Metadata) Metadata.parentNode.removeChild(Metadata);

    }

    return (
        <>
            <View style={styles.card}>
                <Swiper
                cards={cards}
                renderCard={(card) => {
                    if (card.id === activeIndex) {
                        return (
                            // <View>
                                <WebView
                                    style={styles.webview}
                                    source={{ uri: `${card.video}` }}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    allowsInlineMediaPlayback={true}
                                    mediaPlaybackRequiresUserAction={false}
                                    // injectedJavaScript={removeYTActions} djpasjdpasdopajspdoasjdpaosdpoajsdpoasjdpoasjdpoas
  
                                />
                            // </View>
                        )
                    }    
                }}
                onSwiped={(cardIndex) => {
                    if(activeIndex < cards.length-1) {
                        setActiveIndex(activeIndex+1);
                    } else if (activeIndex >= cards.length-1){
                        setActiveIndex(0);
                    }
                }} 
                marginTop={0}
                infinite={true}
                horizontalSwipe={true}
                stackSize={cards.length-1}
                stackSeparation={0}
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
    card: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
     webview: {
        height: '100%',
        width: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
     }
  });