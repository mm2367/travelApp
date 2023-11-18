import React, { useState } from "react";
import { SafeAreaView, View } from "react-native"
import Title from "../../Components/Title";
import styles from './styles';
import { Categories } from "../../Components/Categories";

const Home =()=>{
    const [selectedCategory,setSelectedCategory]=useState<number>(0);

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Title text="Where do" type="primary"/>
                <Title text="you want to go?" type="primary" style={{fontWeight:"700"}}/>
                <Title text="Explore Attractions" type="secondary" style={{marginTop:40, marginBottom:32}}/>
                <Categories onCategorySelect={setSelectedCategory}selectedCategory={selectedCategory}categories={['All', 'Popular','Recommended','Most Viewed','Most Visited']}/>
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Home);