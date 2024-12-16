import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '../../../root/navigation/types';

export type MainStackParamList = {
  MainTab: undefined;
};

export type MainTabProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParamList, 'MainTab'>,
  NativeStackScreenProps<RootStackParamList>
>;
