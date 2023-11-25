import React from "react";
import { Image, ImageBackground, Pressable, SafeAreaView, Text, View, ScrollView } from "react-native"
import MapView, { Marker } from "react-native-maps";
import styles from './styles';
import Title from "../../Components/Title";
import InfoCard from "../../Components/InfoCard";
import Share from "react-native-share";
import ImgToBase64 from 'react-native-image-base64';

const AttractionDetails = ({ navigation, route }: any) => {
    const { item } = route?.params || {};
    const mainImage = item?.images?.length ? item?.images[0] : null
    const slicedImages = item?.images?.length ? item?.images : null;
    const goBack = () => {
        navigation.goBack();
    }
    const diffImages = item?.images.length - 4;
    const coords = {
        latitude: parseFloat(item?.coordinates?.lat),
        longitude: parseFloat(item?.coordinates?.long),
        latitudeDelta: 0.4,
        longitudeDelta: 0.4,
    }
    const getOpeningHours = `OPEN 
    ${item?.openingTime} - ${item.closingTime}`
    const onGalleryNavigate = () => {
        navigation.navigate('Gallery', { images: item?.images })
    }

    const onShare = async () => {
        try{
            const imageWithoutParams=mainImage.split('?')[0];
            const imageParts= imageWithoutParams?.split('.')
            const imageExtension=imageParts[imageParts?.length-1]
            const base64Image= await ImgToBase64.getBase64String(mainImage)

            Share.open({
                title:item.name,
                message:'hey, I wanted to share with you this amazing attraction',
                url:`date:image/${imageExtension || 'jpg'}:base64,${base64Image}`})
                .then((res) => {
                    console.log(res);
             })
                .catch((err) => {
                 err && console.log(err);
                });
         }
        catch(e)    {
            console.log('sharing error >>',e)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground style={styles.mainImage} imageStyle={{ borderRadius: 20 }} source={{ uri: mainImage }}>
                    <View style={styles.header}>
                        <Pressable onPress={goBack} hitSlop={8}>
                            <Image style={styles.icon} source={require('../../assets/back.png')} />
                        </Pressable>
                        <Pressable onPress={onShare} hitSlop={8}>
                            <Image style={styles.icon} source={require('../../assets/share.png')} />
                        </Pressable>
                    </View>
                    <Pressable onPress={onGalleryNavigate} style={styles.footer}>
                        {slicedImages?.map((image: string, index: number) => (
                            <View key={image}>
                                <Image source={{ uri: image }} style={styles.miniImage} />
                                {diffImages > 0 && index === slicedImages.length - 1 ?
                                    (<View style={styles.moreImagesContainer}>
                                        <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                                    </View>
                                    ) : null}
                            </View>
                        ))}
                    </Pressable>
                </ImageBackground>
                <View style={styles.headerContainer}>
                    <View style={[styles.textContainer]}>
                        <Title text={item?.name} style={styles.title} type="secondary" />
                        <Text style={styles.city}>{item?.city}</Text>
                    </View>
                    <Title text={item?.entryPrice} style={styles.title} type="secondary" />
                </View>
                <InfoCard text={item?.address} icon={require('../../assets/locationicon.png')} />
                <InfoCard text={getOpeningHours} icon={require('../../assets/timeicon.png')} />
                <MapView
                    style={{
                        width: '100%',
                        height: 200,
                        borderRadius: 10,
                        paddingBottom: 140
                    }}
                    initialRegion={coords}
                    removeClippedSubviews={true}
                >
                    <Marker coordinate={coords} title={item?.name} />
                </MapView>
                <Text onPress={() => navigation.navigate('MapScreen', { item })} style={styles.mapText}>Show full screen map</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(AttractionDetails);