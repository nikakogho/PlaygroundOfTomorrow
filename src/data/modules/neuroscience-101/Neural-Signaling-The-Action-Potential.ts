export const sections = [
  {
    content: `## The Neuron as a Tiny Battery

Before a neuron can fire a signal, it has to be charged. Your neurons are constantly working to maintain a stable electrical charge difference across their cell membrane. This is done by pumping charged particles, called **ions**, in and out of the cell. The main players are positively charged sodium ($Na^+$) and potassium ($K^+$) ions, and various negative ions inside the cell.`,
    type: 'content'
  },
  {
    content: `## The Resting Potential

When a neuron is "at rest," a structure called the **sodium-potassium pump** actively pumps $Na^+$ ions out and brings $K^+$ ions in. The result is that the inside of the neuron is slightly more negative than the outside. This electrical difference is called the **resting potential**, and it's typically around -70 millivolts (mV). The neuron is now "polarized"—primed and ready to fire.`,
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

When the soma receives enough "go" signals from its dendrites, its internal voltage starts to rise. If it reaches a critical trigger point called the **threshold** (usually around -55mV), it initiates the **action potential**—a brief, massive, all-or-none reversal of the neuron's polarity that shoots down the axon. "All-or-none" means the neuron either fires at full strength, or it doesn't fire at all.`,
    type: 'content'
  },
  {
    content: `## The Steps of the Action Potential

<YouTubeEmbed videoId="W2hHt_PXe5o" title="The Action Potential Explained" />

1.  **Depolarization:** When the threshold is reached, special voltage-gated channels in the axon membrane fly open, allowing a flood of positive $Na^+$ ions to rush *into* the cell. The inside of the neuron rapidly becomes positive (around +40 mV).
2.  **Repolarization:** The $Na^+$ channels close, and voltage-gated $K^+$ channels open, allowing positive $K^+$ ions to rush *out* of the cell. This brings the charge back down towards negative.
3.  **Hyperpolarization:** The $K^+$ channels are a bit slow to close, so the neuron briefly becomes *more* negative than its resting potential. This "refractory period" prevents the neuron from firing again too quickly.`,
    type: 'content'
  },
  {
    content: `The phase of the action potential where positive sodium ions rush into the cell is called ______________.

<FillInTheBlank correctAnswer="depolarization" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## Up Next: Crossing the Gap

The action potential is a brilliant way to send a signal rapidly down a long axon. But the signal reaches the end of the axon, the axon terminal, and faces a problem. There's a gap between it and the next neuron. How does the message get across?

In the next module, we'll explore the synapse, the site of chemical communication between neurons.`,
    type: 'content'
  }
] as const;