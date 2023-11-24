import { Image, SafeAreaView , View , Text, TextInput, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
const Login = ({navigation}) =>{
    const [user , setUser]=useState('')
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#00008B',justifyContent:'center',alignContent:'center',alignItems:'center', margin:'0px auto'}}>
            <View style={{flex:1 , flexDirection:'row',justifyContent:'space-evenly'}}>
                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <Image
                    style={{width:'50px',resizeMode:'contain', height:'50px'}} 
                    source={require('/assets/logoMB.png')}/>
                    <Text style={{color:'white', fontSize:'25px'}}>MB</Text>
                </View>
                <View style={{flexDirection:'row',left:'70px',justifyContent:'space-evenly'}}>
                    <Image
                    style={{width:'45px',resizeMode:'contain', height:'45px'}} 
                    source={require('/assets/Eng.png')}/>
                    <Text style={{color:'white', fontSize:'25px'}}>ENG</Text>
                </View>
            </View>
            <View style={{flex:'5'}}>
                <Text style={{textAlign:'center',fontSize:'30px',color:'white',marginBottom:'50px'}}>Đăng nhập</Text>
                <TextInput
                    placeholder="Tên đăng nhập"
                    onChangeText={(text)=>setUser(text)}
                    value={user}
                    style={{borderBottomColor:'white',width:'350px',borderBottomWidth:1,fontSize:'25px',color:'white'}}
                />
                <TextInput
                    placeholder="Mật Khẩu"
                    style={{marginTop:'50px',borderBottomColor:'white',width:'350px',borderBottomWidth:1,fontSize:'25px',color:'white'}}
                />
                <Pressable onPress={()=>navigation.navigate('TrangChu',user)} 
                style={{backgroundColor:'skyblue',height:'60px',alignItems:'center',justifyContent:'center',marginTop:'30px', width:'350px',borderRadius:'20px'}}> 
                    <Text style={{fontSize:'20px',color:'white'}}>Đăng Nhập</Text>
                </Pressable>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'20px'}}>
                    <Text style={{color:'white',fontSize:'16px',textDecorationLine:'underline'}}>Quên mật khẩu?</Text>
                    <Text style={{color:'white',fontSize:'16px',textDecorationLine:'underline'}}>Tạo tài khoản</Text>
                </View>
                <View style={{ flexDirection:'row',marginTop:'50px', justifyContent:'space-between',marginLeft:'20px'}}>
                    <View>
                        <MaterialCommunityIcons name="qrcode-minus" size={30} color="white" />
                        <Text style={{color: 'white'}}>Quét QR</Text>
                    </View>
                    <View>
                        <AntDesign name="menufold" size={30} color="white" />
                        <Text style={{color: 'white'}}>Tiện ích</Text>
                    </View>
                    <View>
                        <FontAwesome name="wechat" size={30} color="white" />
                        <Text style={{color: 'white'}}>Chat Với eMBee</Text>
                    </View>
             </View>
            </View>
        </SafeAreaView>
    )
}
export default Login;