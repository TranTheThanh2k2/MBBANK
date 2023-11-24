import { useNavigation } from "@react-navigation/native"
import { View, Text, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const Screen1 = () =>{
    const nav = useNavigation();
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#00008B', margin:'0px auto'}}>
            <View style={{flex:1 , flexDirection: 'row', justifyContent:'space-around', height:'100px',top:'20px'}}>
                <View style={{display: 'flex', flexDirection:'row',justifyContent:'space-between' ,alignContent:'center'}}>
                    <Ionicons name="images-outline" size={35} color="white" />
                    <Text style={{color:'white',marginLeft:'10px',top:'18px'}}>Thay ảnh</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly' ,alignContent:'center'}}>
                    <Text style={{fontSize:'30px' , fontWeight:'bold' ,fontFamily:'area', color:'white'}}>MB</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly' ,alignContent:'center'}}> 
                    <Text style={{color:'white' , fontSize:'30px' ,fontFamily:'area', fontWeight:'bold'}}>ENG</Text>
                </View>
            </View>
            <View style={{flex:2, alignItems:'center'}}>
                <View style={{backgroundColor:'white',width:'150px',height:'150px',borderRadius:'50%'}}>
                    <Image style={{width:'150px',height:'150px',resizeMode:'contain',borderRadius:'50%'}}
                    source={require('/assets/minhtoan.jpg')}/>
                </View>
                <Text style={{color:'white', fontSize:'22px', fontWeight:'normal'}}>Xin chào,</Text>
                <Text style={{color:'white',fontSize:'30px', lineHeight:'25px'}}>TRAN THE THANH</Text>
            </View>
            <View style={{flex:1, width:'400px'}}>
                <View style={{flexDirection:'row',width:'350px',marginLeft:'10px', justifyContent:'space-around',borderBottomColor:'white',borderBottomWidth:1}}> 
                    <Text style={{color:'gray', fontSize:'25px', lineHeight:'27px'}}>Mật khẩu</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Ionicons name="eye-outline" size={30} color="gray" />
                    <MaterialCommunityIcons style={{marginLeft:'20px'}} name="face-recognition" size={30} color="white" />
                    </View>
                </View>
                <Pressable 
                    onPress={()=>{nav.navigate('TrangChu')}}
                    style={{width:'350px',backgroundColor:'#00FFFF',borderRadius:'20px',color:'white',height:'50px',justifyContent:'center',alignItems:'center',top:'30px', left:'20px'}}>
                    <Text style={{color:'white',fontWeight:'bold'}}>Đăng nhập</Text>
                </Pressable>
            </View>
            <View style={{flex:1, top:'30px' ,flexDirection:'row',justifyContent:'space-around', width:'350px', marginLeft:'10px'}}>
                    <Text style={{fontSize:'12px',textDecorationLine:'underline', color:'white'}}>QUÊN MẬT KHẨU?</Text>
                    <Text style={{fontSize:'12px', textDecorationLine:'underline', color:'white'}}>ĐĂNG NHẬP BẰNG TÀI KHOẢN KHÁC</Text>
            </View>
            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between',marginLeft:'20px'}}>
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
        </SafeAreaView>
    )
}
export default Screen1;