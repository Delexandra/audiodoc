---
title: "oscillator"
description: "wavetable oscillator controls — waveform selection, tuning, and unison"
weight: 2
---

synthwave has two wavetable oscillators, each with independent waveform selection, tuning, and unison controls.

## oscillator controls

{{< param-table >}}
| parameter | range | default | CC | description |
|-----------|-------|---------|----|-------------|
| waveform | 1–128 | 1 (saw) | CC 70 | wavetable position |
| octave | -3 – +3 | 0 | — | octave transpose |
| semi | -12 – +12 | 0 | — | semitone transpose |
| fine | -100 – +100 cents | 0 | CC 94 | fine pitch detune |
| level | 0 – 100% | 80% | — | oscillator output level |
| pan | L100 – R100 | center | — | stereo position |
{{< /param-table >}}

## wavetable browser

synthwave ships with 128 wavetables organized into categories:

- **classic** — saw, square, triangle, sine, pulse width variants
- **digital** — FM, additive, and formant waves
- **organic** — sampled and resynthesized acoustic textures
- **noise** — filtered noise variants for percussion and texture

{{< callout icon="🔊" title="sound design tip" >}}
automate the waveform parameter with an LFO for wavetable scanning — this creates evolving timbral movement that static waveforms can't match.
{{< /callout >}}

## unison

stack up to 8 detuned voices per oscillator for massive stereo width.

{{< param-table >}}
| parameter | range | default | description |
|-----------|-------|---------|-------------|
| voices | 1–8 | 1 | number of unison voices |
| detune | 0 – 100% | 25% | pitch spread between voices |
| stereo | 0 – 100% | 75% | stereo spread of voices |
{{< /param-table >}}

{{< callout type="warning" >}}
unison voices multiply CPU usage. 8 voices on both oscillators with 16-voice polyphony = 256 simultaneous voices. reduce polyphony or freeze tracks if your CPU can't keep up.
{{< /callout >}}

## modulation targets

both oscillators expose these modulation destinations in the mod matrix:

- **pitch** — vibrato, pitch envelopes, pitch tracking
- **waveform** — wavetable scanning via LFO or envelope
- **level** — tremolo, sidechain-style ducking
- **pan** — auto-pan effects
- **unison detune** — animate the detune spread

```cpp
// example: setting oscillator waveform via the API
void setWaveform(int oscIndex, int wavetableIndex) {
    auto& osc = synth.getOscillator(oscIndex);
    osc.setWavetablePosition(wavetableIndex);
    osc.resetPhase(); // optional: avoid clicks
}
```
