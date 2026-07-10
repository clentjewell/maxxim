# On-a-Page — 3D Process summary artifacts

One A3 sheet per gate, plus one for the whole engagement. The client-readable
layer on top of the 100+ artifact pack — printed, pinned to the wall, the
source of truth.

| File | What it is |
|------|------------|
| [`SPEC.md`](SPEC.md) | The plan and recommendation: slot manifests, CORE/READY frameworks, archetype lenses, pipeline integration. **Start here.** |
| [`a3-framework.css`](a3-framework.css) | The shared A3 boxed-segment component framework. Every sheet inlines it; brand comes from `:root` tokens only. |
| `templates/*.a3.html` | The four sheets, populated with Beyond the Clinic content as the worked example. Every box carries a slot annotation — the example doubles as the template. |
| `screenshots/*.png` | Each sheet rendered at print resolution. |

Open any `templates/*.a3.html` in a browser and use the Print button to produce
the A3 PDF. These files are intentionally **not** wired into the public site
build — client content stays out of the showcase.
