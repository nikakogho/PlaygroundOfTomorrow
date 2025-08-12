export const sections = [
  {
    content: `## The Common Misconception

What does it mean to be "in orbit"? Many people think it's a place where there's no gravity. This is completely wrong. At the altitude of the International Space Station (ISS), about 400 km up, Earth's gravity is still about **90%** as strong as it is on the surface.

So why do astronauts float? The answer is the key to understanding everything about orbital mechanics.`,
    type: 'content'
  },
  {
    content: `## Newton's Cannonball

Isaac Newton imagined a brilliant thought experiment. Picture a cannon on top of a very tall mountain.
- If you fire the cannonball with a little bit of gunpowder, it travels a short distance and falls to Earth.
- If you use more gunpowder, it travels farther before falling to Earth.
- What if you could fire it with *exactly* the right amount of horizontal speed? The cannonball would travel so fast that as it falls towards the Earth, the Earth's surface curves away from it at the same rate.

The cannonball would then be constantly falling, but it would never get any closer to the ground. It is "falling around the Earth." **This is what an orbit is.**`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://kaiserscience.wordpress.com/wp-content/uploads/2014/10/newtons-canon.jpg" alt="Newton's Cannonball experiment." caption="Orbit is achieved when an object's horizontal velocity is so great that it continuously 'misses' the Earth as it falls."/>`,
    type: 'content'
  },
  {
    content: `Astronauts on the International Space Station feel weightless because:

<MultipleChoice correctAnswer={1}>
  <p>They are outside of Earth's gravity.</p>
  <p>They are in a constant state of freefall around the Earth, along with their spacecraft.</p>
  <p>The station's artificial gravity is turned off.</p>
  <p>The centrifugal force perfectly cancels gravity.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## It's All About Horizontal Velocity

This reveals the most important truth about getting to space: it's not about how *high* you go, it's about how *fast* you go sideways. The energy spent by a rocket during launch is overwhelmingly dedicated to achieving the enormous horizontal speed needed for orbit.

To achieve a stable Low Earth Orbit (LEO), a spacecraft needs to reach a speed of approximately **7.8 kilometers per second** (or about 17,500 miles per hour). That's more than 20 times the speed of sound. This is why getting to orbit requires a delta-v of ~9.4 km/s—most of that is for horizontal speed, with the rest fighting gravity and atmospheric drag on the way up.`,
    type: 'content'
  },
  {
    content: `The vast majority of a rocket's energy during a launch to LEO is spent on achieving the required ___________ ________.

<FillInTheBlank correctAnswer="horizontal velocity" placeholder="Enter the two-word term..." />`,
    type: 'interactive'
  },
  {
    content: `## The Gravity Turn

So how does a rocket achieve this? It doesn't go straight up. A rocket launching to orbit performs a maneuver called a **gravity turn**.
1.  It launches straight up for the first few seconds to clear the launch tower and get out of the thickest part of the atmosphere.
2.  It then begins to gradually pitch over, turning its trajectory more and more horizontal.
3.  For most of the ascent, it's flying at an angle, using its powerful engines to gain both altitude and the all-important horizontal speed. By the time the engines cut off, it's moving parallel to the Earth's surface at orbital velocity.`,
    type: 'content'
  },
  {
    content: `<YouTubeEmbed videoId="VajZiY72Pf0" title="Animation of a Rocket's Gravity Turn" />`,
    type: 'content'
  },
  {
    content: `## Thinking Deeper: Why Launch East?

Have you ever noticed that most rockets from places like Florida's Kennedy Space Center launch to the east, over the Atlantic Ocean? They are taking advantage of a free boost! The Earth rotates to the east. By launching in the same direction as the rotation, a rocket gets a "slingshot" assist from the Earth's own rotational speed. At the equator, this boost is worth about 460 m/s of delta-v—a significant saving.`,
    type: 'content'
  },
  {
    content: `## Up Next: The Rules of the Road

Once we are in orbit, what are the rules that govern our path? We can't just steer a spacecraft like a car. Our motion is dictated by gravity. In the next module, we'll learn about the three fundamental laws of planetary motion discovered by Johannes Kepler, which form the bedrock of orbital mechanics.`,
    type: 'content'
  }
] as const;