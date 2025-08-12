export const sections = [
  {
    content: `## The Old Way: Throwing It All Away

For the first 60 years of the space age, rockets were completely expendable. Every part of the multimillion-dollar launch vehicle—its powerful engines, complex electronics, and giant fuel tanks—was used for a single flight and then discarded in the ocean or burned up in the atmosphere. This is like flying a Boeing 747 from New York to London and then throwing the entire plane away. It's incredibly expensive and wasteful.`,
    type: 'content'
  },
  {
    content: `## The Dream of Reusability

The dream of a fully reusable rocket has been around for decades. The Space Shuttle was a partial attempt. Its Orbiter and Solid Rocket Boosters were reusable, but its massive orange external tank was discarded on every flight, and the refurbishment process for the Orbiter was incredibly complex and expensive. The real breakthrough came from a different approach.`,
    type: 'content'
  },
  {
    content: `## Propulsive Landing: The SpaceX Approach

Instead of using parachutes or wings, SpaceX pioneered the technique of **propulsive landing** for their Falcon 9 rocket's first stage. Here's how it works:
1.  After separating from the second stage, the first stage booster uses cold gas thrusters to flip itself around.
2.  It performs a **boostback burn** with its main engines to reverse its course and head back towards the launch site or a drone ship in the ocean.
3.  As it re-enters the thick atmosphere, it performs a **re-entry burn** to slow down and protect itself from atmospheric heating.
4.  Finally, as it approaches the landing pad, it deploys landing legs and performs a final **landing burn**, using a single engine to gently touch down vertically.`,
    type: 'content'
  },
  {
    content: `<YouTubeEmbed videoId="GHkdYQiPcSo" title="How SpaceX Lands Rockets Vertically" />`,
    type: 'content'
  },
  {
    content: `## The Delta-V Penalty

Reusability isn't free. The fuel required for the boostback, re-entry, and landing burns is fuel that *cannot* be used to accelerate the payload. This is called the **delta-v penalty**. It means that a reusable Falcon 9 can lift a smaller payload to orbit than an expendable one. However, the dramatic cost savings from re-flying the booster many times far outweighs this performance hit for most missions.`,
    type: 'content'
  },
  {
    content: `A client has an extremely heavy satellite that needs to go to a very high-energy orbit, pushing the rocket to its absolute limit. What is the most likely launch configuration SpaceX would use?

<MultipleChoice correctAnswer={1}>
  <p>They would fly the Falcon 9 in its standard reusable configuration.</p>
  <p>They would fly the Falcon 9 in an expendable configuration, discarding the booster to maximize performance.</p>
  <p>They would add extra solid rocket boosters.</p>
  <p>The mission would be impossible.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## More Than Just Landing

The revolution isn't just about landing the booster. It's about **rapid reusability**. The goal is to make a rocket more like an airplane: land it, inspect it, refuel it, and launch it again in a short amount of time. This is what truly drives down the cost of access to space. SpaceX is now regularly re-flying boosters more than 10 times, and their ultimate goal with their next-generation Starship vehicle is to achieve airline-like operations.`,
    type: 'content'
  },
  {
    content: `## The Impact on Spaceflight

The advent of reusable rockets has fundamentally changed the space industry.
-   **Lower Costs:** It has dramatically reduced the cost per kilogram to launch a payload to orbit.
-   **Increased Launch Cadence:** Launching becomes cheaper and faster, allowing for more missions per year.
-   **Enabling Mega-Constellations:** It is the key enabling technology for deploying thousands of satellites for constellations like Starlink, which would have been economically impossible with expendable rockets.`,
    type: 'content'
  },
  {
    content: `The primary economic advantage of a rapidly reusable rocket system is the significant reduction in the ____ __ ______ to orbit.

<FillInTheBlank correctAnswer="cost of access" placeholder="Enter the three-word phrase..." />`,
    type: 'interactive'
  },
  {
    content: `## Up Next: Living and Working in Space

Now that getting to orbit is becoming cheaper and more routine, what are we doing there? For over two decades, humanity has maintained a continuous presence in space aboard the International Space Station. In the next module, we'll explore the science and challenges of modern space stations and look at what comes next.`,
    type: 'content'
  }
] as const;