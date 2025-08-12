export const sections = [
  {
    content: `## More Than a Feeling

Emotions are not just fleeting feelings; they are complex neurobiological programs that have evolved to help us navigate the world and respond to challenges and opportunities. They involve physiological arousal, expressive behaviors, and conscious experience.`,
    type: 'content'
  },
  {
    content: `## The Amygdala: The Brain's Alarm System

As we learned, the **amygdala**, part of the limbic system, is central to processing emotions, especially fear. It can trigger a rapid "fight or flight" response via the sympathetic nervous system before you are even consciously aware of the threat. This is the "low road" of emotion. A slower "high road" travels via the cortex, allowing for a more reasoned assessment of the situation.`,
    type: 'content'
  },
  {
    content: `A sudden, unconscious fear response to seeing a shape that looks like a snake is mediated by the "low road" pathway to the ________.

<FillInTheBlank correctAnswer="amygdala" placeholder="Enter the brain region..." />`,
    type: 'interactive'
  },
  {
    content: `## The Prefrontal Cortex: The Emotional Regulator

While the amygdala sounds the alarm, the **prefrontal cortex** (especially the ventromedial prefrontal cortex) acts as the regulator. It helps to interpret and control emotional responses, allowing you to calm down, re-evaluate a situation, and make decisions based on more than just raw emotion.`,
    type: 'content'
  },
  {
    content: `## Motivation: The Science of "Wanting"

Motivation is the driving force behind our actions. Much of our goal-directed behavior is driven by the brain's **reward system**, a network of structures that use the neurotransmitter **dopamine**. Key areas include the **ventral tegmental area (VTA)** and the **nucleus accumbens**.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://openbooks.lib.msu.edu/app/uploads/sites/6/2021/07/MesolimbicMesocorticalPathways.png" alt="The brain's dopamine reward pathway." caption="The reward system drives motivation and reinforcement learning."/>`,
    type: 'content'
  },
  {
    content: `This system releases dopamine in anticipation of a reward, which motivates you to pursue it. When you achieve the goal, the dopamine signal reinforces the behavior, making you more likely to do it again. This is crucial for survival, but it's also the system that gets hijacked by addictive drugs.`,
    type: 'content'
  },
  {
    content: `The primary neurotransmitter involved in the brain's reward and motivation system is __________.

<MultipleChoice correctAnswer={1}>
  <p>Serotonin</p>
  <p>Dopamine</p>
  <p>GABA</p>
  <p>Acetylcholine</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Up Next: The Spotlight of the Mind

You can have sensory input, memories, and emotions, but what allows you to focus on one thing and ignore others? What knits all of these processes together into a coherent experience? In the next module, we'll explore the neuroscience of attention and the great mystery of consciousness.`,
    type: 'content'
  }
] as const;