const consoleMessages = [
  {
    message: "🚀 Initializing awesome...",
    delay: 0,
  },
  {
    message: "☕ Brewing coffee for optimal performance...",
    delay: 800,
  },
  {
    message: "🤖 Teaching AI to be more human...",
    delay: 1600,
  },
  {
    message: "📚 Loading dad jokes...",
    delay: 2400,
  },
  {
    message: "🎮 Warming up the gaming chair...",
    delay: 3200,
  },
  {
    message: "💻 Downloading more RAM...",
    delay: 4000,
  },
  {
    message: "🐱 Herding cats...",
    delay: 4800,
  },
  {
    message: "🎵 Playing elevator music...",
    delay: 5600,
  },
  {
    message: "🌐 Connecting to the matrix...",
    delay: 6400,
  },
  {
    message: "🎨 Making it pretty...",
    delay: 7200,
  },
  {
    message: "⚡ Charging flux capacitor...",
    delay: 8000,
  },
  {
    message: "🎯 Aiming for perfection...",
    delay: 8800,
  },
  {
    message: "🎪 Setting up the circus...",
    delay: 9600,
  },
  {
    message: "🎭 Putting on a show...",
    delay: 10400,
  },
  {
    message: "🎪 Welcome to the digital playground! 🎮",
    delay: 11200,
    style: "color: #007ACC; font-weight: bold; font-size: 14px;",
  },
];

export const showConsoleMessages = () => {
  console.clear(); // Clear the console first
  
  consoleMessages.forEach(({ message, delay, style }) => {
    setTimeout(() => {
      if (style) {
        console.log(`%c${message}`, style);
      } else {
        console.log(message);
      }
    }, delay);
  });
};

export default showConsoleMessages; 