export const sections = [
  {
    content: `## A Home for Cells

Our cells are ready to build, but they can't work in a vacuum. They need a structure to attach to, migrate through, and organize on. They need a temporary "house" that mimics the natural environment of the body.

This house is the **scaffold**.`,
    type: 'content'
  },
  {
    content: `## Key Properties of a Scaffold

A good scaffold isn't just a passive sponge. It must be carefully designed with several key features:
1.  **Biocompatibility:** It must not cause a harmful immune response. The body has to accept it.
2.  **Biodegradability:** It should safely break down over time as the cells produce their own natural matrix, eventually disappearing completely.
3.  **Porosity:** It needs interconnected pores, like tunnels in an anthill, so cells can move in, and nutrients can get in and waste can get out.
4.  **Mechanical Strength:** It must be strong enough to support the new tissue and withstand the forces inside the body.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://static.vecteezy.com/system/resources/thumbnails/046/088/681/small/a-detailed-look-at-a-nanocrystalline-coating-made-up-of-tiny-particles-arranged-in-a-highly-organized-pattern-this-innovative-material-could-be-used-to-make-medical-device-photo.jpg" alt="Porous tissue engineering scaffold" caption="A scaffold's pores allow cells to inhabit the structure."/>`,
    type: 'content'
  },
  {
    content: `A scaffold designed for bone regeneration needs to be very strong, while a scaffold for skin might need to be more flexible. This property is known as:

<MultipleChoice correctAnswer={3}>
  <p>Biocompatibility</p>
  <p>Porosity</p>
  <p>Biodegradability</p>
  <p>Mechanical Strength</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Building Materials: Natural vs. Synthetic

Scaffolds can be made from a variety of materials:
- **Natural Polymers:** These are derived from biological sources. Examples include **collagen** (the main protein in your skin and bones) and **alginate** (from seaweed). They are often highly biocompatible.
- **Synthetic Polymers:** These are man-made plastics. Examples include **Polylactic acid (PLA)** and **Polyglycolic acid (PGA)**. Their advantage is that we can precisely control their properties, like their strength and how fast they degrade.`,
    type: 'content'
  },
  {
    content: `The main protein found in your connective tissue, often used as a natural scaffold material, is called ________.

<FillInTheBlank correctAnswer="collagen" placeholder="Enter the material..." />`,
    type: 'interactive'
  },
  {
    content: `## Fabrication: From Spun Fibers to 3D Printing

How are these intricate scaffolds made?
- **Electrospinning:** Uses an electric field to draw incredibly thin polymer fibers, creating a mesh that resembles the natural extracellular matrix.
- **Solvent Casting / Particulate Leaching:** A polymer is dissolved and mixed with "porogens" (like salt crystals). After it solidifies, the salt is washed away, leaving pores behind.
- **3D Bioprinting:** This is the most advanced method. A "bio-ink" (often containing cells, scaffold material, and signals) is printed layer-by-layer to create complex, precise structures.`,
    type: 'content'
  },
  {
    content: `## Up Next: The Instructions

Okay, we have our cells (the bricks) and our scaffold (the house). But if you put a bunch of stem cells in a scaffold, they won't know what to do. They're waiting for instructions.

In the next module, we'll explore the signals that act as the "foreman," directing the cells to build the right kind of tissue.`,
    type: 'content'
  }
] as const;