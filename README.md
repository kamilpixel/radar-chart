# Radar Chart

A simple radar chart visualization test built with Chart.js and Vite.
This test creates a radar chart visualization using Chart.js library. The default location is set to Kuala Lumpur.

## Live Preview

Visit the live application at: [Radar Chart Website](https://radar-chart-kamil.netlify.app)

![Screenshot](https://radar-chart-kamil.netlify.app/screenshot-radar-chart.png)


## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Changing Default Location

To change the default location, modify the `value` attribute of the hidden input field with id `cityName` in `index.html`:

```html
<input type="hidden" id="cityName" value="Kuala Lumpur"/>
```

Change "Kuala Lumpur" to your desired location name (based on public/data.json).