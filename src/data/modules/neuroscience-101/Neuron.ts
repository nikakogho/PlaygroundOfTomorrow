export const sections = [
  {
    content: `## The Neuron Doctrine

For a long time, scientists thought the brain was a continuous, interconnected web, like a mesh. But in the late 1800s, a Spanish scientist named **Santiago Ramón y Cajal** used newly developed stains to look at brain tissue under a microscope.

He proposed the **Neuron Doctrine**: the idea that the brain is made of individual, discrete cells called **neurons**. These neurons are the fundamental building blocks of the nervous system. He was right, and he won a Nobel Prize for it.`,
    type: 'content'
  },
  {
    content: `## What Makes a Neuron Special?

Unlike a skin cell or a liver cell, a neuron is built for one thing: **communication**. Its unique structure allows it to receive, process, and transmit information with incredible speed and precision.

Let's break down its anatomy. Think of it like a mail delivery system.`,
    type: 'content'
  },
  {
    content: `## The Anatomy of a Neuron

<ImageEmbed src="https://res.cloudinary.com/dnls7yeic/image/upload/f_auto,q_auto/nexus/images/pasted_image_20241206143447.png" alt="Detailed diagram of a neuron, labeling dendrites, soma, axon, myelin sheath, and axon terminals." caption="Each part of the neuron has a specific role in communication."/>`,
    type: 'content'
  },
  {
    content: `## Step 1: The Dendrites (The Mailbox)

**Dendrites** (from the Greek word for "tree") are the branching extensions that *receive* information from other neurons. They are covered in thousands of tiny bumps called receptors, which act like mailboxes waiting for a specific letter.`,
    type: 'content'
  },
  {
    content: `## Step 2: The Soma (The Letter Reader)

The incoming signals from the dendrites all converge on the **Soma**, or cell body. The soma contains the nucleus and the cell's main machinery.

Its job is to integrate all the incoming signals. It adds up all the "yes" signals and subtracts all the "no" signals to decide if the message is important enough to pass on.`,
    type: 'content'
  },
  {
    content: `Which part of the neuron integrates all incoming signals to decide whether to fire?

<MultipleChoice correctAnswer={1}>
  <p>Dendrites</p>
  <p>Soma (Cell Body)</p>
  <p>Axon</p>
  <p>Myelin Sheath</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Step 3: The Axon (The Delivery Truck)

If the soma decides to fire, it sends an electrical signal down the **Axon**. The axon is a long, slender cable that *transmits* the signal away from the soma. Some axons in your body, like the one that runs from your spinal cord to your big toe, can be over a meter long!`,
    type: 'content'
  },
  {
    content: `## Speeding Up The Signal: Myelin

Many axons are wrapped in a fatty substance called the **myelin sheath**. This sheath acts like the plastic insulation on an electrical wire.

It prevents the electrical signal from leaking out and forces it to jump between the gaps in the myelin, called **Nodes of Ranvier**. This jumping, called saltatory conduction, makes the signal travel up to 100 times faster!`,
    type: 'content'
  },
  {
    content: `The fatty insulation that speeds up neural signals is called the ______ ______.

<FillInTheBlank correctAnswer="myelin sheath" placeholder="Enter the two-word term..." />`,
    type: 'interactive'
  },
  {
    content: `## Step 4: The Synapse (The Delivery)

The axon ends at the **axon terminal**. This is where the neuron passes its message to the next neuron's dendrites. As we learned, they don't quite touch.

The connection point—the gap and the machinery on either side—is called the **synapse**. The neuron sending the signal is the **presynaptic** neuron, and the one receiving it is the **postsynaptic** neuron.`,
    type: 'content'
  },
  {
    content: `## A Cast of Characters

Not all neurons are the same. They come in different shapes and sizes for different jobs.
- **Sensory Neurons:** Carry signals *from* your senses (e.g., your eyes, skin) *to* your brain.
- **Motor Neurons:** Carry signals *from* your brain *to* your muscles to produce movement.
- **Interneurons:** The vast majority of your neurons. They connect only to other neurons, forming the complex circuits within the brain.`,
    type: 'content'
  },
  {
    content: `## Up Next: The Spark

We have our map, and we've met the citizens. You know the structure of a neuron and the path a message takes.

But what *is* the message? What is the electrical signal that shoots down the axon? And what happens at the synapse to cross the gap? In the next module, we'll dive into the spark of thought itself.`,
    type: 'content'
  }
] as const;