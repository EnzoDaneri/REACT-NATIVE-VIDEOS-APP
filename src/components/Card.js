import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';


const Card = ( props ) => {

  const navigation = useNavigation();

  const { colors } = useTheme();
  const textColor = colors.iconColor;

    return(
        <TouchableOpacity
           onPress={() => navigation.navigate( "videoPlayer", {videoId: props.videoId, title: props.title}) }
         >
        <View style={{marginBottom:10}}
            
        >
            <Image
              source={{uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }}
              style={{
                  width:"100%",
                  height:200,
              }}
            />
            <View style={{
                flexDirection:"row",
                margin:5
            }}>
              <MaterialIcons name="account-circle" size={40} color="#212121" />
               <View style={{
                   marginLeft:10
               }}>
               <Text style={{
                   fontSize:20,
                   width:Dimensions.get("screen").width-50,
                   color: textColor
               }}
               ellipsizeMode="tail"
               numberOfLines={2}
               
            >{ props.title }</Text>
                <Text style={{
                    color: textColor
                }} > { props.channel } </Text>
               </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}


export default Card;