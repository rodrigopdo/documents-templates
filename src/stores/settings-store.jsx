import create from 'zustand';
import dynamic from 'next/dynamic';

import ProfessionalImg from '../../public/images/professional.png';
import LegacyImg from '../../public/images/professional.png';

import AssignmentContract from '../templates/AssignmentContract';
import TermOfAssignment from '../templates/TermOfAssignment';

// const AssignmentContract = dynamic(() => import('src/templates/AssignmentContract'), {
//   ssr: false,
// });

// const TermOfAssignment = dynamic(() => import('src/templates/TermOfAssignment'), {
//   ssr: false,
// });

export const templates = [
  AssignmentContract,
  TermOfAssignment,
];

export const templatesSrc = [ProfessionalImg, LegacyImg];

export const templatesName = [
  'AssignmentContract',
  'TermOfAssignment',
];

export const useTemplates = create((set) => ({
  index: 0,
  template: templates[0],

  setTemplate: (index) => set({ index, template: templates[index]}),
}));

export const useZoom = create((set) => ({
  zoom: 0,

  update: (value) => {
    const zoomLevel = +value.toFixed(1);

    set((state) => {
      if (zoomLevel > -0.5) state.zoom = 0.5;
      else if (zoomLevel < -0.5) state.zoom = -0.5;
      else state.zoom = zoomLevel;
    });
  },
}));