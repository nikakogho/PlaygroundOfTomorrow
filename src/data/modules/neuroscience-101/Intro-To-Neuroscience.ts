export const sections = [
  {
    content: `## A Universe Inside Your Head

Every memory you cherish, every idea you have, every person you love—it all exists as a complex pattern of electricity and chemistry inside the 3-pound organ between your ears. The human brain is the most sophisticated machine on Earth. Neuroscience is the bold attempt to understand how it works. Ready to take the first step?`,
    type: 'content'
  },
  {
    content: `## What *is* Neuroscience?

Neuroscience isn't just one field; it's a team sport.
- **Molecular & Cellular Neuroscience:** Studies the genes, proteins, and molecules that make brain cells work.
- **Cognitive Neuroscience:** Connects brain activity to mental processes like thought, memory, and attention.
- **Computational Neuroscience:** Uses math and computer models to simulate and understand brain networks.
- **Clinical Neuroscience:** Physicians like neurologists and psychiatrists diagnose and treat disorders of the nervous system.`,
    type: 'content'
  },
  {
    content: `A scientist studying how different gene mutations affect the function of a single neuron is working in which subfield?

<MultipleChoice correctAnswer={0}>
  <p>Molecular & Cellular Neuroscience</p>
  <p>Cognitive Neuroscience</p>
  <p>Computational Neuroscience</p>
  <p>Clinical Neuroscience</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## A High-Level Map

To begin our journey, let's establish some basic orientation. The entire network of nerve cells in your body is the **Nervous System**. It's divided into two main parts:
1.  The **Central Nervous System (CNS):** The command center, consisting of the brain and the spinal cord.
2.  The **Peripheral Nervous System (PNS):** All the nerves that branch out from the CNS to the rest of the body, connecting it to the limbs and organs.`,
    type: 'content'
  },
  {
    content: `## The Central Dogma of Neuroscience

Before we dive deep, let's introduce the two main types of cells that make up the nervous system.
- **Neurons:** The stars of the show. These are the cells that are specialized for communication, sending and receiving signals with incredible speed and precision.
- **Glia:** The essential supporting cast. Glial cells provide structural support, nutrients, and insulation for the neurons. They are far more than just "glue."

The intricate dance between these two cell types makes everything in your brain possible.`,
    type: 'content'
  },
    {
    content: `The part of the nervous system that includes the brain and spinal cord is known as the ________ Nervous System.

<FillInTheBlank correctAnswer="central" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## Up Next: The Brain's Messengers

You have the grand overview. You know the major divisions of the nervous system and the two main cell types. Now, it's time to zoom in. Way in.

In the next module, we'll meet the fundamental building block of the brain's communication network: the neuron.`,
    type: 'content'
  }
] as const;