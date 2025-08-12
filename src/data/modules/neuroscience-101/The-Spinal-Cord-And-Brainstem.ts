export const sections = [
  {
    content: `## The Information Superhighway

The **spinal cord** is a long, thin, tubular bundle of nervous tissue that extends from the brainstem down the back. It serves two primary functions:
1.  It's the main pathway for information connecting the brain and the peripheral nervous system.
2.  It can mediate **reflexes** on its own, without input from the brain.`,
    type: 'content'
  },
  {
    content: `## The Reflex Arc

Imagine you touch a hot stove. You pull your hand away *before* you even feel the pain. How? Sensory neurons in your skin send a signal up to the spinal cord. In the spinal cord, an **interneuron** immediately passes that signal to a motor neuron, which tells the muscles in your arm to contract. This simple loop is a **reflex arc**. The signal only travels to the brain *after* the action has already occurred.`,
    type: 'content'
  },
    {
    content: `In a simple reflex arc, the signal is processed and a motor command is issued by the ________ ____ without initial input from the brain.

<FillInTheBlank correctAnswer="spinal cord" placeholder="Enter the two-word term..." />`,
    type: 'interactive'
  },
  {
    content: `## The Brainstem: Life Support System

Sitting atop the spinal cord is the **brainstem**. This is the most ancient and basic part of the brain, and it's in charge of all the functions your body needs to stay alive—functions you never have to think about. It consists of three main parts: the medulla, the pons, and the midbrain.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://qbi.uq.edu.au/files/28112/forebrain-midbrain-hindbrain.png" alt="Location and parts of the brainstem." caption="The brainstem connects the cerebrum and cerebellum to the spinal cord."/>`,
    type: 'content'
  },
  {
    content: `## Parts of the Brainstem

- **Medulla Oblongata:** The lowest part of the brainstem, it controls the most vital functions like breathing, heart rate, and blood pressure.
- **Pons:** The "bridge" that relays information between the cerebellum and the rest of the brain. It's also involved in sleep, dreaming, and facial expressions.
- **Midbrain:** Contains circuits for vision and hearing, and is the origin of major dopamine pathways.`,
    type: 'content'
  },
  {
    content: `Damage to which part of the brainstem would be most likely to cause immediate death due to cessation of breathing and heartbeat?

<MultipleChoice correctAnswer={0}>
  <p>Medulla</p>
  <p>Pons</p>
  <p>Midbrain</p>
  <p>Cerebellum</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Up Next: The Master of Motion

Just behind the brainstem sits a densely packed structure that is crucial for all coordinated movement. In the next module, we'll explore the cerebellum, the brain's "little brain" that acts as the master of motion.`,
    type: 'content'
  }
] as const;