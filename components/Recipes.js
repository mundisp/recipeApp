import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';



export default function Recipes({recipe}){

    return(

        <View>
            <Text style={styles.recipesList}>{recipe.name}</Text>
        </View>

    );
} 

const styles = StyleSheet.create({

    recipesList: {

        borderStyle: 'dashed',
        fontSize: 25,
        borderWidth: 1,
        borderRadius: 13,
        borderColor: '#bbb',
        marginTop: 20,
        backgroundColor: 'orange',
        textAlign: 'center',
        padding: 15
    }



})