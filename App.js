import React, { useEffect } from "react";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Cart from "./screens/Cart";
import { Button } from "react-native-paper";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useSelector } from "react-redux";
import Items from "./components/Items";

const Stack = createStackNavigator();

const options = {
  title: "Inicio",
  headerStyle: {
    backgroundColor: "#8FBC8F",
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              ...options,

              headerTintColor: "#fff",
              headerRight: () => (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    marginRight: 15,
                  }}
                >
                  <Button
                    labelStyle={{ fontSize: 25, color: "#fff" }}
                    icon="cart"
                  />
                  <Items />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              ...options,
              title: "Detalles",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              ...options,
              title: "Tu carrito",
              headerTitleStyle: { textAlign: "center", fontWeight: "bold" },
              headerTintColor: "#fff",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
