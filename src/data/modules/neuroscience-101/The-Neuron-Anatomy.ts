export const sections = [
  {
    content: `## The Neuron Doctrine

For a long time, scientists thought the brain was a continuous, interconnected web, like a mesh. But in the late 1800s, a Spanish scientist named **Santiago Ramón y Cajal** used newly developed stains to look at brain tissue under a microscope. He proposed the **Neuron Doctrine**: the idea that the brain is made of individual, discrete cells called **neurons**. These neurons are the fundamental building blocks of the nervous system. He was right, and he won a Nobel Prize for it.`,
    type: 'content'
  },
  {
    content: `## What Makes a Neuron Special?

Unlike a skin cell or a liver cell, a neuron is built for one thing: **communication**. Its unique structure, or morphology, allows it to receive, process, and transmit information. Let's break down its anatomy. Think of it like a mail delivery system.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://upload.wikimedia.org/wikipedia/commons/1/10/Blausen_0657_MultipolarNeuron.png" alt="Anatomy of a typical neuron." caption="Each part of the neuron has a specific role in communication."/>`,
    type: 'content'
  },
  {
    content: `## Step 1: The Dendrites (The Mailbox)

**Dendrites** (from the Greek word for "tree") are the branching extensions that *receive* information from other neurons. They are covered in thousands of tiny bumps called **receptors**, which act like mailboxes waiting for a specific chemical letter.`,
    type: 'content'
  },
  {
    content: `## Step 2: The Soma (The Letter Reader)

The incoming signals from the dendrites all converge on the **Soma**, or cell body. The soma contains the nucleus (with the cell's DNA) and all the main machinery for keeping the cell alive. Its most important job is to integrate all the incoming signals. It adds up all the "go" signals and subtracts all the "stop" signals to decide if the message is important enough to pass on.`,
    type: 'content'
  },
  {
    content: `Which part of the neuron contains the cell's nucleus and integrates incoming signals?

<MultipleChoice correctAnswer={1}>
  <p>Dendrites</p>
  <p>Soma</p>
  <p>Axon</p>
  <p>Axon Terminal</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Step 3: The Axon (The Delivery Truck)

If the soma decides the signal is strong enough, it initiates an electrical impulse that travels down the **Axon**. The axon is a long, slender cable that *transmits* the signal away from the soma. Some axons in your body, like the one that runs from your spinal cord to your big toe, can be over a meter long!`,
    type: 'content'
  },
  {
    content: `## Up Next: The Unsung Heroes

We've met the neuron, the primary communicator of the brain. But neurons can't do their job alone. They are surrounded and supported by a diverse cast of characters that are just as critical for brain function. In the next module, we'll meet the glial cells.`,
    type: 'content'
  }
] as const;