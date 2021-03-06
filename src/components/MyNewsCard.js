import React from 'react';
import { Text, View,Image,StyleSheet,Dimensions} from 'react-native';


const MyNewsCard = ({newsData}) => {

    
    return(
        <View style = {styles.container}>
            <View>
                <Image 
                    style = {styles.Image}
                    source = {{uri :newsData.imageUrl}}
                />
            </View>
            <View>
                <Text style ={styles.Title}>{newsData.title}</Text>
                <Text style ={styles.Desc}>{newsData.description}</Text>
            </View>
        </View>

    )
}

export {MyNewsCard};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin:10,
        padding:10,
        borderRadius:20,
        borderBottomWidth:5,

    },
    Image:{
        resizeMode: "contain",
        height: Dimensions.get('window').height * 0.20,
    },
    Title:{
        fontWeight : '800',
        fontSize: 15,
    },
    Desc:{
        fontWeight: '500',
    },
})