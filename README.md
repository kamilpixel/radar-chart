# Radar Chart

A simple radar chart visualization test built with Chart.js and Vite.
This test creates a radar chart visualization using Chart.js library. The default location is set to Kuala Lumpur.

## Live Preview

Visit the live application at: [Radar Chart Website](https://radar-chart-kamil.netlify.app)

![Screenshot](https://radar-chart-kamil.netlify.app/screenshot-radar-chart.png)

## Prerequisites

- Node.js (Latest LTS version recommended)

## Dependencies

- Chart.js: ^4.5.1
- Vite: ^7.1.7

## Installation

```bash
# Install dependencies
npm install
```

## Development

```bash
# Run development server
npm run dev
```

## Building for Production

```bash
# Build the test
npm run build

# Preview the build
npm run preview
```

## Changing Default Location

To change the default location, modify the `value` attribute of the hidden input field with id `cityName` in `index.html`:

```html
<input type="hidden" id="cityName" value="Kuala Lumpur"/>
```

Change "Kuala Lumpur" to your desired location name (based on public/data.json).

## test Structure

```
radar-chart/
├── public/
│   └── data.json
├── src/
│   ├── main.js
│   └── style.css
├── index.html
└── package.json
```