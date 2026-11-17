export interface Experience {
  role: string;
  org: string;
  period: string;
  logo: string;
  logoAlt: string;
  description?: string;
}

export const EXPERIENCE: Experience[] = [
  {
    role: 'Senior Full Stack Software Engineer',
    org: 'LIDP Consulting Services',
    period: '2023 – Present',
    logo: '/assets/images/web/LIDP.webp',
    logoAlt: 'LIDP logo',
    description:
      'Build Angular frontends and Java Spring services for a life insurance policy management platform. Develop reusable UI components, REST APIs, automation tooling and data migration processes, and contribute to architectural decisions alongside cross-functional teams.',
  },
  {
    role: 'B.S. in Computer Science',
    org: 'University of Florida',
    period: '2026 – Present',
    logo: '/assets/images/web/UF.webp',
    logoAlt: 'University of Florida logo',
  },
  {
    role: 'A.A. & A.S. Degrees',
    org: 'State College of Florida',
    period: 'Completed',
    logo: '/assets/images/web/SCF.webp',
    logoAlt: 'State College of Florida logo',
  },
  {
    role: 'FLMI, ACS, AIRC & ALMI Designations',
    org: 'LOMA',
    period: 'Completed',
    logo: '/assets/images/web/LOMA.webp',
    logoAlt: 'LOMA logo',
  },
];
