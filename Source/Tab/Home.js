import { View, Text, Image, Pressable ,SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {ViewBank} from '../ViewBank'

const Home = () => {
    const nav = useNavigation();
    return (
        <SafeAreaView style={{flex:1 , backgroundColor:'#00008B'}}>
            <View style={{flexDirection:'row', justifyContent:'space-evenly',alignItems:'center'}}>
                <Image 
                    source = {require('/assets/user.png')}
                    style={{width:'30px',height:'30px', resizeMode:'contain'}}
                />
                  <Image 
                    source = {require('/assets/chat.png')}
                    style={{width:'30px',height:'30px', resizeMode:'contain'}}
                />
                  <View style={{flexDirection:'row', justifyContent:'space-evenly',alignItems:'center'}}>
                  <Image 
                    source = {require('/assets/logoMB.png')}
                    style={{width:'50px',height:'50px', resizeMode:'contain'}}
                    />
                    <Text style={{color:'white',fontSize:'30px', fontWeight:'bold'}}>MB</Text>
                  </View>
                  <Image 
                    source = {require('/assets/search.png')}
                    style={{width:'30px',height:'30px', resizeMode:'contain'}}
                />
                  <Image 
                    source = {require('/assets/notification.png')}
                    style={{width:'30px',height:'30px', resizeMode:'contain'}}
                />
            </View>
            <View style={{flex:'1',top:'30px', alignItems:'center'}}>
                <Text style={{color:'white', fontSize:'26px'}}>Xin Chào,</Text>
                <Text style={{color:'white', fontSize:'29px', top:'10px'}}>TRAN THE THANH</Text>
                <Text style={{color:'white', fontSize:'17px',top:'20px' , lineHeight:'23px'}}>Xem tài khoản</Text>
            </View>
            <View style={{flex:1 ,width:'100%', backgroundColor:'white'}}>
                <View>
                    <Text>Tính năng chính</Text>
                </View>
                <View style={{width:'100%',flexDirection:'row',flexWrap:'wrap'}}>
                    <View style={{width:'100px',marginLeft:'20px',marginRight:'20px', height:'80px',border:'1px solid gray',alignItems:'center',justifyContent:'center'}}>
                        <Pressable
                            onPress={()=>{nav.navigate('Bank')}}
                        >
                            <Image
                                style={{width:'40px',height:'40px',resizeMode:'contain',left:'10px'}} 
                                source={require('/assets/bank.png')}/>
                            <Text>Chuyển tiền</Text>
                        </Pressable>
                    </View>
                    <View style={{width:'100px', height:'80px',marginRight:'20px',border:'1px solid gray',alignItems:'center',justifyContent:'center'}}>
                        <Pressable style={{alignItems:'center'}}>
                            <Image
                                style={{width:'35px',height:'35px',resizeMode:'contain'}} 
                                source={require('/assets/mobile.png')}/>
                            <Text style={{fontSize:'15px',textAlign:'center'}}>Nạp điện thoại</Text>
                        </Pressable>
                    </View>
                    <View style={{width:'100px', height:'80px',border:'1px solid gray',alignItems:'center'}}>
                        <Pressable style={{alignItems:'center'}}>
                            <Image
                                style={{width:'40px',height:'40px',resizeMode:'contain'}} 
                                source={require('/assets/money.png')}/>
                            <Text style={{textAlign:'center',fontSize:'15px'}}>Tiền gửi & đầu tư</Text>
                        </Pressable>
                    </View>      
                </View>
                <View style={{width:'100%',flexDirection:'row',flexWrap:'wrap',marginTop:'20px'}}>
                    <View style={{width:'100px',marginLeft:'20px',marginRight:'20px', height:'80px',border:'1px solid gray',alignItems:'center',justifyContent:'center'}}>
                        <Pressable
                            onPress={()=>{nav.navigate('ViewBank')}}
                        >
                            <Foundation style={{textAlign:'center'}} name="clipboard-notes" size={30} color="blue" />
                            <Text>Thanh toán</Text>
                        </Pressable>
                    </View>
                    <View style={{width:'100px', height:'80px',marginRight:'20px',border:'1px solid gray',alignItems:'center',justifyContent:'center'}}>
                        <Pressable style={{alignItems:'center'}}>
                            <MaterialIcons style={{textAlign:'center'}} name="attach-money" size={30} color="black" />
                            <Text style={{fontSize:'15px',textAlign:'center'}}>Vay Online</Text>
                        </Pressable>
                    </View>
                    <View style={{width:'100px', height:'80px',border:'1px solid gray',alignItems:'center',justifyContent:'center'}}>
                        <Pressable style={{alignItems:'center'}}>
                            <Entypo name="credit-card" size={30} color="blue" style={{textAlign:'center'}} />
                            <Text style={{textAlign:'center',fontSize:'15px'}}>Dịch vụ thẻ</Text>
                        </Pressable>
                    </View>      
                </View>
                </View>
        </SafeAreaView>
    )
}
export default Home;