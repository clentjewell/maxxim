# Working agreements

## Model orchestration

- **Orchestrate high, execute low.** The most capable model in the session (Fable
  or Opus) coordinates: it plans, briefs, delegates, and reviews. Opus, Sonnet, or
  Haiku subagents do the heavy lifting, picked per task complexity — a dense
  design/build task goes to Opus or Sonnet, mechanical sweeps can go to Haiku.
- **No outcome compromise.** Delegation is a cost optimisation, never a quality
  one. The orchestrator owns final quality regardless of which model executed:
  review every subagent's output before accepting it, and redo or fix anything
  below standard rather than shipping it.
- **Always verify and fix.** Every build ends with a check-and-fix pass before it
  is declared done: render/screenshot visual work, grep for expected markers,
  confirm builds are idempotent, and fix what the pass surfaces. Work is not
  finished until this pass is clean.
