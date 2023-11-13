import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Text, Image } from "react-native-elements";
import { data } from "../DummyData.js";
const dataProduct = data.products;
const backgroundImageUrl = `https://plus.unsplash.com/premium_photo-1664117436431-aaa0d75814fe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTIlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D`;
export default function Home() {
  console.log(dataProduct, "products>>>>>>>>>>>>>>>>>>>>>>>>>");
  //   const [isPressed, setIsPressed] = useState(false)
  return (
    <View>
      <ScrollView>
        {dataProduct.map((item, indexNum) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.7}
            onPress={() => {
              console.log("item Pressed ", item);
            }}
          >
            {" "}
            <Card
              key={item.id}
              source={{ uri: backgroundImageUrl }}
              containerStyle={main.card}
            >
              <Image source={{ uri: item?.thumbnail }} style={main.image} />
              <Text style={main.title}>{item.title}</Text>
              <Text style={main.description}>{item.description}</Text>
              <Text style={main.price}>Price : ${item.price}</Text>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const main = StyleSheet.create({
  card: {
    // backgroundColor: "yellow",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or "contain" depending on your preference
    width: "100%",
    height: "100%",
  },
  image: {
    borderRadius: 10,
    borderTopLeftRadius: 10,
    height: 200,
    objectFit: "cover",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
