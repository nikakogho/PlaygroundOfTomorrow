export const sections = [
  {
    content: `## More Than a Petri Dish

Growing a flat layer of cells in a petri dish is one thing. Growing a complex, 3D tissue that's several millimeters or even centimeters thick is a whole different ballgame.

The cells deep inside the construct need a constant supply of nutrients and oxygen, and a way to get rid of waste. A standard incubator isn't enough. We need a **bioreactor**.`,
    type: 'content'
  },
  {
    content: `## What is a Bioreactor?

A bioreactor for tissue engineering is a device that provides a controlled, sterile environment to support the growth of a 3D tissue construct.

Think of it as an artificial body. Its job is to:
- Provide a steady flow of nutrient-rich medium.
- Remove waste products (like lactic acid).
- Control key parameters like temperature, pH, and oxygen levels.
- Apply specific physical stimuli (mechanical or electrical).`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="A photo of a complex lab bioreactor with a glass chamber, tubes, and a control panel." alt="A laboratory tissue engineering bioreactor." caption="Bioreactors provide a controlled environment for tissue growth."/>`,
    type: 'content'
  },
  {
    content: `Which of the following is NOT a primary function of a bioreactor?

<MultipleChoice correctAnswer={3}>
  <p>Delivering nutrients and oxygen.</p>
  <p>Removing cellular waste products.</p>
  <p>Providing the initial stem cells.</p>
  <p>Applying mechanical stimulation.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Types of Bioreactors

There are many designs, each tailored for a specific tissue type.
- **Spinner Flasks:** The tissue construct is suspended from a hook and the medium is stirred by a magnetic bar. It's simple, but the mixing can be uneven.
- **Rotating Wall Vessels:** The entire cylindrical vessel rotates, keeping the construct in a state of constant free-fall. This creates very low shear stress, which is good for delicate tissues.
- **Perfusion Systems:** This is the most advanced type. The nutrient medium is actively pumped *through* the pores of the scaffold. This is the best way to ensure nutrients reach every cell, and it's essential for growing thick tissues.`,
    type: 'content'
  },
  {
    content: `A bioreactor that actively pumps culture medium through the scaffold is called a ________ system.

<FillInTheBlank correctAnswer="perfusion" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## Simulating the Body

The ultimate goal of a bioreactor is to mimic the in vivo (in the body) environment as closely as possible.

For example, to engineer a piece of heart tissue, a bioreactor might need to apply electrical pulses to make the cells beat in unison while also pumping medium through the construct to simulate blood flow.`,
    type: 'content'
  },
  {
    content: `## Up Next: From Lab to Life

We've done it! We've chosen our cells, built them a scaffold home, given them instructions, and nurtured them in a bioreactor. We have a piece of engineered tissue.

Now for the final, most important step: How is this technology used today, and what does the future hold? Let's explore the real-world applications.`,
    type: 'content'
  }
] as const;