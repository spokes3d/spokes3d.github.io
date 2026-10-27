---
title: Anatomy of a magnetron
description: The parts of a circular planar magnetron and the plasma regions above it, what each does, and which of them matter for spokes. Click a part of the drawing to jump to it.
sidebar:
  order: 1
---

A magnetron is a sputtering source: a plate of the material to be deposited (the **target**) is held
at a negative voltage in a low-pressure gas, and a magnet behind it traps electrons in front of
it so that a dense plasma forms at a low pressure. Spokes are a structure of that plasma, so it
helps to know every part of the set-up. The drawing is a half cross-section through the axis of a
circular planar magnetron, not to scale. **Click a part to jump to its description.**

<div class="magnetron-figure">
<svg viewBox="0 0 720 440" role="img" aria-labelledby="mag-title" xmlns="http://www.w3.org/2000/svg">
<title id="mag-title">Half cross-section of a circular planar magnetron, from the magnets below the target to the substrate above it</title>
<line x1="40" y1="14" x2="40" y2="430" class="axis"/>
<text x="46" y="14" class="note">axis</text>
<a href="#substrate" class="part"><rect x="40" y="30" width="520" height="14"/><text x="48" y="24">substrate (the film grows here)</text></a>
<a href="#diffusion-region" class="part region"><rect x="40" y="46" width="480" height="196"/><text x="280" y="120" text-anchor="middle">diffusion region</text><text x="280" y="136" text-anchor="middle" class="note">plasma spreads towards the substrate</text></a>
<a href="#ionization-region-and-racetrack" class="part region ir"><ellipse cx="275" cy="292" rx="100" ry="36"/><text x="275" y="296" text-anchor="middle">azimuthal E×B drift</text><text x="382" y="280">ionization region</text><text x="382" y="294" class="note">over the racetrack</text></a>
<a href="#cathode-sheath" class="part"><rect x="40" y="321" width="480" height="9"/><text x="382" y="318">cathode sheath</text></a>
<a href="#target" class="part"><rect x="40" y="330" width="480" height="18"/><polygon points="255,330 275,342 295,330" class="groove"/><text x="150" y="343" text-anchor="middle">target (cathode)</text></a>
<a href="#backing-plate-and-cooling" class="part"><rect x="40" y="348" width="480" height="12"/><text x="280" y="386" text-anchor="middle">backing plate, cooling water</text></a>
<a href="#magnets-and-yoke" class="part"><rect x="40" y="360" width="70" height="44"/><text x="75" y="378" text-anchor="middle">centre</text><text x="75" y="392" text-anchor="middle">magnet</text></a>
<a href="#magnets-and-yoke" class="part"><rect x="450" y="360" width="70" height="44"/><text x="485" y="378" text-anchor="middle">outer</text><text x="485" y="392" text-anchor="middle">magnets</text></a>
<a href="#magnets-and-yoke" class="part"><rect x="40" y="404" width="480" height="12"/><text x="280" y="413" text-anchor="middle" class="small">yoke (soft iron)</text></a>
<a href="#magnetic-field" class="part field"><path d="M70 330 C 90 205, 460 205, 490 330"/><path d="M90 330 C 115 245, 430 245, 470 330"/><path d="M110 330 C 135 280, 410 280, 450 330"/><text x="280" y="226" text-anchor="middle">magnetic field lines</text></a>
<a href="#anode" class="part"><rect x="520" y="300" width="16" height="60"/><rect x="600" y="30" width="10" height="390"/><text x="542" y="296">anode</text><text x="596" y="250" transform="rotate(-90 596 250)" text-anchor="middle">anode (chamber wall)</text></a>
<a href="#working-gas-and-pumping" class="part gas"><path d="M705 130 H 618"/><path d="M618 130 l8 -4 v8 z"/><text x="620" y="122">working gas in</text><path d="M618 200 H 705"/><path d="M705 200 l-8 -4 v8 z"/><text x="650" y="192">to pump</text></a>
<a href="#power-supply" class="part"><path d="M520 354 H 570 V 385 H 625" class="lead"/><rect x="625" y="362" width="85" height="46"/><text x="667" y="382" text-anchor="middle">dc or pulsed</text><text x="667" y="397" text-anchor="middle">supply (−)</text></a>
</svg>
</div>

<style>
.magnetron-figure { margin-block: 1.5rem; }
.magnetron-figure svg { width: 100%; height: auto; font-size: 12px; }
.magnetron-figure text { fill: var(--sl-color-text); }
.magnetron-figure .note, .magnetron-figure .small { font-size: 10px; fill: var(--sl-color-gray-2); }
.magnetron-figure .axis { stroke: var(--sl-color-gray-3); stroke-dasharray: 5 4; }
.magnetron-figure .part rect, .magnetron-figure .part ellipse, .magnetron-figure .part polygon {
	fill: var(--sl-color-gray-5); stroke: var(--sl-color-gray-3);
}
.magnetron-figure .part path { fill: var(--sl-color-text); stroke: var(--sl-color-text); }
.magnetron-figure .part circle { fill: var(--sl-color-gray-5); stroke: var(--sl-color-gray-3); }
.magnetron-figure .part.ring circle { fill: none; stroke: color-mix(in srgb, var(--sl-color-accent) 35%, transparent); stroke-width: 30; }
.magnetron-figure .part.spoke circle { fill: none; stroke: var(--sl-color-accent); stroke-width: 30; stroke-dasharray: 90 507; }
.magnetron-figure .arrow { fill: none; stroke: var(--sl-color-text); stroke-width: 2; marker-end: url(#head); }
.magnetron-figure marker path { fill: var(--sl-color-text); }
.magnetron-figure .leader { stroke: var(--sl-color-gray-3); }
.magnetron-figure .region rect { fill: transparent; stroke-dasharray: 3 3; }
.magnetron-figure .ir ellipse { fill: color-mix(in srgb, var(--sl-color-accent) 30%, transparent); stroke: var(--sl-color-accent); }
.magnetron-figure .field path { fill: none; stroke: var(--sl-color-accent-high); }
.magnetron-figure .gas path:nth-of-type(2n) { fill: var(--sl-color-text); }
.magnetron-figure .part path.lead { fill: none; }
.magnetron-figure .groove { fill: var(--sl-color-bg); }
.magnetron-figure a.part { cursor: pointer; }
.magnetron-figure a.part:hover rect, .magnetron-figure a.part:hover ellipse,
.magnetron-figure a.part:focus rect, .magnetron-figure a.part:focus ellipse {
	fill: color-mix(in srgb, var(--sl-color-accent) 35%, transparent); stroke: var(--sl-color-accent);
}
.magnetron-figure a.part:hover .field path, .magnetron-figure a.part.field:hover path { stroke-width: 3; }
</style>

## The parts

### Target

A plate of the material to be sputtered, held at a negative voltage: the cathode. Ions from the
plasma hit it and knock out atoms (**sputtering**) and, with some probability, an electron
(**secondary-electron emission**). The sputtered atoms leave towards the substrate, and the
secondary electrons are accelerated away from the target and sustain the discharge. Targets in
these notes are circular, 2 to 6 inch (one is 10 cm).

- **For spokes:** the target material sets the second ionization potential and the
  secondary-electron yield, which decide whether a spoke is diffuse or triangular
  ([Q5](/questions/)), and the power thresholds of the spoke phases.

### Backing plate and cooling

The target is bonded to a backing plate, normally water-cooled. Most of the discharge power ends up
as heat in the target, so cooling is what limits the average power. In HiPIMS the pulses are short
enough that the average power stays low while the peak power is high.

### Magnets and yoke

Permanent magnets sit behind the backing plate: a centre magnet and a ring of the opposite
polarity around it. A **yoke** of soft iron below them closes the magnetic circuit. The field
reaches through the target and forms arches in front of it. If the outer magnets are stronger than
the centre one, the magnet is called *unbalanced* and some field lines run out to the substrate.

- **For spokes:** the field strength changes the thresholds and the mode number, which rises with
  the field ([R24]; see [Measured properties](/experiments/)).

### Magnetic field

Where the field runs parallel to the target, an electron cannot cross it easily: it is trapped in
the tunnel of arches, bouncing between the ends of a field line and drifting sideways. Typically
the parallel field at the racetrack is some tens of mT, depending on the magnet design.

The sideways motion is the **E×B drift**: the electrons move perpendicular to both the electric
field (towards the target, in the sheath) and the magnetic field, which is around the axis
of a circular magnet. The drift loops back on itself, so the electrons circle the target. This
is why a magnetron makes a dense plasma at a low pressure, and why ionization happens in a ring.

- **For spokes:** the E×B drift speed is ~100 km/s. A spoke rotates ~10 times slower, so it is a
  pattern, not a bulk flow ([Q3](/questions/)).

### Cathode sheath

A thin layer next to the target in which most of the voltage falls. It accelerates ions to the
target and secondary electrons away from it. It is about 100 µm thick in HiPIMS, far smaller than
the other length scales, so models usually treat it as a boundary condition.

### Ionization region and racetrack

The bright, dense plasma over the racetrack. This is where the electrons gain and spend their
energy, and where most of the gas and sputtered atoms are ionized. In the ionization region models
used for HiPIMS it is an annulus: r = 6–20 mm and z = 2–28 mm for a 2-inch target
([reference cases](/simulations/reference-cases/)).

The **racetrack** is the ring on the target under this region: the ions are attracted to it, so
the target erodes there, in a groove. The plasma over it is where spokes appear.

- **For spokes:** a spoke is a localized ionization zone that rotates along the racetrack, a few
  millimetres above the target. See [Spokes in brief](/summaries/spokes-in-brief/).
- **Rarefaction:** the sputtered atoms and the heating push the working gas out of this region
  during a pulse, which changes the plasma and how spokes merge ([Q4](/questions/)).
- **Back-attraction:** a large share of the ionized sputtered atoms is pulled back to the target
  by the cathode potential. It decides how much metal ever reaches the substrate.

### Diffusion region

Between the ionization region and the substrate the plasma is much less dense and electrons are
not trapped. Ions and electrons spread by diffusion, and the share of ions in the sputtered flux
that arrives (the **ionized flux fraction**) is set by what escapes from the ionization region.

- **For spokes:** spokes appear to help metal ions get out of the ionization region [R55].

### Anode

The grounded part of the system that collects the discharge current: a shield around the target
and the chamber wall. Electrons have to cross the magnetic field to reach it, which is slow in the
trap, so the cross-field transport is a limit on the discharge.

- **For spokes:** the transport across the field is about 5 times Bohm diffusion in HiPIMS, and the
  spoke carries the extra part ([Q7](/questions/)).

### Substrate

The surface the film grows on, a few centimetres from the target. It may be biased to control the
energy of the ions that arrive. It is the reason for the whole set-up: the ionized flux fraction
and the ion energies there decide the film.

### Working gas and pumping

The chamber is pumped and filled with a noble gas, usually argon, at a low pressure. The reference
cases in these notes run from 0.4 to 2.7 Pa. The gas is the source of the ions that sputter; at
high power the sputtered metal takes over (**self-sputtering**).

### Power supply

A steady dc supply (**dcMS**), or a pulsed one (**HiPIMS**): pulses of tens to hundreds of µs at
peak power densities orders of magnitude above dcMS, so that much of the sputtered metal is ionized.

| | dcMS | HiPIMS |
|---|---|---|
| Time | steady | pulses of 40–90 µs in the [reference cases](/simulations/reference-cases/) |
| Density at the sheath edge | ~10¹⁶ m⁻³ | up to ~10²⁰ m⁻³ |
| Ions that sputter | mostly argon | argon and the target's own metal |
| Spokes | one on a 2-inch target | 4–5, falling to one with current, until they disappear above ~2 kW/cm² |

## Seen from above

Looked at from the substrate, the target is a disc and the ionization region is a ring over the
racetrack. A **spoke** is a localized bright zone on that ring, and it travels around it, so a
single frozen image shows a ring with one or a few brighter segments. The number of spokes on the
ring at one time is the **mode number**.

<div class="magnetron-figure">
<svg viewBox="0 0 640 360" role="img" aria-labelledby="top-title" xmlns="http://www.w3.org/2000/svg">
<title id="top-title">Top view of a circular planar magnetron: the target, the racetrack ring and one spoke</title>
<defs><marker id="head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z"/></marker></defs>
<a href="#target" class="part"><circle cx="180" cy="180" r="150"/></a>
<a href="#magnets-and-yoke" class="part"><circle cx="180" cy="180" r="40"/><text x="180" y="184" text-anchor="middle">centre magnet</text></a>
<a href="#ionization-region-and-racetrack" class="part ring"><circle cx="180" cy="180" r="95"/></a>
<a href="/summaries/spokes-in-brief/" class="part spoke"><circle cx="180" cy="180" r="95" transform="rotate(-55 180 180)"/></a>
<path d="M59.7 136.2 A128 128 0 0 1 162.2 53.2" class="arrow"/>
<path d="M233.7 149.0 A62 62 0 0 0 171.4 118.6" class="arrow"/>
<line x1="260.8" y1="114.9" x2="400" y2="60" class="leader"/>
<a href="/summaries/spokes-in-brief/" class="part"><text x="404" y="64">spoke</text><text x="404" y="78" class="note">a rotating ionization zone</text></a>
<line x1="287.6" y1="196.5" x2="400" y2="130" class="leader"/>
<a href="#ionization-region-and-racetrack" class="part"><text x="404" y="134">racetrack</text><text x="404" y="148" class="note">the ring under the ionization region</text></a>
<line x1="255.0" y1="309.9" x2="400" y2="200" class="leader"/>
<a href="#target" class="part"><text x="404" y="204">target</text><text x="404" y="218" class="note">seen from above</text></a>
<text x="404" y="262">outer arrow: with E×B</text><text x="404" y="276" class="note">HiPIMS, ≥ 250 W/cm²; mode number falls with current</text>
<text x="404" y="298">inner arrow: against E×B (retrograde)</text><text x="404" y="312" class="note">0.1 to 1 W/cm², one spoke</text>
<text x="404" y="338" class="note">The sense on the page is a convention.</text>
</svg>
</div>

The drift of the electrons in the ring is the E×B direction. Spokes rotate *with* it at high power
and *against* it at low power ([Spokes in brief](/summaries/spokes-in-brief/)), and the speed is
about ten times below the drift speed, because a spoke is a pattern and not a flow. Which way round
the page the E×B direction runs depends on the polarity of the magnets; the drawing takes one sense
by convention.

## What the models include

| Part | 0D global model | Drift-fluid and PIC |
|---|---|---|
| Target | source of sputtered atoms and secondary electrons | a boundary with a secondary-electron yield |
| Magnetic field | enters as the ionization region volume and the trapping | prescribed, in the axial-azimuthal plane |
| Ionization region | one volume, with an ionization and a back-attraction probability | resolved |
| Racetrack curvature | not applicable | neglected: a periodic slab |
| Anode and substrate | loss terms | boundaries |

The models and their status are in the [model ladder](/simulations/model-ladder/). The curvature of
the racetrack is out of scope, so effects of the corners seen on rectangular magnetrons cannot be
represented ([HiPIMS density](/simulations/hipims-density/)).

## Terms

[Glossary](/resources/glossary/) has the definitions of the terms in bold on this page.
