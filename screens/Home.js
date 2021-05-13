import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Title, Card, Paragraph } from "react-native-paper";
import { itemsData } from "../data/items";
import { Searchbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

export default function Home({ navigation }) {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [items, setItems] = useState(itemsData);
  const [filter, setFilter] = useState([]);
  const [typing, setTyping] = useState("");
  const [idItems, setIdItems] = useState([]);

  const handleFilter = () => {
    setFilter(
      items.filter((x) => x.name.toLowerCase().includes(typing.toLowerCase()))
    );
  };

  const addCart = (product) => {
    dispatch({
      type: "ADD",
      payload: product,
    });
  };

  const deleteItemCart = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  useEffect(() => {
    setIdItems(cartItems.map((x) => x.id));
  }, [cartItems]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Searchbar
          onChangeText={(value) => setTyping(value)}
          onChange={handleFilter}
          style={{ marginTop: 10, width: "80%", alignSelf: "center" }}
        />
        <Title style={{ alignSelf: "center", marginTop: 10, color: "#8FBC8F" }}>
          Catalogo
        </Title>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {!typing
            ? items.map((x) => (
                <Card
                  onPress={() =>
                    navigation.navigate("Details", {
                      product: x,
                    })
                  }
                  style={{
                    width: "50%",
                  }}
                  key={x.id}
                >
                  <Card.Title
                    titleStyle={{ alignSelf: "center" }}
                    title={x.name}
                  />
                  <Paragraph style={{ alignSelf: "center" }}>
                    ${x.price}
                  </Paragraph>
                  <Card.Content>
                    <Card.Cover source={{ uri: x.img }} />

                    {!idItems.includes(x.id) ? (
                      <Button
                        labelStyle={{ fontSize: 25, color: "#8FBC8F" }}
                        icon="cart-outline"
                        style={{ alignSelf: "center" }}
                        onPress={() => addCart(x)}
                      ></Button>
                    ) : (
                      <Button
                        labelStyle={{ fontSize: 25, color: "#8FBC8F" }}
                        icon="cart-off"
                        style={{ alignSelf: "center" }}
                        onPress={() => deleteItemCart(x.id)}
                      ></Button>
                    )}
                  </Card.Content>
                  <Card.Actions style={{ alignSelf: "center" }}></Card.Actions>
                </Card>
              ))
            : filter.map((x) => (
                <Card
                  onPress={() =>
                    navigation.navigate("Details", {
                      product: x,
                    })
                  }
                  style={{
                    width: "50%",
                  }}
                  key={x.id}
                >
                  <Card.Title
                    titleStyle={{ alignSelf: "center" }}
                    title={x.name}
                  />
                  <Paragraph style={{ alignSelf: "center" }}>
                    ${x.price}
                  </Paragraph>
                  <Card.Content>
                    <Card.Cover source={{ uri: x.img }} />

                    {!idItems.includes(x.id) ? (
                      <Button
                        labelStyle={{ fontSize: 25, color: "#8FBC8F" }}
                        icon="cart-outline"
                        style={{ alignSelf: "center" }}
                        onPress={() => addCart(x)}
                      ></Button>
                    ) : (
                      <Button
                        labelStyle={{ fontSize: 25, color: "#8FBC8F" }}
                        icon="cart-off"
                        style={{ alignSelf: "center" }}
                        onPress={() => deleteItemCart(x.id)}
                      ></Button>
                    )}
                  </Card.Content>
                  <Card.Actions style={{ alignSelf: "center" }}></Card.Actions>
                </Card>
              ))}
        </View>
      </ScrollView>

      {/*    <Button onPress={() => navigation.navigate("Details")}>To details</Button>
      <Button onPress={() => navigation.navigate("Cart")}>To cart</Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
