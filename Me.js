import {React,useState} from 'react'
import { View,Text,StyleSheet,Image,StatusBar,SafeAreaView,TouchableOpacity} from "react-native";
import {useNavigation} from '@react-navigation/native' 
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome6';




function Me() {
  
   const {navigate} = useNavigation()

   const [locked,setLocked]=useState(false)


  
  const Go=()=>{
    navigate('Hello')
  }

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

  const Home =()=>{
    navigate('Home')
  }

  return (

   
    <View style={{flex:1}}>

      <StatusBar backgroundColor={'grey'}/>

        <SafeAreaView style={{}}>
          <View style={{backgroundColor:'#96dbb8'}}>

          <View style={{flexDirection:'row',gap:10,marginTop:20,marginLeft:7}}>

            <View style={{marginTop:5}}>

              <Image source={{uri: "https://i.pinimg.com/564x/3f/cc/68/3fcc686da53562a26084bc50764f64f4.jpg"}}
                style={{width:35, height:35,borderRadius:50}}
              />

            </View>

            <View>

              <Text style={{fontWeight:800,color:"#005477"}}>Hi Emmanuel Nwanneri</Text>


                <View style={{marginLeft:5,marginTop:3}}>

                  <View style={{height:20,width:105,backgroundColor:'white',borderRadius:20,alignItems:'center'}}>
                    <Text style={{fontSize:11,margin:'auto',fontWeight:500}}>Upgrade to Tier 2</Text>
                  </View>

                  <Icon2 name='medal' size={21} style={{position:"absolute",right:108,top:-0.9,bottom:1}} color={'#858275'}/>

                </View>

            </View>

            <View style={{marginLeft:130}}>
              <Icon2 name="checkbox-blank-circle" size={10} color={'red'} style={{position:'absolute',left:20,bottom:35}}/>

              <TouchableOpacity>
                <Icon3 size={30} name='settings'/>
              </TouchableOpacity>

            </View>

          </View>


          <View>

            <View style={{flexDirection:'row', gap:15,marginLeft:10,marginTop:15}}>

              <Text>Total Balance</Text>

              <TouchableOpacity onPress={()=>setLocked(!locked)} activeOpacity={0.7}>
                <Icon2 name ={locked ? 'eye-off' : 'eye-outline'} color={'black'} size={15} style={{marginTop:2}}/>
              </TouchableOpacity>

            </View>

          </View>

          <View>
            {locked?
            <View style={{flexDirection:'row',marginLeft:25,marginTop:10}}>
              <Icon2 name='asterisk' color={'black'} size={15}/>
              <Icon2 name='asterisk' color={'black'} size={15}/>
              <Icon2 name='asterisk' color={'black'} size={15}/>
              <Icon2 name='asterisk' color={'black'} size={15}/>
            </View>

            : <Text style={{fontSize:19,color:'black',marginTop:5,marginLeft:5}}><Icon5 name='naira-sign' size={18} color={'black'}/> 20,950,300</Text>}
            
             
          </View>

          <View>
            <Text>& Cashback </Text>
          </View>
          </View>

          


          











          <View style={styles.nav}>

        <View>

          <TouchableOpacity onPress={Home}>

            <View>
              <Icon2 name='circle-double' size={20}/>
            </View>

            <Text style={{paddingTop:5}}>Home</Text>

          </TouchableOpacity>

        </View>


        <View>

          <TouchableOpacity onPress={Reward}>

            <View>
              <Icon2 name='diamond-stone' size={20}/>
            </View>

            <Text style={{paddingTop:5,marginLeft:-5}}>Rewards</Text>

          </TouchableOpacity>

        </View>

        <View>

          <TouchableOpacity onPress={Finance}>

            <View>
             <Icon2 name='chart-line' size={20}/>
            </View>

            <Text style={{paddingTop:5,marginLeft:-5}}>Finance</Text>

          </TouchableOpacity>

        </View>

        <View>

          <TouchableOpacity onPress={Cards}>

            <View>
             <Icon2 name='credit-card-outline' size={20}/>
            </View>
  
            <Text style={{paddingTop:5,}}>Cards</Text>

          </TouchableOpacity>


        </View>

        <View>

          <TouchableOpacity onPress={Me}>

            <View>
              <Icon2 name='account-circle' size={20} color={'#00ab6b'}/>
            </View>

           <Text style={{paddingTop:5,marginLeft:5}}>Me</Text>

          </TouchableOpacity>

        </View>

        </View>

        </SafeAreaView>


    </View>
  )
}

const styles = StyleSheet.create({

  nav:{
    backgroundColor:'white',
    height:80,
    width:360,
    justifyContent:'space-evenly',
    display:'flex',
    flexDirection:'row',
    marginTop:570,
    alignItems:'center',
    gap:15
  }
})

export default Me