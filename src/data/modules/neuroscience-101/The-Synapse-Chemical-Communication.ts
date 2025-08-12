export const sections = [
  {
    content: `## The Communication Junction

The action potential travels down to the axon terminal. But neurons don't physically touch. There is a microscopic gap between the axon terminal of the sending neuron and the dendrite of the receiving neuron. This entire junction is called the **synapse**. The sending neuron is **presynaptic**, and the receiving neuron is **postsynaptic**.`,
    type: 'content'
  },
  {
    content: `## From Electrical to Chemical

The electrical action potential cannot jump across the synaptic gap. To cross this chasm, the signal must be converted from an **electrical signal** into a **chemical signal**. This chemical signal will then float across the gap and be converted back into an electrical signal in the next neuron.`,
    type:- 'content'
  },
  {
    content: `<ImageEmbed src="https://res.cloudinary.com/dnls7yeic/image/upload/f_auto,q_auto/nexus/images/img_4315_1.jpeg" alt="The structure of a chemical synapse." caption="The synapse converts an electrical signal into a chemical one and back again."/>`,
    type: 'content'
  },
  {
    content: `## The Chemical Messengers

When the action potential arrives at the axon terminal, it triggers tiny sacs called **vesicles**, which are filled with chemical messengers called **neurotransmitters**, to fuse with the presynaptic membrane. This releases the neurotransmitters into the synaptic gap. It's like a delivery truck arriving at a riverbank and tossing a package across to the other side.`,
    type: 'content'
  },
  {
    content: `The chemical messengers released into the synapse are stored in small sacs called ________.

<FillInTheBlank correctAnswer="vesicles" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## Lock and Key Reception

These neurotransmitter molecules float across the synaptic gap and bind to **receptors** on the membrane of the postsynaptic dendrite. Each neurotransmitter has a specific shape and will only fit into a corresponding receptor, like a key into a lock. This binding is what delivers the "message" to the next cell by opening ion channels and changing its voltage.`,
    type: 'content'
  },
  {
    content: `## Cleaning Up the Synapse

After the message is delivered, the neurotransmitter can't just hang around in the synapse, or it would keep stimulating the postsynaptic neuron forever. The synapse is cleared in one of two main ways:
- **Reuptake:** A special transporter protein grabs the neurotransmitter and pulls it back into the presynaptic neuron to be recycled.
- **Enzymatic Degradation:** An enzyme in the synapse breaks the neurotransmitter down into inactive components.`,
    type: 'content'
  },
  {
    content: `## Up Next: The Molecules of Mind

We've learned how neurotransmitters are released and received. But what are these chemical messengers, and what do they do? There are dozens of different neurotransmitters, each with different effects on the brain and behavior. In the next module, we'll meet some of the most important players.`,
    type: 'content'
  }
] as const;