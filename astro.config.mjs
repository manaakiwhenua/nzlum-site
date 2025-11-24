import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
  

export default defineConfig({
  site: 'https://nzlum.landcareresearch.co.nz',
  base: '/',
  redirects: {
    'classification/system/': '/classification/v0-3/system/' // Redirect URL without a version spec to the latest available version
  },
  integrations: [
    starlight({
      title: 'NZLUM',
      description: 'New Zealand Land Use & Management classification',
      logo: { src: './src/assets/MWLR_BSI.png', alt: 'NZLUM' },
      favicon: '/favicon.png',
	  customCss: ['./src/custom.css'],
      social: [
        { label: 'GitHub', href: 'https://github.com/manaakiwhenua/nzlum-site', icon: 'github' },
      ],
      sidebar: [
        { label: 'NZLUM classification system', link: '/' },
        {
          label: 'Classification (v0.3)',
          collapsed: true,
          items: [
            { label: 'Classification system', link: '/classification/system' },
            { label: 'Classes', link: '/classification/v0-3/classes' },
            { label: 'Class 1.0.0', link: '/classification/v0-3/class-1' },
            { label: 'Class 2.0.0', link: '/classification/v0-3/class-2' },
            { label: 'Class 3.0.0', link: '/classification/v0-3/class-3' },
            { label: 'Data structure', link: '/classification/v0-3/structure' },
            { label: 'Tenure', link: '/classification/v0-3/tenure' },
            { label: 'Scale & temporality', link: '/classification/v0-3/scale' },
            { label: 'Format', link: '/classification/v0-3/format' },
          ],
        },
        // {
        //   label: 'Classification (v0.4)',
        //   collapsed: true,
        //   items: [
        //     { label: 'Classification system', link: '/classification/v0-4/system' },
        //     { label: 'Classes', link: '/classification/v0-4/classes' },
        //     { label: 'Class 1.0.0', link: '/classification/v0-4/class-1' },
        //     { label: 'Class 2.0.0', link: '/classification/v0-4/class-2' },
        //     { label: 'Class 3.0.0', link: '/classification/v0-4/class-3' },
        //     { label: 'Data structure', link: '/classification/v0-4/structure' },
        //     { label: 'Tenure', link: '/classification/v0-4/tenure' },
        //     { label: 'Scale & temporality', link: '/classification/v0-4/scale' },
        //     { label: 'Format', link: '/classification/v0-4/format' },
        //   ],
        // },
        {
          label: 'About us',
          items: [
            { label: 'Steering Group (NZLUSG)', link: '/governance/governance' },
            { label: 'Contact us', link: '/governance/contact' },
          ],
        },
        {
          label: 'References',
          items: [
            { label: 'Terms', link: '/reference/terms' },
            { label: 'Documents', link: '/reference/documents' },
          ],
        }
        ,
      ],
    }),
  ],
});