# personal-website-angular

My personal website. It's where I share my work as a full stack software engineer, my schooling, and the paintings and sketches I make in my free time.

Built with Angular 21 and SCSS. The pages are prerendered at build time, and the site has a light and dark theme.

> The code is open source, but the art and images are not. See [License](#license).

## Running it locally

You'll need Node.js and npm.

```bash
npm install
npm start
```

Then open http://localhost:4200.

## Other commands

| Command | What it does |
| --- | --- |
| `npm run build` | Production build, output goes to `dist/` |
| `npm run watch` | Development build that rebuilds on changes |
| `npm test` | Runs the unit tests |
| `npm run serve:ssr:app` | Serves the production build with the Node server |

## Project layout

- `src/app/pages` - the Home, About and Portfolio pages
- `src/app/components` - the sections and pieces those pages are built from
- `src/app/data` - the artwork list for the gallery
- `src/app/services` - the light / dark theme
- `src/styles.scss` - colors, fonts and the shared styles
- `src/assets` - images and fonts

## License

The code is under the [MIT License](LICENSE), so feel free to look around and borrow from it.

**The MIT License covers the code only. It does not cover any of the art or images.**

All photos, paintings, sketches, drawings, the logo and every other image in this repository (everything in `src/assets/images`) are © 2026 Dylan Duley. All rights reserved. They are not licensed for any use. You may not copy, download, edit, redistribute, use in your own projects, or use them to train AI models. If you fork or reuse this code, remove them and use your own images.

Fonts and icons belong to their creators:

- [Inter](https://rsms.me/inter/) and [Caveat](https://fonts.google.com/specimen/Caveat), SIL Open Font License 1.1
- Icons from [Font Awesome Free](https://fontawesome.com/license/free), CC BY 4.0
