# Mahmud Afroz Portfolio

Static portfolio website for Mahmud Afroz, built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons. The site exports to `out/` for GitHub Pages.

## Installation

```bash
npm ci
```

## Local Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Lint

```bash
npm run lint
```

## Production Build

```bash
npm run build
```

The static export is generated in `out/`.

## GitHub Pages Deployment

The workflow at `.github/workflows/deploy-pages.yml` installs dependencies, builds the static site, uploads `./out`, and deploys to GitHub Pages.

1. In the GitHub repository, open Settings.
2. Go to Pages.
3. Set Source to GitHub Actions.
4. Push to `main`, or run the workflow manually from the Actions tab.

The workflow calculates `NEXT_PUBLIC_SITE_URL` and `NEXT_BASE_PATH` automatically:

- `USERNAME.github.io` builds with an empty base path.
- Project repositories build with `/{repository-name}`.

## Portrait Replacement

Place the approved portrait at:

```text
public/images/mahmud-afroz-portrait.jpg
```

The site uses an `MA` initials fallback when the portrait is missing. Do not use an AI-generated portrait.

## Resume Replacement

Place the approved resume PDF at:

```text
public/documents/mahmud-afroz-resume.pdf
```

Resume links should only be displayed where the file exists.

## Content Locations

- Profile details, social links, navigation, and phone visibility: `src/data/profile.ts`
- Skills and capabilities source lists: `src/data/skills.ts`
- Experience and education: `src/data/experience.ts`
- Research and featured work: `src/data/research.ts`
- Footer social links: `src/data/profile.ts`

## Public Phone Configuration

The phone number is hidden by default in `src/data/profile.ts`:

```ts
phone: {
  number: "479-304-9175",
  public: false
}
```

Only set `public` to `true` and add a display location after explicit approval.

## Content Safety

Keep utility and operations descriptions high level. Do not publish proprietary datasets, customer information, utility infrastructure records, internal maps, engineering drawings, credentials, or private operational deliverables.
