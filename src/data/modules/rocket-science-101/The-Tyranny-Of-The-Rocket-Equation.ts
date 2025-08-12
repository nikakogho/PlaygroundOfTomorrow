export const sections = [
  {
    content: `## The Fundamental Problem

How does a rocket work? At its heart, it's a device that throws mass in one direction to move in the other. This is a direct application of **Newton's Third Law of Motion**: for every action, there is an equal and opposite reaction. The hot gas shooting out of the engine is the "action"; the rocket moving forward is the "reaction."

But this creates a paradox. To go faster, you need more fuel. But more fuel adds more mass, which means you need even *more* fuel to lift that extra mass. This vicious cycle is known as the "tyranny of the rocket equation."`,
    type: 'content'
  },
  {
    content: `## Meet the Tsiolkovsky Rocket Equation

In 1903, a Russian schoolteacher named **Konstantin Tsiolkovsky** derived the equation that governs all of rocketry. It tells us the maximum change in velocity ($\Delta v$, or "delta-v") a rocket can achieve.

$$ \Delta v = v_e \cdot \ln\left(\frac{m_0}{m_f}\right) $$

Let's break this down:
-   **$\Delta v$ (Delta-v):** The change in velocity. This is the "currency" of space travel. It's the total change in speed your rocket is capable of.
-   **$v_e$ (Effective Exhaust Velocity):** How fast the propellant is thrown out the back of the rocket. A higher exhaust velocity is more efficient. We'll explore this more later.
-   **$\ln$:** The natural logarithm. This is the crucial part that makes things so hard. Because of the logarithm, doubling your fuel does *not* double your delta-v.
-   **$m_0$ (Initial Mass):** The total mass of the rocket at liftoff (structure + payload + fuel).
-   **$m_f$ (Final Mass):** The mass of the rocket after all the fuel is burned (structure + payload).
The ratio $\frac{m_0}{m_f}$ is called the **mass ratio**.`,
    type: 'content'
  },
  {
    content: `## The Tyranny in Action

Let's look at the numbers for a typical rocket. Often, over **90%** of a rocket's initial mass is just propellant! The actual payload—the satellite, or the astronauts—is a tiny fraction of the total weight.

<ImageEmbed src="https://res.cloudinary.com/dnls7yeic/image/upload/v1755004145/rocket_mass_chart_uqphzk.png" alt="Mass breakdown of a typical rocket." caption="The vast majority of a rocket's mass at launch is propellant."/>

This is why building rockets is so difficult. Every gram you add to the payload or structure requires many more grams of fuel to lift it.`,
    type: 'content'
  },
  {
    content: `## Think About It: Staging

If a single rocket has such a hard time, how can we make it more efficient? Look at any real rocket launch. What do you see happening a few minutes into the flight? The rocket sheds weight by dropping off empty fuel tanks. This is called **staging**.

By getting rid of useless mass ($m_f$ gets smaller for the next stage), the next engine has a much easier job. It dramatically improves the rocket's overall delta-v capability. We are, in effect, putting a smaller rocket on top of a bigger one.`,
    type: 'content'
  },
  {
    content: `## Time to Calculate

Let's use the rocket equation. A rocket has an effective exhaust velocity ($v_e$) of 4,500 m/s. Its initial mass ($m_0$) is 2,000,000 kg. Its final mass ($m_f$) after burning all its fuel is 100,000 kg.

Calculate the rocket's total delta-v ($\Delta v$). Use a calculator for the natural logarithm ($\ln$).
**Formula:** $\Delta v = v_e \cdot \ln(\frac{m_0}{m_f})$

*Hint: First calculate the mass ratio $\frac{2,000,000}{100,000}$, then find the natural log of that number, then multiply by $v_e$.*

<FillInTheBlank correctAnswer="13479" placeholder="Enter delta-v in m/s, rounded to the nearest whole number..." />`,
    type: 'interactive'
  },
  {
    content: `## Delta-V is Everything

Why do we care so much about delta-v? Because every destination in space has a "cost" in delta-v.
-   Getting to Low Earth Orbit (LEO): ~9,400 m/s
-   Going from LEO to the Moon's surface: ~6,000 m/s
-   Going from LEO to Mars' surface: ~8,500 m/s

A rocket's "delta-v budget" is like the amount of gas in your car's tank. You have to make sure you have enough to get to your destination and, if you plan on coming back, for the return trip too!`,
    type: 'content'
  },
  {
    content: `A mission is designed to go to Low Earth Orbit, which requires a $\Delta v$ of 9,400 m/s. Your rocket design has a calculated total $\Delta v$ of 9,100 m/s. What is the status of your mission?

<MultipleChoice correctAnswer={1}>
  <p>The mission is good to go, there's plenty of margin.</p>
  <p>The mission will fail; the rocket does not have enough delta-v to reach orbit.</p>
  <p>The mission is risky but possible.</p>
  <p>The rocket has too much delta-v, which is inefficient.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Up Next: Making Fire

We've seen *that* the exhaust velocity ($v_e$) is a critical parameter. But how do we actually generate that high-speed exhaust? It comes from a controlled chemical explosion. In the next module, we'll dive into the chemistry of combustion and the different types of propellants that fuel our journey to the stars.`,
    type: 'content'
  }
] as const;