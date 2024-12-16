import React, { ReactElement } from 'react';
import ContentLoader, { Circle, Rect } from 'react-content-loader/native';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

import { BorderedCard } from '@components/BorderedCard';

export type RelationshipAssistantChannelCardPlaceholderProps = Omit<
  ViewProps,
  'children'
>;

export function RelationshipAssistantChannelCardPlaceholder({
  ...viewProps
}: RelationshipAssistantChannelCardPlaceholderProps): ReactElement {
  return (
    <StyledRelationshipAssistantChannelCardPlaceholder {...viewProps}>
      <ContentLoader
        width="168"
        height="42"
        backgroundColor="#28263A"
        foregroundColor="#605B82">
        <Circle cx="20" cy="20" r="20" />
        <Rect x="51" y="3" width="104" height="13" />
        <Rect x="51" y="29" width="117" height="13" />
      </ContentLoader>
      <ContentLoader
        width="63"
        height="45"
        backgroundColor="#28263A"
        foregroundColor="#605B82">
        <Rect x="15" y="32" width="48" height="13" />
        <Rect width="63" height="22" rx="11" />
      </ContentLoader>
    </StyledRelationshipAssistantChannelCardPlaceholder>
  );
}

const StyledRelationshipAssistantChannelCardPlaceholder = styled(BorderedCard)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 86px;
  padding: 16px;
`;
