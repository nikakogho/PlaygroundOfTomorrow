export const sections = [
  {
    content: `## A Universe Inside Your Head

Every memory you cherish, every idea you have, every person you love—it all exists as a complex pattern of electricity and chemistry inside the 3-pound organ between your ears.

The human brain is the most sophisticated machine on Earth. Neuroscience is the bold attempt to understand how it works. Ready to take the first step?`,
    type: 'content'
  },
  {
    content: `## What *is* Neuroscience?

Neuroscience isn't just one field; it's a team sport.
- **Biologists** study the cells and molecules.
- **Psychologists** connect brain activity to behavior and thought.
- **Computer Scientists** model brain networks and build AI inspired by them.
- **Physicians** diagnose and treat brain disorders.

Together, they tackle the biggest questions: What is consciousness? How do we learn? What goes wrong in disease?`,
    type: 'content'
  },
  {
    content: `A scientist using computer models to simulate how neurons connect is approaching neuroscience from which discipline?

<MultipleChoice correctAnswer={2}>
  <p>Biology</p>
  <p>Psychology</p>
  <p>Computer Science</p>
  <p>Medicine</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## A High-Level Map

Let's start with a bird's-eye view. The brain isn't a single, uniform blob. It has distinct regions, each specialized for different tasks. Think of it as a bustling city with different districts.

We'll focus on the three largest "districts":
1. The Cerebrum (The Thinking Cap)
2. The Cerebellum (The Movement Coordinator)
3. The Brainstem (The Life Support System)`,
    type: 'content'
  },
  {
    content: `## The Cerebrum: Your Inner CEO

The **Cerebrum** is the large, wrinkled outer part that you typically picture when you think of a brain. It's the home of your conscious thought, personality, memory, and language.

It's divided into two halves, the left and right hemispheres, which are connected by a thick bundle of nerves called the **corpus callosum**.

<ImageEmbed src="https://s3-us-west-2.amazonaws.com/courses-images-archive-read-only/wp-content/uploads/sites/902/2015/02/23224600/CNX_Psych_03_04_Lobes.jpg" alt="Diagram showing the Cerebrum and its four lobes: Frontal, Parietal, Temporal, and Occipital." caption="The Cerebrum is divided into four main lobes."/>`,
    type: 'content'
  },
  {
    content: `## The Four Lobes of the Cerebrum

Each hemisphere is further divided into four **lobes**:
- **Frontal Lobe:** Your command center. It handles planning, decision-making, problem-solving, and personality.
- **Parietal Lobe:** Processes sensory information like touch, temperature, and pain. It helps you navigate the space around you.
- **Temporal Lobe:** Manages memory, understanding language, and processing sounds.
- **Occipital Lobe:** This lobe is almost exclusively dedicated to one thing: **vision**.`,
    type: 'content'
  },
  {
    content: `An injury to which lobe would most likely cause problems with vision?

<FillInTheBlank correctAnswer={["occipital lobe", "occipital"]} placeholder="Enter lobe name..." />`,
    type: 'interactive'
  },
  {
    content: `## The Cerebellum: Master of Motion

Tucked underneath the cerebrum is the **Cerebellum**, which means "little brain" in Latin. While it's smaller, it's incredibly dense with brain cells.

Its main job is to coordinate voluntary movements, posture, balance, and speech, resulting in smooth and balanced muscular activity. It's the difference between a clumsy stumble and a graceful dance.`,
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
    content: `## The Brainstem: The Unsung Hero

Connecting the cerebrum and cerebellum to the spinal cord is the **Brainstem**. This is the most ancient and basic part of the brain.

It's in charge of all the functions your body needs to stay alive, things you never have to think about: breathing, heart rate, blood pressure, and sleep. It's the automatic pilot that keeps your body running 24/7.`,
    type: 'content'
  },
  {
    content: `## A Famous Case: Phineas Gage

In 1848, a railroad worker named Phineas Gage had a terrible accident where a large iron rod was driven completely through his head, destroying much of his **frontal lobe**.

Miraculously, he survived. But his friends said he was "no longer Gage." His personality had completely changed. This was one of the first cases to show that specific parts of the brain, like the frontal lobe, are tied to specific functions, like personality.`,
    type: 'content'
  },
  {
    content: `## Time to Zoom In

You've completed the grand tour! You now have a basic map of the brain and its major districts.

But how do these districts actually *do* anything? How do they communicate? To find out, we need to zoom in. Way, way in. In the next module, we'll leave the districts behind and meet the individual citizens of the brain: the neurons.`,
    type: 'content'
  }
] as const;