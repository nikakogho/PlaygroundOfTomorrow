export const sections = [
  {
    content: `## The Plastic Brain

For a long time, it was believed that the adult brain was fixed and unchangeable. We now know this is profoundly wrong. Your brain is constantly remodeling itself based on your experiences. This ability is called **neuroplasticity**.

Think of your brain not as a static sculpture, but as a dynamic river, constantly carving new paths.`,
    type: 'content'
  },
  {
    content: `## The Rule of Learning

In 1949, psychologist Donald Hebb proposed a simple rule that has become a mantra of neuroscience: **"Neurons that fire together, wire together."**

This means that when one neuron consistently helps to fire another, the connection, or synapse, between them physically gets stronger. This process is called **Long-Term Potentiation (LTP)**.`,
    type: 'content'
  },
  {
    content: `## How LTP Works (Simply)

When a synapse is used frequently and successfully, the postsynaptic (receiving) neuron undergoes changes:
1. It adds more receptors to its dendrites, making it more sensitive to the neurotransmitter.
2. It can send a retrograde signal back to the presynaptic (sending) neuron, telling it to release *more* neurotransmitter in the future.

The result? The "volume" of their conversation is turned up. The connection becomes stronger and more reliable. This is the cellular basis of memory.`,
    type: 'content'
  },
  {
    content: `Long-Term Potentiation (LTP) is the process by which synaptic connections become ________.

<MultipleChoice correctAnswer={0}>
  <p>Stronger</p>
  <p>Weaker</p>
  <p>Longer</p>
  <p>Shorter</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Use It or Lose It

Plasticity also works in reverse. If a synaptic connection is rarely used, it will weaken and can eventually be eliminated. This is called **Long-Term Depression (LTD)**.

This is a crucial clean-up process. It allows the brain to prune away unimportant connections and free up resources for more important ones. It's why you can forget information you haven't used in years.`,
    type: 'content'
  },
  {
    content: `## Real-World Plasticity: London Cabbies

A famous study of London taxi drivers found that they had significantly larger **hippocampi** (a brain region crucial for spatial memory) than control subjects.

To earn their license, they have to memorize a labyrinth of 25,000 streets. This intense learning physically changed the structure of their brains.`,
    type: 'content'
  },
  {
    content: `The brain's ability to reorganize and form new connections throughout life is called ____________.

<FillInTheBlank correctAnswer="neuroplasticity" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## When the System Breaks: Brain Disorders

The brain's intricate balance of structure, chemistry, and electricity can be disrupted. Let's look at what happens in a few major disorders.

**Alzheimer's Disease:** This is fundamentally a disease of failing synapses. Harmful proteins—**amyloid plaques** and **tau tangles**—build up in the brain, destroying neurons and their connections, particularly in memory centers.`,
    type: 'content'
  },
  {
    content: `**Parkinson's Disease:** This is a movement disorder caused by the death of neurons in a small area of the brainstem called the **substantia nigra**. These neurons are responsible for producing the neurotransmitter **dopamine**, which is crucial for smooth, controlled movement.`,
    type: 'content'
  },
  {
    content: `## A Glimpse into Pharmacology

How do medications for brain disorders work? Many of them target synapses.
- An **agonist** is a drug that mimics or enhances the effect of a neurotransmitter. It's like a master key that can open the receptor's lock.
- An **antagonist** is a drug that blocks the effect of a neurotransmitter. It's like a key that fits in the lock but doesn't turn, preventing the real key from getting in.

For example, many antipsychotic drugs are dopamine antagonists.`,
    type: 'content'
  },
  {
    content: `A drug that blocks a receptor and prevents a neurotransmitter from having its effect is called an ________.

<MultipleChoice correctAnswer={1}>
  <p>Agonist</p>
  <p>Antagonist</p>
  <p>Catalyst</p>
  <p>Protagonist</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Up Next: Connecting to the World

Understanding plasticity and pharmacology shows us how dynamic—and fragile—the brain is. We've seen how the internal machinery works and adapts.

Now, let's connect it to the outside world. How does all this machinery allow you to see a sunset, hear music, and then decide to tap your foot to the beat? That's next.`,
    type: 'content'
  }
] as const;