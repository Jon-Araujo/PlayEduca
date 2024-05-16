import {Text, StyleSheet, View} from "react-native";
import SearchButton from "./SearchButton";
import ProfileButton from "./ProfileButton";
import SettingButton from "./SettingButton";

export default function NavigationBar() {
    return (
        <View style={styles.container}>
        <ProfileButton />
        <SearchButton />
        <SettingButton />
    </View>
    );

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#70a9ff',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        height: '15%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    // button: {

    // }
})