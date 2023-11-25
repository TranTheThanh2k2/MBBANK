import { useEffect, useState } from "react";
import { SafeAreaView, View , Text, ScrollView, FlatList , Image, Pressable} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Order = ({navigation}) => {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://65465bfefe036a2fa9558ece.mockapi.io/Donut/redux?fbclid=IwAR0Z9ZGnZZ7TB8vs5YWqayA6pkgqG0duxT_u_HnONsAP2-LArxFKuu-DnNA")
      .then((response) => response.json())
      .then((json) => {
        console.log(data);
        setData(json);
      });
  }, []);
  const renderItem = ({item}) =>{
    return (
      <ScrollView>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:'50px',marginRight:'30px',marginLeft:'30px'}} >
          <View style={{border:'1px solid skyblue' , borderRadius:'10px' ,width:'350px',height:'200px' , justifyContent:'center', alignItems:'center'}}> 
            <Image style={{height:'100px',resizeMode:'contain',width:'250px'}} source={item.img}/>
            <Text style={{fontSize:'18px', color:'black',fontWeight:'bold'}}>{item.Name}</Text>
            <Text style={{fontSize:'15px', color:'black',fontWeight:'bold'}}>{item.Price}</Text>
            <Text style={{fontSize:'18px', color:'black',fontWeight:'bold'}}>{item.Author}</Text>
            <Text style={{fontSize:'15px', color:'black',fontWeight:'bold'}}>{item.Date}</Text>
            <Text style={{fontSize:'18px', color:'black',fontWeight:'bold'}}>{item.Type}</Text>
            <Pressable 
            onPress={()=>navigation.navigate('Item',{
                img : item.img,
                Name : item.Name,
                Price : item.Price,
                Author : item.Author,
                Date : item.Date,
                Type : item.Type,
            })}
            style={{width:"100x",height:"60px",backgroundColor:'skyblue' ,justifyContent:'center',borderRadius:'10px'}}><Text style={{fontSize:'18px' , color:'#2F4F4F'}}>Đặt Mua</Text></Pressable>
          </View>
        </View>
      </ScrollView>
    )
  }
    return (
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <View style={{flex:'1',width:'400px',backgroundColor:'#00008B',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
            <Pressable onPress={()=>navigation.navigate('TrangChu')}><Entypo name="chevron-left" size={30} color="white" /></Pressable>
            <Text style={{color:'red',fontSize:'25px'}}>Đặt Vé Xem Phim</Text>
            <Pressable onPress={()=>navigation.navigate('TrangChu')}><Ionicons name="md-home-outline" size={30} color="white" /></Pressable>
          </View>
            <FlatList 
                style={{ flex:'5'}}
                data={data}
                renderItem={renderItem} 
                
            />
        </SafeAreaView>
    )
}
export default Order;