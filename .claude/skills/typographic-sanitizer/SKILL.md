# Skill: TypographicSanitizer
# Purpose: Enforce professional, human-edited typography and sentence structure.
# Scope: Mandatory post-generation pass for all NestMind website and marketing text.

version: 1.1
type: post_generation_sanitizer
mandatory: true

---

## 1. Professional Baseline (Non-Negotiable)

All output must read as if it has passed:
- A senior copy editor
- A product marketing lead
- A final legal/brand review

If text feels “generated”, “clever”, or “compressed for speed”, it fails.

---

## 2. Deterministic Processing Order (Critical)

Sanitization MUST follow this exact order:

1. Remove illegal punctuation patterns
2. Repair sentence fragments
3. Re-plan sentence structure
4. Normalize typography
5. Enforce professional tone
6. Final visual rhythm scan

No step may be skipped or reordered.

---

## 3. Dash Thinking Elimination (New)

### Definition
“Dash thinking” is the use of em-dashes to avoid committing to sentence structure.

### Hard Rule
If an em-dash can be replaced by:
- a period
- a conjunction
- a sentence split

Then it MUST be replaced.

---

## 4. Em-Dash Policy (Strict)

### 4.1 Disallowed
- More than **one em-dash per paragraph**
- Any em-dash connecting:
  - single words
  - incomplete clauses
  - explanatory shortcuts

Examples (AUTO-FAIL):
- bookmarks—all
- saved—like
- phone—private
- reason—to

---

### 4.2 Allowed (Exceptional)
- One em-dash between two independent clauses
- Only if it improves clarity over a period
- Never in headings, bullets, or UI copy

---

## 5. Fragment Detection & Repair (Hardened)

### Detect
- Clauses without a verb
- Noun-only lines
- Appositive chains
- Marketing fragments

### Repair Strategy
1. Rewrite into a complete sentence
2. Merge with the nearest compatible sentence
3. If still ambiguous, remove entirely

Fragments are **never allowed** in final output.

---

## 6. Sentence Re-Planning Authority (Explicit)

The skill is REQUIRED to:
- Break sentences over 20–25 words
- Remove parallel clause stacking
- Prefer one idea per sentence
- Reorder clauses for readability

Failure to re-plan = sanitization failure.

---

## 7. Typography Whitelist (Locked)

Allowed:
- `.`
- `,`
- `:`
- `;` (rare)
- `()` (clarification only)

Restricted:
- `—` (see sections 3–4)
- `…` (disallowed)
- `/` (technical terms only)
- `!` (disallowed)

---

## 8. Lexical Discipline (Expanded)

Auto-remove or rewrite:
- conversational glue
- filler intensifiers
- rhetorical scaffolding

Examples:
- “like”
- “you get the idea”
- “basically”
- “kind of”
- “just”
- “really”
- “very”
- “in order to”

---

## 9. Visual Rhythm Control (New, Critical)

### Rules
- No sentence clusters with identical length
- No repeated punctuation patterns
- No stacked short lines
- Paragraphs must visually “breathe”

If text looks uniform when skimmed, it fails.

---

## 10. Professional Tone Enforcement

Final output must:
- Assume competence in the reader
- Avoid teaching language
- Avoid rhetorical questions
- Avoid hype and superlatives
- Prefer concrete nouns over adjectives

---

## 11. Output Validation Checklist (Hard Gate)

ALL must pass:
- No em-dash misuse
- No fragments
- No filler language
- No visual noise
- Scannable and calm
- Matches modern SaaS website standards (e.g. zed.dev)

If any fail → re-run full pipeline.

---

## 12. Pipeline Position (Required)

Generation Order:
1. Content generation
2. **TypographicSanitizer v1.1**
3. Optional brand tone refinement
4. Publish

This skill is **mandatory** for NestMind public-facing text.

---

## 13. Success Criterion

A professional copy editor should not suspect:
- AI generation
- Automated punctuation
- Sentence compression artifacts

If suspected → skill failed.

END OF FILE
