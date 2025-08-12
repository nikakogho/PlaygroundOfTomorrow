export const sections = [
  {
    content: `## More Than a Metal Funnel

A liquid rocket engine is one of the most powerful and complex machines ever built. It operates at extreme temperatures and pressures, handling massive amounts of energy. Its job is to mix the fuel and oxidizer, burn them in a controlled way, and accelerate the resulting hot gas to incredible speeds. Let's look at the key components.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://www.grc.nasa.gov/www/BGH/Images/lrockth.gif" caption="Key components work together to convert chemical energy into kinetic energy."/>`,
    type: 'content'
  },
  {
    content: `## The Turbopumps: The Heart of the Beast

A large rocket engine needs to feed tons of propellant into the combustion chamber every second. You can't do this with a simple pump. You need a **turbopump**. A turbopump is a gas turbine (like a mini jet engine) that drives two powerful pumps—one for the fuel and one for the oxidizer.

The Space Shuttle's main engine turbopump spun so fast that if it were pumping water instead of liquid hydrogen, it could drain an average swimming pool in under 25 seconds. These pumps are what allow the engine to achieve the enormous pressures needed for efficient combustion.`,
    type: 'content'
  },
  {
    content: `## The Injector and Combustion Chamber

The propellants, now at high pressure, are fed into the **combustion chamber** through an **injector plate**. The injector is not a simple showerhead; it's a masterpiece of engineering designed to mix the fuel and oxidizer as thoroughly as possible for a stable, efficient burn.

Inside the combustion chamber, the propellants ignite and turn into incredibly hot gas—often over 3,000°C (5,500°F). A huge challenge is keeping the chamber walls from melting. This is often solved by **regenerative cooling**, where the cryogenic fuel is circulated through channels in the chamber walls before it's injected, absorbing heat and keeping the engine from destroying itself.`,
    type: 'content'
  },
  {
    content: `The method of cooling a combustion chamber by flowing cold fuel through its walls is called ___________ cooling.

<FillInTheBlank correctAnswer="regenerative" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## The Nozzle: The Great Accelerator

The hot, high-pressure gas from the combustion chamber is just a chaotic mess. The **nozzle's** job is to convert that thermal energy into focused, high-speed kinetic energy. Almost all rocket nozzles have a very specific, iconic shape: a **De Laval nozzle**.

It features:
1.  A **converging** section that squeezes the hot gas, accelerating it to the speed of sound (Mach 1).
2.  A narrow **throat**.
3.  A large, bell-shaped **diverging** section. In this section, the gas expands and accelerates to hypersonic speeds—often Mach 10 or more.

It is this final acceleration that produces the vast majority of the rocket's thrust.`,
    type: 'content'
  },
  {
    content: `What is the primary function of the bell-shaped De Laval nozzle on a rocket engine?

<MultipleChoice correctAnswer={1}>
  <p>To mix the fuel and oxidizer.</p>
  <p>To accelerate the exhaust gas to hypersonic speeds.</p>
  <p>To cool down the engine.</p>
  <p>To steer the rocket.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Think About It: Nozzle Size

Why do nozzles on first-stage engines (that operate in the thick atmosphere) look smaller than nozzles on upper-stage engines (that operate in a vacuum)?

The bell of the nozzle needs to be sized for the ambient air pressure outside. A nozzle is most efficient when the pressure of the exhaust gas at the exit matches the pressure of the surrounding atmosphere. In a vacuum, the ideal nozzle is infinitely large! That's why vacuum engines have such enormous, dramatic-looking bells—they are trying to expand the gas as much as possible to extract every last bit of energy.`,
    type: 'content'
  },
    {
    content: `<ImageEmbed src="https://miro.medium.com/v2/resize:fit:1204/1*hAVUFBDAt1w_v1TG08HixQ.jpeg" alt="Sea-level vs. vacuum engine nozzles." caption="Nozzle size is optimized for the atmospheric pressure at which it will operate."/>`,
    type: 'content'
  },
  {
    content: `## Up Next: Measuring Performance

We've built our engine. Now, how good is it? Is it powerful? Is it efficient? These are two different things. In the next module, we'll learn about the two most important metrics for judging a rocket engine's performance: **Thrust** and **Specific Impulse**.`,
    type: 'content'
  }
] as const;