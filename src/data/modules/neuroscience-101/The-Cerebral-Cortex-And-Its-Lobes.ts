export const sections = [
  {
    content: `## The Thinking Cap

The **Cerebral Cortex** is the large, wrinkled outer layer of the cerebrum that you typically picture when you think of a brain. It's the home of your conscious thought, personality, memory, and language. The wrinkles and folds dramatically increase its surface area, allowing more neurons to be packed in. It's divided into two halves, the left and right hemispheres, which are connected by a thick bundle of nerves called the **corpus callosum**.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://qbi.uq.edu.au/files/33952/Brain-lobes-traditional-QBI-sm.jpg" alt="The four lobes of the Cerebral Cortex." caption="Each hemisphere of the cerebrum is divided into four main lobes."/>`,
    type: 'content'
  },
  {
    content: `## The Four Lobes: A Division of Labor

Each hemisphere is divided into four **lobes**, each with specialized functions:
-   **Frontal Lobe:** Your command center. It handles planning, decision-making, problem-solving, personality, and voluntary movement (in the motor cortex).
-   **Parietal Lobe:** Processes sensory information like touch, temperature, and pain (in the somatosensory cortex). It helps you navigate the space around you.
-   **Temporal Lobe:** Manages memory, understanding language (Wernicke's area), and processing sounds (auditory cortex).
-   **Occipital Lobe:** This lobe is almost exclusively dedicated to one thing: **vision**.`,
    type: 'content'
  },
  {
    content: `An injury to which lobe would most likely cause problems with vision?

<FillInTheBlank correctAnswer={["occipital lobe", "occipital"]} placeholder="Enter lobe name..." />`,
    type: 'interactive'
  },
  {
    content: `## A Famous Case: Phineas Gage

In 1848, a railroad worker named Phineas Gage had a terrible accident where a large iron rod was driven completely through his head, destroying much of his **frontal lobe**. Miraculously, he survived. But his friends said he was "no longer Gage." His personality had completely changed from responsible to impulsive and unreliable. This was one of the first cases to show that specific brain areas are tied to specific functions like personality.`,
    type: 'content'
  },
  {
    content: `## Cortical Maps: The Homunculus

Within the cortex, there are "maps" of the body. The **motor cortex** (in the frontal lobe) controls movement, and the **somatosensory cortex** (in the parietal lobe) receives touch information. When mapped, they form a distorted figure called a **homunculus**. The size of each body part on the map reflects how much cortical real estate is devoted to it. That's why the hands and lips are enormous—they require very fine motor control and are very sensitive.`,
    type: 'content'
  },
  {
    content: `On the cortical homunculus, which body parts are represented as being disproportionately large?

<MultipleChoice correctAnswer={3}>
  <p>The arms and legs</p>
  <p>The chest and back</p>
  <p>The hands and lips</p>
  <p>The feet and toes</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Up Next: Sensing the World

We've completed our grand tour of the brain's architecture. Now, let's see how this incredible machine connects to the outside world. How does it convert physical energy like light and sound into the neural signals it can understand? In the next series of modules, we'll dive into the senses, starting with vision.`,
    type: 'content'
  }
] as const;