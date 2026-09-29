# Level Up Learning — K–12 Gamified School OS

A GitHub-Pages-friendly, offline-capable prototype that combines an evidence-grounded pitch deck with a practical K–12 gamification and school-culture implementation workspace.

## What is included

- Interactive 33-slide pitch deck with evidence labels.
- Original-Classcraft reference numbers, clearly separated into vendor case studies versus independent research.
- Pre-launch teaser/signage campaign and print-ready signs.
- Configurable community-readiness countdown that does **not** blame one child for schoolwide delays.
- Cinematic reveal architecture with projection/AR as optional enhancement, not a requirement.
- Team roles, mastery XP, community XP, low-stakes cosmetic tokens, quests, badges/evidence concepts, and anti-Goodhart rules.
- PBIS/SEL/restorative support model with Tier 1/2/3 framing.
- Student, teacher, family, and leadership surfaces.
- Synthetic analytics dashboard and 90-day pilot framework.
- Deterministic implementation planner that works without AI.
- Same-origin BroadcastChannel collaboration demo for staff-design notes.
- Optional local-AI readiness diagnostics; the platform does not require WebLLM.
- PWA manifest, versioned service worker, offline shell, IndexedDB/localStorage state, JSON export/import, print CSS, global search, theme toggle, reduced-motion support, keyboard presenter mode, tooltips, and runtime capability diagnostics.
- Traceability page containing 108 relevant capability concepts selected from the supplied Feature Fusion Foundry.

## Run

### GitHub Pages / normal web hosting
Upload the folder contents to a repository and enable GitHub Pages from the branch/folder of your choice. The service worker activates only on HTTPS/localhost and makes the core shell available offline after first successful load.

### Local file mode
Open `index.html` directly. Core routes, deck, planner, quest state, signage, search, JSON export/import, and diagnostics still work. Service workers are unavailable on `file://`, which is reported honestly in the UI.

### Local development server
From this folder, any simple static server works, for example:

```bash
python -m http.server 8080
```

Then browse to `http://localhost:8080`.

## Data model

The prototype intentionally does not require student names or identifiers. Browser state stores only demo configuration: streak, quest completions, display preferences, signage text, and one local staff-design note. A production deployment should integrate with school identity systems only after privacy, retention, access, safeguarding, and legal review.

## Evidence discipline

The deck deliberately distinguishes:

1. **Vendor case studies** — useful implementation signals; not randomized causal evidence.
2. **Independent meta-analyses** — broader evidence that gamification can improve learning/motivation/behavior on average, with substantial design/context variation.
3. **PBIS randomized evidence** — stronger support for the behavioral framework under the game layer.
4. **Ongoing Classcraft RCT** — the IES/SRI project funded for 2023–2028 explicitly notes the previous lack of a rigorous Classcraft RCT.
5. **Design hypotheses** — launch spectacle, signage choreography, role taxonomy, and other novel elements should be tested locally rather than described as proven.

See `docs/EVIDENCE_NOTES.md`.

## Safeguarding design

The default readiness streak is **not** “zero incidents or everyone loses the reward.” That form of collective contingency may create peer blame, concealment, or disproportionate pressure on students with higher support needs. The platform instead measures a schoolwide readiness condition and routes individual incidents to private support/safeguarding workflows. See `docs/SAFEGUARDING.md`.

## Feature Fusion Foundry adaptation

The supplied Foundry is used as an architectural capability bank. This bundle selectively adapts concepts including route/capability registries, IndexedDB, portable exports, service workers, progressive enhancement, diagnostics, deterministic planning, evidence/provenance, quests, Team XP, community milestones, anti-Goodhart rules, forgiving streaks, disable-gamification mode, accessible charts, reduced motion, testing patterns, BroadcastChannel, WebRTC/Trystero architecture guidance, and cinematic splash orchestration.

No proprietary third-party code is copied from Classcraft. Classcraft is referenced for historical design/research context and remains the property/trademark of its respective owner(s).

## Attributions & license

Original prototype architecture/content: Foster + Navi / Planetary Restoration Archive collaboration context. Code in this bundle may be reused and adapted under an MIT-style permissive grant; preserve research citations and third-party attribution. No warranty is provided.

### Third-party research referenced

- Sailer, M. & Homner, L. (2020). *The Gamification of Learning: a Meta-analysis*. Educational Psychology Review. DOI: 10.1007/s10648-019-09498-w.
- Bai, S., Hew, K. F., & Huang, B. (2020). *Does gamification improve student learning outcome?* Educational Research Review. DOI: 10.1016/j.edurev.2020.100322.
- Zhang, Q. et al. (2021). *A Content Analysis and Meta-Analysis on the Effects of Classcraft...* Education Research International. DOI: 10.1155/2021/9429112.
- Bradshaw et al. / SWPBIS effectiveness trial; PubMed PMID 23071207.
- U.S. Institute of Education Sciences, *Initial Efficacy Study of Classcraft*, award R305A230392.
- What Works Clearinghouse, *Teacher-Delivered Behavioral Interventions in Grades K–5* (2024).

## Zero-Harm / Anti-Inversion

The system must never optimize “engagement” by increasing surveillance, shame, coercion, exclusion, hidden incident reporting, or unhealthy competition. When a metric conflicts with a student's dignity, safety, access, or due process, the metric loses.
