---
title: Codes and data
description: The open-source codes the models are built with, and the sources of cross sections and other data.
sidebar:
  order: 2
---

## Codes

| Code | Role here |
|---|---|
| [wellbalanced](https://max-models.github.io/wellbalanced/) | 0D global and fluid models of low-temperature plasmas: the global model, the drift-fluid and the neutral gas dynamics |
| picnic | Particle-in-cell tools: the PIC-MCC runs (not yet public) |
| [plasmacoll](https://max-models.github.io/plasmacoll/) | Monte Carlo collisions with neutral gases, cross sections, Maxwellian rate coefficients |

## Data

| Data | Source | Status |
|---|---|---|
| Argon electron and ion cross sections | [LXCat](https://lxcat.net) (the sets Boeuf uses: SIGLO for electrons, Phelps for ions; names to verify) | to download |
| Argon rate fits used until then | Lieberman and Lichtenberg, *Principles of Plasma Discharges and Materials Processing*, 2nd ed., ch. 3 | in use |
| Metal ionization | the Lotz approximation, averaged over a Maxwellian | in use (placeholder for the ionization region model) |
| Copper cross sections | Freund et al.; Bogaerts et al. (as used by Gudmundsson et al. 2022) | to read |
| Sputter and secondary-electron yields | TRIM/SRIM; Depla et al. 2006; Phelps and Petrović for Ar⁺ secondary emission | to choose; placeholders in use |
