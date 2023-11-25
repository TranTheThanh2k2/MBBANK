import { useRoute } from "@react-navigation/native";
import { SafeAreaView, View , Image , Text, Pressable, Button} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Item =({navigation}) => {
    const rou = useRoute();
    return (
        <SafeAreaView style={{flex:1 , justifyContent:'center',alignItems:'center'}}>
           <View style={{flex:'1',width:'400px',backgroundColor:'#00008B',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
            <Pressable onPress={()=>navigation.navigate('Order')}><Entypo name="chevron-left" size={30} color="white" /></Pressable>
            <Text style={{color:'red',fontSize:'25px'}}>Chi Tiết Bộ Phim</Text>
            <Pressable onPress={()=>navigation.navigate('TrangChu')}><Ionicons name="md-home-outline" size={30} color="white" /></Pressable>
          </View>
            <View style={{flex:'6'}}>
                <Image
                style={{ width: "300px",resizeMode:'contain', height: "300px" }}
                source={rou.params?.img}
                />
                <Text style={{fontSize:'18px'}}>Tên bộ phim :<Text style={{fontWeight:'bold'}}>{rou.params?.Name}</Text></Text>
                <Text style={{marginTop:'10px',fontSize:'18px'}}>Tác Giả : <Text style={{fontWeight:'bold'}}>{rou.params?.Author}</Text></Text>
                <Text style={{marginTop:'10px',fontSize:'18px'}}>Thể Loại : <Text style={{fontWeight:'bold'}}>{rou.params?.Type}</Text></Text>
                <Text style={{marginTop:'10px',fontSize:'18px'}}>Năm Xuất Bản: <Text style={{fontWeight:'bold'}}>{rou.params?.Date}</Text></Text>
                <Text style={{marginTop:'10px',fontSize:'18px'}}>Giá : <Text style={{fontWeight:'bold',fontSize:'20px'}}>{rou.params?.Price}</Text></Text>
            </View>
            <Button title="Thanh Toán"/>
        </SafeAreaView>
    )
}
export default Item;