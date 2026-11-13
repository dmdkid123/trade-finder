# Put the Trade Finder online and on your phone (~5 minutes)

The app is now a small folder. Upload **every file in it** together:

    index.html
    manifest.webmanifest
    sw.js
    icon-192.png
    icon-512.png
    icon-maskable-512.png
    apple-touch-icon.png

`index.html` still works on its own (double-click it, or VS Code Live Server), but the
"install on your phone" part only works when all the files are hosted together.

## Option A: GitHub Pages (permanent link)

1. Sign in at https://github.com (free account).
2. **+** (top right) → **New repository** → name it e.g. `trade-finder`, **Public** → **Create repository**.
3. Click **uploading an existing file**, drag in **all 7 files**, then **Commit changes**.
4. **Settings → Pages** → Branch: `main`, folder `/ (root)` → **Save**.
5. After about a minute your link appears: `https://YOUR-USERNAME.github.io/trade-finder/`

Updating later: upload the new files with the same names (GitHub replaces them).

## Option B: Netlify Drop (fastest)

1. Unzip the folder.
2. Go to https://app.netlify.com/drop and drag the **whole folder** onto the page.
3. You get a link right away. Make a free account to keep it permanently.

## Install it like an app

- **iPhone (Safari):** open your link → Share button → **Add to Home Screen**.
- **Android (Chrome):** open your link → tap **Install app** in the page header, or ⋮ menu → **Install app**.
- **Computer (Chrome / Edge):** click **Install app** in the page header, or the install icon in the address bar.

Once installed it opens full-screen like a normal app. If you open it with no signal,
it shows the last data it loaded.

## Tips

- Add `?league=1388562911995125760` to your link to always open your league, or set your username
  on the **My Leagues** tab and switch leagues from the dropdown at the top.
- Saved trades, locked players and your username are stored per device/browser.
- Nothing about your league is stored on the host. Everything loads live from Sleeper.
