export const sections = [
  {
    content: `## How Good is Our Engine?

When evaluating a rocket engine, engineers focus on two key numbers. It's like judging a car based on its horsepower and its fuel economy (miles per gallon). For a rocket, these numbers are **Thrust** and **Specific Impulse**. Understanding the difference between them, and the trade-off they represent, is key to understanding rocket design.`,
    type: 'content'
  },
  {
    content: `## Thrust: The Brute Force

**Thrust** is the raw force the engine produces, pushing the rocket upwards. It's measured in Newtons (N) or pounds-force (lbf).

The formula for thrust is:
$$ F = \dot{m} \cdot v_e $$
Where:
-   **$F$** is the Thrust force.
-   **$\dot{m}$** ("m-dot") is the **mass flow rate**—how much mass (propellant) is being shot out of the engine per second (in kg/s).
-   **$v_e$** is the exhaust velocity.

To get off the launchpad, a rocket's thrust must be greater than its weight (the force of gravity pulling it down). This is called the **Thrust-to-Weight Ratio (TWR)**. If TWR > 1, you go up!`,
    type: 'content'
  },
  {
    content: `A rocket at liftoff has a total weight of 3,000,000 N. Its engines produce a combined thrust of 3,500,000 N. What can you conclude?

<MultipleChoice correctAnswer={0}>
  <p>The rocket will lift off, as its Thrust-to-Weight Ratio is greater than 1.</p>
  <p>The rocket will not lift off, as its Thrust-to-Weight Ratio is less than 1.</p>
  <p>The rocket will hover without moving.</p>
  <p>There isn't enough information to tell.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Specific Impulse (Isp): The Fuel Economy

**Specific Impulse**, or **Isp**, is the measure of a rocket engine's *efficiency*. It tells you how much thrust you get from a given amount of propellant over time. A higher Isp means you are using your fuel more efficiently to generate thrust.

It's often measured in **seconds**. This can be confusing. Just think of it this way: if you had one pound of propellant, Isp is the number of seconds that pound of propellant could produce one pound of thrust. So, an engine with an Isp of 300 seconds is more efficient than one with an Isp of 250 seconds.

**Key point:** Isp is directly proportional to the exhaust velocity ($v_e$). High exhaust velocity = high specific impulse.
$$ I_{sp} = \frac{v_e}{g_0} $$
(where $g_0$ is standard gravity, ~9.81 m/s²).`,
    type: 'content'
  },
  {
    content: `## The Great Trade-Off: Thrust vs. Isp

Here's the fundamental trade-off in engine design:
-   **High Thrust Engines** (like the engines on a first stage) need to burn a lot of propellant very quickly ($\dot{m}$ is huge). This often means they are less efficient and have a **lower Isp**. They are the "drag racers" of the rocket world—all about acceleration.
-   **High Specific Impulse Engines** (like ion thrusters) are incredibly fuel-efficient. They create a very high exhaust velocity ($v_e$), but they can only move a tiny amount of propellant ($\dot{m}$ is tiny). This means they have **very low thrust**. They are the "Priuses" of the rocket world—all about long-term efficiency.`,
    type: 'content'
  },
  {
    content: `For lifting a heavy rocket off the ground and through the thick atmosphere, you need a high ________. For a long, deep-space journey where fuel efficiency is paramount, you need a high ________ ________.

<FillInTheBlank correctAnswer="thrust, specific impulse" placeholder="Enter the two answers separated by a comma..." />`,
    type: 'interactive'
  },
  {
    content: `## Let's Calculate Isp

An advanced new engine is tested and found to have an effective exhaust velocity ($v_e$) of 4,415 m/s. What is its specific impulse (Isp) in seconds?
Use the standard value for Earth's gravity, $g_0 = 9.81$ m/s².

**Formula:** $I_{sp} = \frac{v_e}{g_0}$

<FillInTheBlank correctAnswer="450" placeholder="Enter Isp in seconds, rounded to the nearest whole number..." />`,
    type: 'interactive'
  },
  {
    content: `## Thinking Deeper: Why LH2/LOX is so good

Why does a liquid hydrogen / liquid oxygen engine have such a high specific impulse? Because hydrogen is the lightest of all elements. When you heat it up, its light molecules can be accelerated to extremely high speeds ($v_e$) much more easily than the heavier molecules produced by burning kerosene. This high exhaust velocity directly translates to a high Isp, making it the king of chemical rocket efficiency.`,
    type: 'content'
  },
  {
    content: `## Up Next: Beyond the Chemical Fire

Chemical rockets are powerful, but they are fundamentally limited by the energy stored in their chemical bonds. To explore the solar system efficiently, we need new technologies that can achieve even higher specific impulse. In the next module, we'll look beyond the fire and explore the future of propulsion, from ion engines to nuclear rockets.`,
    type: 'content'
  }
] as const;