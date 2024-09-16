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

            <SafeAreaView style={{flex:1, justifyContent:'center',alignItems:"center"}}>

            <Image source={{uri: "https://i.pinimg.com/564x/3f/cc/68/3fcc686da53562a26084bc50764f64f4.jpg"}}
            style={{width:70, height:70,borderRadius:30}}
            />


           <Text style={Styles.name}>
             we are beyond banking
           </Text>

         




          

           <Text style={Styles.cbn}>
             licensed by cbn and issured by
           </Text>

            </SafeAreaView>


           

         

        </View>
    )
}

const Styles = StyleSheet.create({
    name:{
        color:'#005477',
        textTransform:'capitalize',
        fontSize:30,
        fontWeight:'700',
    },
    
    cbn:{
        color:'#005477',
        textAlign:'center',
        marginTop:20,
    }

})

export default Hello

