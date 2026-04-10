---
title: "filter"
description: "low-pass, high-pass, and band-pass filter controls"
weight: 1
---

synthwave includes a multi-mode resonant filter with key tracking and envelope modulation.

## filter controls

{{< param-table >}}
| parameter | range | default | CC | description |
|-----------|-------|---------|----|-------------|
| cutoff | 20 Hz – 20 kHz | 8 kHz | CC 74 | filter cutoff frequency |
| resonance | 0 – 100% | 0% | CC 71 | filter resonance / Q factor |
| drive | 0 – 100% | 0% | — | pre-filter saturation |
| key track | -100 – +100% | 0% | — | cutoff follows pitch |
| env amount | -100 – +100% | +50% | — | filter envelope modulation depth |
{{< /param-table >}}

## filter modes

- **LP24** — 24 dB/oct low-pass (classic subtractive sound)
- **LP12** — 12 dB/oct low-pass (gentler rolloff)
- **HP12** — 12 dB/oct high-pass (removes low end)
- **BP12** — 12 dB/oct band-pass (isolates a frequency band)

{{< callout type="info" icon="🎛️" title="patch trick" >}}
set key tracking to +100% and resonance to ~80%. the filter becomes a pitched resonator that tracks your keyboard — instant acid bass.
{{< /callout >}}

## filter envelope

the dedicated filter envelope controls how the cutoff changes over the duration of each note.

{{< param-table >}}
| parameter | range | default | description |
|-----------|-------|---------|-------------|
| attack | 0 ms – 10 s | 0 ms | time to reach peak cutoff |
| decay | 0 ms – 10 s | 200 ms | time to fall to sustain level |
| sustain | 0 – 100% | 50% | held cutoff level |
| release | 0 ms – 10 s | 100 ms | time to close after note-off |
{{< /param-table >}}

{{< callout type="warning" >}}
high resonance values with fast attack can produce loud transients. reduce your output level before experimenting with extreme resonance settings.
{{< /callout >}}
