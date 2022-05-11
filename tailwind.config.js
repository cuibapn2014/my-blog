module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home' : 'url("https://images.unsplash.com/photo-1642355008521-236f1d29d0a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80")',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
