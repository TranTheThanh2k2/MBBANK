import react,{ useState }  from "react";
import { View ,TextInput, Pressable,Text, Button} from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Bank = ({navigation}) => {
    const [Bank,setBank] = useState('');
    const [Stk,setStk] = useState('');
    const [Name,setName] = useState('');
    const [soTien,setSoTien] = useState('');
    const [noiDung,setNoiDung] = useState('');
    const [nameError , setNameError] = useState(false)
    const [BankError , setBankError] = useState(false)
    const [StkError , setStkError] = useState(false)
    const saveData = async ()=>{
        if(!Name){
            setNameError(true)
        }
        if(!Stk){
            setStkError(true)
        }
        if(!Bank){
            setBankError(true)
        }
        if(!Name || !Stk || !Bank){
            return false
        }
        const url = "https://65465bfefe036a2fa9558ece.mockapi.io/Donut/MBBank"
        let result = await fetch(url,{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({Name,Stk,Bank})
        });
        result = await result.json();   
        if (result){
            console.log("Data đã add")
        }
    }  
    return (
        <View style={{flex:1}}>
            <View style={{flex:1,height:'150px',flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#2C48DD'}}>
                    <Pressable onPress={()=>navigation.navigate('ViewBank')} style={{marginLeft:'20px'}}><AntDesign name="left" size={30} color="white" /></Pressable>
                    <Text style={{fontSize:'20px', color:'white'}}>Chuyển tiền</Text>
                    <Pressable onPress={()=>navigation.navigate('TrangChu')} style={{marginRight:'20px'}}><AntDesign name="home" size={30} color="white" /></Pressable>
            </View>
            <View style={{flex:7}}>
                <View> 
                    <Text>Số Tài Khoản</Text>
                    <TextInput
                    style={{width:'350px',border:'1px solid skyblue', height:'50px', borderRadius:'10px',marginLeft:'15px'}}
                    onChangeText={(tk)=>setStk(tk)}
                    value= {Stk}
                    placeholder="Nhập số tài khoản"
                    />
                     {StkError ? <Text style={{color:'red',fontSize:'20px'}}>Enter number is not null</Text>:null}
                </View>
                <View> 
                    <Text>Ngân hàng</Text>
                    <TextInput
                    style={{width:'350px',border:'1px solid skyblue', height:'50px', borderRadius:'10px',marginLeft:'15px'}}
                    onChangeText={(nganhang)=>setBank(nganhang)}
                    value= {Bank}
                    placeholder="Nhập ngân hàng"
                    />
                     {BankError ? <Text style={{color:'red',fontSize:'20px'}}>Bank is not emty</Text>:null}
                </View>
                <View> 
                    <Text>Tên tài khoảng</Text>
                    <TextInput
                    style={{width:'350px',border:'1px solid skyblue', height:'50px', borderRadius:'10px',marginLeft:'15px'}}
                    onChangeText={(ten)=>setName(ten)}
                    value= {Name}
                    placeholder="Nhập tên tài khoản"
                    />
                    {nameError ? <Text style={{color:'red',fontSize:'20px'}}>Name is not emty</Text>:null}
                </View>
                <View> 
                    <Text>Số tiền</Text>
                    <TextInput
                    style={{width:'350px',border:'1px solid skyblue', height:'50px', borderRadius:'10px',marginLeft:'15px'}}
                    onChangeText={(tien)=>setSoTien(tien)}
                    value= {soTien}
                    placeholder="Nhập số tiền"
                    />
                </View>
                <View> 
                    <Text>Nội dung chuyển tiền</Text>
                    <TextInput
                    style={{width:'350px',border:'1px solid skyblue', height:'80px', borderRadius:'10px',marginLeft:'15px'}}
                    onChangeText={(noidung)=>setNoiDung(noidung)}
                    value= {noiDung}
                    placeholder="Nhập dung chuyển tiền"
                    />
                </View>
            </View>
            <Button title="Lưu Tài Khoản" onPress={saveData}/>
            <Pressable 
            onPress={()=>navigation.navigate('BankSucces',{Stk,Name,Bank,soTien,noiDung})}
            style={{marginTop:'30px',backgroundColor:'blue',width:'350px',marginLeft:'20px',borderRadius:'10px',justifyContent:'center',height:'50px',alignItems:'center',bottom:'20px'}}>
                <Text style={{color:'white',fontSize:'25px'}}>Tiếp tục</Text>
            </Pressable>
        </View>
    )
}
export default Bank;