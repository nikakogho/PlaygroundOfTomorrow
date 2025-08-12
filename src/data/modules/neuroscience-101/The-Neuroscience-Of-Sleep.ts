export const sections = [
  {
    content: `## Why Do We Spend a Third of Our Lives Unconscious?

Every day, we willingly enter a state of paralysis and altered consciousness for hours on end. This isn't a design flaw; it's a biological necessity. **Sleep** is not a passive shutdown of the brain. It's a highly active, precisely orchestrated series of brain states that are critical for memory, health, and survival.`,
    type: 'content'
  },
  {
    content: `## The Body's Master Clock: Circadian Rhythms

Your desire for sleep isn't random. It's governed by a ~24-hour internal clock called a **circadian rhythm**. The master controller for this clock is a tiny region in the hypothalamus called the **suprachiasmatic nucleus (SCN)**. The SCN gets information about the time of day directly from light-sensitive cells in your retina, keeping your internal clock synchronized with the outside world.`,
    type: 'content'
  },
  {
    content: `The brain's master clock, which controls the 24-hour sleep-wake cycle, is the ______________ _______.

<FillInTheBlank correctAnswer="suprachiasmatic nucleus" placeholder="Enter the two-word term..." />`,
    type: 'interactive'
  },
  {
    content: `## The Journey Through the Night: Sleep Stages

When we sleep, we cycle through different stages, each with a unique pattern of brainwave activity that can be measured with an EEG. The two main types of sleep are **NREM (Non-Rapid Eye Movement)** and **REM (Rapid Eye Movement)**. We cycle through these stages about 4-5 times per night.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://www.shutterstock.com/image-vector/sleep-circle-stage-show-different-600nw-2425989727.jpg" alt="EEG patterns of different sleep stages." caption="Each stage of sleep has a distinct electrical signature in the brain."/>`,
    type: 'content'
  },
  {
    content: `## NREM Sleep: From Dozing to Deep Slumber

NREM sleep is divided into three stages:
-   **NREM 1:** A light, drowsy state of transition into sleep.
-   **NREM 2:** True sleep begins. Characterized by "sleep spindles"—brief bursts of rapid brain activity thought to be involved in memory consolidation.
-   **NREM 3:** The deepest stage of sleep, also known as **slow-wave sleep** because of its large, slow delta waves. This stage is crucial for physical restoration and glymphatic cleanup.`,
    type: 'content'
  },
  {
    content: `## REM Sleep: The Paradoxical Stage

After cycling through NREM sleep, you enter **REM sleep**. This stage is a paradox:
-   Your brain's electrical activity looks very similar to when you're awake and alert.
-   Your eyes dart back and forth beneath your closed eyelids (Rapid Eye Movement).
-   Your body's muscles are almost completely paralyzed (a state called atonia), preventing you from acting out your dreams.
This is the stage where our most vivid, narrative dreams occur.`,
    type: 'content'
  },
  {
    content: `Which stage of sleep is characterized by an active, awake-looking brain but a paralyzed body?

<MultipleChoice correctAnswer={3}>
  <p>NREM 1</p>
  <p>NREM 3 (Slow-Wave Sleep)</p>
  <p>NREM 2</p>
  <p>REM Sleep</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## So, Why Do We Sleep?

While we're still uncovering all its secrets, we know sleep serves several vital functions:
1.  **Memory Consolidation:** The brain replays and strengthens the neural patterns of things learned during the day, transferring memories from the fragile hippocampus to the more stable cortex.
2.  **Brain Cleanup:** The brain's waste removal system, the **glymphatic system**, is most active during deep sleep, clearing out metabolic byproducts like beta-amyloid (the protein implicated in Alzheimer's).
3.  **Restoration and Repair:** The body uses deep sleep for tissue repair, growth hormone release, and immune system maintenance.`,
    type: 'content'
  },
  {
    content: `## The Chemistry of Sleepiness

Two main chemical forces regulate your sleep-wake cycle:
- **Circadian Rhythm:** The SCN directs the release of **melatonin**, the "hormone of darkness," as light fades, signaling your brain that it's time to sleep.
- **Sleep Pressure:** As you stay awake, a chemical called **adenosine** builds up in your brain, creating a feeling of sleepiness. Sleep clears out this adenosine. Caffeine works by blocking adenosine receptors, tricking your brain into feeling less tired.`,
    type: 'content'
  },
  {
    content: `## Up Next: The Well-Rested Executive

Sleep isn't just for resting. It's a critical process that prepares your brain to function at its best. In our next module, we'll explore the cognitive abilities that a well-rested brain excels at: thinking, planning, and solving the complex problems of our world.`,
    type: 'content'
  }
] as const;