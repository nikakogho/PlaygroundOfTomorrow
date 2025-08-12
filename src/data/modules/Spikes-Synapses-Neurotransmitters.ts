export const sections = [
  {
    content: `## The Neuron as a Tiny Battery

Before a neuron can fire a signal, it has to be charged. Your neurons are constantly working to maintain a stable electrical charge across their membrane.

This is done by pumping charged particles, called **ions**, in and out of the cell. The main players are positively charged sodium ($Na^+$) and potassium ($K^+$) ions.`,
    type: 'content'
  },
  {
    content: `## The Resting Potential

When a neuron is "at rest," it actively pumps $Na^+$ ions out and keeps more $K^+$ ions inside. The result is that the inside of the neuron is slightly more negative than the outside.

This electrical difference is called the **resting potential**, and it's typically around -70 millivolts (mV). The neuron is now "polarized"—primed and ready to fire.`,
    type: 'content'
  },
  {
    content: `When a neuron is not firing, the inside of the cell is electrically ________ compared to the outside.

<MultipleChoice correctAnswer={1}>
  <p>Positive</p>
  <p>Negative</p>
  <p>Neutral</p>
  <p>Fluctuating wildly</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## The Action Potential: Firing the Signal

When the soma receives enough "go" signals from its dendrites, it hits a trigger point called the **threshold**. This initiates the **action potential**—a brief, massive reversal of the neuron's polarity that shoots down the axon.

It's an "all-or-none" event. The neuron either fires at full strength, or it doesn't fire at all. There's no such thing as a "half" action potential.`,
    type: 'content'
  },
  {
    content: `## The Steps of the Action Potential

<YouTubeEmbed videoId="W2hHt_PXe5o" title="The Action Potential Explained" />

1.  **Depolarization:** When the threshold is reached, special channels in the axon membrane fly open, allowing a flood of positive $Na^+$ ions to rush *into* the cell. The inside of the neuron rapidly becomes positive (around +40 mV).
2.  **Repolarization:** The $Na^+$ channels close, and $K^+$ channels open, allowing positive $K^+$ ions to rush *out* of the cell. This brings the charge back down towards negative.
3.  **Hyperpolarization:** The $K^+$ channels are a bit slow to close, so the neuron briefly becomes *more* negative than its resting potential. This "refractory period" prevents the neuron from firing again too quickly.`,
    type: 'content'
  },
  {
    content: `Place the phases of the action potential in the correct order.

<MultipleChoice correctAnswer={2}>
  <p>Repolarization → Depolarization → Hyperpolarization</p>
  <p>Hyperpolarization → Depolarization → Repolarization</p>
  <p>Depolarization → Repolarization → Hyperpolarization</p>
  <p>Depolarization → Hyperpolarization → Repolarization</p>
</MultipleChoice>
`,
    type: 'interactive'
  },
  {
    content: `## Crossing the Chemical Chasm

The action potential travels down to the axon terminal. But how does the message cross the synaptic gap to the next neuron? It can't jump.

The electrical signal is converted into a **chemical signal**.`,
    type: 'content'
  },
  {
    content: `## Neurotransmitters: The Chemical Messengers

When the action potential arrives, it triggers tiny sacs called **vesicles**, which are filled with chemical messengers called **neurotransmitters**, to merge with the cell membrane and release their contents into the synapse.

It's like the delivery truck arriving at the destination and the driver tossing a package across the yard.`,
    type: 'content'
  },
  {
    content: `## Lock and Key

These neurotransmitter molecules float across the synaptic gap and bind to **receptors** on the dendrites of the postsynaptic neuron.

Each neurotransmitter has a specific shape and will only fit into a corresponding receptor, like a key into a lock. This binding is what delivers the "message" to the next cell.`,
    type: 'content'
  },
  {
    content: `The chemical messengers released into the synapse are stored in small sacs called ________.

<FillInTheBlank correctAnswer="vesicles" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## Excitatory vs. Inhibitory

Neurotransmitters can deliver one of two messages:
- **Excitatory:** "Fire!" These neurotransmitters (like Glutamate) cause the next neuron to become less negative, moving it *closer* to its firing threshold.
- **Inhibitory:** "Don't fire!" These neurotransmitters (like GABA) cause the next neuron to become *more* negative, moving it *further away* from its threshold.

Every neuron's decision to fire is a constant calculation of all the excitatory and inhibitory signals it's receiving.`,
    type: 'content'
  },
  {
    content: `## Up Next: A Brain That Learns

You've just learned the fundamental process of neural communication! This chain of events happens billions of times a second in your brain.

But this system isn't fixed. The connections can change, get stronger, or weaker. This is the key to learning and memory. In the next module, we'll explore the incredible adaptability of the brain.`,
    type: 'content'
  }
] as const;