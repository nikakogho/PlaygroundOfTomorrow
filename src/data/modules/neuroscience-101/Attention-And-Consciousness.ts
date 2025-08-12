export const sections = [
  {
    content: `## The Spotlight of the Mind

The world bombards us with sensory information. **Attention** is the cognitive process of selectively concentrating on one aspect of the environment while ignoring others. It's like a mental spotlight that you can shine on a particular conversation, object, or thought.`,
    type: 'content'
  },
  {
    content: `## The Attention Network

Attention isn't controlled by a single brain area. It involves a network of regions, primarily in the **frontal lobe** (for directing the spotlight) and the **parietal lobe** (for shifting the spotlight and engaging with sensory information). Neuromodulators like **norepinephrine** and **acetylcholine** are crucial for maintaining an alert and attentive state.`,
    type: 'content'
  },
  {
    content: `The two main brain lobes involved in controlling the "spotlight" of attention are the ________ and ________ lobes.

<FillInTheBlank correctAnswer="frontal, parietal" placeholder="Enter two lobe names..." />`,
    type: 'interactive'
  },
  {
    content: `## The Great Mystery: Consciousness

This is perhaps the biggest question in all of neuroscience: How does the coordinated activity of billions of neurons give rise to subjective, private experience—the feeling of redness, the taste of a strawberry, the sense of being *you*? This is often called the "hard problem" of consciousness.`,
    type: 'content'
  },
  {
    content: `## Correlates of Consciousness

We don't have an answer to the hard problem, but we can search for the **neural correlates of consciousness (NCCs)**. What is different about the brain's activity when you are aware of a stimulus versus when you are not? Research suggests that consciousness requires widespread, synchronized, high-frequency electrical activity across the cerebral cortex, particularly involving frontal and parietal regions. It seems to be the brain's way of integrating lots of information into a single, unified whole.`,
    type: 'content'
  },
  {
    content: `While we don't know how consciousness arises, research suggests it involves widespread, synchronized activity across the ________ ______.

<MultipleChoice correctAnswer={2}>
  <p>Brainstem</p>
  <p>Cerebellum</p>
  <p>Cerebral Cortex</p>
  <p>Spinal Cord</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Up Next: Putting It All Together

We've explored how we learn, feel, and focus. Now, how do we use all of these abilities to reason, plan for the future, and solve complex problems? In the next module, we'll look at the highest-level cognitive functions that are the hallmark of the human mind.`,
    type: 'content'
  }
] as const;