---
title: What HiPIMS density allows
description: Why kinetic simulations of spokes run at DC density, and how the HiPIMS regime is reached with fluid and global models instead.
sidebar:
  order: 3
---

The review says it directly: kinetic simulations reach "rather low density plasmas" only.

## The cost

At $n = 10^{19}$ m⁻³ and $T_e$ = 3 eV the Debye length is about 4 µm. An 8 cm azimuthal line and a
1 cm gap then need ~5 × 10⁷ cells and ~10⁹ markers per species: a cluster or GPU job even in 2D,
and 3D is far beyond that.

## What follows

- **PIC runs at DC-like density**, 10¹⁶ to 10¹⁷ m⁻³, where Boeuf's simulations are. The
  experiments see spokes there too (phase I, one spoke on a 2-inch target), so questions about
  the rotation direction, the speed and the potential structure (Q2, Q3, Q6) can be asked
  kinetically.
- **The HiPIMS regime goes through the fluid and global models**: the mode number, the shape and
  the disappearance of spokes at high power (Q4, Q5, Q8). PIC runs on short time windows at
  reduced size check specific closures.
- **3D is out of scope.** The curvature of the racetrack is neglected (a periodic slab), so the
  corner and bunching effects seen on rectangular magnetrons cannot be represented.
