const fs = require("fs")
const fetch = require("node-fetch")
const path = require("path")

// List of Instagram Reel URLs
const igUrls = [
  "https://www.instagram.com/reel/DMxp8GFS4Pv/",
  "https://www.instagram.com/reel/DNGCQr-yL46/",
  "https://www.instagram.com/reel/DGQUlpxvovr/",
  "https://www.instagram.com/reel/DGD4dUszg4q/",
  "https://www.instagram.com/reel/DGBCBmpPdWI/",
  "https://www.instagram.com/reel/DF7wMsyzNy5/",
  "https://www.instagram.com/reel/DF4bWwBzkEO/",
  "https://www.instagram.com/reel/DF0MJvmPd0P/",
  "https://www.instagram.com/reel/DFm2NUjMlbP/",
  "https://www.instagram.com/reel/DG7bXxqT3p6/",
  "https://www.instagram.com/reel/DDyevxaSlYr/",
  "https://www.instagram.com/reel/DCMNYUcShjX/",
  "https://www.instagram.com/reel/DGNvbLPSUDI/",
  "https://www.instagram.com/reel/DF468Hgy3i7/",
  "https://www.instagram.com/reel/DGfybagS11E/",
  "https://www.instagram.com/reel/DOYUA3sCRJR/"
]

const outputDir = path.join(__dirname, "src/assets")
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })

async function downloadImage(url, filename) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" }
  })
  const buffer = await res.buffer()
  fs.writeFileSync(filename, buffer)
  console.log(`Saved ${filename}`)
}

async function main() {
  for (let i = 0; i < igUrls.length; i++) {
    const url = igUrls[i]
    try {
      // Fetch Instagram page HTML
      const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } })
      const html = await res.text()

      // Extract thumbnail from <meta property="og:image" content="...">
      const match = html.match(/<meta property="og:image" content="([^"]+)"/)
      if (!match) {
        console.warn(`Thumbnail not found for ${url}`)
        continue
      }
      const thumbUrl = match[1]

      // Save locally
      const filename = path.join(outputDir, `instagram-thumb-${i + 1}.jpg`)
      await downloadImage(thumbUrl, filename)
    } catch (e) {
      console.error(`Failed for ${url}`, e)
    }
  }
  console.log("All done!")
}

main()
