export const sections = [
  {
    content: `## Telling Cells What to Do

We've assembled our team (cells) and given them a worksite (scaffold). Now we need to give them the blueprints and tell them to get to work.

In tissue engineering, these instructions are delivered as **signals**. Without the right signals, a stem cell will remain a stem cell, or it might turn into the wrong kind of tissue.`,
    type: 'content'
  },
  {
    content: `## Chemical Signals: Growth Factors

The most common signals are powerful proteins called **growth factors** and **differentiation factors**. These are the biochemical messengers that cells use to communicate.

Think of them as specific commands:
- **"Divide and multiply!"** (e.g., Platelet-Derived Growth Factor, PDGF)
- **"Become a bone cell!"** (e.g., Bone Morphogenetic Proteins, BMPs)
- **"Form a blood vessel!"** (e.g., Vascular Endothelial Growth Factor, VEGF)

These can be loaded into the scaffold or supplied in the nutrient medium.`,
    type: 'content'
  },
  {
    content: `<YouTubeEmbed videoId="7g2f0dhp2w8" title="Animation of Growth Factor" />`,
    type: 'content'
  },
  {
    content: `If you wanted to engineer a piece of vascularized bone, which two growth factors would be most critical to include?

<MultipleChoice correctAnswer={2}>
  <p>PDGF and Insulin</p>
  <p>VEGF and BMPs</p>
  <p>Collagen and Alginate</p>
  <p>BMPs and Estrogen</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Physical Signals: The Mechanome

The body isn't a static place. Cells are constantly experiencing physical forces, and these forces are powerful signals. This is called **mechanotransduction**.

- **Cartilage cells** need periodic compression to stay healthy.
- **Bone cells** respond to mechanical loads by getting stronger (this is why exercise strengthens bones).
- **Endothelial cells** lining blood vessels need the shear stress from flowing blood to organize properly.`,
    type: 'content'
  },
  {
    content: `The process by which cells convert physical forces into biochemical signals is called _______________.

<FillInTheBlank correctAnswer="mechanotransduction" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## A Symphony of Signals

In reality, it's never just one signal. Building a tissue requires a complex symphony of signals delivered at the right time and in the right place.

The challenge for engineers is to orchestrate this. For example, they might release a "multiply" signal first, followed by a "differentiate" signal a few days later, all while applying the correct mechanical stimulation.`,
    type: 'content'
  },
  {
    content: `## Up Next: The Nursery

We now have all three components of the triad: cells, a scaffold, and the signals to guide them. But we can't just mix them together and hope for the best.

This delicate process needs to happen in a highly controlled environment that mimics the human body. Next, we'll enter the tissue nursery: the bioreactor.`,
    type: 'content'
  }
] as const;