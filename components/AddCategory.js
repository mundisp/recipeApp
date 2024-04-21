import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import {useState} from 'react';
import ImagePicker from 'react-native-image-picker';

export default function AddCategory(){


    return(
        <View>
            <Text style={styles.text}>Please enter the name of the new category:</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.text}>Select a picture to represent this food category</Text>

            <Text style={styles.item}> Add Category</Text>
        </View>
    );



}

const styles = StyleSheet.create({


    text:{
        marginTop: 35,
        fontSize: 25,
        textAlign: 'center'

    },
    input:{
        borderWidth:1,
        borderColor: '#777',
        width: 200,
        padding: 10,
        fontSize: 25,
        textAlign: 'center',
        marginLeft: 100,
        marginTop: 20

    },

    item: {
        padding: 25,
        fontSize: 27,
        color: 'black',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#bbb',
        marginTop: 20,
        backgroundColor: '#25db2b',
        textAlign: 'center',
        marginLeft: 75,
        marginRight: 75


    }

});