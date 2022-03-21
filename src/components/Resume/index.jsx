import React from 'react';
import { useTemplates, useZoom } from '../../stores/settings-store';

import { ResumeContainer } from './styles';

const Resume = () => {
  
  const Template = useTemplates((state) => state.template);
  const zoom = useZoom((state) => state.zoom);

  return (
    <ResumeContainer className='resume' zoom={zoom}>
      <Template />
    </ResumeContainer>
  )
}

export default Resume;