# Interactive Artbook

A beautifully designed, interactive digital artbook built with Astro, featuring artist interviews with creative visual responses. This project demonstrates modern web development techniques while creating an engaging, book-like reading experience.

## ✨ Features

### 🎨 **Visual Design**
- Premium artbook aesthetic with custom typography (Cormorant Garamond + Inter)
- Sophisticated color palette inspired by art galleries
- Smooth animations and transitions powered by Anime.js
- Responsive design that works beautifully on all devices

### 📖 **Content Structure**
- **Folder-based content management** - Easy for non-technical users to update
- **Dynamic route generation** - Automatically creates pages from content folders
- **Flexible response types** - Supports drawings, handwritten responses, digital art, and mixed media
- **Metadata-driven** - JSON files control question text and artist information

### 🎯 **User Experience**
- **Keyboard navigation** - Arrow keys, h/j/k/l vim-style navigation
- **Touch gestures** - Swipe navigation on mobile devices
- **Image zoom functionality** - Click to enlarge artist responses
- **Progress tracking** - LocalStorage tracks visited questions
- **Smooth animations** - Entrance effects and parallax scrolling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to view the artbook.

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
maria-book/
├── src/
│   ├── pages/
│   │   ├── index.astro                    # Main landing page
│   │   └── interview/
│   │       ├── [interview].astro          # Interview overview page
│   │       └── [interview]/
│   │           └── [question].astro       # Individual question page
│   ├── styles/
│   │   └── global.css                     # Global design system
│   ├── scripts/
│   │   └── navigation.js                  # Enhanced interactions
│   └── utils/
│       └── contentUtils.ts                # Content loading utilities
├── public/
│   └── interviews/
│       ├── interview-1-artist-name/
│       │   ├── metadata.json              # Interview details
│       │   ├── question-1/
│       │   │   ├── metadata.json          # Question & response info
│       │   │   └── response.svg           # Artist's visual response
│       │   └── question-2/...
│       └── interview-2-artist-name/...
└── CONTENT_STRUCTURE.md                   # Content organization guide
```

## 📝 Adding New Content

### New Interview
1. Create folder: `public/interviews/interview-N-artist-name/`
2. Add `metadata.json`:
```json
{
  "artistName": "Artist Full Name",
  "interviewTitle": "Interview Theme",
  "interviewNumber": 3,
  "totalQuestions": 4,
  "description": "Brief description of the interview"
}
```

### New Question
1. Create folder: `question-N/` in the interview directory
2. Add `metadata.json`:
```json
{
  "question": "Your interview question here?",
  "responseType": "drawing|handwritten|digital|mixed",
  "artist": "Artist Name",
  "interviewNumber": 3,
  "questionNumber": 1
}
```
3. Add `response.jpg` (or .png, .svg) with the artist's visual response

## 🎮 Navigation & Interactions

### Keyboard Shortcuts
- `←` / `h` - Previous question
- `→` / `l` - Next question  
- `↑` / `k` - Go to interview overview
- `Esc` - Return to home

### Touch Gestures
- **Swipe left** - Next question
- **Swipe right** - Previous question
- **Tap image** - Zoom in/out

### Mouse Interactions
- **Click image** - Zoom functionality
- **Hover effects** - Interactive cards and buttons

## 🛠 Tech Stack

- **[Astro](https://astro.build/)** - Static site generator with excellent performance
- **[Anime.js](https://animejs.com/)** - Smooth animations and transitions
- **TypeScript** - Type safety and better development experience
- **Custom CSS** - Design system with CSS custom properties
- **Vanilla JavaScript** - Enhanced interactions without framework overhead

## 🎨 Design Philosophy

The artbook prioritizes:
- **Readability** - Clear typography and generous whitespace
- **Visual hierarchy** - Thoughtful information architecture
- **Performance** - Fast loading and smooth interactions
- **Accessibility** - Keyboard navigation and semantic HTML
- **Mobile-first** - Responsive design that works everywhere

## 🔧 Customization

### Colors
Modify CSS custom properties in `src/styles/global.css`:
```css
:root {
  --color-accent-blue: #4a6fa5;
  --color-accent-rust: #b85450;
  /* ... more color variables */
}
```

### Typography
Update font imports and variables:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
:root {
  --font-serif: 'Your Font', serif;
}
```

### Animations
Customize Anime.js animations in component script sections:
```javascript
anime.default({
  targets: '.your-element',
  // animation properties
});
```

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers with ES2020 support

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using modern web technologies for an exceptional reading experience.