import React from 'react';
import { Divider, Container, Heading } from './styles';

import { useIntro } from '../../../stores/data.store';

import { IntroEdit } from '../IntroEdit';

import { INTRO_METADATA } from '../../../meta-data/input_metadata';

export const IntroEditor = () => {
  const introState = useIntro((state) => state.intro);
  const update = useIntro((state) => state.update);

  return (
    <Container>
      <Heading>Intro</Heading>
      <IntroEdit state={introState} METADATA={INTRO_METADATA} update={update} />
      <Divider />
    </Container>
  );
};
