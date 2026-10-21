---
title: Simulation families
description: The kinds of model used for spokes and magnetron discharges in the literature, what each can and cannot show, and where each stands here.
sidebar:
  label: Simulation families
  order: 0
---

Every published model family has, or will get, a [rung](/simulations/model-ladder/) on the ladder
here: a code that reproduces its published reference case before it is used for anything new.

| Family | What it can show | What it cannot | Key sources | Here |
|---|---|---|---|---|
| **Linear fluid theory** (Simon–Hoh, gradient-drift, Esipchuk–Tilinin, Frias et al.) | onset and growth rate of the instability | the observed ≥ 25 % modulation; gas depletion; secondary electrons | cited via the review | used to verify the drift-fluid code |
| **Nonlinear drift-fluid** | spoke formation, speed, mode number, at HiPIMS density | electron kinetics; closures must be assumed | Kawashima et al. 2018 (cited) | rung 1b |
| **2D PIC-MCC** | the full electron kinetics, potential structure, transport | HiPIMS density (cost); 3D | [Boeuf](/summaries/boeuf-dc-magnetron-pic/), Boeuf and Chaudhury 2013, Boeuf and Takahashi 2020; [Charoy et al. 2019](/summaries/charoy-2019/) | rung 2 |
| **Pseudo-3D** | a spoke region on a linear section | a self-consistent spoke | Revel, Minea, Tsikata [R62] (cited) | not planned yet |
| **Ionization region models** (global, time-resolved) | rarefaction, metal fraction, ionization and back-attraction probabilities through a pulse | any spoke (volume average); a discharge without measured waveforms | Raadu et al. 2011, Huo et al. 2017 (cited); [Gudmundsson et al. 2022](/summaries/gudmundsson-2022-irm-copper/) | rungs 1a, 1d |
| **Neutral gas dynamics** | the sputter wind, rarefaction and refill | the plasma (it is an input) | — | rung 1c |

## Ionization region models in more detail

Ionization region models of HiPIMS study the dense region in front of the target with a
plasma-chemistry model. They give global (but time-resolved) values for the probabilities of
ionization and back-attraction of the sputtered species. The geometry is accounted for only
indirectly, through the gain and loss rates across the boundaries of the region. They are
semi-empirical: they need the measured current and voltage waveforms of a specific discharge, and
two parameters fitted to them. See the [summary of the copper paper](/summaries/gudmundsson-2022-irm-copper/).

## Pages in this section

- [The model ladder](/simulations/model-ladder/): the models built here, how they connect, and
  their status.
- [Reference cases](/simulations/reference-cases/): the published simulations each rung has to
  reproduce.
- [What HiPIMS density allows](/simulations/hipims-density/): why PIC runs at DC density and the
  HiPIMS regime goes through fluid and global models.
