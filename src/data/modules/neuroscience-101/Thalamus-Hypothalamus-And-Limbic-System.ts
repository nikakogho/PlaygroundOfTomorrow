export const sections = [
  {
    content: `## The Brain's Relay Station

Deep in the center of the brain sits the **Thalamus**. Think of it as the brain's central switchboard or relay station. Almost all sensory information from your body (except for smell) passes through the thalamus before being routed to the appropriate area of the cerebral cortex for processing.`,
    type: 'content'
  },
  {
    content: `## The Body's Thermostat

Below the thalamus is the **Hypothalamus** (hypo means "under"). This tiny structure has a massive job: it's the main link between the nervous system and the endocrine (hormonal) system. It regulates body temperature, hunger, thirst, and sleep cycles. It's the master regulator of **homeostasis**, keeping your body's internal environment stable.`,
    type: 'content'
  },
    {
    content: `The brain structure responsible for regulating basic drives like hunger and thirst is the ____________.

<FillInTheBlank correctAnswer="hypothalamus" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## The Emotional Brain: The Limbic System

Wrapped around the thalamus is a set of interconnected structures known as the **Limbic System**. This is the primary center for emotion and memory in the brain. The two most famous parts of the limbic system are the amygdala and the hippocampus.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://my.clevelandclinic.org/-/scassets/images/org/health/articles/24894-amygdala" alt="The Limbic System." caption="The limbic system is crucial for emotion and memory."/>`,
    type: 'content'
  },
  {
    content: `## Key Players in the Limbic System

- **Amygdala:** An almond-shaped structure that is the brain's fear and emotion processing center. It's constantly scanning for threats and is critical for fear learning.
- **Hippocampus:** This seahorse-shaped structure is absolutely essential for the formation of new long-term memories. The famous patient H.M., who had his hippocampus removed, was unable to form any new memories for the rest of his life.`,
    type: 'content'
  },
  {
    content: `A person who has difficulty forming new long-term memories likely has damage to their __________.

<MultipleChoice correctAnswer={2}>
  <p>Amygdala</p>
  <p>Hypothalamus</p>
  <p>Hippocampus</p>
  <p>Thalamus</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Up Next: The Thinking Cap

We've toured the brain's ancient core. Now it's time to explore the most evolutionarily recent and complex part of the brain: the wrinkled outer layer responsible for all of our higher thought, language, and personality. In the next module, we'll examine the cerebral cortex and its four lobes.`,
    type: 'content'
  }
] as const;