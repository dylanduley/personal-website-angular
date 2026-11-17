import { IconName } from '../components/icon/icons';

export interface Fact {
  icon: IconName;
  value: string;
  label: string;
}

export const FACTS: Fact[] = [
  { icon: 'code', value: '2023', label: 'Started as a software engineer at LIDP' },
  { icon: 'graduation-cap', value: 'UF', label: 'B.S. Computer Science in progress' },
  { icon: 'certificate', value: '4', label: 'LOMA designations: FLMI, ACS, AIRC, ALMI' },
  { icon: 'paintbrush', value: 'Art', label: 'Painting and sketching outside of work' },
];
