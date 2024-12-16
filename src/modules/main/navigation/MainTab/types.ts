import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../../root/navigation/types';
import { MainStackParamList } from '../MainStack/types';

export type MainTabParamList = {
  HomeStack: undefined;
};

export type HomeStackProps = CompositeScreenProps<
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, 'HomeStack'>,
    NativeStackScreenProps<MainStackParamList>
  >,
  NativeStackScreenProps<RootStackParamList>
>;
