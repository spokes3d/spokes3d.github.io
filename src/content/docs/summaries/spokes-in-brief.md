---
title: Spokes in brief
description: A one-page synthesis of what a spoke is, how spokes change with discharge power, and what is still unknown.
sidebar:
  order: 1
---

## What a spoke is

A spoke is an ionization zone that rotates along the racetrack of a magnetron, a few millimetres
above the target. The hot electrons and the strong ion emission lines are inside it. Probes see a
potential hump of up to +9 V relative to the plasma between spokes and an azimuthal electric field
of order 1 kV/m [R43]. At the leading edge there is an electric double layer [R58].

The rotation speed is a **phase velocity**: the pattern moves, not necessarily the plasma.

## How spokes change with power

On a 2-inch circular planar magnetron in argon (Hecimovic and von Keudell 2018):

| Phase | Power density | What is seen |
|---|---|---|
| — | below 0.1 W/cm² | the direction alternates on a ~1 ms time scale |
| I | 0.1–1 W/cm² (10–100 mA) | one spoke, rotating **against** E×B (retrograde) |
| II | 1–250 W/cm² | breathing, then stochastic behaviour |
| III | ≥ 250 W/cm² (~10 A) | rotating **with** E×B; the mode number falls with current |
| IV | above ~2 kW/cm² (~70 A) | a homogeneous plasma, no spokes (Cr, Au, Cu, Al, Ta, Mo in Ar; not seen in reactive mode) |

The thresholds depend on the target, the pressure and the magnetic field [R29, R17, R30].

## The numbers that matter

- **Speed:** ~2 km/s in the retrograde phase, ~10 km/s (up to 15) in HiPIMS. That is about ten
  times below the E×B drift (~100 km/s), and of the same order as the critical ionization velocity
  $\sqrt{2eU/m}$ without being equal to it.
- **Mode number:** one spoke on a 2-inch target in DC, 4–5 on a 10 cm target. It rises with the
  magnetic field and falls with current in HiPIMS. Spokes merge when the leading one rarefies the
  argon and the trailing one catches up.
- **Shape:** diffuse for targets with a low second ionization potential (Ti, Nb), triangular with
  a sharp trailing edge for a high one (Al, Cu, Mo, Cr). The explanation is secondary electrons:
  only doubly charged metal ions and Ar⁺ release them, and gas rarefaction removes the Ar⁺.
- **Density:** up to ~10²⁰ m⁻³ at the sheath edge in HiPIMS, modulated 25–30 % by the spokes.
  ~10¹⁶ m⁻³ in DC. $T_e \approx$ 2–4 eV.
- **Transport:** Hall parameter ~16 in DC and 2–5 in HiPIMS, about five times Bohm diffusion, with
  the spoke carrying the extra transport.

## What is not known

- What sets the speed, and why it is ten times below E×B.
- Why the direction reverses with power.
- What sets the mode number, and why spokes disappear at very high power.
- The plasma density inside a spoke: no probe or optical diagnostic gets inside one.

These are the [open questions](/questions/).
