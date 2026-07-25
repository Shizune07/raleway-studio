# Raleway Studio — Version 1.1 AI Image Prompt Library

**Source:** `styles/RALEWAY-VISUAL-DIRECTION-v1.1.md` (approved)
**Compatible with:** Midjourney (v6/v7), Flux (1.1 Pro / Kontext), ChatGPT Image (gpt-image-1)
**Universal exclusions** (append or imply in every generation, regardless of tool): no visible logos, wordmarks, or legible text; no additional people in frame; no saturated colour outside the one permitted orange accent; no blue- or teal-cast shadows (the common default in AI colour grading — actively work against this); no vignette; no lens flare; no glossy "startup" brightness; no stock-photo symmetry.

---

## A note before the categories — one exclusion, and why

**Founder Portraits are not included below.**

`RALEWAY-VISUAL-DIRECTION-v1.1.md` Rule 4 states this site photographs exactly one real, specific person — Seira — and never a synthetic stand-in. That rule exists for the same reason the About page copy exists: *"I'm not trying to make businesses look more impressive than they are... A website can communicate what's true. It can't make something true."* An AI-generated image presented as Seira's portrait would be a fabricated likeness of a real, named person on a public commercial site — that's a different category of risk than a generated still-life or workspace shot, and it directly contradicts the one brand value this studio has staked its identity on. It's also already solved: `public/assets/seira-jho.jpg` is a real photograph, already live in production on the About page, already colour-coordinated with the brand (the cardigan is close to `--colour-accent`).

If you want additional real portrait coverage — a second angle, an updated shoot, a press-kit set — that's a photography brief, not a generation prompt. I'm glad to write that brief (shot list, direction notes for a photographer, wardrobe/lighting guidance) if useful; say the word and I'll produce it in the same format as this document.

Every other category below involves no identifiable person, so it's generated freely.

---

## Universal grade (reference this if a tool asks for a style/colour preset)

Warm, near-achromatic palette pulled directly from `tokens.css`: highlights lift toward `#F6F4EF` (oat/parchment, not white), shadows sit in `#1A1A18` (warm near-black, not cool grey or blue-black), midtones stay warm and slightly muted — closer to filmic Kodak Portra 400 than digital-clean. If the orange accent (`#E05C1A`, a burnt/clay orange, not a bright safety-orange) appears at all, it should be exactly one object in frame, never a graphic overlay, never more than one per image. Grain: fine, like 35mm film at box speed — not digital noise, not artificially clean. Editorial references that should anchor every generation: *Kinfolk*, *The Gentlewoman*, Aesop's own campaign photography, Pentagram's studio documentation style. Never: WeWork/Notion-style bright SaaS photography, corporate stock imagery, HDR real-estate lighting.

---

## WORKSPACE

No face, no identifiable person — hands only, or empty of figures entirely. These stand in for "a real practice exists here" without claiming to document Seira's literal desk (which would require a real photograph, not a generated one — see the note above).

### W-01 — Hands adjusting a printed layout

**Composition:** Close, off-centre — hands occupy the lower two-thirds of frame, working on a single printed page, shot from a shallow overhead angle (not perfectly flat top-down, roughly 60° off horizontal so the page reads dimensionally). Generous negative space in the upper third.
**Lens:** 50mm equivalent, shot at f/2.8 — enough depth to keep the working hand and the page both legible, background falling away softly.
**Lighting:** Single soft window-light source from camera-left, raking across the page at a low angle so pencil/pen annotations cast tiny shadows — directional, not flat.
**Colour grading:** Per Universal grade above — warm parchment highlights, near-black warm shadows, no blue cast.
**Wardrobe:** N/A — sleeve only, visible at frame edge if at all; a muted, warm-neutral knit or cotton, no visible pattern or logo.
**Framing:** Landscape, 3:2.
**Mood:** Quiet concentration, mid-task — not posed, caught mid-adjustment.
**Camera angle:** Shallow overhead (~60° from horizontal), camera essentially looking down at the desk surface.
**Background:** Warm wood or linen-textured desk surface, softly out of focus at the frame edges; no clutter, no visible screens, no branded objects.
**Depth of field:** Shallow — f/2.8 look, hand and page in focus, desk edges soft.
**Editorial references:** Kinfolk magazine's process-documentation photography; Pentagram's studio-detail shots.

**Paste-ready prompt:**
"Close editorial photograph, shallow overhead angle at roughly 60 degrees, a pair of hands mid-adjustment on a single printed page of a layout proof, resting on a warm wood desk. Shot on 50mm lens at f/2.8, soft directional window light from the left casting small raking shadows across pencil annotations on the page. Warm, near-achromatic colour grade — parchment highlights, warm near-black shadows, no blue or teal cast, fine 35mm film grain, no digital cleanliness. No face, no visible logos or legible text beyond illegible pencil marks, generous negative space in the upper third of frame. Quiet, mid-task, unposed mood. Editorial photography in the style of Kinfolk magazine and Pentagram studio documentation. 3:2 landscape."

---

### W-02 — Materials and reference shelf, detail

**Composition:** A narrow vertical slice of a shelf — a few considered objects (paper stock samples, a stack of proof prints, one plain ceramic mug) rather than a full shelf; tight enough that it reads as texture, not inventory.
**Lens:** 85mm equivalent, f/2 — a compressed, intimate crop.
**Lighting:** Diffuse ambient daylight, no direct source visible, even and soft.
**Colour grading:** Universal grade — the one orange accent may appear here as a single object (e.g. one terracotta or clay-coloured item), never more than one.
**Wardrobe:** N/A.
**Framing:** Portrait, 4:5.
**Mood:** Considered, unhurried, slightly austere.
**Camera angle:** Eye-level, straight-on to the shelf plane.
**Background:** Shallow — the shelf's own depth falling softly out of focus behind the nearest objects.
**Depth of field:** Very shallow, f/2 — one or two objects sharp, everything else dissolving.
**Editorial references:** Aesop retail/product photography; The Gentlewoman's still-life interstitials.

**Paste-ready prompt:**
"Tight vertical editorial still life of a narrow shelf slice: a few considered objects only — stacked paper stock samples, a small stack of proof prints, one plain ceramic mug, one small clay-orange object as the single colour accent. Shot on 85mm lens at f/2, eye-level, straight-on. Diffuse soft daylight, no visible direct source, even illumination. Warm, near-achromatic colour grade — parchment and warm near-black tones, no blue cast, fine film grain. Very shallow depth of field, one or two objects sharp, rest dissolving softly. Considered, unhurried, slightly austere mood. No people, no logos, no legible text. In the style of Aesop product photography and The Gentlewoman still life. 4:5 portrait."

---

### W-03 — Window-lit corner, wide establishing

**Composition:** A corner of a workspace shot wide enough to read as a place, not a product shot — a desk edge, a window, empty chair implied but not the subject.
**Lens:** 35mm equivalent, f/4.
**Lighting:** Natural window light as the dominant and only source, slightly underexposed toward the shadow side of the room.
**Colour grading:** Universal grade, slightly darker overall exposure than the other Workspace shots — this one should feel like early morning or late afternoon, not midday brightness.
**Wardrobe:** N/A — no person in frame.
**Framing:** Landscape, 16:9.
**Mood:** Calm, unoccupied, a place mid-thought.
**Camera angle:** Eye-level, slight three-quarter angle into the corner (not a flat frontal architectural shot).
**Background:** Soft-focus middle distance — a bookshelf edge or wall, nothing legible.
**Depth of field:** Moderate, f/4 — the room reads as a whole, not isolated to one object.
**Editorial references:** Cereal magazine's interior photography; Aesop store-interior campaign imagery.

**Paste-ready prompt:**
"Wide editorial interior photograph of a quiet, unoccupied workspace corner — a desk edge, a window as the only light source, slightly underexposed as if early morning or late afternoon. Shot on 35mm lens at f/4, eye-level, slight three-quarter angle into the corner rather than a flat frontal view. Warm, near-achromatic colour grade — parchment highlights, warm near-black shadows, no blue or teal cast, fine film grain. No people, no branded objects, no legible text or logos. Calm, contemplative, slightly austere mood. In the style of Cereal magazine interiors and Aesop store photography. 16:9 landscape."

---

## STILL LIFE

Pure material photography — the "held in reserve" set from the Image Library. No people, no specific-place claims, fully safe for generation.

### S-01 — Annotated proof page, close crop

**Composition:** A single printed page, shot close enough that only a portion is visible — pencil marks, a correction, a margin note — cropped so the page's edge exits frame on at least two sides.
**Lens:** 90mm macro-equivalent, f/2.8.
**Lighting:** Low-angle raking light from one side, emphasising the texture of the paper and the slight relief of pencil pressure.
**Colour grading:** Universal grade.
**Wardrobe:** N/A.
**Framing:** Square, 1:1.
**Mood:** Forensic, quiet, evidentiary — this is "proof of work," not decoration.
**Camera angle:** Directly overhead, flat.
**Background:** N/A — the page fills the frame.
**Depth of field:** Shallow, f/2.8 — a slight fall-off from the sharp centre to soft edges.
**Editorial references:** Pentagram's own process documentation; type-specimen photography.

**Paste-ready prompt:**
"Extreme close-up overhead photograph of a single printed page with pencil annotations and one correction mark, cropped so the page edge exits frame on two sides — only a fragment of the page visible, filling the entire frame. Shot on a 90mm macro-equivalent lens at f/2.8, low-angle raking light from one side emphasising paper texture and the slight relief of pencil pressure. Warm, near-achromatic colour grade — parchment tones, warm near-black shadow, no blue cast, fine film grain. Directly overhead, flat camera angle. Forensic, quiet, evidentiary mood — this is documentation, not decoration. No legible words, only illegible marks and correction symbols. In the style of Pentagram process documentation. 1:1 square."

---

### S-02 — Stack of paper stock and print swatches

**Composition:** A loose, slightly imperfect stack of paper samples in varying warm-neutral tones, fanned just enough to show the stack has depth.
**Lens:** 50mm, f/4.
**Lighting:** Soft, even daylight from above and slightly behind camera.
**Colour grading:** Universal grade — this shot should demonstrate the palette itself (several warm neutrals reading as distinct but harmonious).
**Wardrobe:** N/A.
**Framing:** Landscape, 3:2.
**Mood:** Material, tactile, quietly luxurious.
**Camera angle:** High oblique, ~75° from horizontal.
**Background:** A plain warm-neutral desk surface, out of focus at the edges.
**Depth of field:** Moderate, f/4 — the stack reads as a whole object.
**Editorial references:** Aesop packaging photography; a considered print studio's own material archive shots.

**Paste-ready prompt:**
"Editorial still life of a loosely fanned stack of paper stock samples in varying warm-neutral tones — oat, parchment, warm grey — showing the stack's depth without being perfectly arranged. Shot on 50mm lens at f/4, high oblique angle around 75 degrees from horizontal. Soft even daylight from above and slightly behind camera. Warm, near-achromatic colour grade demonstrating a harmonious palette of warm neutrals, no blue cast, fine film grain. Plain warm-neutral desk surface beneath, soft focus at frame edges. Material, tactile, quietly luxurious mood. No people, no logos, no legible text. In the style of Aesop packaging photography. 3:2 landscape."

---

### S-03 — Single object: white ceramic mug, one accent

**Composition:** One plain white ceramic mug, off-centre (not dead-centre — roughly one-third from either edge), resting on a warm surface, with one small clay-orange object nearby as the single accent (a pencil, a small dish, a folded swatch).
**Lens:** 85mm, f/2.
**Lighting:** Single soft window source, camera-left, gentle falloff across the mug's curve.
**Colour grading:** Universal grade — the mug should read true white against the warm parchment surface, the orange accent the only saturated note in the frame.
**Wardrobe:** N/A.
**Framing:** Portrait, 4:5.
**Mood:** Still, deliberate, a single held breath.
**Camera angle:** Eye-level, straight-on.
**Background:** Softly blurred warm-neutral surface, no other objects.
**Depth of field:** Very shallow, f/2.
**Editorial references:** The Gentlewoman's product interstitials; Aesop's single-object campaign frames.

**Paste-ready prompt:**
"Minimal editorial still life: one plain white ceramic mug positioned off-centre on a warm parchment-toned surface, with a single small clay-orange object nearby as the only accent colour in frame. Shot on 85mm lens at f/2, eye-level, straight-on. Single soft window light from camera-left with gentle falloff across the mug's curve. Warm, near-achromatic colour grade — true white mug against warm parchment tones, warm near-black shadow, the orange accent the only saturated colour present, no blue cast, fine film grain. Very shallow depth of field. Still, deliberate, quiet mood — a single held breath. No people, no text, no logos. In the style of The Gentlewoman and Aesop product photography. 4:5 portrait."

---

### S-04 — Warm material texture, close detail

**Composition:** Extreme close crop of a warm wood-slat surface (echoing the vertical wood-slat wall already present in the founder photograph, for palette continuity) — texture and grain as the entire subject.
**Lens:** 100mm macro, f/4.
**Lighting:** Low, raking side light emphasising grain and the warm/cool alternation already present in the slats.
**Colour grading:** Universal grade — this should closely match the background tones already visible in `public/assets/seira-jho.jpg`, so it can be used as a connective texture element elsewhere on the site.
**Wardrobe:** N/A.
**Framing:** Landscape, 16:9 (usable as a full-bleed texture strip).
**Mood:** Textural, ambient, backgroundable.
**Camera angle:** Straight-on, perpendicular to the surface.
**Background:** N/A — texture fills frame.
**Depth of field:** Moderate, f/4.
**Editorial references:** Cereal magazine's material-detail interstitials.

**Paste-ready prompt:**
"Extreme close-up texture photograph of a warm vertical wood-slat surface, grain and the natural warm-to-deeper-warm tonal alternation of the slats filling the entire frame. Shot on 100mm macro lens at f/4, straight-on, perpendicular to the surface. Low raking side light emphasising the wood grain. Warm, near-achromatic colour grade, matching a warm oak/walnut tone family, no blue or grey cast, fine film grain. No objects, no people, no text. Ambient, textural, quiet mood — designed to work as a background texture element. In the style of Cereal magazine material details. 16:9 landscape."

---

## HOME BREATH IMAGE

Per `RALEWAY-VISUAL-DIRECTION-v1.1.md`, Home/Section 05: replaces `/assets/placeholders/home-breath.jpg`. This is the single highest-priority generated image in this library — it's the emotional pivot of the Home page ("before we wrote a single brief for a client, we applied our method to ourselves").

### H-01 — Primary: annotated self-audit page, hand adjusting

**Composition:** A single annotated page from a self-audit document, mid-adjustment by a hand — generous negative space occupying roughly one-third of the frame (top or side), so the image can sit full-bleed at 16:9 without feeling cropped-in.
**Lens:** 50mm, f/2.8.
**Lighting:** Natural window light, slightly underexposed toward the shadows — not bright, airy "startup" lighting.
**Colour grading:** Universal grade, precisely — highlights toward `#F6F4EF`, shadows toward `#1A1A18`.
**Wardrobe:** N/A — sleeve only if any hand/arm is visible, muted warm-neutral fabric, no pattern.
**Framing:** Landscape, 16:9 (matches `--frame-landscape` exactly — do not crop after generation, generate natively at this ratio).
**Mood:** Quiet, unshowy, evidentiary — the emotional register is "we did the work," not "look how nice our office is."
**Camera angle:** Shallow oblique, roughly 50–60° from horizontal (not flat top-down — needs a sense of a real desk in space).
**Background:** Desk surface only, softly out of focus at edges; no screens, no phones, no branded stationery, no logo.
**Depth of field:** Shallow, f/2.8.
**Editorial references:** Kinfolk process photography; Pentagram studio documentation; explicitly not a "productivity app" lifestyle photo.

**Paste-ready prompt:**
"Quiet editorial photograph at a shallow oblique angle (50 to 60 degrees from horizontal), a single hand mid-adjustment on an annotated printed page on a warm wood desk, generous negative space occupying roughly one-third of the frame. Shot on 50mm lens at f/2.8, natural window light, slightly underexposed toward the shadows — not bright or airy, no 'startup lifestyle' lighting. Warm, near-achromatic colour grade — parchment highlights close to warm oat white, warm near-black shadows, absolutely no blue or teal cast, fine 35mm film grain, subtle and restrained. No face, no screens, no phones, no branded objects, no visible logos, no legible text beyond illegible pencil marks. Quiet, evidentiary, unshowy mood — this documents real work, not a styled lifestyle scene. In the style of Kinfolk magazine process photography and Pentagram studio documentation, explicitly not startup or SaaS lifestyle photography. 16:9 landscape, full-bleed composition with breathing room, no vignette."

---

### H-02 — Alternate: overhead, two pages side by side

**Composition:** A directly-overhead shot of two pages laid side by side — one a printed layout, one a handwritten note — suggesting comparison/revision without any text being legible.
**Lens:** 35mm, f/4.
**Lighting:** Even, soft daylight, minimal shadow.
**Colour grading:** Universal grade.
**Wardrobe:** N/A.
**Framing:** Landscape, 16:9.
**Mood:** Methodical, comparative — "the audit in progress."
**Camera angle:** Directly overhead, flat.
**Background:** N/A — desk surface visible only at the frame edges, warm wood tone.
**Depth of field:** Moderate, f/4 — both pages fully legible in form (not in text).
**Editorial references:** Same family as H-01; use as an alternate crop if H-01's composition doesn't work at a given breakpoint.

**Paste-ready prompt:**
"Directly overhead editorial photograph of two pages laid side by side on a warm wood desk — one a printed layout proof, one a handwritten note — suggesting revision and comparison, no text legible. Shot on 35mm lens at f/4, flat overhead angle, even soft daylight with minimal shadow. Warm, near-achromatic colour grade — parchment and warm near-black tones only, no blue cast, fine film grain. Desk surface visible only at frame edges. Methodical, quiet, evidentiary mood. No people, no logos, no legible text. In the style of Kinfolk and Pentagram documentation photography. 16:9 landscape."

---

## WORK BREATH IMAGE

**Read this before generating.** Per the Visual Direction doc, Work/Section 02's breath image is supposed to be literal evidence — a real browser-frame screenshot of the actual live Raleway Studio homepage, placed after the sentence "Once that was clear, the architecture became obvious" as proof of the claim, not decoration. An AI-generated substitute would be a fabricated "screenshot" standing in for real evidence on the one page of the site explicitly built to demonstrate the studio's own credibility. **The correct primary path is a real screenshot** — I have live browser access and can capture one directly from `www.ralewaystudio.com` on request; it needs no photoshoot, no generation, no prompt.

The prompt below is provided as a genuine fallback only — a styled, abstracted device-on-desk treatment that does not attempt to replicate real site content, for use if a literal screenshot mockup isn't wanted for some reason (e.g. a stylistic mood-board pass before the real asset is placed).

### WB-01 — Fallback: abstracted screen-on-desk, no real content

**Composition:** A laptop or monitor, screen showing only an abstract, illegible layout of warm-neutral blocks (never real Raleway content, never legible text) angled away from camera enough that no one could mistake it for a documentary screenshot.
**Lens:** 35mm, f/4.
**Lighting:** Soft window light, screen glow kept subtle and warm-toned (not the default cool-blue screen glow).
**Colour grading:** Universal grade — the screen's own glow should be colour-corrected toward warm, not blue.
**Wardrobe:** N/A.
**Framing:** Landscape, 16:9.
**Mood:** Reflective, in-progress — "reviewing the work," not "here is the work."
**Camera angle:** Three-quarter, elevated slightly above the screen plane.
**Background:** Same desk/workspace family as the Workspace category, softly out of focus.
**Depth of field:** Moderate, f/4.
**Editorial references:** Framer and Linear's own marketing photography (device-in-context, never a literal pixel-accurate screenshot in the lifestyle shot).

**Paste-ready prompt:**
"Editorial three-quarter photograph of a laptop screen on a warm wood desk, elevated slightly above the screen plane, angled enough that the screen content is fully illegible and abstract — only soft warm-neutral blocks of tone, no real interface, no legible text or logos. Shot on 35mm lens at f/4, soft window light, screen glow colour-corrected warm rather than the default cool blue. Warm, near-achromatic colour grade throughout, no blue or teal cast anywhere including the screen itself, fine film grain. Reflective, in-progress mood — reviewing work, not presenting it. No people. In the style of Linear and Framer's device-in-context marketing photography, never a literal screenshot. 16:9 landscape."

---

## SUPPORTING EDITORIAL IMAGES

Flexible reserve assets — future Thinking article headers (used per-article at editorial discretion, never as a mandatory template banner, per the Visual Direction doc), press-kit texture, or alternates if any image above needs a substitute.

### E-01 — Proof sheets laid out in a grid

**Composition:** Several printed proof sheets arranged in a loose, evenly-spaced grid on a desk or floor — echoes the Design phase's grid icon mark without illustrating it literally.
**Lens:** 28mm, f/5.6.
**Lighting:** Even overhead daylight.
**Colour grading:** Universal grade.
**Wardrobe:** N/A.
**Framing:** Landscape, 3:2.
**Mood:** Systematic, calm.
**Camera angle:** Directly overhead, flat.
**Background:** N/A — the grid fills the frame with a small margin of desk/floor surface.
**Depth of field:** Deep, f/5.6 — the whole grid legible in form.
**Editorial references:** Pentagram process-wall photography; a typeface specimen grid.

**Paste-ready prompt:**
"Directly overhead editorial photograph of several printed proof sheets arranged in a loose, evenly-spaced grid on a warm wood surface, small margin of surface visible at the edges. Shot on 28mm lens at f/5.6, flat overhead angle, even overhead daylight. Warm, near-achromatic colour grade — parchment and warm near-black tones, no blue cast, fine film grain. Systematic, calm, orderly mood. No people, no legible text, no logos. In the style of Pentagram process-wall documentation. 3:2 landscape."

---

### E-02 — Desk corner, single orange accent object

**Composition:** A quiet desk corner with exactly one small object in the brand's accent orange (a pencil, a small dish, a bound edge) — everything else in the frame warm-neutral.
**Lens:** 50mm, f/2.8.
**Lighting:** Soft window light, camera-left.
**Colour grading:** Universal grade — the orange object should read as the single point of colour interest in the frame, matching `--colour-accent` (#E05C1A) as closely as the medium allows.
**Wardrobe:** N/A.
**Framing:** Portrait, 4:5.
**Mood:** Restrained, precise.
**Camera angle:** Eye-level, slight oblique.
**Background:** Soft-focus desk surface.
**Depth of field:** Shallow, f/2.8.
**Editorial references:** Aesop's own use of a single accent colour in otherwise neutral campaign photography.

**Paste-ready prompt:**
"Quiet editorial still life of a desk corner containing exactly one small object in burnt clay-orange (a pencil, a small dish, or a bound notebook edge) — every other element in the frame warm-neutral, no other colour present. Shot on 50mm lens at f/2.8, eye-level, slight oblique angle. Soft window light from camera-left. Warm, near-achromatic colour grade with the single orange object as the sole point of colour interest, no blue cast, fine film grain. Restrained, precise, quiet mood. No people, no text, no logos. In the style of Aesop's single-accent-colour campaign photography. 4:5 portrait."

---

### E-03 — Empty chair, negative space

**Composition:** A single, simple wooden or neutral-fabric chair, off to one side of frame, the majority of the composition given to empty wall/window light — implies presence without showing a person.
**Lens:** 35mm, f/4.
**Lighting:** Natural window light, soft.
**Colour grading:** Universal grade.
**Wardrobe:** N/A.
**Framing:** Landscape, 16:9.
**Mood:** Contemplative, spacious, quietly anticipatory.
**Camera angle:** Eye-level, wide.
**Background:** A plain wall or window, softly lit, no clutter.
**Depth of field:** Moderate, f/4.
**Editorial references:** Aesop interior photography; the deliberate use of empty space in The Gentlewoman's editorial spreads.

**Paste-ready prompt:**
"Wide editorial interior photograph of a single simple wooden chair positioned off to one side of the frame, the majority of the composition given to empty wall and soft window light — implying presence without showing a person. Shot on 35mm lens at f/4, eye-level, wide framing. Natural soft window light. Warm, near-achromatic colour grade — parchment wall tones, warm near-black shadow, no blue or teal cast, fine film grain. Contemplative, spacious, quietly anticipatory mood. No people, no text, no logos, no clutter. In the style of Aesop interior photography and The Gentlewoman's use of negative space. 16:9 landscape."

---

### E-04 — Fabric/wardrobe texture, warm cardigan detail

**Composition:** Extreme close crop of a knit or cotton fabric texture in a muted burnt-orange or warm-neutral tone (echoing the founder photo's cardigan) — no wearer visible, fabric only, slightly draped so the weave reads dimensionally.
**Lens:** 100mm macro, f/3.5.
**Lighting:** Soft, single-direction, low raking angle.
**Colour grading:** Universal grade — this is one of the few contexts where the fabric itself may be the orange accent object; keep it desaturated toward clay rather than a bright, saturated orange.
**Wardrobe:** The subject of the shot, not clothing on a person — a folded or draped textile only.
**Framing:** Square, 1:1.
**Mood:** Tactile, warm, quiet.
**Camera angle:** Straight-on, close.
**Background:** N/A — fabric fills frame.
**Depth of field:** Shallow, f/3.5.
**Editorial references:** Aesop and Toast (the clothing brand)'s fabric-detail campaign photography.

**Paste-ready prompt:**
"Extreme close-up editorial photograph of a knit or heavy cotton fabric texture in a muted, desaturated clay-orange tone, folded or draped so the weave reads dimensionally, no wearer visible — fabric only. Shot on 100mm macro lens at f/3.5, straight-on, close. Soft single-direction low raking light emphasising the weave. Warm, near-achromatic colour grade, the fabric's clay-orange the only colour note, desaturated rather than bright, no blue cast, fine film grain. Tactile, warm, quiet mood. No people, no text, no logos. In the style of Aesop and Toast fabric-detail campaign photography. 1:1 square."

---

## Quick reference — aspect ratios by placement

| Placement | Ratio | Token |
|---|---|---|
| Home / Work breath images | 16:9 | `--frame-landscape` |
| Work case-study mockups | 3:2 | `--frame-card` |
| About founder portrait | 4:5 | (real photo only — not generated) |
| Still life / supporting, flexible use | 1:1 or 4:5 | as noted per prompt |

## Tool-specific notes

**Midjourney:** append `--ar 16:9` (or `4:5`, `3:2`, `1:1` as noted), `--style raw`, `--v 6.1` (or latest) to reduce Midjourney's default stylization pull toward glossy/saturated looks — this house style depends on suppressing MJ's defaults, not embracing them.
**Flux (1.1 Pro / Kontext):** paste the prompt as-is; Flux follows literal photographic instruction closely and generally needs no parameter suffix — if using Kontext for a reference-guided edit, feed `public/assets/seira-jho.jpg` only as a *colour/lighting* reference for Workspace and Still Life shots (never to guide a face), captioned "match the warm grade and light quality, not the subject."
**ChatGPT Image:** paste the paragraph as-is; if the first result reads too bright or too saturated, follow up with "regrade darker and warmer, remove any blue in the shadows, reduce saturation by half" — this is the most common correction needed against its default output.
