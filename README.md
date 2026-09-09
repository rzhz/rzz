# Ruizhi Zhu's academic website

A lightweight Jekyll site with a responsive academic layout. Content lives in `_data`; templates live in `_includes` and `_layouts`. Papers, the CV, and the custom domain remain in their original locations.

## Edit content

- `_data/profile.json`: name, affiliation, biography, education, previous appointments, research interests, email, portrait, and profile links.
- `_data/research.json`: publications, working papers, work in progress, coauthors, links, and abstracts. Copy an existing entry to add a paper. `url`, `authors`, `venue`, `year`, and `abstract` are optional. Abstracts accept simple HTML such as `<em>` and `<br>`.
- `_data/teaching.json`: course titles, codes, and terms.
- `CV_Ruizhi_Zhu.pdf`: retained locally, but excluded from the generated website. CV links are hidden.
- `assets/css/styles.css`: colors, typography, spacing, and responsive layouts. The color variables are at the top.

JSON requires double quotes and no trailing comma after the last item. Research entries appear in their file order. Biography and research status have been retained from the existing website; update these files when your position or papers change.

## Local preview

Use a current Ruby installation (Ruby 3.3 recommended), with Bundler available. macOS's built-in Ruby may be too old for current gem dependencies.

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Open <http://127.0.0.1:4000>. Jekyll rebuilds after content or style edits; refresh the browser to view changes. Restart the server after changing `_config.yml`. Press Control-C to stop.

To check the production build:

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

The generated site is in `_site/` and is excluded from Git. Previewing `index.html` directly will not work because it contains Jekyll template instructions. Google Analytics runs only in production builds, keeping local previews out of site analytics.

## Review and publish

Pull before editing. Preview locally, review the changes in GitHub Desktop, then commit and push when ready.

The existing `.github/workflows/deploy.yml` has been left unchanged. It runs on pushes to `main` and uses `peaceiris/actions-gh-pages@v3` to copy the repository root. It does **not** explicitly build Jekyll. Confirm the repository's **Settings → Pages** publishing source and current deployment history before relying on it: this site requires a Jekyll build, and copying unbuilt templates alone is insufficient. A GitHub Pages branch build or an Actions workflow that builds Jekyll must produce the final HTML. The workflow's `destination_branch` option should also be checked against the action's documented `publish_branch` option before changing deployment.

`CNAME` still contains `www.zhurz.com`; no domain or remote publishing settings were changed by the redesign.

## Design references

- [HugoBlox Academic](https://academic-demo.netlify.app/): profile beside the biography, education and experience blocks, research-interest labels, and publication cards. Adapted within the existing Jekyll site.

- [al-folio](https://alshedivat.github.io/al-folio/): biography beside a portrait, restrained navigation, and dedicated paper resources.
- [Jon Barron](https://jonbarron.info/): concise introduction, immediate CV/contact access, and a research-first page.

The implementation is original, using warm white, deep green accents, serif headings, a quiet section column, and responsive research listings. It does not import a theme or require a JavaScript framework. Abstracts use native HTML disclosure controls for keyboard accessibility and work without JavaScript.
