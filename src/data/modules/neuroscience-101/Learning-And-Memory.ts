export const sections = [
  {
    content: `## The Plastic Brain

For a long time, it was believed that the adult brain was fixed and unchangeable. We now know this is profoundly wrong. Your brain is constantly remodeling itself based on your experiences. This ability is called **neuroplasticity**. Learning and memory are the ultimate expression of this plasticity.`,
    type: 'content'
  },
  {
    content: `## The Rule of Learning: Hebbian Plasticity

In 1949, psychologist Donald Hebb proposed a simple rule that has become a mantra of neuroscience: **"Neurons that fire together, wire together."** This means that when one neuron consistently helps to fire another, the connection, or synapse, between them physically gets stronger. This process is called **Long-Term Potentiation (LTP)**. It is the cellular basis of memory.`,
    type: 'content'
  },
  {
    content: `## How LTP Works (Simply)

When a synapse is used frequently, the postsynaptic (receiving) neuron can add more receptors to its dendrites, making it more sensitive to the neurotransmitter. The result? The "volume" of their conversation is turned up. The connection becomes stronger and more reliable. Conversely, connections that are rarely used can weaken and be pruned away, a process called **Long-Term Depression (LTD)**.`,
    type: 'content'
  },
  {
    content: `The process by which synaptic connections become stronger with repeated use is called ____-____ ____________.

<FillInTheBlank correctAnswer="long-term potentiation" placeholder="Enter the three-word term..." />`,
    type: 'interactive'
  },
  {
    content: `## Types of Memory

Memory isn't a single thing. We can divide it into different types:
-   **Explicit (Declarative) Memory:** Things you can consciously recall, like facts (semantic memory) or personal events (episodic memory). This type of memory is heavily dependent on the **hippocampus**.
-   **Implicit (Non-declarative) Memory:** Things you know how to do without conscious thought, like riding a bike (procedural memory) or being classically conditioned. This type of memory involves areas like the **cerebellum** and **basal ganglia**.`,
    type: 'content'
  },
  {
    content: `Remembering the date of your birthday is an example of what type of memory?

<MultipleChoice correctAnswer={0}>
  <p>Explicit / Declarative</p>
  <p>Implicit / Non-declarative</p>
  <p>Procedural</p>
  <p>Short-term</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## From Short-Term to Long-Term

When you first learn something, it's held in a fragile **short-term** or **working memory** state, which relies on ongoing neural activity. For it to become a stable **long-term memory**, a process called **memory consolidation** must occur. This involves the hippocampus "replaying" the memory trace, strengthening the cortical connections until the memory is stored independently. This is one of the reasons sleep is so important for learning.`,
    type: 'content'
  },
  {
    content: `## Up Next: The Emotional Brain

Learning and memory are not purely cognitive. They are deeply intertwined with our emotional state. Why do you remember shocking or exciting events so vividly? In the next module, we'll explore the neuroscience of emotion and motivation.`,
    type: 'content'
  }
] as const;