import { View,Text,StyleSheet,Image,StatusBar,SafeAreaView} from "react-native"
import {useNavigation} from '@react-navigation/native' 



const Hello =()=>{

    const {navigate} = useNavigation()


    setTimeout(()=>{
       navigate('LoginFullpage')
    },5000)





    return(


        // Always Give Your View A Flex Of 1 To Take The Avalible Space
        // translucent{true}
        
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"#2dcb74"}}>

            <StatusBar backgroundColor={'grey'}/>

            <SafeAreaView style={{flex:1, justifyContent:'center',alignItems:"center",marginBottom:40}}>

            <Image source={{uri: "https://i.pinimg.com/564x/3f/cc/68/3fcc686da53562a26084bc50764f64f4.jpg"}}
            style={{width:70, height:70,borderRadius:50,}}
            />


           <Text style={Styles.name}>
             we are beyond banking
           </Text>

         



            <View style={{flexDirection:"row",}}>

                <Image source={{url:'https://i.pinimg.com/236x/f2/10/42/f210421069783c11fa5111e37a2fa81e.jpg'}}
                 style={{width:20,height:20,}}
                />

                <Text style={Styles.cbn}>
                 licensed by the <Text style={{textTransform:'uppercase',fontWeight:900,fontSize:16}}>cbn</Text> and issured by the |
                </Text>

                <Text style={{letterSpacing:2,fontSize:18,color:'#00008B',fontWeight:900,paddingTop:40,paddingLeft:2,textDecorationLine:'underline'}}>NDIC</Text>

            </View>
          

          

            </SafeAreaView>


           

         

        </View>
    )
}

const Styles = StyleSheet.create({
    name:{
        color:'#00008B',
        textTransform:'capitalize',
        fontSize:30,
        fontWeight:'700',
        paddingTop:10
    },
    
    cbn:{
        color:'#00008B',
        textAlign:'center',
        marginTop:40,
    }

})

export default Hello

