export const sections = [
  {
    content: `## The "Little Brain"

Tucked underneath the back of the cerebrum is the **Cerebellum**, which means "little brain" in Latin. While it only accounts for about 10% of the brain's volume, it contains over 50% of the brain's neurons! This incredibly dense structure is a powerhouse for motor control.`,
    type: 'content'
  },
  {
    content: `## The Master of Smooth Moves

The cerebellum's main job is to coordinate voluntary movements, posture, balance, and speech, resulting in smooth and balanced muscular activity. It doesn't initiate movement—that's the job of the motor cortex. Instead, it acts like a real-time error-correction device.`,
    type: 'content'
  },
  {
    content: `## How It Works: Plan vs. Reality

1.  The motor cortex in the cerebrum sends a "plan" for a movement down towards the spinal cord.
2.  At the same time, it sends a copy of that plan to the cerebellum.
3.  The cerebellum also receives real-time sensory feedback from the body (proprioception) about how the movement is *actually* going.
4.  It compares the plan (A) to the reality (B) and calculates the error.
5.  It then sends a corrective signal back up to the motor cortex to fine-tune the movement on the fly.

It's the difference between a clumsy stumble and a graceful dance.`,
    type: 'content'
  },
  {
    content: `A professional athlete, like a gymnast or a figure skater, relies heavily on their ________ for precise, coordinated movements.

<MultipleChoice correctAnswer={1}>
  <p>Frontal Lobe</p>
  <p>Cerebellum</p>
  <p>Brainstem</p>
  <p>Temporal Lobe</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## More Than Just Movement

While motor control is its most famous role, we now know the cerebellum is also involved in higher cognitive functions. It contributes to timing, attention, and even some types of learning, especially for skills that become automatic, like riding a bike or playing a musical instrument. This is known as **procedural memory**.`,
    type: 'content'
  },
  {
    content: `## The Consequences of Damage

Damage to the cerebellum doesn't cause paralysis. Instead, it leads to a condition called **ataxia**. People with ataxia have jerky, uncoordinated movements. They may have trouble walking, reaching for objects, and speaking clearly. A classic test for cerebellar function is the finger-to-nose test.`,
    type: 'content'
  },
  {
    content: `The ability to ride a bicycle without consciously thinking about how to balance is a form of procedural memory, which relies heavily on the ________.

<FillInTheBlank correctAnswer="cerebellum" placeholder="Enter the brain region..." />`,
    type: 'interactive'
  },
  {
    content: `## Up Next: The Emotional and Hormonal Brain

We've covered the brain's life support and motion control centers. Now we move deeper into the brain to explore the structures that govern our emotions, memories, and the link between the brain and the body's hormonal system. Next, we'll visit the limbic system, thalamus, and hypothalamus.`,
    type: 'content'
  }
] as const;