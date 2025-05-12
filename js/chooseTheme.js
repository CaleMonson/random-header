// List every CSS theme you drop in the /themes folder:
const themes = [
  'themes/cyberpunk.css',
  'themes/newspaper.css',
  'themes/candy.css'
];

// Pick one at random:
const chosen = themes[Math.floor(Math.random() * themes.length)];

// Dynamically add the <link> tag before the page paints:
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = chosen;
document.head.appendChild(link);
