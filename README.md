# Ashish Mishra | Portfolio

Source for [ashishmishra.me](https://ashishmishra.me), my personal portfolio.

I built it from scratch in plain HTML, CSS and JavaScript. No framework, no build step, no template. It's the first site I've designed and coded start to finish, and every line in it is something I can explain.

## About me

I've been the "universal family computer fixer" since COVID. Wifi down, laptop crawling, a printer that refuses to print: it all came to me. Somewhere in that stretch my parents figured out where my career was headed before I'd said it out loud. I wanted CSE from day one, and I've been building ever since.

Today I build software and applied ML projects, and I've shipped real work as an Application Developer at Siemens Energy.

## What's on the site

- **Hero** with a terminal-style intro
- **Work**: three deployed ML projects (NightCompass, Find Your Next Obsession, Cricket Shot Classifier)
- **About, Stack and Experience**
- **Recommendations** from people I've worked with
- **Contact**

## Design

- Dark theme with a subtle emerald accent (`#10B981`)
- A cursor-following spotlight on the background
- Space Grotesk for headings, Inter for body text, Fira Code for the terminal and code details
- All colors and fonts live in CSS variables at the top of `style.css`, so the whole look can be changed in one place

## Tech

| Layer | Choice |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 (custom properties, no preprocessor) |
| Behavior | Vanilla JavaScript |
| Hosting | GitHub Pages |
| Domain | Porkbun, `ashishmishra.me` |

The project demos on the site are separate backends running on Google Cloud Run.

## Run it locally

No install needed. Clone the repo and open `index.html` in a browser.

```bash
git clone https://github.com/Ashu11219/portfolio.git
cd portfolio
```

For a local server (handy for testing paths), use any static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

```
portfolio/
  index.html
  style.css
  script.js
  assets/
```

## Contact

- GitHub: [Ashu11219](https://github.com/Ashu11219)
- LinkedIn: [ashish-mishra-ghost](https://www.linkedin.com/in/ashish-mishra-ghost/)
- Email: ashish.am0731@gmail.com

## License

The code is free to read and learn from. Please don't copy the design or content wholesale as your own portfolio. Build your own, it's worth it.