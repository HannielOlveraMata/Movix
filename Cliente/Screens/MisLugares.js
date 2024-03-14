import {StyleSheet, Text, View, StatusBar, Button,TouchableOpacity,Image,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as React from 'react';
import MapView, {Marker,Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');

const MisLugares=()=>{
    const [origin,setOrigin]=React.useState({
        latitude:20.581436,
        longitude:-100.390633,
      });
    const [destination,setDestination]=React.useState({
        latitude:20.589386,
        longitude:-100.410147,
    });
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <TouchableOpacity>
                    <Icon name="arrow-back" size={39} color="white" 
                    style={{marginStart:20}}/>                    
                </TouchableOpacity>
                <Text style={{color:'white',fontWeight:'bold',fontSize:35,marginStart:20}}>Mis lugares</Text>
            </View>
            <View style={styles.body}>
                <MapView style={styles.map}
                    initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta:0.09,
                    longitudeDelta:0.06
                    }}
                >
                <Marker
                    draggable
                    coordinate={origin}
                    onDragEnd={(direction)=>{setOrigin(direction.nativeEvent.coordinate)}}
                />
                <Marker
                    draggable
                    coordinate={destination}
                    onDragEnd={(direction)=>{setDestination(direction.nativeEvent.coordinate)}}
                />
                <MapViewDirections
                    origin={origin}
                    destination={destination}                    
                />
                <Polyline
                    coordinates={[origin,destination]}
                    strokeColor='black'
                    strokeWidth={3}
                />
                </MapView>
            </View>
            <View style={styles.list}>
                <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}>Guardadas</Text>
            </View>
        </View>
    );    
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',                        
    },
    title:{
        backgroundColor:'#2447E5',        
        width,
        height:100,
        justifyContent:'flex-start',
        alignItems:'flex-end',  
        flexDirection:'row',      
    },
    body:{        
        width,   
        height:350,
    },
    map:{
        width,
        height:350,        
    },
    list:{
        width:320,     
        height,   
        
    },
})

export default MisLugares;