
import { View , Pressable,Text} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BankSucces = ({route,navigation}) => {
    const {Stk} = route.params;
    const {Bank} = route.params;
    const {Name} = route.params;
    const {soTien} = route.params;
    const {noiDung} = route.params;
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds();
        setCurrentDate(
          hours + ':' + min + ':' + sec + ', ' + date + '/' + month + '/' + year
        );
      }, []);
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#d6d4d4'}}>
            <View style={{backgroundColor:'#00008B',position:'relative',flex:2,width:'100%',alignItems:'center'}}>
                <View style={{top:'90px',width:'50px',alignItems:'center',justifyContent:'center',height:'50px',borderRadius:'50%',backgroundColor:'white'}}>
                    <Entypo name="check" size={24} color="blue" />
                </View>
                <Text style={{fontSize:'20px',position:'absolute',marginTop:'20px',lineHeight:'30px',color:'white'}}>Bạn đã chuyển tiền thành công</Text>
                <Text style={{fontSize:'30px',color:'white',fontWeight:'bold'}}>{soTien} VND</Text>
                <View style={{width:'90%',backgroundColor:'white',marginTop:'60px',height:'100px',borderRadius:'10px'}}>
                    <Text style={{fontSize:'19px', color:'gray',marginLeft:'10px'}}>Đến tài khoản</Text>
                    <Text style={{fontSize:'22px',textAlign:'center', fontWeight:'bold',textTransform:'uppercase'}}>{Name}</Text>
                    <Text style={{fontSize:'17px',textAlign:'center'}}>{Stk}</Text>
                    <Text style={{fontSize:'17px',textAlign:'center'}}>{Bank}</Text>
                </View>
            </View>
            <View style={{flex:2,marginTop:'50px',marginBottom:'20px',width:'90%',borderRadius:'10px',backgroundColor:'white'}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:'18px',color:'gray',marginLeft:'10px'}}>Tài khoản nguồn</Text>
                    <View>
                        <Text style={{fontSize:'18px',textAlign:'center'}}>0387097651</Text>
                        <Text style={{fontSize:'20px',fontWeight:'bold'}}>TRAN THE THANH</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:'18px',width:'50%',color:'gray',marginLeft:'10px'}}>Nội dung</Text>
                    <View>
                        <Text style={{fontSize:'20px',width:'100px'}}>{noiDung}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:'18px',width:'50%',color:'gray',marginLeft:'10px'}}>Thời gian</Text>
                    <View>
                        <Text style={{fontSize:'18px',width:'170px'}}>{currentDate}</Text>
                    </View>
                </View>
            </View>
            <View style={{flex:1,width:'90%'}}>
                <View style={{flexDirection:'row',marginTop:'20px',justifyContent:'space-around'}}>
                    <Pressable onPress={()=>navigation.navigate('TrangChu')}
                    style={{width:'45%',justifyContent:'center',height:'50px',border:'1px solid blue',alignItems:'center',borderRadius:'10px'}}><Text style={{color:'blue',textAlign:'center',fontSize:'15px'}}>Về trang chủ</Text></Pressable>
                    <Pressable onPress={()=>navigation.navigate('Bank')} 
                    style={{width:'45%',justifyContent:'center',height:'50px',border:'1px solid blue',backgroundColor:'blue',alignItems:'center',borderRadius:'10px'}}><Text style={{color:'white',textAlign:'center',fontSize:'15px'}}>Tạo giao dịch khác</Text></Pressable> 
                </View>
            </View>
        </View>
    )
}
export default BankSucces;