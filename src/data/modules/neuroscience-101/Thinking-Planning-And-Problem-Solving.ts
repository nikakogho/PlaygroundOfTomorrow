export const sections = [
  {
    content: `## The Executive Brain

The very front of your brain, the **prefrontal cortex (PFC)**, is often called the brain's CEO. It's responsible for our most complex cognitive behaviors, known as **executive functions**. These are the skills that allow you to override impulses, set long-term goals, and orchestrate your thoughts and actions to meet those goals.`,
    type: 'content'
  },
  {
    content: `## Key Executive Functions

-   **Working Memory:** The ability to hold and manipulate information in your mind for a short period (e.g., remembering a phone number while you dial it).
-   **Inhibitory Control:** The ability to suppress inappropriate thoughts or actions and resist temptation. It's your mental "brakes."
-   **Cognitive Flexibility:** The ability to switch perspectives, think outside the box, and adapt your behavior to changing circumstances.`,
    type: 'content'
  },
  {
    content: `The ability to resist eating a cookie now in favor of a larger reward later is an example of _________ control.

<FillInTheBlank correctAnswer="inhibitory" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## The Seat of General Intelligence

The prefrontal cortex, particularly the **dorsolateral prefrontal cortex (DLPFC)**, is heavily involved in abstract reasoning, planning, and problem-solving. It integrates information from all over the brain—sensory data, memories, emotional states—to make a reasoned decision about what to do next. It's the last part of the brain to fully mature, often not until the mid-20s.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://rotel.pressbooks.pub/app/uploads/sites/67/2024/08/2.15_ENGL_chapter2_fig15.png" alt="The Prefrontal Cortex (PFC)." caption="The PFC is the brain's command center for executive functions."/>`,
    type: 'content'
  },
  {
    content: `## Language: The Ultimate Cognitive Tool

Language is a uniquely human executive function that involves multiple brain areas.
- **Broca's Area** (in the frontal lobe) is critical for **speech production**. Damage here leads to difficulty speaking fluently.
- **Wernicke's Area** (in the temporal lobe) is critical for **language comprehension**. Damage here leads to difficulty understanding language.
These areas, usually in the left hemisphere, work together to allow for complex communication.`,
    type: 'content'
  },
  {
    content: `An individual who can understand what is being said to them but has great difficulty producing fluent speech likely has damage to ________ Area.

<MultipleChoice correctAnswer={0}>
  <p>Broca's</p>
  <p>Wernicke's</p>
  <p>The Amygdala</p>
  <p>The Cerebellum</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Up Next: The Future

You've now explored the brain from the bottom up, from the simplest cells to the most complex thoughts. In our final module, we'll look at the future of neuroscience. How does the brain change and repair itself? What goes wrong in disease? And what amazing tools are we developing to study and even heal the brain?`,
    type: 'content'
  }
] as const;