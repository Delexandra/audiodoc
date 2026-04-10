---
title: "changelog"
description: "release history and version notes"
weight: 10
---

## v1.3.0 — 2026-03-15

### new features
- added wavetable scanning LFO with sync-to-tempo
- new "organic" wavetable category (32 new waveforms)
- MIDI MPE support for per-note expression

### improvements
- reduced CPU usage by ~15% on unison voices
- improved filter self-oscillation stability at high resonance
- better preset browser search (fuzzy matching)

### fixes
- fixed crash when loading presets with missing wavetables
- fixed delay feedback not resetting on preset change
- fixed incorrect MIDI CC mapping for expression (CC 11)

---

## v1.2.1 — 2026-02-01

### fixes
- fixed audio glitch when switching between mono and poly modes
- fixed preset browser not showing user presets on windows
- fixed arpeggiator pattern reset on transport stop

---

## v1.2.0 — 2026-01-10

### new features
- arpeggiator with 16 built-in patterns
- new distortion modes: wavefold, bitcrush
- resizable GUI (50% – 200%)

### improvements
- faster preset loading (async wavetable streaming)
- improved mod matrix UI with drag-to-connect

---

## v1.1.0 — 2025-11-20

### new features
- mod matrix with 8 modulation slots
- LFO shapes: sine, triangle, saw, square, S&H, random
- init preset command ({{< key "Ctrl" >}} + {{< key "I" >}})

### fixes
- fixed polyphony voice stealing producing clicks
- fixed filter envelope not responding to velocity

---

## v1.0.0 — 2025-10-01

initial release.

- 2 wavetable oscillators with 96 waveforms
- multi-mode resonant filter (LP24, LP12, HP12, BP12)
- ADSR envelopes for amplitude and filter
- built-in reverb, delay, chorus
- 64 factory presets
- VST3, AU, and CLAP formats
