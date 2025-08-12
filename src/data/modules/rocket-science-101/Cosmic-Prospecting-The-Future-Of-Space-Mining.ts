export const sections = [
  {
    content: `## The Next Industrial Revolution

All the resources humanity has ever used have been sourced from one place: Earth. But the solar system is vast and rich. **Space mining**, or **In-Situ Resource Utilization (ISRU)** on a grand scale, is the concept of extracting and using resources from celestial bodies like the Moon, Mars, and asteroids to support human activities in space and potentially even bring them back to Earth.`,
    type: 'content'
  },
  {
    content: `## Why Mine in Space?

There are two primary drivers for space mining:
1.  **To Fuel a Space-Based Economy:** The most valuable resource in space is water. As we learned, water can be split into hydrogen and oxygen to create rocket propellant. An asteroid or lunar crater rich in water ice could become a "gas station" in space, enabling easier and cheaper travel throughout the solar system. The cost of launching water from Earth is enormous; mining it in space would be a game-changer.
2.  **To Access Rare and Valuable Metals:** Asteroids are the leftover building blocks of the solar system. Certain types of asteroids are incredibly rich in metals that are rare on Earth, such as platinum, palladium, and rhodium. A single, small, platinum-rich asteroid could contain more of these metals than have ever been mined in human history.`,
    type: 'content'
  },
  {
    content: `What is considered the most valuable and enabling resource to mine in space for fueling future exploration?

<MultipleChoice correctAnswer={1}>
  <p>Platinum</p>
  <p>Water Ice</p>
  <p>Iron</p>
  <p>Helium-3</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## The Prime Targets: Near-Earth Asteroids

While the Main Asteroid Belt between Mars and Jupiter contains millions of asteroids, the most appealing initial targets are the **Near-Earth Asteroids (NEAs)**. These are asteroids whose orbits bring them relatively close to Earth.
-   **Accessibility:** Some NEAs require less delta-v to reach than the surface of our own Moon.
-   **Composition:** They come in various types. C-type ("carbonaceous") asteroids are rich in water and carbon, while M-type ("metallic") asteroids are rich in metals.

Missions like Japan's Hayabusa2 and NASA's OSIRIS-REx were technology demonstrators, successfully retrieving small samples from asteroids and returning them to Earth, proving the basic concepts are viable.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://www.researchgate.net/publication/333005592/figure/fig8/AS:786003732213760@1564409301228/Small-spacecraft-asteroid-mining-architecture-for-volatiles-using-lasers-for-extraction.ppm" alt="A robotic asteroid mining mission." caption="Robotic probes will be the first cosmic prospectors, identifying and processing valuable resources."/>`,
    type: 'content'
  },
  {
    content: `## The Challenges Are Immense

Space mining is not easy. The technical hurdles are enormous:
-   **Prospecting:** How do you find the right asteroid with the right resources?
-   **Robotics and Automation:** Mining operations will need to be almost entirely autonomous, operating millions of miles from Earth.
-   **Processing:** How do you extract and refine materials in a zero-gravity, vacuum environment?
-   **Economics:** The initial investment to develop the technology will be colossal. Can a private company make a profit?
-   **Legal Framework:** Who owns space resources? The Outer Space Treaty of 1967 states that space is the "province of all mankind," but the legalities of commercial extraction are still being debated.`,
    type: 'content'
  },
  {
    content: `A robotic mission that surveys an asteroid to determine its composition and value before a full-scale mining operation is called a __________ mission.

<FillInTheBlank correctAnswer="prospecting" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## A Future Built in Space

Despite the challenges, the long-term vision is transformative. If we can learn to use the resources of space, we can build vast structures—solar power satellites, giant telescopes, and sprawling habitats—without having to launch every single bolt and panel from the bottom of Earth's deep gravity well. It's the difference between being a visitor in space and becoming a true spacefaring civilization.`,
    type: 'content'
  },
  {
    content: `## Course Complete!

Congratulations! You have journeyed from the fundamental physics of the rocket equation to the practical engineering of reusable rockets and the ambitious future of humanity among the planets. You've learned the language of orbital mechanics and explored the challenges and opportunities that await us in the cosmos. The sky is no longer the limit; it is the destination. Keep looking up!`,
    type: 'content'
  }
] as const;