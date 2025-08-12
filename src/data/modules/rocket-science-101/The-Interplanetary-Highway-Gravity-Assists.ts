export const sections = [
  {
    content: `## Cheating the Rocket Equation

Getting to the outer planets like Jupiter or Saturn requires a colossal amount of delta-v. Building a rocket big enough to carry all that fuel is often impractical or impossible. For decades, engineers have used a clever trick to get a "free" velocity boost by flying close to a planet. This is the **gravity assist**, also known as a slingshot maneuver or flyby.`,
    type: 'content'
  },
  {
    content: `## How Does It Work? It's Not About the "Slingshot"

The term "slingshot" is a bit misleading. The spacecraft isn't bouncing off the planet's gravity. Instead, it's about an exchange of momentum. Think of a planet like a giant, moving bowling ball and the spacecraft like a tiny ping-pong ball.

As the spacecraft approaches the planet, it falls into the planet's gravitational well, picking up speed. It then swings around the back of the planet and flies off in a new direction. From the planet's perspective, the spacecraft leaves with the same speed it arrived with. But the planet is also moving in its own orbit around the Sun!`,
    type: 'content'
  },
  {
    content: `By swinging around the planet in the direction of the planet's own orbital motion, the spacecraft gets a "kick" and inherits some of the planet's enormous orbital velocity. The spacecraft gains a huge amount of speed relative to the Sun, while the massive planet slows down in its orbit by an infinitesimally small, completely unmeasurable amount. It's the ultimate cosmic cheat code.`,
    type: 'content'
  },
  {
    content: `<YouTubeEmbed videoId="16jr7WWGSxo" title="Explanation of the Gravity Assist Maneuver" />`,
    type: 'content'
  },
  {
    content: `A gravity assist allows a spacecraft to gain a significant amount of speed relative to the ____ by taking a tiny amount of orbital energy from a ______.

<FillInTheBlank correctAnswer="sun, planet" placeholder="Enter the two answers separated by a comma..." />`,
    type: 'interactive'
  },
  {
    content: `## The Grand Tour: Voyager's Masterpiece

The most famous use of the gravity assist was NASA's **Voyager 2** mission. Launched in 1977, it used a rare alignment of the outer planets that happens only once every 175 years.
- It used a gravity assist at **Jupiter** to get a boost towards Saturn.
- It used another assist at **Saturn** to get flung towards Uranus.
- It used a third assist at **Uranus** to reach Neptune.

Without gravity assists, a trip to Neptune would have taken over 30 years. Voyager 2 did it in 12. This "Grand Tour" would have been impossible with the rocket technology of the 1970s alone.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://www.nasa.gov/wp-content/uploads/2021/01/voyager_2_uranus_voyager_trajectories.png" alt="The Grand Tour trajectory of Voyager 2." caption="Voyager 2 used a series of gravity assists to explore the outer solar system."/>`,
    type: 'content'
  },
  {
    content: `## Braking is Also an Option

Gravity assists can also be used to slow down. By flying in front of a planet (against its orbital direction), a spacecraft can give some of its momentum to the planet, causing the spacecraft to slow down relative to the Sun. This is crucial for missions that want to enter orbit around a planet, like the MESSENGER mission to Mercury, which used flybys of Earth and Venus to shed speed and fall inward towards the Sun.`,
    type: 'content'
  },
  {
    content: `A mission wants to send an orbiter to Jupiter. It performs a gravity assist at Jupiter. What is the goal of this maneuver?

<MultipleChoice correctAnswer={1}>
  <p>To gain speed and fly past Jupiter to the outer planets.</p>
  <p>To lose speed relative to Jupiter, allowing it to be captured into orbit.</p>
  <p>To change its orbital inclination.</p>
  <p>To use Jupiter's atmosphere for aerobraking.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Up Next: The New Space Age

We've now covered the fundamentals of propulsion and orbital mechanics—the core physics of getting into space and moving around. But in the last decade, the *economics* and *methods* of rocketry have undergone a seismic shift. In the next module, we'll begin Part 3 by exploring the technology that made this possible: reusable rockets.`,
    type: 'content'
  }
] as const;