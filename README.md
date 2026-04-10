# audiodoc

a dark-themed hugo documentation template for audio software, creative tools, and synth manuals.

dark purple-black background, gold accents, monospace headings, and audio-specific shortcodes.

## installation

### hugo module (recommended)

add to your `hugo.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/Delexandra/audiodoc"
```

then run:

```sh
hugo mod get -u
```

### git submodule

```sh
git submodule add https://github.com/Delexandra/audiodoc.git themes/audiodoc
```

set the theme in `hugo.toml`:

```toml
theme = "audiodoc"
```

### manual download

download the latest release, extract it to `themes/audiodoc`, and set `theme = "audiodoc"` in your `hugo.toml`.

## quick start

```sh
# clone and run the example site
cd themes/audiodoc/exampleSite
hugo server --themesDir ../..
```

open `http://localhost:1313` — you should see the synthwave demo site.

## configuration

all configuration goes in your site's `hugo.toml`:

```toml
baseURL = "https://yourdomain.com/"
languageCode = "en-us"
title = "your project — docs"
theme = "audiodoc"

[params]
  description = "documentation for your audio project"
  tagline = "your tagline here~"
  search_enabled = true       # client-side fuzzy search via fuse.js
  callout_icon = "🥭"         # default callout emoji
  callout_title = "find your noise"  # default callout header

  # branding (optional)
  logo = "images/logo.svg"    # path to logo image
  favicon = "favicon.ico"

  # social (shown in footer)
  github = "https://github.com/yourorg/yourproject"

  # custom css (optional)
  custom_css = "css/custom.css"

[markup]
  [markup.highlight]
    noClasses = false          # required for audiodoc's syntax theme
    lineNos = false
  [markup.tableOfContents]
    startLevel = 2
    endLevel = 3

[outputs]
  home = ["HTML", "JSON"]     # JSON required for search

[outputFormats.JSON]
  mediaType = "application/json"
  baseName = "index"
```

## content structure

organize your docs like this:

```
content/
├── _index.md              # homepage
└── docs/
    ├── _index.md          # docs landing page
    ├── getting-started.md
    ├── parameters/
    │   ├── _index.md
    │   ├── oscillator.md
    │   └── filter.md
    └── advanced/
        ├── _index.md
        └── midi-mapping.md
```

use front matter `weight` to control page order in the sidebar:

```yaml
---
title: "getting started"
description: "short description for search and listing"
weight: 1
---
```

## shortcodes

### callout

```
{{</* callout */>}}
default callout with mango emoji and gold border.
{{</* /callout */>}}

{{</* callout type="warning" */>}}
warning with orange border and caution icon.
{{</* /callout */>}}

{{</* callout type="danger" */>}}
danger with red border.
{{</* /callout */>}}

{{</* callout type="info" */>}}
informational note with purple border.
{{</* /callout */>}}

{{</* callout icon="🎛️" title="custom title" */>}}
fully customized callout.
{{</* /callout */>}}
```

### audio player

```
{{</* audio src="/audio/demo.mp3" title="dry signal" */>}}
{{</* audio src="/audio/demo.ogg" title="ogg example" type="audio/ogg" */>}}
```

renders a styled HTML5 audio player. optional `type` parameter for non-MP3 formats (defaults to `audio/mpeg`).

### parameter table

```
{{</* param-table */>}}
| parameter | range | default | description |
|-----------|-------|---------|-------------|
| cutoff | 0–127 | 64 | filter cutoff frequency |
| resonance | 0–127 | 0 | filter Q factor |
{{</* /param-table */>}}
```

renders with monospace values, gold header accent, and lavender grid lines.

### keyboard shortcut

```
press {{</* key "Ctrl" */>}} + {{</* key "S" */>}} to save.
```

renders as styled keycap badges.

### zoomable image

```
{{</* img src="/images/panel.png" alt="plugin panel" zoom=true */>}}
```

click to zoom. press escape or click the overlay to close.

## features

- **dark theme** — `#1d1921` background
- **fuzzy search** — fuse.js with weighted title/description/content matching
- **responsive** — tested at 320px, 768px, 1024px, 1440px
- **mobile sidebar** — hamburger menu with overlay drawer
- **sticky TOC** — table of contents follows scroll on wide screens
- **prev/next navigation** — section-aware page links
- **breadcrumbs** — auto-generated from content hierarchy
- **copy button** — appears on hover for all code blocks
- **print stylesheet** — clean output with nav/sidebar hidden
- **SEO** — open graph, twitter cards, structured data
- **no build tools** — pure CSS
- **custom syntax theme** — chroma colors matched to the brand palette

## requirements

- hugo v0.120.0 or later (extended edition recommended)
- fuse.js loaded from CDN on first search interaction

## license

MIT
