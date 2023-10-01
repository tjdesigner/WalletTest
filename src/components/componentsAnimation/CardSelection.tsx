import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated from 'react-native-reanimated'

import Card, { Card as CardModel, CARD_WIDTH, CARD_HEIGHT } from "./Card";
import CheckIcon from "./CheckIcon";
import Thumbnail from "./Thumbnail";

interface CardSelectionProps {
  cards: [CardModel, CardModel, CardModel];
}

const INITIAL_INDEX: number = -1;
const { Value, useCode } = Animated

export default ({ cards }: CardSelectionProps) => {
  const selectCard = new Value(INITIAL_INDEX)
  const cardRotations = cards.map(() => new Value(0))

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        {cards.map((card, index) => {
          return (
            <View
              key={card.id}
              style={{
                ...StyleSheet.absoluteFillObject
              }}
            >
              <Card key={card.id} {...{ card }} />
            </View>
          );
        })}
      </View>
      <SafeAreaView>
        {cards.map(({ id, name, color, thumbnail }, index) => (
          <RectButton key={id} onPress={() => selectCard(index)}>
            <View style={styles.button} accessible>
              <Thumbnail {...{ thumbnail }} />
              <View style={styles.label}>
                <Text>{name}</Text>
              </View>
              <CheckIcon {...{ color }} />
            </View>
          </RectButton>
        ))}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cards: {
    flex: 1,
    backgroundColor: "#f4f6f3"
  },
  button: {
    flexDirection: "row"
  },
  label: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#f4f6f3",
    justifyContent: "center"
  }
});
