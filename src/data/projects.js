// ------------------ YouTube Projects ------------------
const ytIds = [
  "8GOZTSLkVrc",
  "J-L_avzqWQk",
  "3JZ_D3ELwOQ",
  "Zi_XLOBDo_Y",
  "kXYiU_JCYtU",
  "eY52Zsg-KVI"
]

const yt = ytIds.map((id, i) => ({
  id: `yt-${i+1}`,
  title: `YouTube Project ${i+1}`,
  caption: "Sample 16:9 video",
  url: `https://youtu.be/${id}`,
  type: "youtube"
}))

// ------------------ Instagram Reels ------------------
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

const ig = igUrls.map((url, i) => ({
  id: `ig-${i+1}`,
  title: `Instagram Reel ${i+1}`,
  caption: "9:16 vertical",
  url,
  thumb: `/assets/instagram-thumb-${i+1}.jpg`,
  type: "instagram"
}))

// ------------------ Client Ads ------------------
const ads = Array.from({ length: 6 }).map((_, i) => ({
  id: `ad-${i+1}`,
  title: `Client Ad ${i+1}`,
  caption: "Square 1:1",
  url: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  thumb: `/assets/ad-thumb-${i+1}.jpg`,
  type: "ads"
}))

// ------------------ Personal Projects ------------------
const personal = yt.slice(0, 3)

// ------------------ Export ------------------
export default {
  "Instagram Reels": ig, // first because you have more
  "YouTube": yt,
  "Client Ads": ads,
  "Personal Projects": personal
}
