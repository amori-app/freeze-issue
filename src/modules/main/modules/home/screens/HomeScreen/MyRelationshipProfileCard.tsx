import React, { ReactElement } from 'react';
import { Pressable, PressableProps } from 'react-native';
import styled from 'styled-components/native';

import IconArrowRightCircled from '@assets/images/icon-arrow-right-circled.svg';
import { ProgressBar } from '@components/ProgressBar';
import { Text } from '@components/Text';

export interface MyRelationshipProfileCardProps extends PressableProps {
  completion: number;
}

export function MyRelationshipProfileCard({
  completion,
  ...pressableProps
}: MyRelationshipProfileCardProps): ReactElement {
  return (
    <Pressable {...pressableProps}>
      <StyledMyRelationshipProfileCard>
        <Content>
          <Header>My relationship profile</Header>
          <Progress>
            <StyledProgressBar progress={completion} />
            <ProgressLabel>
              {Math.floor(completion * 100)}% complete
            </ProgressLabel>
          </Progress>
        </Content>
        <IconArrowRightCircled />
      </StyledMyRelationshipProfileCard>
    </Pressable>
  );
}

const StyledMyRelationshipProfileCard = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 24px 16px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.LAVENDER};
`;

const Content = styled.View`
  flex-grow: 1;
`;

const Header = styled(Text)`
  font-family: ${({ theme }) => theme.font.Manrope.BOLD};
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 8px;
`;

const Progress = styled.View`
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  gap: 8px;
`;

const StyledProgressBar = styled(ProgressBar).attrs(({ theme }) => ({
  baseBarColor: 'rgba(255, 255, 255, 0.2)',
  fillingBarColor: theme.color.GREY_BLACK,
}))`
  flex-grow: 1;
  max-width: 120px;
`;

const ProgressLabel = styled(Text)`
  font-family: ${({ theme }) => theme.font.Manrope.SEMI_BOLD};
  font-size: 14px;
  line-height: 19px;
`;
