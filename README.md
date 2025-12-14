Overview:
This repository contains the React class components developed as part of the CN5006 lab exercise.
The purpose of this lab is to understand how class-based components manage state and handle events without using React Hooks, and to compare them with functional components implemented in earlier labs.

📌 Components Overview
1. FacebookEmojiCounter

FacebookEmojiCounter is a React class component that records how many times an emoji button is clicked.

Key Features:

Accepts a type property to control the emoji displayed (Like, Love, or happy)

Uses internal component state to track the click count

Updates the UI every time the button is clicked

Demonstrates constructor usage, state initialization, and event binding

File Location:
src/Facebookemoji.js

Used in index.js as:
FacebookEmojiCounter with type set to Like
FacebookEmojiCounter with type set to Love
FacebookEmojiCounter with type set to happy

2. ToggleMode

ToggleMode is a class component that switches between two emojis when the button is clicked.

Key Features:

Stores the currently displayed emoji as component state

Toggles between happy and sad emojis on each click

Demonstrates conditional state updates using previous state

File Location:
src/ToggleModeComponent.js

Used in index.js as:
ToggleMode

⚙️ Project Setup Instructions

To run this project locally, follow these steps:

Clone the repository from GitHub:
https://github.com/syedmohiuddin158/ClassComponentweek9

Navigate into the project folder:
ClassComponentweek9

Install required dependencies using npm.

Start the development server.

Once started, the application will open automatically in the browser at:
http://localhost:3000
