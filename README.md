# Inti — A Private, Cozy, Interactive Mobile Experience

> *“Someone noticed all the little things.”*

A quiet, mobile-first digital sanctuary handcrafted by **Samir** for **Inti**. 

Built not as a generic romantic website or software demo, but as an interactive memory box that feels like a quiet room at midnight—combining a desk, warm lamp, racing-brain notebook, personal field guide, botanical pond, and handwritten memories.

---

## 🌐 Live Access

| Destination | URL | Notes |
| :--- | :--- | :--- |
| **Primary GitHub Pages (Root)** | [**https://eksses.github.io/**](https://eksses.github.io/) | Cleanest, shortest memorable domain |
| **Dedicated GitHub Pages** | [**https://eksses.github.io/inti/**](https://eksses.github.io/inti/) | Direct repository deployment |
| **Live Server Mirror** | [**http://103.151.60.212:5657/**](http://103.151.60.212:5657/) | Hosted on Public IP:Port |

---

## 🌙 The Experience & Spaces

The entire website is conceived as **one connected little world**:

### 1. The Quiet Room (`MainRoom`)
- **The Desk**: The physical center holding her books, water glass, notebook, and class schedule.
- **Warm Desk Lamp**: Tap to cycle between three intimate lighting moods: *Soft*, *Warm*, and *Embers*.
- **The Window & Moon**: Tap the moon outside to reveal a quiet hidden note. Tap the night sky to trace delicate constellation lines connecting thoughts across midnight.
- **Water Pond**: A shallow ceramic bowl with floating *Shapla* and *Padma* blooms that send ripples across the surface on touch.

### 2. Things I Know About You (`ThingsIKnowBooks`)
An interactive stack of 6 physical volumes on the desk. Tapping a volume tilts the book and opens an aged-paper observation card:
1. **The Rabbit Hole** — *A field guide to unprompted 2 AM research spirals.*
2. **One More Question** — *The existential questions asked right when the lights go out.*
3. **Things She Somehow Knows** — *The sharp, quiet observations and obscure trivia she remembers.*
4. **The 2AM Brain** — *Solving eight branching scenarios that haven’t happened yet.*
5. **Sarcasm Department** — *The witty, dry armor guarding a deeply tender garden.*
6. **Soft Things She Won’t Ask For** — *Water set nearby, dim lights, and quiet reassurance.*

### 3. The Racing Brain (`RacingBrainModal`)
- An interactive desk notebook.
- Touching the notebook triggers racing thoughts (*“wait…”*, *“but what if…”*, *“then…”*, *“hold on…”*).
- Rather than chaos, a gentle **“Slow down.”** action warms the lighting, settles the notebook shut, and displays:
  > *“Not every thought needs an answer tonight.”*

### 4. Personal Field Guide (`CareGuideView`)
An illustrated field guide on how to care for her:
- **When she goes quiet**: *“Give her a little space. She’ll talk when she’s ready. When she does, listen.”*
- **When her mind runs ahead**: *“Don’t race it. Bring the conversation back to one thing at a time. Calm facts beat matching the panic.”*
- **When she’s hurting**: *“Keep things quiet and gentle. Dim the room. Stay close. Offer water. Let her cry without making her feel embarrassed for it.”*
- **Quiet care**: *“Don’t make a ceremony out of caring. Just hand her the water. Order actual food. Remember the little things.”*
- **The people around her**: *“Be steady while she learns who deserves access to her.”*

### 5. When She Isn’t Feeling Okay (`HealthView`)
- **CRITICAL MEDICAL NOTE**:
  - **Severe allergy: Anesthesia.** Displayed clearly, calmly, and prominently for medical safety.
  - Accompanied by a clear disclaimer (*“Medical information should always be confirmed with a qualified medical professional”*).
- **Migraine Protocol**: Dimming lights, cold damp compress, zero conversational pressure.
- **Stomach Pain Relief**: Gentle warmth, quiet rest, and patience with tears.
- **Hydration Care**: Providing fresh water without nagging.
- **Tender Cycle Care**: Warmth, blankets, and quiet support during difficult days (such as October 4 evening).

### 6. Feed Her Properly (`FoodKitchenView`)
An affectionate kitchen scene celebrating her tastes:
- **Instant Ramen**: *“Ramen is beloved. Ramen is not a complete personality.”*
- **Extremely Spicy Food**: Honoring her legendary dragon-level chili tolerance.
- **Small Fish (Choto Mach)**: A firm, non-negotiable household veto.
- **Sweets & Desserts**: Curiously sampled, politely skipped.
- **Real Meals**: Reminders to eat when deep focus makes her forget lunch.

### 7. Water Garden — Shapla & Padma (`FlowersPondView`)
High-resolution, handcrafted SVG botanical illustrations:
- **Shapla (শাপলা)**: White water lily resting peacefully on dark water with a signature notched pad and golden pistil center.
- **Padma (পদ্ম)**: Rose lotus petals rising with a sacred seed pod carpel and gentle watery ripples.

### 8. Weekly Study Rhythm (`ClassCalendarView`)
A personal schedule for her classes:
- Highlights **Sunday**, **Tuesday**, and **Thursday** (Udvash, Bashabo).
- Tapping any day gently lifts the date like physical stationery, showing time notes, subject focuses, and gentle reminders.

### 9. September 26 Birthday (`BirthdayScene`)
- A quiet night scene with an artisanal ceramic plate, cake, and a glowing candle flame.
- Tapping the flame blows it out with a puff of smoke, warming the moonlight and unveiling a handwritten card:
  > *“Another year of becoming more yourself.”*

### 10. Horizons & Memories (`AnniversaryTimeline` & `MemoryBookView`)
- **Timeline**: Starting at **September 29, 2026** (*“Where the story opened its first page”*), with **October 5, 2026** as a separate quiet memory date, and intentional unwritten future slots (*“Something we’ll remember later”*).
- **Keepsake Box**: Pressed Shapla and Padma specimens, a 3:14 AM margin scribble, a bus ticket stub, a dried ring of tea, and honest blank pages waiting for future days.

### 11. For You & Stillness (`FinalLetterView`)
- The quietest corner of the room: a handwritten letter on textured paper communicating that she never has to perform, overthink, or explain herself. Love is steady and asks for nothing in return.
- Concludes in stillness with a dimmed lamp and quiet moon:
  > *“Some people are remembered by dates.*  
  > *Some are remembered by the way a room feels when they are there.*  
  >  
  > *for you.”*

---

## 🛠️ Technical Architecture

- **100% Client-Side & Static**: No servers, no databases, no external API keys, zero authentication required.
- **Mobile-First Responsive Design**: Optimized for 320px–414px smartphone viewports with safe-area insets (`env(safe-area-inset-top)` / `bottom`) and 44px+ touch targets.
- **Desktop Elegance**: When opened on desktop or tablet screens, displays a tasteful mobile presentation frame (`DesktopWrapper`).
- **Procedural Web Audio API Sound**: Synthesizes soft brown-noise rain ambience, water droplets, tactile page turns, and candle extinguishing directly in the browser (0KB network audio, default **OFF**, battery-friendly).
- **Adaptive Performance**: Includes High, Balanced, and Battery-Saver modes. Pauses all animations and audio automatically when the tab is hidden or backgrounded.
- **Privacy & Safety First**: Scanned and verified to contain zero real phone numbers, emails, residential addresses, or private credentials.

---

## 🚀 Development & Build

### Prerequisites
- Node.js (v18+)
- npm / pnpm

### Quick Start

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview -- --host 0.0.0.0 --port 5657
```

### GitHub Actions Deployment
Pushing to the `main` branch automatically triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), building the static artifacts and publishing them to GitHub Pages.

---

*“made with attention, not perfection.”*
