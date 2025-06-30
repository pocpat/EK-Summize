# 🌟 EK-Summize

EK-Summize is an open-source article summarization tool that transforms long articles into concise, readable summaries. Built with React and powered by GPT-4, this project is a showcase of my skills as a web developer and part of my professional portfolio.

____________________________________________________________________

# 🚀  Features
- **Effortless Summaries:** Paste any article link, and get a concise summary within seconds.
- **Saved Summaries:** Automatically saves past summaries in local storage for easy access and reference.
- **User-Friendly Interface:** Simple and intuitive design, making summarizing articles a breeze.
## _The Last Markdown Editor, Ever_

# 🛠️ Built With
- **React:** For creating a fast, responsive user interface.
- **Redux Toolkit:** Manages application state, including article summaries.
- **RTK Query:** Efficiently handles API requests and caching of data from external sources.
- **RapidAPI:** Connects to the article extraction and summarization API for delivering summaries powered by GPT-4.
___________________________________________________________________

# 📜 How It Works
1. **Enter a URL:** Paste a link to any article in the input field.
2. **Receive a Summary:** The app uses GPT-4 to fetch a brief, readable summary.
3. **Access Saved Summaries:** All previous summaries are stored locally for quick retrieval.
__________________________________________________________________

# 🧩 Core Components
- **Hero:** Welcomes users, highlighting the app’s purpose and main features.
- **Demo:** Interactive section for users to input URLs, view summaries, and browse through stored summaries in local storage. 
______________________________________________________________________

# 🌐 Live Demo

![App Screenshot](assets/smrzr.jpg )
The app is deployed on Netlify! You can try it out here:  [EK-Summize on Netlify](https://ek-summize.netlify.app/))

____________________________________________________________________

# 📂 Repository Structure
```
├── public
│   ├── index.html        # Main HTML file
├── src
│   ├── components
│   │   ├── Hero.js       # Welcome & description section
│   │   └── Demo.js       # Main article input and summary display
│   ├── App.js            # Root component
│   └── store.js          # Redux store and API configuration
├── README.md             # Project documentation
```



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
