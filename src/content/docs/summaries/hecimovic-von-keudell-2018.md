---
title: Hecimovic and von Keudell 2018
description: "Summary of the review 'Spokes in high power impulse magnetron sputtering plasmas', J. Phys. D 51 (2018) 453001."
sidebar:
  order: 2
  badge:
    text: read
    variant: success
---

A. Hecimovic and A. von Keudell, *Spokes in high power impulse magnetron sputtering plasmas*,
J. Phys. D: Appl. Phys. 51 (2018) 453001. **Read in full.**

## What it covers

The review collects the measurements of spokes in DC and HiPIMS magnetrons: their phases against
power, speed, direction, mode number, shape, potential structure, density and the transport they
carry. It ends with the state of the theory and simulations. The measured properties are in
[Experiments](/experiments/); this page summarises the review's view of the computations.

## What the review says computation has and lacks

- **Fluid theory** (Simon–Hoh and its gradient-drift generalisation, Esipchuk–Tilinin, Frias et
  al.): a linear analysis of small perturbations. The observed modulation is at least 25 %, so far
  from small. In the review's words, fluid models "do not cover gas depletion and secondary
  electron generation".
- **Kinetic** (Boeuf and Chaudhury 2013 [R60], Boeuf 2014 [R61]): 2D PIC-MCC, at low density only.
- **Hall-thruster analogues** (Janhunen, Lakhin, Koshkarov, Kawashima). Kawashima's three-stage
  picture is the best-defined mechanism to test: linear gradient-drift growth, then ionization
  non-uniformity and neutral depletion feeding back, then saturation into a coherent wave at the
  gradient-drift phase velocity.
- **Pseudo-3D** (Revel, Minea, Tsikata [R62]): a fixed spoke region on a linear section.

## Limits it names

- A spoke is a truly 3D equilibrium.
- 3D PIC at HiPIMS density is out of reach.
- No probe or optical diagnostic gets inside a spoke, so there is still no robust density inside
  one.

## A point to watch

On the spoke shape, the review's text assigns the sharp edge to a "low" second ionization
potential, which contradicts its own first statement. The 2014 paper (arXiv:1305.5453) is the
source to follow: diffuse spokes for a low second ionization potential, triangular for a high one.
