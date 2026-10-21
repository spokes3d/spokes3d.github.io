---
title: About these notes
description: What these notes are, how sources and results are marked, and how to read the status of a model.
---

These are working notes, not a paper. They change as papers are read and models run, and
everything here may be revised. The [log](/log/) lists the changes.

## How a source is known

Every source carries one of three marks. Check the last two before quoting a number taken from
them.

| Mark | Meaning |
|---|---|
| **read** | The text was read, or the named sections of it. |
| **abstract** | Only the abstract or a search snippet was read. |
| **cited** | Known only from another paper's reference list. |

Numbers in square brackets such as **[R43]** are the reference numbers in the review by
Hecimovic and von Keudell, *J. Phys. D* 51 (2018) 453001, which these notes are built on. The
[bibliography](/resources/bibliography/) lists every source with its mark.

## How a result is marked

A model or a run is one of:

| Status | Meaning |
|---|---|
| **not started** | Planned, no code yet. |
| **implemented** | Code written, not yet run to a result. |
| **runs** | Produces results, but nothing has been compared with theory or measurement. |
| **verified** | Agrees with an analytic solution or a published simulation of the same set-up. |
| **validated** | Agrees with measured values. |

A model that borrows another model's closures is not a replication of it. "Replicated" is used
only when a published case is run with its published inputs and matches its published numbers.

## Placeholders

Where data are missing (cross sections for sputtered metals, sputter and secondary-electron
yields, geometry), the models use numbers of the right order of magnitude and say so. Trends from
such runs are the model's own; the numbers are not data.
