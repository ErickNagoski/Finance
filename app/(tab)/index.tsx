import { View, Text } from "react-native"
import { Link, useLink } from "expo-router"
import { Button } from "@rneui/themed"

export default function Page(): JSX.Element {
   const link  = useLink()

   function handleOpenProfile(){
      link.push("profile")
   }
   
   return (
      <View>
         <Text>Teste</Text>
         <Link href={"/profile"} children={<Text>Ir para profile</Text>}></Link>
         <Link href={"/product/3"} children={<Text>Ver Produto</Text>}></Link>
         <Button title="profile" onPress={handleOpenProfile}/>
      </View>)
}