export const sections = [
  {
    content: `## From Vibrations to Sound

Hearing, or **audition**, is the process of transducing sound waves—vibrations in the air—into neural signals. Your ear is a remarkable device designed to capture, amplify, and convert these vibrations.`,
    type: 'content'
  },
  {
    content: `## The Journey of a Sound Wave

1.  Sound waves are funneled by your outer ear into your ear canal, causing your **eardrum** to vibrate.
2.  These vibrations are amplified by three tiny bones in the middle ear (the ossicles).
3.  The last of these bones pushes on a snail-shaped, fluid-filled tube in the inner ear called the **cochlea**.`,
    type: 'content'
  },
  {
    content: `## Transduction in the Cochlea

Inside the cochlea is a membrane lined with thousands of tiny **hair cells**. The vibrations in the cochlear fluid cause these hairs to bend. The bending of the hair cells is the key event: it physically pulls open ion channels, creating a neural signal that is sent along the auditory nerve. Different frequencies of sound cause different parts of the membrane to vibrate, which is how we perceive pitch.`,
    type: 'content'
  },
  {
    content: `The specialized neurons in the cochlea that are responsible for transducing sound vibrations into neural signals are called ______ _____.

<FillInTheBlank correctAnswer="hair cells" placeholder="Enter the two-word term..." />`,
    type: 'interactive'
  },
  {
    content: `## The Sense of Balance: The Vestibular System

The inner ear isn't just for hearing. It also houses the **vestibular system**, which is responsible for our sense of balance and spatial orientation. This system is composed of three fluid-filled semicircular canals and two otolith organs. They detect changes in head rotation and linear acceleration.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://www.nidcd.nih.gov/sites/default/files/styles/content_image_large/public/2022-10/nidcd-ear-illustration-2000x1479_9-27-22.jpg?itok=iWqpY1Ox" alt="The inner ear's dual function." caption="The inner ear contains the organs for both hearing and balance."/>`,
    type: 'content'
  },
  {
    content: `Why might an inner ear infection sometimes cause feelings of dizziness or vertigo?

<MultipleChoice correctAnswer={1}>
  <p>Because the infection blocks the ear canal.</p>
  <p>Because it can disrupt the function of the vestibular system.</p>
  <p>Because it puts pressure on the eardrum.</p>
  <p>Because it interferes with the auditory cortex.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Up Next: The Chemical Senses

We've experienced the world through light and sound. Now let's explore the senses that bring the chemical world into our brains: taste and smell. These are our most ancient senses, deeply linked to emotion and memory.`,
    type: 'content'
  }
] as const;