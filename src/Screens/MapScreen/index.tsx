import React from "react";
import { View, Text, Image } from "react-native"
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
const MapScreen = ({ navigation, route }) => {
    const { item } = route?.params || {};
    const onBack = () => {
        navigation.goBack()
    }
    const coords = {
        latitude: parseFloat(item?.coordinates?.lat),
        longitude: parseFloat(item?.coordinates?.long),
        latitudeDelta: 0.4,
        longitudeDelta: 0.4,
    }
    return (
        <View style={styles.container}>
            <MapView
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                    paddingBottom: 140
                }}
                initialRegion={coords}>
                <Marker coordinate={coords} title={item?.name} />
            </MapView>
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack}>
                    <Image style={styles.back} source={require('../../assets/back.png')} />
                </TouchableOpacity>

                <Text style={styles.title}>{`${item?.name}, ${item?.city}`}</Text>
            </View>
        </View>
    )
}

export default React.memo(MapScreen);