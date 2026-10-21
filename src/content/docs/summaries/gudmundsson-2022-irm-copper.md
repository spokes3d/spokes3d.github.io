---
title: Gudmundsson et al. 2022, IRM of copper
description: Summary of the ionization region model applied to copper HiPIMS discharges, Surf. Coat. Technol. 442 (2022) 128189.
sidebar:
  order: 5
  badge:
    text: read
    variant: success
---

J.T. Gudmundsson, J. Fischer, B.P. Hinriksson, M. Rudolph, D. Lundin, *Ionization region model of
high power impulse magnetron sputtering of copper*, Surf. Coat. Technol. 442 (2022) 128189
(open access). **Read: model, fitting, and results up to the rarefaction.**

## The ionization region model (IRM)

A global plasma chemistry of the dense, bright region over the racetrack, taken as an annular
cylinder. It is volume-averaged but time-resolved, through the pulse and the afterglow. Geometry
enters only as gain and loss rates across the boundaries to the target and the diffusion region.
The magnetic field enters only through the measured inputs.

- **Electrons:** a cold Maxwellian population (rates fitted on 1–7 eV) and hot secondary
  electrons accelerated across the cathode sheath (200–1000 eV), each with its own rate set.
- **Argon:** three ground-state groups (cold feed gas; hot, reflected from the target at a few eV;
  warm, implanted and released at the target temperature), two metastable levels, Ar⁺ and Ar²⁺.
- **Copper:** the ground state, the metastables ²D₅/₂ and ²D₃/₂, an effective 4p level, Cu⁺ and
  Cu²⁺.
- **Sputtering:** energy-dependent yields $Y = a\,\mathcal{E}^b$ (Ar⁺ on Cu: a = 0.1421,
  b = 0.468; Cu⁺ on Cu: a = 0.0691, b = 0.556). Secondary-electron yields follow Phelps and
  Petrović for Ar⁺ and are zero for Cu⁺.
- **Heating:** ohmic heating across the potential drop $V_\text{IR} = f V_D$ over the region.

## It is semi-empirical

The inputs are the pressure, the measured discharge current and voltage waveforms, and the
dimensions of the region. Three parameters are unknown: the back-attraction probability
$\beta_{t,\text{pulse}}$ of the ions (zero in the afterglow), the share $f = V_\text{IR}/V_D$,
and the electron recapture probability $r$ (set to 0.5; the output barely depends on it). The fit
scans a grid of $(\beta_t, f)$ and minimises a weighted residual of the current waveform, staying
within ±2.5 % of a measured ionized flux fraction.

## The cases and results

Cases I–III are historical discharges: a 2-inch target with 40 µs pulses at 0.5 Pa and 20 A, and a
6-inch target with 80–90 µs pulses at 0.4 and 2.7 Pa, at 165 and 235 A. Table 5 of the paper:

| Case | I | II | III |
|---|---|---|---|
| ⟨α_t,pulse⟩ (ionization probability) | 61 % | 69 % | 66 % |
| β_t,pulse (back-attraction, fitted) | 57.5 % | 50 % | 50 % |
| ⟨β_t⟩ (including the afterglow) | 44 % | 49 % | 50 % |
| f = V_IR / V_D | 18 % | 14 % | 15 % |
| Ionized flux fraction | 32 % | 37 % | 40 % |
| Lowest argon density / initial | 69 % | 42 % | 44 % |

Cu⁺ ions dominate the ion current to the target, and self-sputter recycling is what lets the
current reach these values. The back-attraction of Cu⁺ is low compared with Ti (80–87 %) and Al
(~90 %).

:::caution[Inconsistencies in the paper]
The text gives f = 15–18 % and ~25 % rarefaction for case I, where Table 5 gives 14–18 % and 31 %.
Table 5 also swaps the pressures of cases I and II relative to Table 3. A replication should
match the table.
:::

## Why it matters here

A global model cannot show a spoke, but it gives the rarefaction, metal fraction and
self-sputtering share that set the spoke regime ([Q4 and Q8](/questions/)). This paper is the
first replication target for the [global model rung](/simulations/model-ladder/).
