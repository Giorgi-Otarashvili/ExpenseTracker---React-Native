// App.js
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExpensesOverview from "./components/ExpensesOverview";
import { Provider } from "react-redux";
import store from "./redux/store.js"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <Provider store={store}>

      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
      </NavigationContainer>
            </Provider>
    </>
  );
}