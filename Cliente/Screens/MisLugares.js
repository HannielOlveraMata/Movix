import {StyleSheet, Text, View, StatusBar, Button,TouchableOpacity,Image,Dimensions,SafeAreaView,FlatList} from 'react-native';
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

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          casa: 'Casa',
          direction:'Av de la cosas de marfil colonia costureras #12',          
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28',
            casa: 'Casa',
            direction:'Av de la cosas de marfil colonia costureras #12',          
          },
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb11',
            casa: 'Casa',
            direction:'Av de la cosas de marfil colonia costureras #12',          
          },
      ];
    
      const Item = ({casa,direction}) => (
        <View style={styles.item}>
            <View style={{width:'20%',height:60,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity>
                    <Icon name="settings-outline" size={30}></Icon>
                </TouchableOpacity>
            </View>
            <View style={{width,height:60}}>
                <Text style={{fontWeight:'bold',fontSize:13}}>{casa}</Text>
                <Text style={styles.direction}>{direction}</Text>                                
            </View>
        </View>
      );
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
                <Text style={{marginTop:10,fontSize:18,fontWeight:'bold',marginVertical:10}}>Guardadas</Text>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={DATA}
                        renderItem={({item}) => <Item casa={item.casa} direction={item.direction}/>}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
            <View>
                <Button title='CLICK'></Button>
            </View>
        </View>
    );    
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',    
        backgroundColor:'#EBECF4',                    
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
        width:330,     
        height,            
    },
    item:{
        flexDirection:'row',
        borderRadius:10, 
        borderWidth:1,
        borderColor:'#C3CAC1',                      
        width:320,
        backgroundColor:'white',  
        marginVertical:4,                      
    },
})

export default MisLugares;