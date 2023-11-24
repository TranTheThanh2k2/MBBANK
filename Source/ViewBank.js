import { Pressable, SafeAreaView, View,Text ,Image, TextInput, FlatList, ScrollView,Modal, Button} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
const ViewBank = ({navigation}) => {
const [data, setData] = useState([]);
const [openDialog,setOpenDialog] = useState(false);
const [selectedUser , setSelectedUser] = useState(undefined)
const getAPIData = async ()=>{
    const url = "https://65465bfefe036a2fa9558ece.mockapi.io/Donut/MBBank"
    let result = await fetch(url,{});
    result = await result.json();
    if(result){
        setData(result)
        getAPIData();
    }
}
const deleteUser = async (id) =>{
    const url = "https://65465bfefe036a2fa9558ece.mockapi.io/Donut/MBBank";
    console.log(id)
    let result = await fetch(`${url}/${id}`,{
        method: "DELETE"
    })
    result = await result.json();
    if(result){
        console.warn("DELETE User Succes")
      getAPIData()
    }
}
useEffect(()=>{getAPIData()},[]);

  const renderItem = ({ item }) => {
    return (
      <ScrollView>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "black",
            flexDirection: "row",
            justifyContent: "space-around",}}>
            <View style={{marginBottom:'20px',width:'200px'}}>
                <Text style={{ fontSize: "18px",textTransform:'uppercase', color: "black", fontWeight: "bold" }}>{item.Name}</Text>
                <Text>{item.Stk}</Text>
                <Text>{item.Bank}</Text>
            </View>
            <View>
                <Button style={{marginRight:'100px'}} title="Delete" onPress={()=> deleteUser(item.id)}/>
            </View> 
        </View>
      </ScrollView>
    );
  };
    return (
        <SafeAreaView style={{flex:'1'}}>
                <View style={{flex:1,height:'150px',flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#2C48DD'}}>
                    <Pressable onPress={()=>navigation.navigate('TrangChu')} style={{marginLeft:'20px'}}><AntDesign name="left" size={30} color="white" /></Pressable>
                    <Text style={{fontSize:'20px', color:'white'}}>Chuyển tiền</Text>
                    <Pressable onPress={()=>navigation.navigate('TrangChu')} style={{marginRight:'20px'}}><AntDesign name="home" size={30} color="white" /></Pressable>
                </View>
                <View style={{flex:3,height:'700px',backgroundColor:'#F5F5F5'}}>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly',marginTop:'10px'}}>
                        <Pressable style={{width:'150px',alignItems:'center',flexDirection:'row', height:'70px', backgroundColor:'white',borderRadius:'10px'}}>
                            <MaterialCommunityIcons style={{marginLeft:'10px',marginRight:'20px'}} name="qrcode-scan" size={30} color="black" />
                            <Text style={{fontSize:'20px'}}>Quét QR</Text>
                        </Pressable>
                        <Pressable style={{width:'150px',alignItems:'center',flexDirection:'row', height:'70px', backgroundColor:'white',borderRadius:'10px'}}>
                            <Image 
                            style={{width:'30px',height:'30px',marginLeft:'10px',marginRight:'20px'}}
                            source={require('/assets/gd.png')}/>
                            <Text style={{fontSize:'20px'}}>Giao dịch tách lệnh</Text>
                        </Pressable>
                    </View>
                    <View style={{marginLeft:'30px',top:'20px'}}>
                        <Pressable 
                        onPress={()=>{navigation.navigate('Bank')}}
                        style={{width:'330px',alignItems:'center',flexDirection:'row', height:'70px', backgroundColor:'white',borderRadius:'10px'}}>
                             <Entypo style={{marginLeft:'10px', marginRight:'20px'}} name="add-user" size={30} color="black" />
                            <Text>Người thụ hưởng mới</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{flex:1, marginLeft:'30px',flexDirection:'row',justifyContent:'space-around'}}>
                    <Pressable style={{width:'80px',alignItems:'center',height:'40px',justifyContent:'center',backgroundColor:'white',borderRadius:'15px'}}>
                        <Text style={{fontSize:'16px'}}>STK đã lưu</Text>
                    </Pressable>
                    <Pressable style={{width:'80px',alignItems:'center',justifyContent:'center',height:'40px',backgroundColor:'white',borderRadius:'15px'}}>
                        <Text style={{fontSize:'16px'}}>Gần đây</Text>
                    </Pressable>
                    <Pressable style={{width:'120px',alignItems:'center',justifyContent:'center',height:'40px',backgroundColor:'white',borderRadius:'15px'}}>
                        <Text style={{fontSize:'16px'}}>Mãu giao dịch</Text>
                    </Pressable>
                </View>
                <View style={{flex:1}}>
                    <Pressable style={{flexDirection:'row',borderRadius:'5px',alignItems:'center',backgroundColor:'gray',justifyContent:'space-evenly',width:'350px',marginLeft:'30px',height:'50px'}}>
                        <AntDesign name="search1" size={30} color="black" />
                        <TextInput style={{fontSize:'17px',marginLeft:'20px',height:'50px',width:'100%',borderColor:'none'}}
                         placeholder="Tìm tên/STK người thụ hưởng"
                         onChangeText={(text)=>searchUser(text)}
                        />
                    </Pressable>
                </View>
                <View style={{flex:4,}}>
                    <FlatList style={{width:'400px', marginLeft:'30px'}} data={data} renderItem={renderItem}>

                    </FlatList>
                </View>
        </SafeAreaView>
    )
}
export default ViewBank;