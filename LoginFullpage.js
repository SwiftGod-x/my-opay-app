import React from 'react'
import { View,Text,StyleSheet,Image,StatusBar,SafeAreaView,TouchableOpacity,} from "react-native";
import {useNavigation} from '@react-navigation/native' 
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/FontAwesome6';
import Icon6 from 'react-native-vector-icons/FontAwesome5';



function LoginFullpage() {

    const {navigate} = useNavigation()


    const Trans=()=>{
        navigate('Transaction')
    }

    const Reward=()=>{
        navigate('Reward')
    }

    const Finance=()=>{
        navigate('Fianance')
    }

    const Cards=()=>{
        navigate('Cards')
    }

    const Me=()=>{
        navigate('Me')
    }
    const Loginpage=()=>{
        navigate('Loginpage')
    }

  return ( 

    <View style={{flex:1, backgroundColor:'whitesmoke'}}>

    <StatusBar backgroundColor={'grey'}/>

    <SafeAreaView style={{flex:1,}}>

            

        <View style={{justifyContent:'space-between', display:'flex',flexDirection:'row',paddingHorizontal:20,marginTop:30}}>

            <View style={{flexDirection:'row',}}>


                <View style={{flexDirection:'row',columnGap:10,paddingRight:-20}}>

                    <Text style={Styles.name}>
                        Hi 
                    </Text>

                    <TouchableOpacity onPress={Loginpage}>
                        <View style={Styles.button}>
                            <Text style={{fontSize:17,color:'#00ab6b',fontWeight:800}}>Login</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            
            </View>

                    

            <View style={{flexDirection:'row',gap:20,marginTop:5}}>

                <TouchableOpacity>
                    <View style={{width:28,height:15,paddingLeft:4,borderRadius:10,position:'absolute',top:-10,left:10,backgroundColor:'#fcacd3'}}>
                        <Text style={{color:'red',fontSize:9,paddingTop:2,fontWeight:800}}>HELP</Text>
                    </View>
                    <Icon3 name = 'headset-mic' size = {20}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon2 name = 'line-scan' size = {20}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon3 name = 'notifications-none' size = {20} iconBackgroundcolor = 'white'/>
                </TouchableOpacity>


            </View>


        </View>


        <View style={Styles.green}>

            <View style={{display:'flex',flexDirection:'row'}}>

                <View style={{display:'flex',flexDirection:'row',gap:5,marginLeft:10,marginTop:10}}>

                    <Icon4 name = 'shield-checkmark-sharp' color={'white'} size={15}/>

                    <Text style={Styles.text}>Avaliable Balance</Text>

                    {/* <TouchableOpacity onPress={()=>setLocked(!locked)} activeOpacity={0.7}>
                        <Icon2 name ={locked ? 'eye-off' : 'eye-outline'} color={'white'} size={15} style={{marginTop:2}}/>
                    </TouchableOpacity> */}


                </View>

                <View style={{display:'flex',flexDirection:'row',marginTop:10,marginLeft:20}}>

                    <TouchableOpacity onPress={Loginpage} activeOpacity={0.7}>
                        <Text style={{fontSize:15,color:'white',marginLeft:30}}>Transaction History </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7}>
                        <Icon3 name = 'keyboard-arrow-right' color={'white'} size={15} style={{marginTop:2,marginRight:2}}/>
                    </TouchableOpacity>

                </View>

            </View>

            <View style={{flexDirection:'row'}}>

                <View style={{flexDirection:'row',marginLeft:20,marginTop:25}}>


                    <View style={{flexDirection:'row',marginTop:-5}}>

                        <Icon2 name='asterisk' color={'white'} size={15}/>
                        <Icon2 name='asterisk' color={'white'} size={15}/>
                        <Icon2 name='asterisk' color={'white'} size={15}/>
                        <Icon2 name='asterisk' color={'white'} size={15}/>

                    </View>


                </View>

                <TouchableOpacity  style={{position:'absolute',right:30}} activeOpacity={0.7}>

                    <View style={Styles.white}>
                        <Icon3 name='add' size={15} color={'#2dcb74'}/>
                        <Text style={{fontSize:15, color:'#2dcb74'}}>Add Money</Text>
                    </View>

                </TouchableOpacity>

            </View>

                
        </View>

        <View style={Styles.alice}>
            <View>
                <View style={{backgroundColor:'whitesmoke',width:30,height:30,justifyContent:'center',paddingLeft:5,borderRadius:7}}>

                    <TouchableOpacity onPress={Loginpage}>
                        <Icon3 name='perm-contact-calendar' size={20} color={'#00ab6b'}/>
                    </TouchableOpacity>

                </View>
                <Text  style={{addingTop:15, fontSize:12}}>To Opay</Text>
            </View>


            <View>
               <View style={{backgroundColor:'whitesmoke',width:30,height:30,justifyContent:'center',paddingLeft:5,borderRadius:7}}>

                   <TouchableOpacity onPress={Loginpage}>
                       <Icon2 name='bank-outline' size={20} color={'#00ab6b'}/>
                    </TouchableOpacity>

               </View>
               <Text style={{paddingTop:15, fontSize:12}}>To Bank</Text>
            </View>

            <View>
               <View style={{backgroundColor:'whitesmoke',width:30,height:30,justifyContent:'center',paddingLeft:5,borderRadius:7}}>
               
                   <TouchableOpacity onPress={Loginpage}>
                    <Icon2 name='arrow-expand' size={20} color={'#00ab6b'}/>
                   </TouchableOpacity>

               </View>
               <Text style={{paddingTop:15, fontSize:12, margin:-3}}>Withdraw</Text>
            </View>

        </View>

        
            <View style={Styles.betting}>

                <View style={Styles.betting1}>

                    <View>

                        <View style={{backgroundColor:'whitesmoke',width:35,height:35,justifyContent:'center',paddingLeft:8,borderRadius:50}}>

                            <TouchableOpacity onPress={Loginpage}>
                                <Icon2 name='cellphone-nfc' size={20} color={'#00ab6b'}/>
                            </TouchableOpacity>

                        </View>

                        <Text style={{paddingTop:5,flexWrap:'nowrap', fontSize:12}}>Airtime</Text>

                    </View>


                    <View>

                        <View style={{backgroundColor:'whitesmoke',width:35,height:35,justifyContent:'center',paddingLeft:8,borderRadius:50}}>

                            <TouchableOpacity onPress={Loginpage}>
                                <Icon2 name='cellphone-wireless' size={20} color={'#00ab6b'}/>
                            </TouchableOpacity>

                        </View>

                        <Text style={{paddingTop:5,flexWrap:'nowrap',paddingLeft:5, fontSize:12}}>Data</Text>

                    </View>



                    <View>

                        <View style={{backgroundColor:'whitesmoke',width:35,height:35,justifyContent:'center',paddingLeft:8,borderRadius:50}}>

                            <TouchableOpacity onPress={Loginpage}>
                               <Icon3 name='sports-soccer' size={20} color={'#00ab6b'}/>
                            </TouchableOpacity>

                        </View>

                       <Text style={{paddingTop:5,flexWrap:'nowrap', fontSize:12}}>Betting</Text>

                    </View>


                    <View>

                        <View style={{backgroundColor:'whitesmoke',width:35,height:35,justifyContent:'center',paddingLeft:8,borderRadius:50}}>

                            <TouchableOpacity onPress={Loginpage}>
                               <Icon3 name='connected-tv' size={20} color={'#00ab6b'}/>
                            </TouchableOpacity>

                        </View>

                        <Text style={{paddingTop:5,flexWrap:'nowrap',paddingLeft:10, fontSize:12}}>TV</Text>

                    </View>

                </View>


                <View style={Styles.betting2}>

                    <View>

                        <View style={{backgroundColor:'whitesmoke',width:35,height:35,justifyContent:'center',paddingLeft:8,borderRadius:50}}>

                            <TouchableOpacity onPress={Loginpage}>
                               <Icon2 name='piggy-bank' size={20} color={'#00ab6b'}/>
                            </TouchableOpacity>

                        </View>

                        <Text style={{paddingTop:5,flexWrap:'nowrap',fontSize:12}}>OWealth</Text>

                    </View>


                    <View>

                        <View style={{backgroundColor:'whitesmoke',width:35,height:35,justifyContent:'center',paddingLeft:8,borderRadius:50}}>

                            <TouchableOpacity onPress={Loginpage}>
                               <Icon3 name='monetization-on' size={20} color={'#00ab6b'}/>
                           </TouchableOpacity>

                        </View>

                        <Text style={{paddingTop:5,flexWrap:'nowrap',paddingLeft:8, fontSize:12}}>Loan</Text>

                    </View>

                    <View>

                        <View style={{backgroundColor:'whitesmoke',width:35,height:35,justifyContent:'center',paddingLeft:8,marginLeft:5,borderRadius:50}}>

                            <TouchableOpacity onPress={Loginpage}>
                               <Icon6 name='donate' size={20} color={'#00ab6b'}/>
                           </TouchableOpacity>

                        </View>

                       <Text style={{paddingTop:5,flexWrap:'nowrap',marginRight:5, fontSize:12}}>Play4aChild</Text>

                    </View>

                    <View>

                        <View style={{backgroundColor:'whitesmoke',width:35,height:35,justifyContent:'center',paddingLeft:8,borderRadius:50}}>

                            <TouchableOpacity onPress={Loginpage}>
                               <Icon2 name='hexagon-multiple' size={20}  color={'#00ab6b'}/>
                           </TouchableOpacity>

                        </View>

                       <Text style={{paddingTop:5,flexWrap:'nowrap',marginLeft:9, fontSize:12}}>More</Text>
                       
                    </View>

                </View>

            </View>

           




        
        {/* <TouchableOpacity activeOpacity={0.3}> */}


           


        {/* </TouchableOpacity> */}

            {/* <Icon name = 'lock' size={20}/> */}

        {/* <TouchableOpacity onPress={Go}> */}

            {/* <Icon2 name = 'account-clock-outline' size={20}/> */}

        {/* </TouchableOpacity> */}
       


    </SafeAreaView>

    {/* Bottom nav container */}

    <View style={Styles.nav}>

                <View>

                    <TouchableOpacity>

                        <View>
                            <Icon2 name='circle-double' size={25}  color={'#00ab6b'}/>
                        </View>

                        <Text style={{paddingTop:5}}>Home</Text>

                    </TouchableOpacity>

                </View>


                <View>

                    <TouchableOpacity onPress={Loginpage}>

                        <View>
                            <Icon2 name='diamond-stone' size={25}/>
                        </View>

                        <Text style={{paddingTop:5,marginLeft:-5}}>Rewards</Text>

                    </TouchableOpacity>

                </View>

                <View>

                    <TouchableOpacity onPress={Loginpage}>

                        <View>
                            <Icon2 name='chart-line' size={25}/>
                        </View>

                        <Text style={{paddingTop:5,marginLeft:-5}}>Finance</Text>

                    </TouchableOpacity>

                </View>

                <View>

                    <TouchableOpacity onPress={Loginpage}>

                        <View>
                            <Icon2 name='credit-card-outline' size={25}/>
                        </View>

                        <Text style={{paddingTop:5,}}>Cards</Text>

                    </TouchableOpacity>


                </View>

                <View>

                    <TouchableOpacity onPress={Loginpage}>

                        <View>
                            <Icon2 name='account-circle' size={25}/>
                        </View>

                        <Text style={{paddingTop:5,marginLeft:5}}>Me</Text>

                    </TouchableOpacity>

                </View>

            </View>
        


</View>
  )
}

const Styles = StyleSheet.create({
    name:{
        paddingTop:5,
        color:'black',
        textTransform:'capitalize',
        fontSize:20,
        fontWeight:'700',
        paddingLeft:15
    },

    button:{
        borderWidth:1,
        width:70,
        height:30,
        borderColor:'#00ab6b',
        borderRadius:20,
        alignItems:'center',
        paddingTop:5,
    },
    
    cbn:{
        color:'#005477',
        textAlign:'center',
        marginTop:20,
    },

    green:{
        backgroundColor:'#00ab6b',
        width:320,
        height:80,
        borderRadius:15,
        margin:20,
        marginTop:30,
    },
    text:{
        paddingTop:-10,
        fontSize:15,
        color:'white'
    },

    white:{
        backgroundColor:'white',
        width:90,
        borderRadius:30,
        height:26,
        marginTop:15,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },

    alice:{
        backgroundColor:'white',
        width:320,
        height:80,
        justifyContent:'space-evenly',
        display:'flex',
        flexDirection:'row',
        margin:17,
        marginTop:-5,
        alignItems:'center',
        borderRadius:10,
    },

    betting:{
        backgroundColor:'white',
        width:320,
        height:150,
        margin:17,
        paddingTop:10,
        borderRadius:10,
        rowGap:20,
        marginTop:0,
    },

    betting1:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'

    },

    betting2:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'

    },
    nav:{
        backgroundColor:'white',
        height:80,
        width:360,
        justifyContent:'space-evenly',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:15
    }

})


export default LoginFullpage