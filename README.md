# SpaceX Past Launches
The goal of this project is to display SpaceX's past launch missions based on their public [GraphQL API](https://github.com/SpaceXLand/api). The website has 2 menus: *Launches* and *About SpaceX*. *Launches* displays 3 pages of information, where each page has a 4x3 grid on large desktops and a single column on smaller screens The grid contains 12 cards of past launch missions. Each card has a random image from the mission's Flickr, the mission's name and whether it failed or not, the date it launched based on the `America/Mexico_City` timezone, and a Wikipedia article of the mission. *About SpaceX* shows information about its company: name, summary, CEO, CTO, COO, employees, foundation, valuation, social media and address. This was my first project using `Next.js`, and `GraphQL` together with `Apollo Client`. Everything was developed with `typescript@4.4.2`.

## Requirements
- `yarn@1.2.x`
- `node@lts`

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
