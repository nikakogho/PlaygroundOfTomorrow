export const sections = [
  {
    content: `## "We Choose to Go to the Moon" - Again

In the 1960s and 70s, the Apollo program was a monumental achievement, proving that humanity could reach another celestial body. Now, we are going back. NASA's **Artemis program** (named after Apollo's twin sister in Greek mythology) aims to establish the first long-term human presence on the Moon. Its goal is not just "flags and footprints," but to build a sustainable base for science and to prepare for the next giant leap: human missions to Mars.`,
    type: 'content'
  },
  {
    content: `## The Hardware of Artemis

The program relies on several key pieces of new hardware:
1.  **Space Launch System (SLS):** NASA's new super heavy-lift rocket, the most powerful rocket ever built. It's designed to send astronauts and heavy cargo on a direct trajectory to the Moon.
2.  **Orion Crew Capsule:** The spacecraft that will carry up to four astronauts from Earth to lunar orbit and back. It features a robust heat shield designed for the high-speed re-entry from the Moon.
3.  **Human Landing System (HLS):** The "lunar lander" that will transport astronauts from the Lunar Gateway or Orion in lunar orbit down to the surface of the Moon and back up. The first HLS will be a variant of SpaceX's Starship.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://i.redd.it/psav8xdq85be1.jpeg" alt="Key components of the Artemis Program." caption="Artemis relies on a new generation of powerful spacecraft."/>`,
    type: 'content'
  },
  {
    content: `## The Mission Profile: Artemis III

The first crewed landing mission, Artemis III, will follow a complex sequence of events:
1.  The SLS will launch the Orion capsule with four astronauts on a multi-day journey to the Moon.
2.  Orion will dock with the Human Landing System (Starship), which will have been pre-positioned in lunar orbit.
3.  Two astronauts will transfer to the HLS, undock, and descend to the lunar surface near the Moon's South Pole.
4.  They will spend nearly a week on the surface, conducting experiments and EVAs (spacewalks).
5.  They will then launch from the surface in the HLS and dock back with Orion.
6.  All four astronauts will return to Earth in the Orion capsule, splashing down in the Pacific Ocean.`,
    type: 'content'
  },
  {
    content: `In the Artemis III mission plan, the spacecraft that will carry astronauts from lunar orbit down to the surface is called the ________ _________ ________.

<FillInTheBlank correctAnswer="human landing system" placeholder="Enter the three-word term..." />`,
    type: 'interactive'
  },
  {
    content: `## Why the South Pole? Water Ice

Unlike the equatorial regions visited by Apollo, the Artemis missions are targeting the Moon's **South Pole**. Why? Because deep, permanently shadowed craters in this region are believed to contain large deposits of **water ice**.

This ice is a game-changing resource.
-   It can be melted for drinking water.
-   It can be broken down into breathable oxygen.
-   It can be separated into **hydrogen** and **oxygen**—the most powerful chemical rocket propellant we have.

Being able to "live off the land" by utilizing this water ice (**In-Situ Resource Utilization** or ISRU) is the key to a sustainable, long-term presence on the Moon and beyond.`,
    type: 'content'
  },
  {
    content: `What critical resource is believed to be abundant in permanently shadowed craters at the Moon's South Pole?

<MultipleChoice correctAnswer={2}>
  <p>Helium-3</p>
  <p>Iron and other metals</p>
  <p>Water Ice</p>
  <p>Volcanic rock</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## A Stepping Stone to Mars

The ultimate goal of Artemis is to learn how to live and work on another world. The technologies developed—from life support systems and rovers to ISRU and deep-space habitats—and the operational experience gained from living on the Moon will be directly applicable to the even greater challenge of sending humans to Mars.`,
    type: 'content'
  },
  {
    content: `## Up Next: The Red Frontier

The Moon is a three-day trip away. Mars, at its closest, is a six-month journey. It is a far more difficult and dangerous destination. In the next module, we will explore the immense challenges and ambitious plans for sending the first humans to the Red Planet.`,
    type: 'content'
  }
] as const;