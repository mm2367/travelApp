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
        style={styles.flatListMargin}
        renderItem={({item,index})=>{
            return(
            <TouchableOpacity onPress={()=>props.onCategorySelect(index)} style={[styles.itemContainer, props.selectedCategory===index? styles.selectItemContainer:null]}>
            <Text style={[styles.item, props.selectedCategory===index?styles.selectedItem:null]}>
                {item}
            </Text>
            </TouchableOpacity>
            )
        }}
        />
    )
        
}