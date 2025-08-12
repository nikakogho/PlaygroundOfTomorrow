export const sections = [
  {
    content: `## More Than Just Glue

For decades, **glial cells** (from the Greek word for "glue") were thought to be simple support structures for neurons. We now know they are active and essential partners in everything the brain does. There are at least as many glial cells in your brain as neurons, and they come in several important varieties.`,
    type: 'content'
  },
  {
    content: `## The Insulators: Oligodendrocytes & Schwann Cells

One of the most vital roles of glia is to create the **myelin sheath**, a fatty insulating layer that wraps around axons.
- In the **Central Nervous System (CNS)**, this job is done by **Oligodendrocytes**. A single oligodendrocyte can wrap its arms around multiple axons.
- In the **Peripheral Nervous System (PNS)**, this is done by **Schwann Cells**. Each Schwann cell creates a single segment of myelin.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://www.researchgate.net/publication/348810019/figure/fig2/AS:11431281100705702@1669389111761/Comparison-of-central-and-peripheral-myelination-a-Each-oligodendrocyte-in-the-CNS-can.tif" alt="Myelination by Oligodendrocytes and Schwann Cells." caption="Different glial cells create the myelin sheath in the CNS and PNS."/>`,
    type: 'content'
  },
  {
    content: `## The Nodes of Ranvier

The myelin sheath isn't continuous. It has small, uninsulated gaps called the **Nodes of Ranvier**. The neural signal doesn't flow down the axon like water in a pipe; it *jumps* from one node to the next. This process, called **saltatory conduction**, makes the signal travel up to 100 times faster! The fatty myelin prevents the electrical signal from leaking out.`,
    type: 'content'
  },
  {
    content: `The gaps in the myelin sheath that allow the neural signal to jump and travel faster are called the ______ __ ________.

<FillInTheBlank correctAnswer="nodes of ranvier" placeholder="Enter the two-word term..." />`,
    type: 'interactive'
  },
  {
    content: `## The Brain's Caretakers: Astrocytes & Microglia

**Astrocytes** are star-shaped glial cells that are the master regulators of the brain environment. They help form the **blood-brain barrier**, control nutrient supply, and regulate communication at the synapse.

**Microglia** are the brain's dedicated immune cells. They act as tiny scavengers, cleaning up cellular debris and dead cells, and defending the brain from pathogens.`,
    type: 'content'
  },
  {
    content: `Which type of glial cell acts as the brain's immune system?

<MultipleChoice correctAnswer={3}>
  <p>Oligodendrocyte</p>
  <p>Schwann Cell</p>
  <p>Astrocyte</p>
  <p>Microglia</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Up Next: The Spark of Thought

We've met the cells of the brain: the neurons that send messages and the glia that support them. But what *is* the message? How does a neuron actually fire a signal?

In the next module, we'll dive into the electricity of the brain and learn about the remarkable event known as the action potential.`,
    type: 'content'
  }
] as const;