---
title: "modulation matrix"
description: "route any source to any destination with 8 modulation slots"
weight: 2
---

synthwave's modulation matrix lets you connect any modulation source to any parameter destination with adjustable depth.

## the panel

{{< img src="/images/synthwave-panel.svg" alt="synthwave synthesizer panel layout" zoom=true >}}

click the image above to zoom in and explore the full panel layout.

## modulation sources

- **LFO 1–3** — sine, triangle, saw, square, sample & hold, random
- **envelope 1–2** — dedicated ADSR envelopes for modulation
- **velocity** — note-on velocity
- **mod wheel** — MIDI CC 1
- **aftertouch** — channel pressure
- **key tracking** — pitch-proportional modulation

## modulation destinations

every parameter with a knob or slider is a valid destination:

{{< param-table >}}
| section | destinations |
|---------|-------------|
| oscillator | pitch, waveform, level, pan, unison detune |
| filter | cutoff, resonance, drive |
| amplifier | level, pan |
| effects | any effect parameter |
| LFO | rate, depth (for LFO-to-LFO modulation) |
{{< /param-table >}}

## audio examples

here's a simple saw oscillator, dry:

{{< audio src="/audio/saw-dry.mp3" title="dry saw oscillator — no effects" >}}

and the same oscillator with reverb applied:

{{< audio src="/audio/saw-reverb.mp3" title="saw oscillator — with reverb" >}}

{{< callout icon="🎚️" title="modulation tip" >}}
assign an LFO to the reverb mix parameter for a rhythmic wash effect. set the LFO to sync with your DAW tempo for tempo-locked ambient swells.
{{< /callout >}}

## creating a mod routing

1. click an empty mod slot in the matrix
2. select a **source** from the dropdown
3. select a **destination** from the dropdown
4. adjust the **amount** slider (bipolar: -100% to +100%)
5. optionally set a **curve** (linear, exponential, logarithmic)

```json
{
  "mod_slot_1": {
    "source": "lfo_1",
    "destination": "filter_cutoff",
    "amount": 0.65,
    "curve": "linear"
  },
  "mod_slot_2": {
    "source": "envelope_2",
    "destination": "osc_1_pitch",
    "amount": 0.30,
    "curve": "exponential"
  }
}
```

{{< callout type="warning" >}}
modulating pitch with large amounts creates extreme effects. start with small values (under 10%) and increase gradually. for vibrato, values between 2–5% at 4–6 Hz feel natural.
{{< /callout >}}
