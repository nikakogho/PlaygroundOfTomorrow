export const sections = [
  {
    content: `## From World to Brain

Your brain is locked in the silent, dark vault of your skull. So how does it know anything about the outside world? Through your senses.

Each sense is a specialized system for converting some form of physical energy from the world into the electrical language of neurons. This conversion process is called **transduction**.`,
    type: 'content'
  },
  {
    content: `## Vision: From Photons to Perception

Your eyes transduce light.
1.  Light particles (**photons**) enter your eye and strike the **retina** at the back.
2.  The retina contains two types of photoreceptor neurons: **Rods** (for dim, black-and-white vision) and **Cones** (for bright, color vision).
3.  When a photon hits a rod or cone, it triggers a chemical reaction that starts a neural signal.
4.  This signal is processed by other cells in the retina and sent down the optic nerve to the brain.

<ImageEmbed src="https://www.aao.org/image.axd?id=7de23d7d-7d22-4c72-81ed-292dc01cfbcf&t=636422014777200000" alt="Diagram showing rods and cones in the human retina." caption="Rods and cones are the photoreceptors that begin the process of sight."/>`,
    type: 'content'
  },
  {
    content: `Which type of photoreceptor is responsible for seeing color in bright light?

<FillInTheBlank correctAnswer="cones" placeholder="Rods or cones..." />`,
    type: 'interactive'
  },
  {
    content: `## The Visual Cortex and Beyond

The signals from the optic nerve travel to the **occipital lobe** at the very back of your brain. Here, in the **visual cortex**, the brain starts to make sense of the raw data.

Different neurons are tuned to respond to specific features like lines, edges, angles, and movement. From here, the information splits into two streams:
- The **"What" Pathway** (Ventral stream): Travels to the temporal lobe to identify the object (e.g., "That's a cup").
- The **"Where" Pathway** (Dorsal stream): Travels to the parietal lobe to determine its location and motion (e.g., "It's on the table to my right").`,
    type: 'content'
  },
  {
    content: `## Hearing: From Vibrations to Sound

Your ears transduce air pressure waves.
1.  Sound waves are funneled into your ear and cause your eardrum to vibrate.
2.  These vibrations are amplified by tiny bones and transferred to a snail-shaped, fluid-filled tube called the **cochlea**.
3.  Inside the cochlea are tiny **hair cells**. The vibrations in the fluid cause these hairs to bend.
4.  The bending of the hair cells opens ion channels, creating a neural signal that is sent to the **auditory cortex** in the temporal lobe.`,
    type: 'content'
  },
  {
    content: `The general process of converting physical energy like light or sound waves into neural signals is called ________.

<FillInTheBlank correctAnswer="transduction" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## From Brain to World: The Motor System

Seeing and hearing is great, but we also need to *act*. The journey from a thought to an action is just as complex.

The command to move originates in your **frontal lobe**, specifically in a strip of cortex called the **motor cortex**.`,
    type: 'content'
  },
  {
    content: `## The Motor Homunculus

Neurosurgeons discovered that stimulating different parts of the motor cortex caused different body parts to move. When they mapped it all out, they got a distorted "map" of the body called the **motor homunculus**.

<ImageEmbed src="https://upload.wikimedia.org/wikipedia/commons/d/df/Sensory_Homunculus-en.svg" alt="The motor homunculus, showing distorted body parts mapped onto the brain." caption="The size of each body part shows how much motor cortex is devoted to controlling it."/>
The hands and face are enormous because we need incredibly fine motor control over our fingers and mouths for tool use and speech.`,
    type: 'content'
  },
  {
    content: `On the motor homunculus, why are the hands and lips represented as being so large?

<MultipleChoice correctAnswer={2}>
  <p>Because they are the largest body parts.</p>
  <p>Because they have the strongest muscles.</p>
  <p>Because they require very precise and complex control.</p>
  <p>Because they are the most sensitive to touch.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## The Supporting Actors

The motor cortex doesn't act alone.
- The **Basal Ganglia**, deep brain structures, help to select and initiate the desired movement (this is what's damaged in Parkinson's disease).
- The **Cerebellum** (our old friend) then fine-tunes the command, correcting errors in real-time to make the movement smooth and accurate.

The final command travels down the spinal cord to the motor neurons that control your muscles.`,
    type: 'content'
  },
  {
    content: `## Your Secret Sixth Sense

Pause for a moment. Close your eyes. Now, touch your left index finger to the tip of your nose.

How did you do that without seeing? You have a sense called **proprioception**—your brain's awareness of where your body parts are in space, based on signals from your muscles and joints. It's the unsung hero of all coordinated movement.`,
    type: 'content'
  },
  {
    content: `## Up Next: Looking at the Living Brain

You've now completed the full loop: from world to brain (sensation) and from brain back to world (action).

But how do we *know* all this? How can scientists map out these pathways and watch them work in a living person? In our final module, we'll explore the amazing tools that let us peek inside the thinking brain.`,
    type: 'content'
  }
] as const;