# Asset archive

Real photography and video that no page currently displays, kept because the
content audit asked for it rather than because anything needs it.

Files sit at the path they occupied in the old flat `public/` tree, so a
reference in an older commit or in `CONTENT_AUDIT.md` still leads here.

This folder lives outside `public/` on purpose. Everything inside `public/` is
served and deployed; nothing in here is, so the archive costs nothing at
runtime.

## What is in here

| Group | What it is |
| --- | --- |
| `work/clients/**` | Unused frames from the twelve client project shoots. Each project's chosen cover now lives at `public/work/projects/<slug>/cover.*`. |
| `events/**` | Gallery frames that no page slot called for. |
| `services/custom-fabrication/gallery/process_*.jpg` | Workflow shots from the fabrication shop. |
| `about/team/3.png` | A team portrait removed at the client's request, kept in case it is wanted back. |
| `shared/backgrounds/abstract-bg.jpg` | Stock photograph, replaced site wide by per page placeholders. |
| `shared/videos/*.mp4` | The original master files. Each page that uses one now holds its own copy under `public/<page>/hero/`. |
| `work/projects/Untitled-*.png` | Unnamed stand in artwork from the original build. |

## Putting something back on the site

Copy it into the page folder that needs it, matching the filename already
there, and the reference resolves with no code change:

```bash
cp asset-archive/work/clients/Nest_m/14.jpg public/work/projects/nest-m/gallery/03.jpg
```

`public/**` filenames are the delivery contract. See `ASSET_SPEC.md` at the
repository root for the size each slot expects.
