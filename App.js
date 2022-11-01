import { NavigationContainer } from "@react-navigation/native"
import { Provider } from "react-redux"
import store from "./src/state/store"
import MainNav from "./src/navigation/MainNav"

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </Provider>
  )
}

export default App