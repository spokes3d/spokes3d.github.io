---
title: The model ladder
description: The models built for this programme, from a 0D global model to coupled fluid-PIC, how they hand results to each other, and their status.
sidebar:
  order: 1
---

Each rung is checked against the one below it and against measurements. Scans (questions Q1, Q3,
Q4, Q5) run on the drift-fluid model; the 0D model supplies the neutral and metal state that a
discharge current corresponds to; PIC answers what fluids cannot (Q2, Q6, Q7 and the electron
kinetics). See [About these notes](/about/) for what the status words mean.

| Rung | Model | Code | Reference case | Status |
|---|---|---|---|---|
| 1a | **0D global model of a pulse**: Ar and sputtered metal, self-sputtering, return fraction, gas rarefaction. Gives the control parameters of Q4 and Q8 against current. | wellbalanced | — | in progress |
| 1b | **2D axial-azimuthal drift-fluid** with neutral depletion and a secondary-electron yield; spoke diagnostics (mode number, phase velocity and sign, modulation, hump, $E_\phi$). | wellbalanced | [Boeuf](/summaries/boeuf-dc-magnetron-pic/) | in progress |
| 1c | **Compressible neutral gas** (argon and sputtered metal): the sputter wind, ion return, wall heat exchange and refill. | wellbalanced | — | in progress |
| 1d | **Ionization region model**, a replication of the published reaction sets and fitting procedure. | not decided | [Gudmundsson et al. 2022](/summaries/gudmundsson-2022-irm-copper/) | not started |
| 2 | **2D3V PIC-MCC**: first the Charoy benchmark, then Boeuf's DC case, then metal species. | picnic | [Charoy et al. 2019](/summaries/charoy-2019/), [Boeuf](/summaries/boeuf-dc-magnetron-pic/) | in progress |
| 3 | **Fluid background coupled to PIC** on short time windows. | picnic and wellbalanced | — | not started |

Results are added here once a rung is verified against its reference case.

## What each rung is for

**1a, 0D model.** The argon rarefaction, the metal fraction and the self-sputtering share that a
discharge current implies: the state the spoke models start from. It uses the closures of the
ionization region model but is a simpler model, so it is not a replication of it.
Demonstration with placeholder data:
[HiPIMS global model](https://max-models.github.io/wellbalanced/full-examples/hipims-global-model/)
(wellbalanced).

**1b, drift-fluid.** The workhorse for scans: onset, speed, mode number and shape against
pressure, field, current and secondary-electron yield, at HiPIMS density where PIC cannot go.
Checked first against linear theory, then against Boeuf's PIC case. The checks against theory:
[2D drift fluid](https://max-models.github.io/wellbalanced/full-examples/spoke-drift-fluid-2d/)
(wellbalanced).

**1c, gas dynamics.** The neutral gas in front of the target: how far the sputter wind
rarefies the argon and how fast it refills. It tests the simple rarefaction closure of the 0D
model and is the gas a plasma model can later be coupled to. Demonstration, with the comparison
against the 0D model:
[sputter wind](https://max-models.github.io/wellbalanced/full-examples/sputter-wind-gas-dynamics/)
(wellbalanced).

**1d, ionization region model.** A replication of the published ionization region model, so its
ionization and back-attraction probabilities can be compared with the literature directly.

**2, PIC-MCC.** The electron kinetics that fluids must assume: the rotation direction, the
potential structure and the transport, at DC density.

**3, coupled fluid and PIC.** The neutral and metal background from the fluid models, with PIC
on short windows, to check the fluid closures where it matters.

## Data

Cross sections and rates come from one place for every model, so a difference between two
models is their physics, not their data. For argon and sputtered metals the models use analytic
fits until data sets (LXCat for argon) are in place, and every unchecked number is marked as a
placeholder.
