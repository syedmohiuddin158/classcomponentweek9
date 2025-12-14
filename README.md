This repository contains the React class components developed as part of the lab exercise for CN5006. The lab demonstrates creating interactive components using class-based React components, including state management and event handling, without using React Hooks.

---

## Components

### 1. FacebookEmojiCounter

A class component that counts the number of times an emoji button is clicked.

**Features:**
- Accepts a `type` prop to determine which emoji to display (Like, Love, or happy).
- Maintains its own state to track the number of clicks.
- Updates the UI whenever the button is clicked.

**File:** `src/Facebookemoji.js`

**Usage in `index.js`:**

```jsx

<FacebookEmojiCounter type="Like" />
<FacebookEmojiCounter type="Love" />
<FacebookEmojiCounter type="happy" />


2. ToggleMode

A class component that toggles between a happy and sad emoji when the button is clicked.

Features:

Maintains the currently displayed emoji as component state.

Updates the displayed image on every click.

File: src/ToggleModeComponent.js

Usage in index.js:

<ToggleMode />

3. Setup Instructions

Clone the repository:

git clone https://github.com/your-username/ClassComponentweek9.git


Navigate to the project folder:

cd ClassComponentweek9


Install dependencies:

npm install


Run the application:

npm start


The app will open in your browser (default: http://localhost:3000/).
