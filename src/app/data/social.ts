import { IconName } from '../components/icon/icons';

export interface SocialLink {
  label: string;
  url: string;
  icon: IconName;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/dylanduley', icon: 'linkedin' },
  { label: 'GitHub', url: 'https://github.com/dylanduley', icon: 'github' },
  { label: 'GitLab', url: 'https://gitlab.com/dylanduley', icon: 'gitlab' },
];
