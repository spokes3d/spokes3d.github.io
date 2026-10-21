---
title: Reference cases
description: The published simulations that each rung of the model ladder has to reproduce, with their parameters.
sidebar:
  order: 2
---

A rung counts as verified only when it reproduces its reference case with the published inputs.

## Verification: Charoy et al. 2019

A 2D axial-azimuthal E×B benchmark that seven PIC codes agree on within 5 %. Xenon, no collisions,
a prescribed ionization source. Reference for rung 2. Parameters and cost:
[summary](/summaries/charoy-2019/).

## Spokes: Boeuf, arXiv:2211.17051

A DC magnetron in argon at 0.6 Pa, 260 V, 2 cm gap, 8 cm azimuthal length. A +E×B linear phase at
~8 km/s, then a −E×B ionization wave at ~1.3 km/s. Reference for rungs 1b (drift-fluid) and 2
(PIC). Parameters and results: [summary](/summaries/boeuf-dc-magnetron-pic/).

## Global model: Gudmundsson et al. 2022

The ionization region model applied to three copper HiPIMS discharges. Reference for rung 1d.
Targets to match (Table 5 of the paper):

| Case | ⟨α_t⟩ | β_t,pulse | f | Ionized flux fraction | n_Ar,min / n_Ar,0 |
|---|---|---|---|---|---|
| I (2-inch, 40 µs, 0.5 Pa, 20 A) | 61 % | 57.5 % | 18 % | 32 % | 69 % |
| II (6-inch, 80–90 µs, 0.4 Pa, 165 A) | 69 % | 50 % | 14 % | 37 % | 42 % |
| III (6-inch, 80–90 µs, 2.7 Pa, 235 A) | 66 % | 50 % | 15 % | 40 % | 44 % |

Ionization region: an annulus with r = 6–20 mm and z = 2–28 mm (2-inch target), r = 12–57 mm and
z = 2–33 mm (6-inch). Details: [summary](/summaries/gudmundsson-2022-irm-copper/).

## Further ionization region model cases

Raadu et al. 2011 (Al), Huo et al. 2017 (Al and Ti) and Eliasson et al. 2021 (graphite), once
read.
