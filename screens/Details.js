import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Card, Paragraph, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

export default function Details({ route }) {
  const x = route.params.product;
  const [idItems, setIdItems] = useState([]);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

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
    <View>
      <Card
        style={{
          width: "100%",
        }}
        key={x.id}
      >
        <Card.Title titleStyle={{ alignSelf: "center" }} title={x.name} />
        <Paragraph style={{ alignSelf: "center" }}>${x.price}</Paragraph>
        <Card.Content>
          <Card.Cover
            style={{ width: "100%", height: "75%" }}
            source={{ uri: x.img }}
          />
          <Paragraph style={{ alignSelf: "center" }}>{x.details}</Paragraph>

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
    </View>
  );
}
