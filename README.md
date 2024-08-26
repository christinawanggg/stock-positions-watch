## Stocks Position Watch
For each position for each stock symbol, view information such as quantity, ask, call, bid, cost basis, profit loss, etc.

To use this,
  - Clone the repo
  - Start your local by running ````npm run dev````
  - Upload a JSON file with your positions and symbols to view them in this site. Make sure it is named `ts_position_tree.json` and in the root node of this project. If you want to change the file name or location update the import accordingly in `StockPositions.tsx`, `StockPositionsList.tsx`, and `StockPositionsListShow.tsx`
  - Go to ````localhost:3000```` to view the site

This is a [Next.js](https://nextjs.org/) project using Typescript, Tailwind, and components from [NextUI](https://nextui.org/).
