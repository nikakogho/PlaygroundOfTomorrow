export const sections = [
  {
    content: `## The Six Numbers That Define a Path

To track a satellite or plan a mission, we need to describe its orbit mathematically. We can do this with perfect precision using a set of six numbers called the **Keplerian Orbital Elements**. These six elements uniquely define the size, shape, and orientation of an elliptical orbit in three-dimensional space. Think of them as the address of a spacecraft.`,
    type: 'content'
  },
  {
    content: `## Elements 1 & 2: Defining the Shape and Size

These first two elements come directly from Kepler's First Law.
1.  **Semi-Major Axis ($a$):** This defines the *size* of the orbit. It's half the length of the ellipse's longest diameter. A larger semi-major axis means a higher-energy orbit with a longer period.
2.  **Eccentricity ($e$):** This defines the *shape* of the orbit. It's a measure of how "squashed" the ellipse is.
    -   $e = 0$: A perfect circle.
    -   $0 < e < 1$: An ellipse.
    -   $e = 1$: A parabola (an escape trajectory).
    -   $e > 1$: A hyperbola (an escape trajectory with excess speed).`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://www.physics.unlv.edu/~jeffery/astro/orbit/ellipse_eccentricity.png" alt="Semi-Major Axis and Eccentricity." caption="These two elements define the size and shape of the orbital ellipse."/>`,
    type: 'content'
  },
  {
    content: `An engineer tells you a spacecraft is in an orbit with an eccentricity ($e$) of 0. What is the shape of this orbit?

<FillInTheBlank correctAnswer="circle" placeholder="Enter the shape of the orbit..." />`,
    type: 'interactive'
  },
  {
    content: `## Elements 3, 4, & 5: Defining the Orientation

The next three elements lock the orbit in 3D space relative to a reference plane (usually the Earth's equatorial plane).
3.  **Inclination ($i$):** The angle between the orbital plane and the Earth's equator.
    -   $i = 0^\circ$: An equatorial orbit.
    -   $i = 90^\circ$: A polar orbit.
    -   $i > 90^\circ$: A retrograde orbit (moving against Earth's rotation).
4.  **Longitude of the Ascending Node ($\Omega$):** This defines where the orbit crosses the equator from south to north (the "ascending node"). It orients the "tilt" of the orbit horizontally.
5.  **Argument of Perigee ($\omega$):** This defines where the perigee (lowest point) of the orbit is located within the orbital plane. It orients the ellipse within its plane.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8b3lnHN1a3dRmNUwJ0832LWHDC0cyTbnCQ&s" alt="Orienting the Orbit in 3D Space." caption="Inclination, LAN, and Argument of Perigee orient the ellipse."/>`,
    type: 'content'
  },
  {
    content: `A spy satellite needs to take pictures of the entire surface of the Earth. What kind of inclination would its orbit need?

<MultipleChoice correctAnswer={1}>
  <p>An inclination of 0 degrees (equatorial).</p>
  <p>An inclination near 90 degrees (polar).</p>
  <p>An inclination of 180 degrees (retrograde).</p>
  <p>The inclination does not matter.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Element 6: Where is the Satellite NOW?

The first five elements define the path, but they don't tell us where the satellite is on that path at a specific moment.
6.  **True Anomaly ($\nu$ or $f$):** This is the final piece of the puzzle. It is the angle between the satellite's current position and the perigee. It tells us exactly where the spacecraft is along its elliptical path *right now*.`,
    type: 'content'
  },
  {
    content: `## Think About It: The Inter-Stel Navigation System

When you see mission controllers tracking a spacecraft on a screen, they are using these six elements (and the time) to propagate its orbit forward and predict its exact position. Any engine burn (a maneuver) is designed to change one or more of these elements in a precise way to get the spacecraft onto a new, desired path. This is the language of celestial navigation.`,
    type: 'content'
  },
  {
    content: `## Up Next: The Cosmic Slingshot

Traveling between planets requires enormous amounts of delta-v. The Hohmann transfer is efficient but very slow. Is there a way to get a "free" boost of speed? Yes! By cleverly stealing a tiny bit of a planet's orbital energy. In the next module, we'll explore the incredible technique of the gravity assist.`,
    type: 'content'
  }
] as const;