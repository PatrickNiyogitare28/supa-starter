import React from 'react';
import { StyleSheet } from 'react-native';
import {Button as PaperButton} from "react-native-paper";

export default function Button({mode,style,...props}){
    return(
        <PaperButton
        style={[
            styles.button,
            mode==='outlined' && {backgroundColor:'black'},
            style,
        ]}
        labelStyle={styles.text}
        mode={mode}
        {...props}
        />
    )
}

const styles=StyleSheet.create({
    button:{
        width:'80%',
        padding:4,
        borderRadius:5,
    },

    text:{
        fontWeight:'bold',
        fontSize:15,
        color:'#FFFFFF',
    }
})