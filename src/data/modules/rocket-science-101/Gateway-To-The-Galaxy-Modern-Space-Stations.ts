export const sections = [
  {
    content: `## Humanity's Outpost in Orbit

A **space station** is a crewed spacecraft designed to remain in orbit for an extended period, serving as a laboratory, observatory, and staging point for other missions. Since November 2000, humanity has had a continuous, uninterrupted presence in space aboard the **International Space Station (ISS)**.`,
    type: 'content'
  },
  {
    content: `## The International Space Station (ISS)

The ISS is the largest and most complex international scientific project in history. It's a collaboration between five space agencies: NASA (USA), Roscosmos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada).
-   It orbits in Low Earth Orbit (LEO) at an altitude of about 400 km.
-   It travels at 7.8 km/s, completing an orbit every ~90 minutes.
-   It's as large as a football field and has more living space than a six-bedroom house.
-   It serves as a unique microgravity laboratory for research in biology, physics, astronomy, and human physiology.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://www.nasa.gov/wp-content/uploads/2021/08/44911459904-375bc02163-k-0.jpg?w=768" alt="The International Space Station (ISS)." caption="The ISS is a testament to international collaboration and engineering."/>`,
    type: 'content'
  },
  {
    content: `## The Challenge of Microgravity

One of the most important areas of research on the ISS is studying the long-term effects of microgravity on the human body. Without the constant stress of gravity, the body begins to change:
-   **Bone Density Loss:** Bones lose calcium and density at a rate of about 1-1.5% per month.
-   **Muscle Atrophy:** Muscles, especially in the legs and back, weaken from lack of use.
-   **Fluid Shifts:** Fluids in the body shift upwards, causing a puffy face and putting pressure on the eyes.

To combat these effects, astronauts must exercise for about two hours every day using specialized equipment like treadmills and resistance machines.`,
    type: 'content'
  },
  {
    content: `Why must astronauts on the ISS exercise for several hours every day?

<MultipleChoice correctAnswer={1}>
  <p>To pass the time during long missions.</p>
  <p>To combat the negative effects of microgravity, like bone and muscle loss.</p>
  <p>To generate power for the station.</p>
  <p>To prepare for spacewalks.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## The Next Generation: Commercial Stations

The ISS is aging and is currently planned to be deorbited around 2030. The future of LEO is expected to be dominated by **commercial space stations**, owned and operated by private companies. NASA and other agencies will become customers, renting space for their astronauts and experiments. This frees up agency resources to focus on deep-space exploration. Companies like Axiom Space and Blue Origin are already developing their concepts.`,
    type: 'content'
  },
  {
    content: `## The Lunar Gateway: An Outpost in Deep Space

Beyond LEO, NASA and its partners are building a new, smaller space station called the **Lunar Gateway**. This station will not be in orbit around the Earth, but in a unique orbit around the **Moon**.

The Gateway will serve as:
-   A command center and staging point for missions to the lunar surface.
-   A science laboratory to study the deep-space environment.
-   A crucial waypoint for future human missions to Mars.

It represents a critical piece of infrastructure for establishing a sustainable, long-term human presence beyond Earth.`,
    type: 'content'
  },
  {
    content: `Unlike the ISS, the Lunar Gateway will be in orbit around the ________.

<FillInTheBlank correctAnswer="moon" placeholder="Enter the celestial body..." />`,
    type: 'interactive'
  },
  {
    content: `## Up Next: For All Moonkind

The Lunar Gateway is not a destination in itself. It's a stepping stone to returning humans to the surface of the Moon for the first time in over 50 years. In the next module, we'll dive into NASA's ambitious Artemis program and the new generation of rockets and spacecraft being built to achieve it.`,
    type: 'content'
  }
] as const;