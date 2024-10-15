# Artist Data App

The Artist Data App is a Single-Page Application (SPA) built with React and Vite. It fetches data from an API and allows users to view detailed information about music artists. The app displays various details such as genres, social media links, and statistics on the most popular cities for each artist.

[![viberate.png](https://i.postimg.cc/YSzwpC7K/viberate.png)](https://postimg.cc/sBxLmy1w)

## Table of Contents

- [Features](#features)
- [Built with](#built-with)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contact](#contact)

## Features

- View detailed information about music artists, including genres, social media links, and popularity statistics.
- Navigate to different artist pages using dynamic routing.
- Cache artist data in session storage to reduce API calls and improve performance.

## Built with

- React
- Vite
- Less CSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en) and npm installed on your machine

### Installation

1. Clone the repository:

```
git clone https://github.com/rubuz/naloga-vr.git
```

2. Install the dependencies:

```
npm install
```

3. Create a **.env.local** file in the root directory and add your **API URL**:

```
VITE_API_URL="https://your.api.url/api/v1/"
```

## Usage

### Development

To start the development server, run:

```
npm run dev
```

This will start the Vite development server and open the application in your default browser.

### Build

To build the project for production, run:

```
npm run build
```

This will create a **dist** directory with the production build of the application.

### Preview

To preview the production build, run:

```
npm run preview
```

This will start a local server to preview the production build.

## Contact

Matjaž - rubuz23@gmail.com

Project link: [GitHub Repository](https://github.com/rubuz/naloga-vr.git)

Live demo: [Artist Data App](https://weatherapp-k.vercel.app/)
