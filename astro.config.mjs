import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';

export default defineConfig({
  site: 'https://jdaltech.github.io',
  base: '/tecnologies-tdp',
  integrations: [
    starlight({
      head: [
        {
          tag: 'script',
          attrs: {
            'data-goatcounter': 'https://jdal.goatcounter.com/count',
            async: true,
            src: '//gc.zgo.at/count.js',
          },
        },
      ],
      title: 'Tecnologies-TdP',
      tableOfContents: false, // 👈 Elimina la columna dreta "En aquesta pàgina" a tot el portal
      components: {
        Footer: './src/components/Footer.astro',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Català',
          lang: 'ca',
        },
      },
      logo: {
        src: './src/assets/logo.png',
        alt: 'Logotip Tecnologies Torredelpalau',
        replacesTitle: false, // Posa-ho a true si al final vols amagar el text del costat del logo
      },
      customCss: [
        './src/styles/custom.css',
      ],
      plugins: [
        starlightSidebarTopics(
          [
            {
              label: "4t d'ESO",
              link: '/4eso/',
              icon: 'laptop',
              items: [
                {
                  label: '4t ESO - Programació i Robòtica',
                  items: [{ autogenerate: { directory: '4eso' } }],
                },
              ],
            },
            {
              label: '1r de Batxillerat',
              link: '/1batx/',
              icon: 'rocket',
              items: [
                { label: 'Presentació del curs', link: '/1batx/' },
                {
                  label: 'Mòdul: HTML',
                  collapsed: true,
                  items: [{ autogenerate: { directory: '1batx/html' } }],
                },
                {
                  label: 'Mòdul: CSS',
                  collapsed: true,
                  items: [{ autogenerate: { directory: '1batx/css' } }],
                },
                {
                  label: 'Mòdul: BBDD i PHP',
                  collapsed: true,
                  items: [{ autogenerate: { directory: '1batx/bbdd-php' } }],
                },
                {
                  label: 'Mòdul: JavaScript',
                  collapsed: true,
                  items: [{ autogenerate: { directory: '1batx/js' } }],
                },
                {
                  label: 'Mòdul: Python',
                  collapsed: true,
                  items: [{ autogenerate: { directory: '1batx/python' } }],
                },
                {
                  label: 'Mòdul: Astro + Node.js',
                  collapsed: true,
                  items: [{ autogenerate: { directory: '1batx/astro-nodejs' } }],
                },
              ],
            },
            {
              label: '2n de Batxillerat',
              link: '/2batx/',
              icon: 'setting',
              items: [
                {
                  label: '2n Batxillerat - Tecnologia 2',
                  items: [{ autogenerate: { directory: '2batx' } }],
                },
              ],
            },
          ],
          {
            exclude: ['/license', '/license/**'],
          }
        ),
      ],
    }),
  ],
});