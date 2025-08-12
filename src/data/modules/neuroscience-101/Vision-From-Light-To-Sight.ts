export const sections = [
  {
    content: `## The Brain's Favorite Sense

Your brain dedicates more real estate to **vision** than to any other sense. It's a complex process that involves converting light energy into neural signals and then interpreting those signals to construct a coherent picture of the world. The process of converting one form of energy into another is called **transduction**.`,
    type: 'content'
  },
  {
    content: `## The Eye: A Biological Camera

1.  Light particles (**photons**) enter your eye through the pupil and are focused by the lens onto the **retina** at the back of the eye.
2.  The retina is a light-sensitive layer of tissue containing specialized neurons called **photoreceptors**.`,
    type: 'content'
  },
  {
    content: `## Rods and Cones

The retina contains two types of photoreceptor neurons:
-   **Rods:** These are highly sensitive to light and are responsible for vision in dim, low-light conditions. They do not detect color, which is why you can't see colors well in the dark.
-   **Cones:** These require bright light to function and are responsible for our sharp, detailed, color vision. There are three types of cones, each sensitive to a different wavelength of light (red, green, and blue).`,
    type: 'content'
  },
    {
    content: `<ImageEmbed src="https://media.allaboutvision.com/cms/caas/v1/media/406680/data/picture/83baf3915643bbf80cdf6d7876e92a7f.jpg" alt="Rods and cones photoreceptors." caption="Rods are for dim light vision, while cones are for bright, color vision."/>`,
    type: 'content'
  },
  {
    content: `Which type of photoreceptor is responsible for seeing color in bright light?

<FillInTheBlank correctAnswer="cones" placeholder="Rods or cones..." />`,
    type: 'interactive'
  },
  {
    content: `## The Visual Pathway to the Brain

When a photon hits a rod or cone, it triggers a chemical reaction that starts a neural signal. This signal is processed by other cells in the retina and sent down the **optic nerve**. The signals from each eye cross at a point called the **optic chiasm**, and then travel to the **thalamus**, and finally to the **primary visual cortex** in the **occipital lobe**.`,
    type: 'content'
  },
  {
    content: `## What vs. Where Pathways

From the primary visual cortex, the information splits and travels along two main streams:
-   The **"What" Pathway** (Ventral Stream): Travels to the temporal lobe to help you identify the object (e.g., "That's a cup").
-   The **"Where" Pathway** (Dorsal Stream): Travels to the parietal lobe to determine its location and motion (e.g., "It's on the table to my right and it's moving away").`,
    type: 'content'
  },
  {
    content: `## Up Next: The World of Sound

We've seen how the brain processes light. But what about sound? In the next module, we'll explore how the ear captures vibrations in the air and how the brain turns those vibrations into the rich world of sound and music, and how this system also helps us keep our balance.`,
    type: 'content'
  }
] as const;