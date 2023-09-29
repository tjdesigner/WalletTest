/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";

interface Card {
  id: string;
  number: string;
  1;
  name: string;
  expirationDate: string;
  cvv: string;
}

/****************************************************/

export type RootStackParamList = {
  Home: Card;

  Register: {
    card?: Card;
  };

  RegisterConfirmation: undefined;

  MyCards: {
    allCards?: Card[];
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackScreenProps<ScreenName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, ScreenName>;
