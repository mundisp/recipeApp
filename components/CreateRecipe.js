import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import {useState} from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function CreateRecipe(){

    const [categories, setCategories] = useState([

        {value: 'SeaFood', key: 1},
        {value: 'Vega', key: 1},
        {value: 'Pasta dishes', key: 1}

    ]);

    return(
        <View>
            <Text style={styles.test}>Enter a name for this recipe:</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.test}>Select the category of this recipe:</Text>
            <Dropdown
            data={categories}
            />
            
        </View>
    );
    



}

const styles = StyleSheet.create({


    test:{
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

    }

});