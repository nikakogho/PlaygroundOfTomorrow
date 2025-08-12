export const sections = [
  {
    content: `## The Next Giant Leap

Sending humans to **Mars** is the long-term goal of nearly every major space agency. It represents a challenge an order of magnitude greater than going to the Moon. It will be the most difficult and ambitious journey humanity has ever undertaken.`,
    type: 'content'
  },
  {
    content: `## The Tyranny of Orbital Mechanics

You can't just fly to Mars whenever you want. Because both Earth and Mars are in orbit around the Sun, you have to wait for a specific alignment called a **launch window**, when a Hohmann transfer orbit is possible. These windows only open up for a few weeks every **26 months**. If you miss a window, you have to wait over two years for the next one. The trip itself takes anywhere from 6 to 9 months with current chemical rocket technology.`,
    type: 'content'
  },
  {
    content: `Launch windows to Mars are dictated by the orbital alignment of Earth and Mars, and they occur approximately every __________.

<FillInTheBlank correctAnswer="26 months" placeholder="Enter the time period..." />`,
    type: 'interactive'
  },
  {
    content: `## The Major Challenges

Getting to Mars and staying there is fraught with immense difficulties:
1.  **Distance and Time:** A round trip could take nearly three years. This puts enormous strain on life support systems, food supplies, and the psychological health of the crew.
2.  **Radiation:** Deep space is filled with high-energy cosmic rays and solar radiation. Without the protection of Earth's magnetic field, astronauts will be exposed to radiation levels that significantly increase their cancer risk. Heavy shielding is required.
3.  **Gravity:** Astronauts will spend months in zero-g during the transit, and then have to adapt to Mars' gravity, which is only about 38% of Earth's. The long-term health effects of this are still unknown.
4.  **Entry, Descent, and Landing (EDL):** Mars has a thin atmosphere—thick enough to burn up a spacecraft, but too thin to slow it down easily with parachutes. Landing a heavy human-rated vehicle safely is one of the biggest engineering hurdles. This is often called the "seven minutes of terror."`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://img.badphilosopher.com/the-cosmos/mars-plan.jpg" alt="Challenges of a Human Mission to Mars." caption="A crewed Mars mission faces numerous life-threatening challenges."/>`,
    type: 'content'
  },
  {
    content: `Why is landing on Mars so difficult?

<MultipleChoice correctAnswer={0}>
  <p>The atmosphere is too thin for parachutes to be fully effective but thick enough to cause intense heating.</p>
  <p>Mars has no atmosphere at all.</p>
  <p>The gravity on Mars is stronger than on Earth.</p>
  <p>The surface is too soft to land on.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## The SpaceX Plan: Starship

SpaceX is developing its fully reusable **Starship** vehicle with Mars as its primary design driver. The plan relies on several key innovations:
-   **Full Reusability:** Both the booster and the Starship itself are designed to be rapidly reusable, drastically cutting costs.
-   **Orbital Refueling:** A Starship will launch to Earth orbit and then be refueled by multiple "tanker" Starship flights before it departs for Mars. This allows it to carry a massive payload (over 100 tons) to the Martian surface.
-   **ISRU on Mars:** The Starship's Raptor engines run on methane and oxygen. The plan is to use the Martian atmosphere (which is mostly carbon dioxide) and subsurface water ice to manufacture propellant on Mars for the return trip.`,
    type: 'content'
  },
  {
    content: `The SpaceX architecture for Mars missions relies on manufacturing ________ on the Martian surface for the return journey.

<FillInTheBlank correctAnswer="propellant" placeholder="Enter the general term..." />`,
    type: 'interactive'
  },
  {
    content: `## Up Next: The Cosmic Gold Rush

Why stop at Mars? The solar system is filled with resources. Asteroids, in particular, are treasure troves of metals and water that could fuel a space-based economy. In our final module, we'll look at the burgeoning field of space mining and the future of an industrial-scale human presence in the solar system.`,
    type: 'content'
  }
] as const;