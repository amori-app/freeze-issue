import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainStackParamList } from '../../main/navigation/MainStack/types';

export type RootStackParamList = {
  MainStack: NavigatorScreenParams<MainStackParamList>;
};

export type MainStackProps = NativeStackScreenProps<
  RootStackParamList,
  'MainStack'
>;
