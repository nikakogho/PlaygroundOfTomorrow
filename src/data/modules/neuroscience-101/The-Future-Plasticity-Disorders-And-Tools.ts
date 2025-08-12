export const sections = [
  {
    content: `## The Dynamic Brain

As we close our journey, let's revisit the concept of **neuroplasticity**. The brain is not a static organ. It is constantly changing, adapting, and reorganizing. This is not only the basis for learning but also for recovery from injury and the development of expertise. A famous study of London taxi drivers found they had significantly larger hippocampi, the brain's memory center, from memorizing the city's complex map.`,
    type: 'content'
  },
  {
    content: `## When the System Breaks: Brain Disorders

The brain's intricate balance can be disrupted.
-   **Alzheimer's Disease:** A disease of neuroplasticity gone wrong, where harmful proteins—**amyloid plaques** and **tau tangles**—build up, destroying synapses and neurons.
-   **Parkinson's Disease:** A movement disorder caused by the death of dopamine-producing neurons in the midbrain.
-   **Depression & Anxiety:** These are increasingly understood as disorders of brain circuits, involving regions like the prefrontal cortex and amygdala, and neuromodulators like serotonin.`,
    type: 'content'
  },
  {
    content: `## Tools for Looking at the Brain

How do we know all this? Modern technology gives us a toolkit for looking inside the living brain.
-   **EEG (Electroencephalography):** Listens to the brain's electrical "music." Great for timing, poor for location.
-   **fMRI (Functional Magnetic Resonance Imaging):** Tracks blood flow to see which areas are active. Great for location, poor for timing.
-   **TMS (Transcranial Magnetic Stimulation):** Uses magnetic pulses to temporarily disrupt or enhance brain activity, allowing us to infer causation.`,
    type: 'content'
  },
    {
    content: `A researcher wants to know precisely *which* brain areas are active when a person performs a complex math problem. Which tool should they use?

<MultipleChoice correctAnswer={1}>
  <p>EEG (for its excellent temporal resolution)</p>
  <p>fMRI (for its excellent spatial resolution)</p>
  <p>A post-mortem dissection</p>
  <p>TMS (for inferring causation)</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## The Future: Brain-Computer Interfaces

One of the most exciting frontiers is the development of **Brain-Computer Interfaces (BCIs)**. These devices can read brain signals and use them to control external devices, like a robotic arm or a computer cursor. They can also "write" information back into the brain. BCIs hold incredible promise for restoring function to people with paralysis or sensory loss.`,
    type: 'content'
  },
  {
    content: `<YouTubeEmbed videoId="ogCzxM5M5L4" title="Paralyzed man uses brain-computer interface to move robotic arm" />`,
    type: 'content'
  },
  {
    content: `## Your Journey Has Begun

Congratulations! You've made it through the fundamentals of neuroscience. You've journeyed from a single neuron to the complexity of consciousness. You now have the vocabulary and the conceptual framework to understand new discoveries in this incredible field. The universe in your head is now a little less mysterious. Keep asking questions!`,
    type: 'content'
  }
] as const;