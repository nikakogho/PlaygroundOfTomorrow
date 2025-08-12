export const sections = [
  {
    content: `## The Limits of Chemistry

We've mastered the chemical rocket. It's powerful and has gotten us to the Moon and beyond. But it's limited by the energy in its chemical bonds. The Tsiolkovsky Rocket Equation showed us that to go further and faster, we need a higher exhaust velocity ($v_e$), which means a higher specific impulse (Isp).

Chemical rockets top out with an Isp of around 450-470 seconds (for LH2/LOX). To reach the outer solar system efficiently or enable rapid interplanetary travel, we need to break free from the limitations of combustion.`,
    type: 'content'
  },
  {
    content: `## Electric Propulsion: The Ion Thruster

Imagine a rocket engine with an Isp of 3,000 seconds, or even 10,000 seconds! That's the world of **electric propulsion**. The most common type is the **ion thruster**.

Here's how it works:
1.  A propellant (usually an inert gas like xenon) is injected into a chamber.
2.  An electric field is used to strip electrons from the xenon atoms, turning them into positively charged ions.
3.  A powerful electrostatic or electromagnetic field then accelerates these tiny ions to incredibly high speeds—far faster than any chemical reaction could.
4.  These high-speed ions are shot out the back, producing thrust.`,
    type: 'content'
  },
  {
    content: `<YouTubeEmbed videoId="bHunhXk9i2s" title=Ion Propulsion Basics" />`,
    type: 'content'
  },
  {
    content: `## The "Whisper" Drive

Ion thrusters have an extremely high Isp (amazing fuel economy), but they have incredibly **low thrust**. The force produced by a typical ion drive is comparable to the weight of a single sheet of paper.

You could never use an ion drive to launch from Earth. But in the frictionless vacuum of space, this tiny, continuous push, applied over weeks, months, or even years, can build up to enormous velocities. They are perfect for long-duration robotic missions, like NASA's Dawn mission to the asteroid belt or the BepiColombo mission to Mercury.`,
    type: 'content'
  },
  {
    content: `Ion thrusters are characterized by very high ________ ________ but very low ________.

<FillInTheBlank correctAnswer="specific impulse, thrust" placeholder="Enter the two answers separated by a comma..." />`,
    type: 'interactive'
  },
  {
    content: `## Nuclear Thermal Propulsion (NTP)

What if you could combine the high efficiency of electric propulsion with the high thrust of a chemical rocket? The closest we've come is the **Nuclear Thermal Rocket**.

Instead of using a chemical reaction to heat the propellant, an NTP engine uses a **nuclear reactor**.
1.  A lightweight propellant, like liquid hydrogen, is pumped through the core of a hot fission reactor.
2.  The reactor heats the hydrogen to extreme temperatures—far hotter than any chemical reaction.
3.  This super-heated hydrogen gas is then expelled through a nozzle.

Because the hydrogen is so hot, its exhaust velocity is huge. An NTP engine could have an Isp of 900 seconds or more, double that of the best chemical rocket, while also producing significant thrust.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://nap.nationalacademies.org/openbook/25977/xhtml/images/img-24-1.jpg" alt="How a Nuclear Thermal Rocket works." caption="NTP uses a reactor to heat propellant, offering high thrust and high efficiency."/>`,
    type: 'content'
  },
  {
    content: `What is the primary advantage of a Nuclear Thermal Rocket over a traditional chemical rocket?

<MultipleChoice correctAnswer={2}>
  <p>It is simpler and safer to operate.</p>
  <p>It uses readily available fuel like water.</p>
  <p>It offers both high thrust and a much higher specific impulse (efficiency).</p>
  <p>It requires no propellant at all.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## The Future... And The Far Future

NTP is seen as a key enabling technology for rapid human missions to Mars, potentially cutting the trip time in half. But scientists are dreaming even bigger. Ideas like **solar sails** that ride on the pressure of sunlight, or even speculative **fusion rockets**, could one day open up the entire solar system and beyond. The quest for better propulsion is the quest for a faster, farther future in space.`,
    type: 'content'
  },
  {
    content: `## Up Next: Leaving the Planet

We've spent five modules on the engine—the machine that gets us going. Now it's time to talk about the destination. How do we actually use this thrust and delta-v to get off the Earth and *stay* off? In the next module, we'll begin our journey into orbital dynamics, starting with the fundamental concept of how to achieve orbit.`,
    type: 'content'
  }
] as const;