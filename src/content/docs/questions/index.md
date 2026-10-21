---
title: Open questions
description: Eight open questions about spoke formation, each with its measured counterpart, the candidate explanations and the model that can answer it.
sidebar:
  label: The eight questions
  order: 0
---

Each question is a property of spoke formation with a measurable counterpart in
[Experiments](/experiments/).

| # | Question | Observable | Model that answers it |
|---|---|---|---|
| Q1 | When does a spoke form, and when does the plasma stay homogeneous? | onset, phases I to IV | drift-fluid scans; 0D for the control parameters |
| Q2 | What sets the rotation direction, and why does it reverse with power? | sign of the phase velocity; potential and $E_\phi$ maps | drift-fluid, PIC |
| Q3 | What sets the speed, and why is it ten times below E×B? | speed against power, pressure, target | drift-fluid and PIC |
| Q4 | What sets the mode number, and how do spokes merge? | mode number against current, B, pressure; merger events | drift-fluid with neutral depletion; 0D |
| Q5 | What sets the shape, diffuse or triangular? | shape against secondary-electron yield and ionization potentials | drift-fluid with a yield scan; PIC with metal species |
| Q6 | What is the potential structure? | +9 V hump, ~1 kV/m, leading-edge jump | PIC; fluid for the hump |
| Q7 | What transport does a spoke carry? | Hall parameter, ion energy distributions, azimuthal asymmetry | PIC; drift-fluid for the diffusion coefficient |
| Q8 | How do spokes disappear at very high power? | the transition to phase IV | 0D (metal-dominated limit); fluid with a metal species |

## Q1. Onset

What decides whether a spoke forms, and its growth rate against the magnetic field, pressure,
current and gradient lengths? Linear theory gives the gradient-drift growth; the experiments show
four phases with power whose thresholds depend on target, pressure and field.

## Q2. Direction

Spokes rotate against E×B at low power and with it in HiPIMS. One claim to test is that the
direction follows the sign of the field inside the spoke relative to the presheath field.
Boeuf's PIC shows a change from +E×B (linear phase) to −E×B (ionization wave) within one run,
which is the kinetic reference.

## Q3. Speed

The measured speed is ~10 times below the E×B drift. Candidate formulas:

- the phase velocity of the gradient-drift instability;
- a speed set by electron diffusion and the ionization frequency (Boeuf and Takahashi 2020);
- neutral drag;
- the critical ionization velocity $\sqrt{2eU/m}$, which is of the same order but not equal.

The test is to compare each formula with simulated speeds over power, pressure and target.

## Q4. Mode number and merging

The number of spokes falls with current in HiPIMS and rises with field strength. Merging is
explained by rarefaction: the leading spoke depletes the argon, and the trailing one speeds up.
Testing it needs neutral depletion in the drift-fluid model, and the rarefaction a given current
implies (0D).

## Q5. Shape

Diffuse for a low second ionization potential, triangular for a high one, diffuse when the target
is poisoned. The proposed mechanism is the secondary-electron yield of the ions that reach the
target, which a yield scan can test.

## Q6. Potential structure

A hump of up to +9 V, an azimuthal field of ~1 kV/m and a double layer at the leading edge. Boeuf's
PIC shows jumps of ~60 V in potential and ~20 eV in electron energy at the leading edge, in a DC
discharge at a different operating point from the probe measurements.

## Q7. Transport

About five times Bohm cross-field diffusion, carried by the spoke; flares; energetic ions with an
E×B / −E×B asymmetry. Kinetic questions, for PIC.

## Q8. Disappearance at high power

Above ~2 kW/cm² the plasma is homogeneous for many targets. A candidate is the change to a
metal-dominated, self-sputtering discharge, which the global model can follow.

## Also open

- The density inside a spoke has never been measured.
- Every model here is 2D, while a spoke is a 3D structure.
