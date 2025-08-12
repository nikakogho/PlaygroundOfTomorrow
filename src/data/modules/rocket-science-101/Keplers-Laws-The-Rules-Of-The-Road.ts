export const sections = [
  {
    content: `## Before Newton, There Was Kepler

Long before Isaac Newton formulated his law of universal gravitation, a German astronomer named **Johannes Kepler** meticulously analyzed decades of observational data of the planets. Through pure empirical analysis, he derived three laws that perfectly described their motion. These laws are the foundation of orbital mechanics.`,
    type: 'content'
  },
  {
    content: `## Kepler's First Law: The Law of Ellipses

**"The orbit of every planet is an ellipse with the Sun at one of the two foci."**

For centuries, everyone assumed orbits must be perfect circles. Kepler's first major breakthrough was realizing they are actually **ellipses**—a kind of "squashed" circle. The body being orbited (like the Sun, or the Earth) isn't at the center of the ellipse, but at one of its two **foci**.

This means that during its orbit, a spacecraft is not always at the same distance from the Earth.
-   **Perigee:** The point in an orbit closest to Earth.
-   **Apogee:** The point in an orbit farthest from Earth.
(For orbits around the Sun, these are called Perihelion and Aphelion).`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://angelrls.com/wp-content/uploads/2016/11/moon_orbit.jpg" alt="Kepler's First Law: An Elliptical Orbit." caption="Orbits are ellipses, not circles, with the central body at one focus."/>`,
    type: 'content'
  },
  {
    content: `A satellite in an elliptical orbit around Earth is at the point in its orbit farthest from the planet. This point is called the ________.

<FillInTheBlank correctAnswer="apogee" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## Kepler's Second Law: The Law of Equal Areas

**"A line joining a planet and the Sun sweeps out equal areas during equal intervals of time."**

This sounds complicated, but the consequence is simple and profound: **A spacecraft moves fastest when it is closest to the body it's orbiting (at perigee) and slowest when it is farthest away (at apogee).**

The gravitational pull is stronger at perigee, "whipping" the spacecraft around, and weaker at apogee, allowing it to move more leisurely. This is a consequence of the conservation of angular momentum.`,
    type: 'content'
  },
  {
    content: `Imagine a pizza. Kepler's 2nd Law is like saying that if you cut a slice from the center, a short, fat slice near the center has the same area as a long, skinny slice that reaches to the edge. The satellite "eats" these equal-area slices in equal amounts of time. To cover the long, skinny slice in the same time as the short, fat one, it has to move much faster when it's near the center.`,
    type: 'content'
  },
  {
    content: `At which point in its elliptical orbit is a satellite traveling at its maximum speed?

<MultipleChoice correctAnswer={0}>
  <p>Perigee (closest point)</p>
  <p>Apogee (farthest point)</p>
  <p>The speed is constant throughout the orbit.</p>
  <p>At the midpoint between perigee and apogee.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Kepler's Third Law: The Law of Harmonies

**"The square of the orbital period of a planet is directly proportional to the cube of the semi-major axis of its orbit."**

In simpler terms: **The farther away a spacecraft is from the body it's orbiting, the longer it takes to complete one orbit.**

This makes intuitive sense. A satellite in a higher orbit not only has a longer path to travel, but according to Kepler's Second Law, it's also moving slower. These two effects combine to make higher orbits have much longer periods. For example, a satellite in LEO takes ~90 minutes to circle the Earth, while a satellite in a geostationary orbit (much higher) takes 24 hours. The Moon takes 27.3 days.`,
    type: 'content'
  },
  {
    content: `## Think About It: The Geostationary Orbit

There is a special orbit high above the Earth's equator (at an altitude of 35,786 km) where Kepler's Third Law results in an orbital period of exactly 24 hours. Since this matches the Earth's rotation, a satellite in this **geostationary orbit** appears to hang motionless in the sky from the perspective of an observer on the ground. This is incredibly useful for communications satellites and weather satellites.`,
    type: 'content'
  },
  {
    content: `## Up Next: Changing Our Path

Kepler's laws tell us how a spacecraft will move if left alone. But what if we want to change our orbit? How do we go from a low circular orbit to a higher one? We can't just "steer" there. We have to use our engine to perform precise maneuvers. In the next module, we'll learn how to change lanes on the cosmic highway.`,
    type: 'content'
  }
] as const;