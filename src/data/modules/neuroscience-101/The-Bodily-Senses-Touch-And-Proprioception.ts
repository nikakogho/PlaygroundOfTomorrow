export const sections = [
  {
    content: `## The Somatosensory System

The **somatosensory system** is a catch-all term for the senses related to the body. This includes touch, pressure, vibration, temperature, and pain. Your skin is your largest sensory organ, embedded with a wide variety of specialized receptors to detect these different stimuli. The signals travel up the spinal cord to the **somatosensory cortex** in the parietal lobe.`,
    type: 'content'
  },
  {
    content: `## The Sense of Pain (Nociception)

Pain is a crucial survival signal. It's not just "more touch." It's detected by its own specialized receptors called **nociceptors**, which respond to potentially damaging stimuli (extreme heat, pressure, or chemicals). There are two main types of pain fibers: fast-acting ones for sharp, immediate pain, and slower ones for dull, throbbing pain.`,
    type: 'content'
  },
  {
    content: `The specialized sensory receptors that detect painful stimuli are called ___________.

<FillInTheBlank correctAnswer="nociceptors" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## Your Secret Sixth Sense: Proprioception

Pause for a moment. Close your eyes. Now, touch your right index finger to the tip of your nose. How did you do that without seeing? You have a sense called **proprioception**—your brain's awareness of where your body parts are in space. This information comes from specialized receptors in your muscles and joints that constantly report on muscle stretch and joint position.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://bunny-wp-pullzone-kzglatp0ll.b-cdn.net/wp-content/uploads/2015/06/TonyDuncanBlind.jpg" alt="An example of proprioception." caption="Proprioception allows for complex motor tasks without visual feedback."/>`,
    type: 'content'
  },
  {
    content: `Proprioception is essential for any coordinated movement. It's the unsung hero that allows you to walk without looking at your feet, type without looking at the keyboard, and drink from a cup without spilling. It works in close partnership with the **cerebellum** to ensure your movements are smooth and accurate.`,
    type: 'content'
  },
  {
    content: `The brain's ability to know where your limbs are in space without looking is called:

<MultipleChoice correctAnswer={3}>
  <p>Nociception</p>
  <p>Audition</p>
  <p>Olfaction</p>
  <p>Proprioception</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Up Next: The Learning Brain

We have now explored how the brain receives information from the outside world and from the body itself. But the brain isn't a passive receiver; it changes with experience. In the next module, we'll dive into one of the most fascinating topics in neuroscience: how the brain learns and remembers.`,
    type: 'content'
  }
] as const;