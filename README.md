# Capsule Corporation - Dragon Ball Interactive Hub

An immersive, interactive web platform dedicated to the Dragon Ball universe. Built with React, TypeScript, and Tailwind CSS, this application serves as the ultimate database for Dragon Ball fans to explore technology, battles, characters, transformations, and lore.

## 🎯 Features

- **Tech Vault**: Explore legendary Capsule Corporation technology
  - Dragon Radar - Global tracking device
  - Hoi-Poi Capsule - Revolutionary compression technology
  - Saiyan Scouter - Alien power level detector

- **Battle History**: Timeline of the most iconic battles
  - 12 epic battles from Saiyan Saga to Dragon Ball Super
  - Dynamic timeline layout with alternating cards
  - Battle statistics and descriptions

- **Ki Science & Power Lab**: Comprehensive transformation analysis
  - 10 Super Saiyan transformations
  - Power level analysis and characteristics
  - User profiles for each transformation

- **Character Studio**: Deep dive into 13+ characters
  - Detailed stats (Power, Speed, Technique)
  - Character descriptions and forms
  - Both heroes and villains

- **Universe Lore**: Cosmology and divine hierarchy
  - All 12 universes mapped
  - Gods of Destruction and Angels
  - Universe rankings

- **Entertainment Zone**: Fun facts and trivia
  - 6 interactive fun facts
  - Authentic anime screenshots
  - Hover animations

- **Toriyama Tribute**: Honor to the series creator
  - Dedication to Akira Toriyama
  - Legacy information

## 🎨 Design Highlights

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Light/Dark Theme**: Toggle between light and dark modes
- **Authentic Imagery**: All content uses authentic anime/manga screenshots
- **Smooth Animations**: Framer Motion animations throughout
- **Modern UI**: Radix UI components with custom styling
- **Technical Aesthetic**: Dragon Ball-inspired tech theme with typography

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Build Tool**: Vite
- **Routing**: Wouter
- **Animations**: Framer Motion
- **Components**: Radix UI
- **Icons**: Lucide React
- **Fonts**: Orbitron (Tech), Bangers (Action), Rajdhani (UI)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/capsule-corporation.git

# Navigate to the project
cd capsule-corporation

# Install dependencies
npm install

# Start the development server
npm run dev:client

# Build for production
npm run build
```

## 🚀 Running the Application

### Development
```bash
npm run dev:client
```
The application will be available at `http://localhost:5000`

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
capsule-corporation/
├── client/
│   ├── public/
│   │   └── favicon.png          # Website icon
│   ├── src/
│   │   ├── pages/
│   │   │   ├── dashboard.tsx    # Home page
│   │   │   ├── tech-vault.tsx   # Technology module
│   │   │   ├── battle-history.tsx
│   │   │   ├── ki-science.tsx
│   │   │   ├── character-studio.tsx
│   │   │   ├── universe-lore.tsx
│   │   │   ├── entertainment.tsx
│   │   │   ├── tribute.tsx
│   │   │   └── not-found.tsx
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Layout.tsx   # Main layout wrapper
│   │   │   │   └── Background.tsx
│   │   │   └── ui/              # Radix UI components
│   │   ├── lib/
│   │   │   ├── store.ts
│   │   │   ├── queryClient.ts
│   │   │   └── utils.ts
│   │   ├── App.tsx              # Router configuration
│   │   ├── index.css            # Global styles
│   │   └── main.tsx
│   ├── index.html               # HTML template
│   └── vite.config.ts
├── server/                      # Backend (Node.js/Express)
├── shared/                      # Shared types
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── README.md
```

## 🎮 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Dashboard | `/` | Main hub with all module cards |
| Tech Vault | `/tech` | Legendary Capsule Corporation devices |
| Battle History | `/battle` | Timeline of iconic battles |
| Ki Science | `/ki` | Transformation analysis |
| Character Studio | `/chars` | Character profiles and stats |
| Universe Lore | `/lore` | Universes and gods |
| Entertainment | `/fun` | Fun facts and trivia |
| Tribute | `/tribute` | Akira Toriyama tribute |

## 🎨 Customization

### Theme Colors
Edit `client/src/index.css` to customize colors:
- Goku Orange: `#ff7a3f`
- Vegeta Blue: `#1f47ff`
- Piccolo Green: `#3d9b3b`
- Energy Yellow: `#ffff00`

### Fonts
Three custom fonts are used:
- `Orbitron` - Technical UI headers
- `Bangers` - Action/Bold text
- `Rajdhani` - Body and UI text

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`
- Extra Large: `> 1280px`

## 🌐 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📸 Screenshots

### Dashboard
The main hub featuring all 7 research modules with hover animations and background imagery.

### Battle History
Dynamic timeline layout showing 12 epic battles from the Dragon Ball series with alternating card layout.

### Character Studio
Accordion-style interface displaying 13+ characters with power stats and detailed descriptions.

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI Components](https://radix-ui.com)
- [Framer Motion](https://www.framer.com/motion)
- [Vite Documentation](https://vitejs.dev)

## 🙏 Credits

- **Original Series**: Akira Toriyama
- **Design Inspiration**: Dragon Ball Universe
- **UI Framework**: Radix UI, Tailwind CSS
- **Animation**: Framer Motion

## 📞 Support

For questions or issues, please open an issue on GitHub.

---

**Built with ❤️ for Dragon Ball fans | Made in 2025**
