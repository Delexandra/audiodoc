---
title: "effects"
description: "built-in reverb, delay, chorus, and distortion processors"
weight: 3
---

synthwave includes four built-in effects, processed in series after the filter stage.

## signal chain

```
osc 1 ─┐
       ├─ mixer ─ filter ─ reverb ─ delay ─ chorus ─ distortion ─ output
osc 2 ─┘
```

each effect can be bypassed independently. drag effects to reorder the chain.

## reverb

{{< param-table >}}
| parameter | range | default | description |
|-----------|-------|---------|-------------|
| size | 0 – 100% | 40% | room size |
| decay | 0.1 – 30 s | 2.0 s | reverb tail length |
| damping | 0 – 100% | 50% | high-frequency absorption |
| pre-delay | 0 – 200 ms | 10 ms | gap before reflections |
| mix | 0 – 100% | 25% | dry/wet balance |
{{< /param-table >}}

## delay

{{< param-table >}}
| parameter | range | default | description |
|-----------|-------|---------|-------------|
| time | 1 ms – 2000 ms | 375 ms | delay time (tap tempo available) |
| feedback | 0 – 100% | 40% | number of repeats |
| stereo | 0 – 100% | 50% | ping-pong stereo width |
| filter | 200 Hz – 8 kHz | 4 kHz | feedback low-pass filter |
| mix | 0 – 100% | 25% | dry/wet balance |
{{< /param-table >}}

{{< callout type="info" >}}
sync delay time to your DAW's tempo using the **sync** button. available divisions: 1/4, 1/4T, 1/8, 1/8T, 1/16, 1/16T, 1/32.
{{< /callout >}}

## chorus

{{< param-table >}}
| parameter | range | default | description |
|-----------|-------|---------|-------------|
| rate | 0.01 – 10 Hz | 0.5 Hz | modulation speed |
| depth | 0 – 100% | 50% | modulation intensity |
| voices | 2 – 6 | 3 | number of chorus voices |
| mix | 0 – 100% | 30% | dry/wet balance |
{{< /param-table >}}

## distortion

{{< param-table >}}
| parameter | range | default | description |
|-----------|-------|---------|-------------|
| drive | 0 – 100% | 0% | distortion amount |
| tone | 0 – 100% | 50% | post-distortion brightness |
| mode | soft / hard / fold / bit | soft | distortion algorithm |
| mix | 0 – 100% | 100% | dry/wet balance |
{{< /param-table >}}

```python
# preset: lo-fi tape machine
effects = {
    "reverb": {"size": 30, "decay": 1.5, "mix": 15},
    "delay": {"time": 333, "feedback": 25, "filter": 2000, "mix": 20},
    "chorus": {"rate": 0.3, "depth": 40, "mix": 25},
    "distortion": {"drive": 15, "tone": 35, "mode": "soft", "mix": 100}
}
```

{{< callout >}}
the effects section is where patches come alive. a simple saw oscillator through heavy reverb and chorus sounds completely different from the dry signal. experiment freely — you can always reset with {{< key "Ctrl" >}} + {{< key "Z" >}}.
{{< /callout >}}
