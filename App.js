import { NavigationContainer } from "@react-navigation/native"
import {AuthStack} from "./src/navigation"

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}

export default App