import React, { useState } from 'react'
import { ActivityIndicator,View,Text,StyleSheet,Image,StatusBar,SafeAreaView,TouchableOpacity, TextInput,id} from "react-native";
import Icon4 from 'react-native-vector-icons/Ionicons';
import axios from 'axios'
import {useNavigation} from '@react-navigation/native' 




function Loginpage() {

//    const Home=()=>{
//       navigate('Home')
//   }//.then response then set ur message

const {navigate} = useNavigation()

   const [username, onChangeText] = useState('');
   const [password, onChangeNumber] = useState('');

   const [active, setActive] = useState(false)

   const [loading,setLoading]= useState(false)

   const [message, setMessage]=useState('')

   const Auth=()=>{
      setLoading(true)
      console.log('maybe')
      const data = {password, username}
      axios.post('https://dummyjson.com/auth/login',data).then((response)=>{

         

         if(response.status === 200){
            setLoading(false)
            navigate('Home')
         }
         // console.log(response) 
         console.log(response.status,'status')

      }).catch((error)=>{
         // console.log(error?.response?.data.message)
         // console.log(error.response)
         setMessage(error?.response?.data.message)
         setLoading(false)
      })
      
   }

   const Focus =()=>{
      setActive(!active)
      setMessage('')
   }

   const Focusii =()=>{
      setMessage('')
      setActive(!active)
   }


   

   

   const Track =()=>{

     const data = {password, username}
     console.log('maybe')

     fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      })
    })
    .then(res => res.json())
    .then(console.log);

   }
   

   const Clear =()=>{
      onChangeText('')
   }




  return (
     <SafeAreaView style={{backgroundColor:'white' , height:'100%'}}>
         <View>

           
            <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center',marginTop:60}}>
              {/* <StatusBar backgroundColor='' translucent={false}/> */}
                <Image source={{uri: "https://i.pinimg.com/564x/3f/cc/68/3fcc686da53562a26084bc50764f64f4.jpg"}}
                style={{justifyContent:'center',width:35,height:35,borderRadius:50}}
              />

              <Text style={{fontSize:40,font:'Serif'}}>pay </Text>
            </View>

            {message? 

<View style={{alignSelf:'center'}}>

  

   <Text style={{color:'red'}}>
   {message}

   </Text>
</View>
:''}




            <View style={{marginTop:30,}}>

               <View>

                  <TextInput onFocus={Focus}
                     style={{ height: 50,margin: 12,padding: 10,backgroundColor:'whitesmoke',borderRadius:10,paddingLeft:110,borderWidth:1,borderColor: active? '#00ab6b' : 'white' }}
                     onChangeText={text => onChangeText(text)}
                     value={username}
                     // keyboardType="numeric"
                     placeholder='Enter Phone Number'
                  />

                 


                  {username?

                  <TouchableOpacity onPress={Clear}>
                     <Icon4 name ="close-circle-sharp" color={'grey'} size={20} style={{position:'absolute',right:20,top:-46,}}/>         
                  </TouchableOpacity>

                    : ''
                  
                  }

                  <TextInput
                     style={{ height: 50,margin: 12,padding: 10,backgroundColor:'whitesmoke',borderRadius:10,paddingLeft:30,borderWidth:1,borderColor: active? '#00ab6b' : 'white' }}
                     onFocus={Focusii}
                     onChangeText={onChangeNumber}
                     value={password}
                     placeholder="Enter your password"
                     // keyboardType="numeric"
                  />

               </View>


               <View style={{flexDirection:'row', position:'absolute',top:27,left:30,}}>
                  <View style={{backgroundColor:'green',width:10,height:20,borderBottomLeftRadius:3,borderTopLeftRadius:3}}></View>
                  <View style={{backgroundColor:'white',width:10,height:20}}></View>
                  <View style={{backgroundColor:'green',width:10,height:20,borderBottomRightRadius:3,borderTopRightRadius:3}}></View>
               </View>

               <View style={{ flexDirection:'row',position:'absolute',top:28,left:70,fontWeight:700}}>
                  
                   <Text style={{}}>+234 </Text>
                   <Text style={{marginTop:-6,fontSize:20,color:'grey'}}></Text>

               </View>

               
            </View>

            <TouchableOpacity>
               <View style={{marginLeft:250}}>
                  <Text style={{color:'#00ab6b'}}>Forgot Password?</Text>
               </View>
            </TouchableOpacity>

            

            <TouchableOpacity onPress={()=>Auth()} activeOpacity={0.7}>
               <View style={{margin:'auto',height:50,width:280,backgroundColor:'#00ab6b',justifyContent:'center',borderRadius:30,marginTop:40}}>
                  <Text style={{color:'white',margin:'auto'}}>
                     {loading?

                      <View style={[styles.container, styles.horizontal]}>
                       <ActivityIndicator size="large" color="#00ff00" />
                     </View>

                  :'login'
                  
                  }</Text>

               </View>
            </TouchableOpacity>

            



            <View style={{marginTop:270}}>

               <Text style={{margin:'auto'}}>Don't have an Opay Account yet?</Text>

               <TouchableOpacity>
                  <Text style={{color:'#00ab6b',margin:'auto'}}>click here to get one </Text>
               </TouchableOpacity>

            </View>



         </View>
     </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   input: {
     height: 40,
     margin: 12,
     padding: 10,
     backgroundColor:'whitesmoke',
     borderRadius:10,
     paddingLeft:90
   },
   input2: {
     height: 40,
     margin: 12,
     padding: 10,
     backgroundColor:'whitesmoke',
     borderRadius:10,
     paddingLeft:10,
     fontSize:20
   },
   
      container: {
        flex: 1,
        justifyContent: 'center',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,},
      })



export default Loginpage