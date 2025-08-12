export const sections = [
  {
    content: `## A Diverse Chemical Language

There isn't just one type of chemical messenger in the brain. There are dozens of different **neurotransmitters**, and each can have different effects depending on where in the brain it is released and what kind of receptor it binds to. Let's meet the main characters.`,
    type: 'content'
  },
  {
    content: `## The Workhorses: Glutamate and GABA

These are the most common neurotransmitters in the central nervous system.
- **Glutamate** is the main **excitatory** neurotransmitter. When it binds to a receptor, it makes the postsynaptic neuron *more* likely to fire an action potential. It's the brain's "on" switch.
- **GABA (gamma-aminobutyric acid)** is the main **inhibitory** neurotransmitter. It makes the postsynaptic neuron *less* likely to fire. It's the brain's "off" switch.

The balance between glutamate and GABA is crucial for all brain activity.`,
    type: 'content'
  },
  {
    content: `A neurotransmitter that makes the receiving neuron *less* likely to fire is described as __________.

<FillInTheBlank correctAnswer="inhibitory" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## The Neuromodulators

Some neurotransmitters don't just cause a simple "fire" or "don't fire" signal. They "modulate" the activity of large populations of neurons, changing their excitability and tuning their communication. These are the **neuromodulators**.`,
    type: 'content'
  },
  {
    content: `### The Famous Four:
- **Dopamine:** Heavily involved in motivation, reward, and motor control. Problems with the dopamine system are linked to Parkinson's disease and addiction.
- **Serotonin:** Plays a huge role in regulating mood, sleep, and appetite. Many antidepressant drugs, like SSRIs, work by increasing the amount of serotonin in the synapse.
- **Norepinephrine (Noradrenaline):** A key player in alertness, arousal, and the "fight-or-flight" response.
- **Acetylcholine:** Critical for muscle contraction at the neuromuscular junction, as well as for attention and memory in the brain.`,
    type: 'content'
  },
  {
    content: `Which neuromodulator is most closely associated with feelings of reward and motivation?

<MultipleChoice correctAnswer={0}>
  <p>Dopamine</p>
  <p>Serotonin</p>
  <p>GABA</p>
  <p>Acetylcholine</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Up Next: The Big Picture

We've explored the microscopic world of the brain's cells and molecules. Now it's time to zoom out and see how these components are organized into a functioning system. In the next module, we'll begin our tour of the brain's large-scale architecture, starting with the difference between the central and peripheral nervous systems.`,
    type: 'content'
  }
] as const;