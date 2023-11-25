import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native"
import Title from "../../Components/Title";
import styles from './styles';
import { Categories } from "../../Components/Categories";
import { AttractionCard } from "../../Components/AttractionCard";
import jsonData from "../../data/attractions.json"
import categories from "../../data/categories.json"
import { useNavigation } from "@react-navigation/native";

const Home =()=>{

    const navigation=useNavigation();
    const [selectedCategory,setSelectedCategory]=useState<number>(0);
    const [attractionsData,setAttractionsData]=useState<any[]>([])
    useEffect(()=>{
        if(selectedCategory===0){
            setAttractionsData(jsonData);
        }
        else{
            setAttractionsData(jsonData.filter((item)=>{
                return item.categories.includes(categories[selectedCategory-1])
            }))
        }
    },[selectedCategory])

    return(
        <SafeAreaView style={styles.container}>
                <FlatList
                style={{flexGrow:1}}
                data={attractionsData}
                numColumns={2}
                ListEmptyComponent={(<Text>No places found</Text>)}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={()=>(
                    <>
                    <View style={{marginHorizontal:32, marginTop:32}}>
                    <Title text="Where do" type="primary"/>
                    <Title text="you want to go?" type="primary" style={{fontWeight:"700"}}/>
                    <Title text="Explore Attractions" type="secondary" style={{marginTop:40, marginBottom:32}}/>
                    </View>
                    <Categories onCategorySelect={setSelectedCategory}selectedCategory={selectedCategory}categories={['All',...categories]}/>
                    </>
                )
    }
                keyExtractor={item=>String(item.id)}
                renderItem={({item,index})=>(
                    <AttractionCard 
                    style={index%2===0 ? {marginRight:12, marginLeft:32}:{marginRight:32}}
                    subTitle={item?.city}
                    title= {item.name}
                    //@ts-ignore
                    onPress={()=>navigation.navigate('AttractionDetails' as never,{item})}
                    imgSrc={item.images[0]}/>
                )
                }
                />
        </SafeAreaView>
    )
}

export default React.memo(Home);