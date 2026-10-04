// One-off generator for public/map-dots.svg (dotted Asia map). Run: node scripts/generate-map.cjs
const DottedMap = require("dotted-map").default;
const fs = require("fs");

const KERALA = { lat: 10.85, lng: 76.27 };
const map = new DottedMap({
  height: 70,
  grid: "diagonal",
  region: { lat: { min: -12, max: 52 }, lng: { min: 20, max: 150 } },
});
const pin = map.getPin(KERALA);
const svg = map.getSVG({
  radius: 0.22,
  color: "#f3f2f2",
  shape: "circle",
  backgroundColor: "transparent",
});
// Compact: one path of zero-length round-capped segments instead of thousands of <circle>s
const pts = [...svg.matchAll(/cx="([\d.]+)" cy="([\d.]+)"/g)];
const d = pts.map(([, x, y]) => `M${+x} ${+(+y).toFixed(2)}h0`).join("");
const { width, height } = map.image;
fs.writeFileSync(
  "public/map-dots.svg",
  `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg"><path d="${d}" stroke="#f3f2f2" stroke-width="0.46" stroke-linecap="round" fill="none"/></svg>`
);
console.log("pin", pin, "size", map.image);
