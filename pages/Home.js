import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator,StyleSheet, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import apiCall from '../src/ApiActionCreator';

const Home = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiReducer.data);
  const loading = useSelector((state) => state.apiReducer.loading);

  useEffect(() => {
    dispatch(apiCall('https://reqres.in/api/users?page=1'));
  }, []);


  const RenderItem=(item)=>{
    return(
      <View style={styles.mainview}>
      <Image source={{uri:item.avatar}} style={styles.ImageView}/>
      <View style={styles.secondvew}>
      <Text style={styles.txt1}>{item.first_name} {item.last_name}</Text>
      <Text style={styles.txt2}>{item.email}</Text>
      </View>
      </View>
    
    )
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList style={{width: '100%', marginTop : 10,backgroundColor: 'gray',padding: 20}}
          data={data}
          renderItem={({item}) => RenderItem(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default Home;

const styles=StyleSheet.create({
 
  mainview:{
    height:120,width:450,
    backgroundColor:"white",borderRadius:10,
    alignItems:"center",
    elevation:3,marginTop:"3%",
    flexDirection:"row",justifyContent:"center"
    },
  
    ImageView:
    {
    height:80,width:90,
    borderRadius:50,left:"15%"
    },
  
    secondvew:
    {height:"50%",width:"70%",
    justifyContent:"center",
    marginLeft:"10%"
    },
  
    txt1:
    {
      fontSize:16,
      fontWeight:"bold",
      color:"black"
    },
    txt2:
    {
      fontSize:13,
      fontWeight:"400",
      color:"black"
    }
})