ONE MORE SMALL UI REFINEMENT — NAVBAR ACTIVE SECTION INDICATOR

After implementing the About-card hover update above, make one additional,
small interaction improvement to the navbar.

IMPORTANT:
This is NOT a navbar redesign.

Keep the navbar exactly as it currently looks

PROBLEM: There is currently no visual indication of which portfolio section is active.

When the user is viewing/scrolled to:
Home
About
Skills
Education
Projects
Certificates
Coding Profile
Contact

the corresponding navbar menu item should visually indicate that it is the
currently active section.

DESIRED SOLUTION:
Use a subtle premium ACTIVE UNDERLINE beneath the active navbar item.
Use the same visual language already established by the Project tabs.

ACTIVE NAV ITEM:
Education
━━━━━━━

The underline should be:
- a very small horizontal rounded line
- centered directly beneath the menu text
- ambient cyan → purple → pink gradient
- subtle glow
- smooth transition
- visually refined and premium

INACTIVE NAV ITEMS:
Remain exactly as they currently look.

Do NOT add:
- pill backgrounds
- boxes
- borders around nav items
- large glowing effects
- filled backgrounds
- excessive neon
- text color changes that make the navbar noisy

The active indicator should be understated enough that it feels like part
of the existing navbar rather than a new component.

IMPORTANT INTERACTION:
The active section must update naturally as the user scrolls through the page.

For example:

Home section visible
→ Home gets the gradient underline

About section visible
→ About gets the gradient underline

Education section visible
→ Education gets the gradient underline

Projects section visible
→ Projects gets the gradient underline

etc.

NAVIGATION CLICK BEHAVIOR:
When a user clicks a navbar item:
1. Smooth-scroll to the corresponding section.
2. The clicked item becomes active naturally.
3. The underline transitions smoothly from the previous item to the new item.

The active indicator should NOT cause any layout shift.

Prefer using an absolutely positioned pseudo-element or equivalent
implementation so the underline does not change the navbar item's height,
padding, or alignment.

The underline may softly fade/slide into position when the active section
changes, but keep it extremely smooth and premium.

However, DO NOT reuse the border-glow effect itself.
The navbar should remain visually lightweight.

HOVER:
Keep the existing navbar hover behavior unless it conflicts with the active
indicator.

Do not modify anything else.

One extra refinement
Make the underline move between items rather than simply appearing/disappearing.

So when you go: Education → Projects
the little gradient indicator smoothly travels
That tiny movement will make the navbar feel significantly more polished without adding another flashy effect.