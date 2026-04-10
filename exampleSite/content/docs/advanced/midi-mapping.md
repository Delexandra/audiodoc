---
title: "MIDI mapping"
description: "map any MIDI CC to any synthwave parameter"
weight: 1
---

every parameter in synthwave can be controlled via MIDI CC messages.

## default MIDI map

{{< param-table >}}
| CC | parameter | notes |
|----|-----------|-------|
| CC 1 | mod wheel → vibrato depth | standard |
| CC 7 | volume | standard |
| CC 11 | expression | standard |
| CC 71 | filter resonance | MIDI spec: timbre |
| CC 74 | filter cutoff | MIDI spec: brightness |
{{< /param-table >}}

## custom mapping

1. right-click any knob or slider
2. select **"learn MIDI CC"**
3. move your hardware controller
4. the mapping is saved with the preset

{{< callout icon="🎹" title="hardware tip" >}}
if your controller sends NRPN messages instead of standard CCs, enable NRPN mode in **settings → MIDI → advanced**. synthwave will interpret 14-bit NRPN values for high-resolution control.
{{< /callout >}}

## SysEx integration

for advanced users, synthwave responds to SysEx messages for bulk parameter dumps and preset management:

```
F0 7D 01 00 pp vv F7
```

where `pp` is the parameter number (0x00–0x7F) and `vv` is the value.

{{< callout type="warning" >}}
SysEx messages bypass the undo system. save your preset before sending bulk SysEx data.
{{< /callout >}}
