import { StyleSheet, Text, View} from 'react-native';


export default function Header(){


    return(

        <View style={styles.header}>
            <Text style={styles.title}>The Recipe app!</Text>

        </View>

    );
    }

const styles = StyleSheet.create({

    header: {

        height: 80,
        paddingTop: 40,
        backgroundColor: 'green'

    },
    title:{

        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    }


})

