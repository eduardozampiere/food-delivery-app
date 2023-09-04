import React from "react";
import { ScrollView } from "react-native";
import CartItem from "../CartItem";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, getCart } from "../../redux/slice/cart";

const CartItemsSection = () => {
  const dishes = useSelector(getCart);

  const getCartGroupedById = (dishes) => {
    const _response = [];
    dishes.forEach((item) => {
      if (!_response[item.id]) {
        _response[item.id] = [];
      }
      _response[item.id].push(item);
    });

    return _response;
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 50,
      }}
      className="bg-white pt-5"
    >
      {getCartGroupedById(dishes).map((dish) => (
        <CartItem item={dish} key={dish[0].id} />
      ))}
    </ScrollView>
  );
};

export default CartItemsSection;
