 import { Pressable, SafeAreaView, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const ThanhToan = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:'1'}}>
            <View style={{flex:'1',backgroundColor:'#00008B',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
            <Pressable onPress={()=>navigation.navigate('TrangChu')}><Entypo name="chevron-left" size={30} color="white" /></Pressable>
            <Text style={{fontSize:'25px',color:'white'}}>Thanh toán</Text>
            <Pressable onPress={()=>navigation.navigate('TrangChu')}><Ionicons name="md-home-outline" size={30} color="white" /></Pressable>
            </View>
            <View style={{flex:'2'}}>
                <Text style={{fontSize:'20px',fontWeight:'bold',marginLeft:'20px'}}>Thanh toán QR</Text>
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    <View style={{width:'150px',height:'70px',backgroundColor:'gray',borderRadius:'10px',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginLeft:'20px'}}>
                        <MaterialCommunityIcons name="qrcode-minus" size={35} color="black" />
                        <Text>Quét QR</Text>
                    </View>
                    <View style={{width:'150px',height:'70px',backgroundColor:'gray',flexDirection:'row',borderRadius:'10px',justifyContent:'space-evenly',alignItems:'center',marginLeft:'20px'}}>
                        <MaterialCommunityIcons name="qrcode-minus" size={35} color="black" />
                        <Text>Quét QR</Text>
                    </View>
                    <View style={{width:'150px',marginTop:'20px',height:'70px',backgroundColor:'gray',borderRadius:'10px',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginLeft:'20px'}}>
                        <MaterialCommunityIcons name="qrcode-minus" size={35} color="black" />
                        <Text>Quét QR</Text>
                    </View>
                </View>
            </View>
            <View style={{flex:'1'}}>
                <Text style={{fontSize:'20px',fontWeight:'bold',marginLeft:'20px'}}>Hóa đơn gia đình</Text>
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    <View style={{width:'150px',height:'70px',backgroundColor:'gray',borderRadius:'10px',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginLeft:'20px'}}>
                     <Ionicons name="md-logo-electron" size={35} color="black" />
                        <Text>Điện</Text>
                    </View>
                    <View style={{width:'150px',height:'70px',backgroundColor:'gray',flexDirection:'row',borderRadius:'10px',justifyContent:'space-evenly',alignItems:'center',marginLeft:'20px'}}>
                        <Ionicons name="water" size={35} color="black" />
                        <Text>Nước</Text>
                    </View>
                    <View style={{width:'150px',marginTop:'20px',height:'70px',backgroundColor:'gray',borderRadius:'10px',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginLeft:'20px'}}>
                        <FontAwesome name="internet-explorer" size={35} color="black" />
                        <Text>internet</Text>
                    </View>
                    <View style={{width:'150px',marginTop:'20px',height:'70px',backgroundColor:'gray',borderRadius:'10px',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginLeft:'20px'}}>
                        <Entypo name="tv" size={35} color="black" />
                        <Text>Truyền hình</Text>
                    </View>
                    <View style={{width:'150px',marginTop:'20px',height:'70px',backgroundColor:'gray',borderRadius:'10px',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginLeft:'20px'}}>
                      <AntDesign name="mobile1" size={35} color="black" />
                        <Text>di động</Text>
                    </View>
                    <View style={{width:'150px',marginTop:'20px',height:'70px',backgroundColor:'gray',borderRadius:'10px',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginLeft:'20px'}}>
                        <FontAwesome name="internet-explorer" size={35} color="black" />
                        <Text>internet</Text>
                    </View> 
                </View>
            </View>
            <View style={{flex:'3'}}></View>
        </SafeAreaView>
    )
}
export default ThanhToan;