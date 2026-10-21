---
title: Measured properties
description: What experiments have measured about spokes, property by property; what a simulation has to reproduce or explain.
sidebar:
  label: Measured properties
  order: 0
---

The properties a simulation has to reproduce or explain. Numbers are for the 2-inch circular
planar magnetron unless stated. **[R*n*]** is reference *n* of Hecimovic and von Keudell 2018
([summary](/summaries/hecimovic-von-keudell-2018/)).

| Property | Finding |
|---|---|
| What a spoke is | An ionization zone rotating along the racetrack a few mm above the target, with the hot electrons and the strong ion lines inside. A potential hump of up to +9 V relative to between spokes, an azimuthal field of order 1 kV/m [R43]; an electric double layer at the leading edge [R58]. |
| Phases against power | I: retrograde (−E×B) at 0.1–1 W/cm² (10–100 mA); the direction alternates on ~1 ms below 0.1 W/cm². II: breathing, then stochastic, 1–250 W/cm². III: +E×B at ≥ 250 W/cm² (~10 A), the mode number falling with current. IV: a homogeneous plasma above ~2 kW/cm² (~70 A) for Cr, Au, Cu, Al, Ta, Mo in Ar (not seen in reactive mode). The thresholds depend on target, pressure and magnetic field [R29, R17, R30]. |
| Velocity | Retrograde: grows with power to ~2 km/s (0.1–2 W/cm²), then nearly constant and independent of the target up to 250 W/cm². HiPIMS: ~10 km/s, up to 15, depending on the target; the same order as the critical ionization velocity $\sqrt{2eU/m}$ but not equal to it [R17, R38]. About ten times below the E×B drift (~100 km/s). The measured speed is a phase velocity, not a plasma velocity. |
| Mode number | One spoke on a 2-inch target in DC; 4–5 on a 10 cm target; 4–5 at the start of the HiPIMS regime, falling to 1 with current; rises with the magnetic field strength [R24]. Spokes get shorter at higher pressure. Two spokes merge when the leading one rarefies the argon and the trailing one, with less gas to ionize and less drag, speeds up and catches it [R41]. |
| Shape | Diffuse for targets with a low second ionization potential (Ti, Nb), triangular with a sharp trailing edge for a high one (Al, Cu, Mo, Cr); diffuse in every poisoned reactive case. Explained by secondary electrons from the target: only doubly charged metal ions (and Ar⁺) can release one, and gas rarefaction removes the Ar⁺ [R15, arXiv:1305.5453]. |
| Density | Sheath-edge density up to ~10²⁰ m⁻³ at the target in HiPIMS (ionization ~75 %), modulated 25–30 % by the spokes [R44]; ~10¹⁶ m⁻³, argon-dominated, in DC. Sheath ~100 µm. $T_e$ ~2–4 eV. |
| Transport | Hall parameter ~16 in DC, 2–5 in HiPIMS (≈ 5× Bohm cross-field diffusion, the spoke carrying the extra transport) [R17, R44]. Flares of plasma leaving the confinement at ~20 km/s [R19]. Spokes help metal ions reach the substrate [R55]. An energetic metal-ion peak at 15–25 eV, twice that for doubly charged ions, and an E×B / −E×B asymmetry of the radially ejected ion energies [R56, R52, R53]. Ions follow the electron azimuthal drift at ~1.2–1.6 km/s (Thiemann-Monjé et al., arXiv:2306.03794, abstract and introduction read). |
| Fast modes | 100–400 kHz spoke-related oscillations; MHz modes of two kinds: the modified two-stream instability [R47] and the electron cyclotron drift instability, seen by coherent Thomson scattering [R48]. |

## What cannot be measured

No probe or optical diagnostic gets inside a spoke, so there is still no robust value of the
density inside one. Simulations are the only access to the inside of a spoke at present.
