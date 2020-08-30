import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector } from 'react-redux';


const LitleCard = ({ name }) => {

   
    return (
        <View style={{
            backgroundColor:"red",
            height:50,
            width:170,
            borderRadius:4,
            marginTop:10
        }}>
            <Text style={{
                textAlign: "center",
                color: "white",
                fontSize:22,
                marginTop:5
            }}> { name } </Text>
        </View>
    )
}


 const Explore = () => {

    const cardData = useSelector(state => {
        return state.cardData;
   });
    return (
       <View style={{flex:1}}>
           <Header/>
           <ScrollView>
           <View style={{
               flexDirection:"row",
               flexWrap:"wrap",
               justifyContent:"space-around"

           }}>
           <LitleCard name="Gaming" />
           <LitleCard name="Trending" />
           <LitleCard name="Music" />
           <LitleCard name="News" />
           <LitleCard name="Movies" />
           <LitleCard name="Fashion" />
         </View>
         <Text style={{
             margin:8,
             fontSize:22,
             borderBottomWidth:1
         }} >Trending Videos</Text>
           <FlatList
              data={ cardData }
              renderItem={({item})=> {
                return <Card
                        videoId={ item.id.videoId }
                        title={ item.snippet.title }
                        channel={ item.snippet.channelTitle }
                />
              }}
              keyExtractor={ item => item.id.videoId }
             />
            </ScrollView>
       </View>
    )
}

export default Explore;