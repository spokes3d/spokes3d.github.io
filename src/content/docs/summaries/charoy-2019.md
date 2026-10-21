---
title: Charoy et al. 2019, E×B benchmark
description: Summary of the 2D axial-azimuthal PIC benchmark of Charoy et al., PSST 28 (2019) 105010, the verification case for PIC codes.
sidebar:
  order: 4
  badge:
    text: read
    variant: success
---

T. Charoy et al., *2D axial-azimuthal particle-in-cell benchmark for low-temperature partially
magnetized plasmas*, Plasma Sources Sci. Technol. 28 (2019) 105010. **Read.**

## Why a Hall-thruster benchmark

There is no published PIC benchmark of a magnetron spoke. This case has the same physics, a
partially magnetized E×B plasma with azimuthal instabilities, and seven independent codes agree
on it within 5 %. A PIC code that reproduces it is verified for the kind of run a spoke needs.

## Set-up

| | |
|---|---|
| Domain | $L_x$ = 2.5 cm, $L_y$ = 1.28 cm periodic, 500 × 256 cells (50 µm) |
| Time | $\Delta t = 5\times10^{-12}$ s, 4 × 10⁶ steps = 20 µs |
| Voltage | anode (x = 0) 200 V, right plane 0 V |
| Magnetic field | radial, Gaussian: B(0) = 6 mT, B($L_x$) = 1 mT, $B_\text{max}$ = 10 mT at 0.3 $L_x$, σ = 0.25 $L_x$ |
| Ionization | prescribed pairs, $S(x) = S_0 \cos(\pi (x - x_m)/(x_2 - x_1))$ on 0.25–1 cm, $S_0 = 5.23\times10^{23}$ m⁻³s⁻¹; $T_e$ = 10 eV, $T_i$ = 0.5 eV |
| Initial state | n = 5 × 10¹⁶ m⁻³, 150 markers per cell per species |
| Cathode | electrons injected at 2.4 cm, their number set by current continuity |

Xenon, no collisions.

## Cost

About 550 markers per cell at steady state, 7 × 10⁷ per species, 4 × 10⁶ steps. The published
codes needed 2.5 to 22 days on 32 to 448 CPUs, or 1 to 2 GPUs. The stability limits
$\Delta x < \lambda_D$ (70 µm at the peak density and 50 eV) and $\Delta t < 0.2/\omega_{pe}$ rule
out a cheap coarse version: any coarsening breaks the first limit, and must be stated per run.
