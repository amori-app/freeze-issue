import React, { ReactElement } from 'react';
import { Pressable, PressableProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import IconArrowRightCircled from '@assets/images/icon-arrow-right-circled.svg';
import { Text } from '@components/Text';

export type Wrapped2024CardProps = PressableProps;

export function Wrapped2024Card(props: Wrapped2024CardProps): ReactElement {
  return (
    <Pressable {...props}>
      <StyledWrapped2024Card>
        <Background
          colors={['#6C62E4', '#CF92FF']}
          start={{ x: 0.24, y: 0.5 }}
          end={{ x: 1.0, y: 0.5 }}
        />
        <Content>
          <Body>
            <Title>Dating Wrapped 2024</Title>
            <Subtitle>Your dating journey summarized</Subtitle>
          </Body>
          <IconArrowRightCircled />
        </Content>
      </StyledWrapped2024Card>
    </Pressable>
  );
}

const StyledWrapped2024Card = styled.View`
  padding: 24px 16px;
  border-radius: 10px;
  overflow: hidden;
  background: green;
`;

const Background = styled(LinearGradient)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const Body = styled.View`
  flex-grow: 1;
`;

const Title = styled(Text)`
  font-family: ${({ theme }) => theme.font.Manrope.BOLD};
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 8px;
`;

const Subtitle = styled(Text)`
  font-family: ${({ theme }) => theme.font.Manrope.SEMI_BOLD};
  font-size: 14px;
  line-height: 19px;
`;
