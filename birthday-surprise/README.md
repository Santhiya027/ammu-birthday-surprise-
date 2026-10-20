# A Little Birthday Surprise ❤️

A mobile-first, single-page birthday story for your fiancé. Built with plain HTML, CSS and JavaScript. No backend, build step, framework, or API required.

## Project structure

- `index.html` — all 13 story scenes and semantic controls
- `css/style.css` — responsive design, visual effects and animations
- `js/script.js` — scene navigation, games, Avengers dialogue, carousel, letter and personalization
- `assets/images/` — add your photos here
- `assets/music/` — optional background music
- `assets/sounds/` — optional sound effects

## Personalize it

Open `js/script.js` and edit the `CONFIG` object at the very top.

- `partnerName`: his name
- `myName`: your signature
- `nickname`: optional nickname
- `birthdayYear`: birthday year
- `personalLetter`: replace the example letter with your own message
- `memoryCaptions`: captions for your ten memory photos
- `images.hisPhoto`: path to the photo used in the birthday explosion
- `images.finalPhoto`: path to the final-screen photo
- `images.memories`: ten paths for the memory carousel
- `music`: optional music path
- `sounds`: optional pop/click/celebration sound paths

### Add photos

Copy your photos into `assets/images/`, then set the paths, for example:

```js
images: {
  hisPhoto: "assets/images/his-photo.jpg",
  finalPhoto: "assets/images/final-photo.jpg",
  memories: [
    "assets/images/memory-01.jpg",
    "assets/images/memory-02.jpg",
    "assets/images/memory-03.jpg",
    "assets/images/memory-04.jpg",
    "assets/images/memory-05.jpg",
    "assets/images/memory-06.jpg",
    "assets/images/memory-07.jpg",
    "assets/images/memory-08.jpg",
    "assets/images/memory-09.jpg",
    "assets/images/memory-10.jpg"
  ]
}
```

The website intentionally uses empty image paths by default. Until you add photos, designed photo placeholders will be shown rather than broken remote images.

### Add music and sounds

Copy files to `assets/music/` and `assets/sounds/`, then set paths:

```js
music: "assets/music/birthday.mp3",
sounds: {
  pop: "assets/sounds/pop.mp3",
  click: "assets/sounds/click.mp3",
  celebration: "assets/sounds/celebration.mp3"
}
```

Browsers may block autoplay. Music is user-controlled from the sound toggle. The website still works if you leave every audio path empty.

## Run locally

1. Unzip the project.
2. Open `index.html` in a modern browser.
3. For microphone blow detection, browser permissions usually require `localhost` or HTTPS. The tap-to-blow fallback always works.

Optional local server:
- Python: `python -m http.server 8000`
- Then open `http://localhost:8000`

## Deploy online

### GitHub Pages
1. Create a GitHub repository and upload the contents of this folder (not the zip itself).
2. Open repository **Settings → Pages**.
3. Choose deployment from the `main` branch and root folder.
4. Save and wait for the published URL.

### Netlify
1. Open Netlify and choose **Add new site → Deploy manually**.
2. Drag the unzipped `birthday-surprise` folder into the deploy area.
3. Use the generated HTTPS URL to share it.

### Cloudflare Pages
Create a Pages project, upload the static project or connect the repository, and use the project root as the build output directory. No build command is needed.

## Mobile testing checklist

- Test the shared HTTPS link in both Safari and Chrome.
- Tap every balloon; the Continue button appears after all six.
- Tap the cake to blow out the candle. Microphone detection is optional.
- Try hovering/tapping the NO button; it moves and cycles through the five exact messages.
- Test YES, both Avengers groups, each memory, opening the letter, final screen and replay.
- Add your actual photos and test cropping on a small phone.
- If you prefer less motion, the site respects `prefers-reduced-motion`.

## Notes

- The supplied plan described a 13-step experience but contained 11 numbered headings. To preserve all requested content and the required final count, the Avengers surprise is presented as three sequential scenes: Group 1, Group 2, and the final Avengers message. The complete order is 1–7, Avengers Group 1, Avengers Group 2, Avengers finale, memories, letter, final birthday screen.
- Everything is local/static except the optional Google Fonts import. If offline font loading is important, remove the `@import` line from `css/style.css` and the site will fall back to system fonts.
