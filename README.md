# spokes3d.github.io

Research notes on spoke formation in magnetron discharges, built with [Astro](https://astro.build),
[Starlight](https://starlight.astro.build) and the shared max-models theme
[starlight-theme](https://github.com/max-models/starlight-theme), served at https://spokes3d.github.io.

`astro.config.mjs` uses the theme's `defineDocs` with the owner `spokes3d` and the base path set to
`/` (an organisation site is served at the root, not under `/<repo>/`). To update the theme, bump
the tag: `npm install github:max-models/starlight-theme#vX.Y.Z`.

## Running locally

Requires Node.js 22.12 or newer.

```sh
npm install
DOCS_VALIDATE_LINKS=false npm run dev   # http://localhost:4321, without the link check
npm run build    # static site in dist/, with the link check
npm run preview  # serve dist/
```

## Content

All pages are Markdown/MDX files in `src/content/docs/`; the path of a file is its URL.

| Directory | Section |
|---|---|
| `index.mdx`, `about.md` | Overview, and how sources and results are marked |
| `summaries/` | One page per paper that has been read, plus a synthesis |
| `experiments/` | Measured properties, and the data to compare with |
| `simulations/` | Model families, the model ladder, reference cases |
| `questions/` | The open research questions |
| `resources/` | Bibliography, codes and data, glossary |
| `log/` | Dated changes |

A summary page carries its reading status as a sidebar badge:

```yaml
sidebar:
  badge:
    text: read        # read | abstract | cited
    variant: success
```

## Paper overview

`resources/papers.md`, `reading-queue.md`, `timeline.md` and `public/papers.bib` are generated from
`data/papers.json`. To add a paper, append it there (give a `title`, `doi` or `arxiv` so its
citations can be looked up; `questions` and `rung` say what it is used for) and run
`npm run papers`. The build fails if the generated files are out of date (`npm run papers:check`).

`npm run papers:update` first refreshes the citation counts from [OpenAlex](https://openalex.org)
(needs network access). The `Update citations` workflow does this every Monday, commits the
result to `main` and starts a deploy.

## Deployment

`.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages on every push to
`main`. In the repository settings, Pages → Source must be set to **GitHub Actions**.
