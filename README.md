# Phone Detector Web App

A simple web application that detects mobile phone brands, models, and other device information using the User-Agent string.

## Features

- Detects device brand and model
- Shows browser information
- Displays operating system details
- Modern UI with Tailwind CSS
- Ready for Cloudflare Pages deployment

## Local Development

To run the app locally, you can use any static file server. For example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment to Cloudflare Pages

1. Create a new repository and push this code to it
2. Log in to Cloudflare Pages
3. Create a new project and connect your repository
4. Use these build settings:
   - Build command: (leave empty)
   - Build output directory: /
   - No build required as this is a static site

## Technologies Used

- HTML5
- JavaScript
- Tailwind CSS
- UA-Parser-JS for device detection
