import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../../../../root/navigation/types';
import type { MainStackParamList } from '../../../navigation/MainStack/types';
import type { MainTabParamList } from '../../../navigation/MainTab/types';

export type HomeStackParamList = {
  HomeScreen: undefined;
};

export type HomeScreenProps = CompositeScreenProps<
  CompositeScreenProps<
    CompositeScreenProps<
      NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>,
      BottomTabScreenProps<MainTabParamList, 'HomeStack'>
    >,
    NativeStackScreenProps<MainStackParamList>
  >,
  NativeStackScreenProps<RootStackParamList>
>;
