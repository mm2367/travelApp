import { FlatList, Pressable, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";


export interface CategoriesProps{
    categories:string[];
    selectedCategory:number;
    onCategorySelect:(index:number)=>void;
}

export const Categories=(props:CategoriesProps)=>{
    return(
        <FlatList
        data={props.categories} 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.flatListStyles}
        renderItem={({item,index})=>{
            return(
            <Pressable onPress={()=>props.onCategorySelect(index)} style={[styles.itemContainer, props.selectedCategory===index? styles.selectItemContainer:null,index===0? {marginLeft:32}:null]}>
            <Text style={[styles.item, props.selectedCategory===index?styles.selectedItem:null]}>
                {item}
            </Text>
            </Pressable>
            )
        }}
        />
    )
        
}