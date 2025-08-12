export const sections = [
  {
    content: `## The Oldest Senses

Taste (**gustation**) and smell (**olfaction**) are our chemical senses. They work by detecting chemicals in our food and in the air. They are deeply interconnected and are evolutionarily ancient, providing us with critical information about what is safe to eat and what dangers might be lurking.`,
    type: 'content'
  },
  {
    content: `## Taste: The Five Flavors

Your tongue is covered with bumps called papillae, which contain **taste buds**. Each taste bud contains a cluster of taste receptor cells. Traditionally, we have five basic tastes:
-   Sweet (detects sugars, for energy)
-   Salty (detects sodium, for electrolyte balance)
-   Sour (detects acids, often a sign of spoilage)
-   Bitter (detects potential poisons)
-   Umami (detects glutamate, a sign of protein)

When a chemical from food binds to a receptor, it triggers a signal sent to the brain.`,
    type: 'content'
  },
  {
    content: `The taste that signals the presence of protein, often described as "savory," is called ______.

<FillInTheBlank correctAnswer="umami" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## Smell: A Direct Line to the Brain

When you sniff, chemical molecules called **odorants** are drawn up into your nasal cavity. There, they bind to **olfactory receptor neurons** located in a patch of tissue called the olfactory epithelium. Humans have about 350 different types of these receptors, allowing us to distinguish between thousands of different smells.`,
    type: 'content'
  },
  {
    content: `What we perceive as "flavor" is not just taste. It's a complex combination of taste from the tongue, smell from the nose, and the texture and temperature of the food. This is why food tastes so bland when you have a stuffy nose!`,
    type: 'content'
  },
  {
    content: `## A Unique Pathway

Unlike all other senses, the sense of smell does **not** route through the thalamus first. The olfactory bulb, where the signals are first processed, has direct connections to the **limbic system**, including the amygdala (emotion) and hippocampus (memory). This is why a particular smell can trigger a powerful, emotionally charged memory so suddenly.`,
    type: 'content'
  },
  {
    content: `Which sense has a direct pathway to the brain's emotion and memory centers, bypassing the thalamus?

<MultipleChoice correctAnswer={2}>
  <p>Vision</p>
  <p>Hearing</p>
  <p>Smell</p>
  <p>Touch</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Up Next: The Body's Senses

We've covered sight, sound, taste, and smell. But what about the sense of your own body? In the next module, we'll explore the diverse world of the somatosensory system, including touch, temperature, pain, and your hidden sixth sense of body awareness.`,
    type: 'content'
  }
] as const;