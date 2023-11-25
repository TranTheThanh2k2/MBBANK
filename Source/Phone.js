import { SafeAreaView, TextInput, View , Text, Pressable } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Phone = ({navigation})=>{
    return (
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#DCDCDC'}}>
            <View style={{flex:'1',width:'500px',backgroundColor:'#00008B',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                <Pressable onPress={()=>navigation.navigate('TrangChu')}><Entypo name="chevron-left" size={30} color="white" /></Pressable>
                <Text style={{fontSize:'25px',color:'white'}}>Thanh toán</Text>
                <Pressable onPress={()=>navigation.navigate('TrangChu')}><Ionicons name="md-home-outline" size={30} color="white" /></Pressable>
            </View>
            <View style={{flex:'1', width:'360px'}}>
                <TextInput style={{color:'black', height:'80px', marginTop:'30px' , borderWidth:1,borderColor:'black' }} placeholder="Nhập số điện thoại"/>
            </View>
            <View style={{flex:'4', width:'360px'}}>
                <Text style={{fontSize:'20px',marginBottom:'20px'}}>Chọn mệnh giá</Text>
               <View style={{flexWrap:'wrap',flexDirection:'row'}}>
                     <View style={{width:'100px',marginRight:'20px',backgroundColor:'white',marginBottom:'20px',height:'100px',borderRadius:'5px',justifyContent:'center',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'blue',fontSize:'18px'}}>500,000 </Text>
                            <Text style={{fontSize:'18px'}}>VND</Text>
                        </View>
                    </View>
                    <View style={{width:'100px',marginRight:'20px',height:'100px',backgroundColor:'white',borderRadius:'5px',justifyContent:'center',alignItems:'center'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'blue',fontSize:'18px'}}>200,000 </Text>
                        <Text style={{fontSize:'18px'}}>VND</Text>
                    </View>
                </View>
                <View style={{width:'100px',height:'100px',backgroundColor:'white',borderRadius:'5px',justifyContent:'center',alignItems:'center'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'blue',fontSize:'20px'}}>100,000 </Text>
                        <Text style={{fontSize:'20px'}}>VND</Text>
                    </View>
                </View> 
                <View style={{width:'100px',marginRight:'20px',backgroundColor:'white',marginBottom:'20px',height:'100px',borderRadius:'5px',justifyContent:'center',alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'blue',fontSize:'18px'}}>50,000 </Text>
                            <Text style={{fontSize:'18px'}}>VND</Text>
                        </View>
                    </View>
                    <View style={{width:'100px',marginRight:'20px',height:'100px',backgroundColor:'white',borderRadius:'5px',justifyContent:'center',alignItems:'center'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'blue',fontSize:'18px'}}>20,000 </Text>
                        <Text style={{fontSize:'18px'}}>VND</Text>
                    </View>
                </View>
                <View style={{width:'100px',height:'100px',backgroundColor:'white',borderRadius:'5px',justifyContent:'center',alignItems:'center'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'blue',fontSize:'20px'}}>10,000 </Text>
                        <Text style={{fontSize:'20px'}}>VND</Text>
                    </View>
                </View>
                <Pressable style={{backgroundColor:'skyblue',width:'360px',height:'60px',justifyContent:'center'}}><Text style={{color:'white',textAlign:'center',fontSize:'25px'}}>Tiếp tục</Text></Pressable>       
               </View>
                
            </View>
        </SafeAreaView>
    )
}
export default Phone;