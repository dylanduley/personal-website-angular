import { IconName } from '../components/icon/icons';

export interface Fact {
  icon: IconName;
  value: string;
  label: string;
}

export const FACTS: Fact[] = [
  { icon: 'code', value: '2023', label: 'Year I started engineering at LIDP' },
  { icon: 'graduation-cap', value: 'UF', label: 'B.S. Computer Science in progress' },
  { icon: 'certificate', value: '4', label: 'LOMA designations: FLMI, ACS, AIRC, ALMI' },
  { icon: 'paintbrush', value: '∞', label: 'Sketches started (mostly unfinished)' },
];
