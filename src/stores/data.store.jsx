import create from 'zustand';
import { arrayMoveImmutable } from 'array-move';
import { persist } from 'zustand/middleware';
import produce from 'immer';
import userData from '../stores/data.json';

// const labels = [
//   'Experience',
//   'Key Projects / Involvements',
//   'Certificates and Awards',
//   'About me',
//   'Career Objective',
//   'Technical Expertise',
//   'Skills / Exposure',
//   'Methodology / Approach',
//   'Tools',
//   'Education',
//   'Relevant Experience',
//   'Total Experience',
// ];

export const useIntro = create(
  persist(
    (set) => ({
      intro: userData.basics,

      reset: (data = userData.basics) => {
        set({ intro: data });
      },

      update: (type, value) =>
        set(
          produce((state) => {
            if (type.includes('.')) {
              const [parent, child] = type.split('.');
              state.intro[parent][child] = value;
            } else state.intro[type] = value;
          })
        ),

      updateProfiles: (type, field, value) =>
        set(
          produce((state) => {
            const object = state.intro.profiles.find((profile) => profile.network === type);

            if (object) {
              object[field] = value;
              return;
            }

            state.intro.profiles.push({ network: type, [field]: value });
          })
        ),
    }),
    {
      name: 'sprb-intro',
    }
  )
);

