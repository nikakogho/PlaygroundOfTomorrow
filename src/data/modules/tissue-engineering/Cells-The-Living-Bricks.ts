export const sections = [
  {
    content: `## The Source of Life

We have a blueprint, but we need builders. In tissue engineering, the cells are the construction workers. But where do we hire them from? The source of our cells is one of the most critical decisions in designing a new tissue.`,
    type: 'content'
  },
  {
    content: `## Autologous vs. Allogeneic

There are two main strategies for sourcing cells:
- **Autologous:** The cells come from the **patient themselves**. A small biopsy is taken, cells are isolated, grown in the lab, and then used to create the new tissue. The major advantage? No immune rejection. It's your own tissue!
- **Allogeneic:** The cells come from a **different human donor**. This allows for an "off-the-shelf" product that can be ready when needed, but it carries the risk of immune rejection, often requiring immunosuppressant drugs.`,
    type: 'content'
  },
  {
    content: `What is the primary advantage of using an autologous cell source?

<MultipleChoice correctAnswer={2}>
  <p>It is cheaper and faster.</p>
  <p>It can be used for any patient.</p>
  <p>It avoids immune system rejection.</p>
  <p>The cells are more powerful.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## The Power of Stem Cells

Often, we don't want just any cell. We want **stem cells**. These are special, unspecialized cells with two amazing properties:
1.  They can self-renew (make more copies of themselves).
2.  They can **differentiate** (turn into specialized cells, like bone, muscle, or nerve cells).`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Stem_cell_differentiation.svg/768px-Stem_cell_differentiation.svg.png" alt="Stem cells can differentiate into many cell types." caption="Stem cells can differentiate into many cell types."/>`,
    type: 'content'
  },
  {
    content: `## Types of Stem Cells

- **Embryonic Stem Cells (ESCs):** These are **pluripotent**, meaning they can become *any* cell type in the body. They are incredibly powerful but also controversial.
- **Adult Stem Cells:** These are found in various tissues in your body (like bone marrow or fat). They are typically **multipotent**, meaning they can become several, but not all, cell types. For example, mesenchymal stem cells (MSCs) can become bone, cartilage, and fat cells.`,
    type: 'content'
  },
  {
    content: `A stem cell that has the potential to differentiate into any cell type in the human body is described as __________.

<FillInTheBlank correctAnswer="pluripotent" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## A Nobel Prize-Winning Breakthrough: iPSCs

In 2006, Shinya Yamanaka's lab made a stunning discovery. They could take a normal adult cell (like a skin cell) and "reprogram" it back into a stem cell-like state.

These are called **Induced Pluripotent Stem Cells (iPSCs)**. This technology allows us to create powerful, patient-specific stem cells without the ethical concerns of ESCs. It was a total game-changer for the field.`,
    type: 'content'
  },
  {
    content: `## Up Next: The Framework

We've chosen our cells. They're multiplying in a dish, ready for their mission. But if we just inject them into the body, they'll float away and die. They need a home.

In the next module, we'll learn about the scaffolds that provide the architectural framework for our new tissue.`,
    type: 'content'
  }
] as const;