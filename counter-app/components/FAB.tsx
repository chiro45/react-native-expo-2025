import { View, Text, Pressable,StyleSheet} from 'react-native'

interface Props{
    onPress:VoidFunction
    onLongPress: VoidFunction
    label:string
    position: "right" | "left"
    
}

export const  FAB = ({
onPress,
onLongPress,
label, position
}:Props)=> {
  return (
    <Pressable 
    style={({pressed})=> [styles.floationButton, position ==="left" ? styles.positionLeft :  styles.positionRight, pressed ? {opacity:0.5}: {opacity:1}]}
      onPress={onPress} 
      onLongPress={onLongPress}
       >
        <Text style={{color:"#fff", fontSize:10}}>{label}</Text>
      </Pressable>
   
  )
}


const styles = StyleSheet.create({
  floationButton:{
    position: "absolute",
    bottom: 20,
    backgroundColor:"#65558f",
    padding: 20,
    borderRadius: 20,
    shadowColor:'#000',
    shadowOffset: {width:0, height:4},
    shadowOpacity: 0.3,
    elevation:3,
    shadowRadius:4
  },
  positionRight:{
    right:20,
  },
  positionLeft:{
    left:20
  },
  


});
