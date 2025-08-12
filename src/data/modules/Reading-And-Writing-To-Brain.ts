export const sections = [
  {
    content: `## The Challenge: Studying a Black Box

For most of history, the brain was a "black box." We could see the inputs (senses) and the outputs (behavior), but we could only guess at the inner workings. The only way to study the brain itself was after death.

Modern technology has given us a toolkit for looking inside the living, working brain. Let's explore the most important ones.`,
    type: 'content'
  },
  {
    content: `## Method 1: Listening to Electricity (EEG)

**Electroencephalography (EEG)** is the oldest of these techniques. It uses a cap of electrodes on the scalp to measure the combined electrical activity of millions of neurons firing together.

It doesn't tell you what a single neuron is doing, but it gives you a fantastic overall picture of brain states, like the difference between deep sleep, drowsiness, and focused attention.`,
    type: 'content'
  },
  {
    content: `## The Spatio-Temporal Trade-off

Every brain imaging method has a trade-off between two kinds of resolution:
- **Temporal Resolution:** How precisely can it measure *when* an event happens? (Timing)
- **Spatial Resolution:** How precisely can it measure *where* an event happens? (Location)

EEG has **excellent temporal resolution** (milliseconds), but **poor spatial resolution**. It's like hearing thunder—you know exactly when it happened, but it's hard to tell exactly where the lightning struck.`,
    type: 'content'
  },
  {
    content: `## Method 2: Tracking Blood Flow (fMRI)

**Functional Magnetic Resonance Imaging (fMRI)** works on a different principle. When neurons in a brain area become active, they need more oxygen. The brain responds by increasing blood flow to that area.

fMRI measures this change in blood oxygen levels (called the BOLD signal). It produces beautiful maps showing which brain regions "light up" during a task.`,
    type: 'content'
  },
  {
    content: `fMRI has **excellent spatial resolution** (pinpointing activity to a few millimeters), but **poor temporal resolution**. The blood flow response is sluggish, taking several seconds to occur.

It's like looking at a photograph of traffic at rush hour—you can see exactly which streets are jammed (great location), but the photo doesn't tell you the precise second each car moved (poor timing).`,
    type: 'content'
  },
  {
    content: `A researcher wants to know the precise millisecond-by-millisecond sequence of brain activation when a person hears a surprising sound. Which tool should they use?

<MultipleChoice correctAnswer={0}>
  <p>EEG (for its excellent temporal resolution)</p>
  <p>fMRI (for its excellent spatial resolution)</p>
  <p>A post-mortem dissection</p>
  <p>A standard MRI</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## From Correlation to Causation

EEG and fMRI are **correlational**. They show that a brain area's activity is *associated* with a task, but they can't prove that the area is *necessary* for the task.

To prove causation, we need to be able to interact with the brain.`,
    type: 'content'
  },
  {
    content: `## Method 3: Changing the Brain (TMS)

**Transcranial Magnetic Stimulation (TMS)** uses a powerful, focused magnetic pulse to temporarily either excite or inhibit a small area of the cortex.

By briefly and safely scrambling the activity in a specific region, scientists can see what functions are impaired. If zapping an area disrupts a person's ability to speak, you have strong evidence that this area is necessary for speech. This helps establish **causation**.`,
    type: 'content'
  },
  {
    content: `The key advantage of a technique like TMS over fMRI is that it can help determine ________.

<FillInTheBlank correctAnswer="causation" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## The Future: Optogenetics

One of the most exciting new tools is **optogenetics**. In animal models, scientists can insert genes into specific neurons that make them light-sensitive.

They can then shine a tiny fiber-optic light into the brain and literally turn specific neurons on or off with the flick of a switch. This gives researchers an unprecedented level of control to understand brain circuits.`,
    type: 'content'
  },
  {
    content: `## Your Journey Has Begun

Congratulations! You've made it through the fundamentals of neuroscience. You've journeyed from the brain's largest structures down to a single synaptic vesicle, and learned how we watch it all happen.

You've learned the language and the core concepts needed to understand new discoveries, from breakthroughs in treating disease to the future of brain-computer interfaces. The universe in your head is now a little less mysterious. Keep asking questions!`,
    type: 'content'
  }
] as const;