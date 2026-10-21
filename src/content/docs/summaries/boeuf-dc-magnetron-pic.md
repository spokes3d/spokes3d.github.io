---
title: Boeuf, 2D PIC of a DC magnetron
description: Summary of Boeuf's 2D PIC-MCC simulation of spokes in a DC magnetron (arXiv:2211.17051), the computational reference for spokes.
sidebar:
  order: 3
  badge:
    text: read
    variant: success
---

J.-P. Boeuf, arXiv:2211.17051. **Read (text); the journal reference is still to be checked.**

## Set-up

| | |
|---|---|
| Discharge | DC magnetron, argon, 0.6 Pa (also 2 Pa at 280 V) |
| Domain | axial-azimuthal: 2 cm gap, 8 cm azimuthal length (periodic) |
| Voltage | 260 V |
| Magnetic field | $B = B_\text{max}\, e^{-x/a}$, $B_\text{max}$ = 120 mT, $a$ = 0.3 × gap |
| Grid and step | 256 × 1024 cells, $\Delta t = 2\times10^{-11}$ s |
| Initial state | from a 1D solution ($j_{e0}$ = 0.03 A/m²) |

## Results

- A **+E×B linear phase** at ~8 km/s with a wavelength of ~1.6 cm: the gradient-drift instability.
- Then a **−E×B ionization wave** at ~1.3 km/s (2.5 km/s in experiment): the retrograde spoke.
- Jumps of ~60 V in potential and ~20 eV in electron energy at the leading edge.
- More spokes at higher pressure.

## Why it matters here

It is the kinetic reference for questions [Q2, Q3 and Q6](/questions/): the change from +E×B to
−E×B rotation, the speed, and the potential structure. It runs at DC density, where the
experiments also see spokes (phase I).
