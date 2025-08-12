export const sections = [
  {
    content: `## The Heart of the Engine: Combustion

At its core, a chemical rocket engine is a device for harnessing the energy released by **combustion**. You may think of combustion as simply "burning," but in chemistry, it's a specific type of high-speed chemical reaction between a **fuel** and an **oxidizer**.

-   **Fuel:** A substance that stores chemical energy (e.g., hydrogen, kerosene).
-   **Oxidizer:** A substance that provides the oxygen needed for the fuel to burn. In space, there's no air, so a rocket must carry its own oxygen supply.

When they react, they rapidly convert into hot, high-pressure gas. This gas is the mass the rocket throws out its back to move forward.`,
    type: 'content'
  },
  {
    content: `## The Fire Triangle in Space

On Earth, you need three things for a fire: fuel, oxygen (from the air), and heat. This is the "fire triangle." A rocket engine works on the same principle, but it's designed to be much more intense, and it has to supply its own oxygen.

<ImageEmbed src="https://thumbs.dreamstime.com/b/fire-triangle-as-oxygen-heat-fuel-elements-ignition-outline-diagram-three-main-component-hot-flame-reaction-320305161.jpg" alt="The fire triangle adapted for a rocket." caption="A rocket must carry both its fuel and its own oxidizer to burn in the vacuum of space."/>

The goal is to create the maximum amount of hot gas in the shortest amount of time. It's not just a fire; it's a continuous, controlled explosion.`,
    type: 'content'
  },
  {
    content: `Why must a rocket carry its own oxidizer, like liquid oxygen (LOX)?

<MultipleChoice correctAnswer={2}>
  <p>To keep the fuel cold.</p>
  <p>To add extra mass to the rocket.</p>
  <p>Because there is no oxygen to burn in the vacuum of space.</p>
  <p>To clean the engine during flight.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Liquid Propellants: The High-Performance Choice

Most large rockets use **liquid propellants** because they offer the best performance and can be controlled. You can throttle them up and down, and even shut them off and restart them in space.

Common combinations:
-   **Kerosene (RP-1) and Liquid Oxygen (LOX):** A common choice for first stages (like the Falcon 9 or Soyuz). It's dense and powerful, but less efficient than hydrogen.
-   **Liquid Hydrogen (LH2) and Liquid Oxygen (LOX):** The most efficient chemical propellant combination we have. It produces a very high exhaust velocity ($v_e$). However, hydrogen is extremely cold (**cryogenic**) and not very dense, so it requires large, insulated tanks. The Space Shuttle's main engines and the upper stages of many rockets use this combo.`,
    type: 'content'
  },
  {
    content: `## Solid Propellants: Simple and Powerful

**Solid Rocket Boosters (SRBs)**, like the ones used on the Space Shuttle or the Ariane 5, use **solid propellants**. The fuel (e.g., aluminum powder) and oxidizer (e.g., ammonium perchlorate) are mixed together into a rubbery substance called the "grain," which is packed into a casing.

**Pros:** Very simple, can be stored for a long time, and produce enormous amounts of thrust.
**Cons:** Once you light it, you can't shut it off or control it. It burns until it's empty. It's like a giant firework.`,
    type: 'content'
  },
  {
    content: `<YouTubeEmbed videoId="TIv7lo8OLDs" title="SLS Solid Rocket Booster Test Firing" />`,
    type: 'content'
  },
  {
    content: `An engineer is designing a deep-space probe that needs to perform multiple, precise engine burns over several years to adjust its trajectory. Which type of propellant would be the most suitable for this mission?

<MultipleChoice correctAnswer={0}>
  <p>Liquid Propellants</p>
  <p>Solid Propellants</p>
  <p>Both would be equally suitable.</p>
  <p>Neither, a different system is needed.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Hypergolic Propellants: Instantly On

There's a special class of liquid propellants called **hypergolics**. These are fuels and oxidizers that ignite *spontaneously* on contact with each other. No ignition system is needed.

**Pros:** Extremely reliable. You just open the valves, and they ignite. This makes them perfect for spacecraft that need to fire their engines reliably after coasting for months in deep space (like the Apollo Lunar Module or SpaceX's Dragon capsule).
**Cons:** They are extremely toxic and corrosive, making them very difficult and dangerous to handle.`,
    type: 'content'
  },
  {
    content: `The main advantage of hypergolic propellants is their ___________, as they do not require a separate ignition system.

<FillInTheBlank correctAnswer="reliability" placeholder="Enter the key advantage..." />`,
    type: 'interactive'
  },
  {
    content: `## Up Next: The Machine That Tames the Fire

We've learned about the chemicals we use to generate energy. But what kind of machine can contain and direct this incredible, continuous explosion? In the next module, we will dissect the anatomy of a modern liquid rocket engine, from its complex turbopumps to the all-important nozzle.`,
    type: 'content'
  }
] as const;