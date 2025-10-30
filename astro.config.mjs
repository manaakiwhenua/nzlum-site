import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
  

export default defineConfig({
  site: 'https://manaakiwhenua.github.io',
  base: '/nzlum-site/',
  integrations: [
    starlight({
      title: 'NZLUM',
      description: 'New Zealand Land Use & Management classification',
      logo: { src: './src/assets/MWLR_BSI.png', alt: 'NZLUM' },
      favicon: '/favicon.svg',
	  customCss: ['./src/custom.css'],
      social: [
        { label: 'GitHub', href: 'https://github.com/manaakiwhenua/nzlum-site', icon: 'github' },
      ],
      sidebar: [
        { label: 'New Zealand Land Use Management (NZLUM) classification system', link: '/' },
        {
          label: 'Classification',
          items: [
            { label: 'Classification system', link: '/classification/system' },
            { label: 'Classes', link: '/classification/classes' },
            { label: 'Class 1.0.0', link: '/classification/class-1' },
            { label: 'Class 2.0.0', link: '/classification/class-2' },
            { label: 'Class 3.0.0', link: '/classification/class-3' },
            { label: 'Data structure', link: '/classification/structure' },
            { label: 'Tenure', link: '/classification/tenure' },
            { label: 'Scale & Temporality', link: '/classification/scale' },
            { label: 'Format', link: '/classification/format' },
          ],
        },
        {
          label: 'Governance',
          items: [
            { label: 'Governance Group', link: '/governance/governance' },
          ],
        },
        {
          label: 'References',
          items: [
            { label: 'Terms', link: '/reference/terms' },
            { label: 'Documents', link: '/reference/documents' },
          ],
        },
      ],
    }),
  ],
});