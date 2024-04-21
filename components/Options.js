import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function Options({item, handlePress, handleCreateRecipe, handleAddCategory}){

    const onPressHandler = ()=>{
        if(item.key === 1){
            handlePress();
        }
        else if(item.key === 2){
            handleCreateRecipe();
        }
        else if(item.key == 3){
            handleAddCategory();
        }
    }

    return(
        <TouchableOpacity onPress={onPressHandler}>

            <Text style={styles.item}>{item.text}</Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    item: {
        padding: 25,
        fontSize: 27,
        color: 'black',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#bbb',
        marginTop: 20,
        backgroundColor: 'orange'


    }

});





