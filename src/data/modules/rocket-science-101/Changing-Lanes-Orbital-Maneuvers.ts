export const sections = [
  {
    content: `## You Can't Just Steer

Once you're in a stable orbit, you can't just point your spacecraft in a new direction and fire the engine. A burn in any direction will change your velocity, which, according to Kepler's Laws, will change the shape and size of your elliptical orbit. Orbital maneuvering is a precise, and often counter-intuitive, ballet of applying thrust at the right place and time.`,
    type: 'content'
  },
  {
    content: `## The Hohmann Transfer: The Most Efficient Route

The most fundamental orbital maneuver is the **Hohmann transfer orbit**. It is the most fuel-efficient way to move a spacecraft between two different circular orbits that are in the same plane (coplanar). Imagine you are in a low circular parking orbit around Earth and want to get to a higher circular orbit.

The process involves two short engine burns:
1.  **Burn 1 (Prograde):** You fire your engine in your direction of travel (a prograde burn). This adds energy to your orbit. Your spacecraft is now too fast for its current circular orbit, so it begins to climb into a new, larger elliptical orbit. The point of this first burn becomes the **perigee** (lowest point) of your new transfer orbit.
2.  **Burn 2 (Prograde):** You time your transfer orbit so that it just touches the higher circular orbit you want to reach. As you arrive at the **apogee** (highest point) of your transfer orbit, you fire your engine prograde again. This second burn adds more energy, raising your perigee and circularizing your orbit at the new, higher altitude.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Gcot7zaoUuEvBk38AxTqVpCSX45Sh8xjIA&s" alt="The Hohmann Transfer Maneuver." caption="Two engine burns are required to move between circular orbits efficiently."/>`,
    type: 'content'
  },
  {
    content: `To move from a lower orbit to a higher orbit using a Hohmann transfer, you perform two separate engine burns in the _________ direction.

<FillInTheBlank correctAnswer="prograde" placeholder="Enter the term for 'in the direction of travel'..." />`,
    type: 'interactive'
  },
  {
    content: `## Thinking Counter-Intuitively

What if you want to lower your orbit? You do the opposite. You fire your engine **retrograde** (against the direction of travel). This removes energy from your orbit, causing you to slow down. You are now too slow to maintain your circular orbit, so you fall to a lower altitude. A second retrograde burn at the new perigee will then circularize your orbit at the lower altitude.

**The key takeaway:** In orbit, to go faster in the long run (i.e., a shorter orbital period), you first have to slow down to enter a lower orbit. To go slower in the long run (a longer period), you first have to speed up to enter a higher orbit!`,
    type: 'content'
  },
  {
    content: `## Let's Do the Math: A Trip to Geostationary Orbit

A satellite is in a 300 km altitude circular parking orbit around Earth. It wants to move to a geostationary orbit (GEO) at 42,164 km from the Earth's center. We need to calculate the total delta-v for the two burns of the Hohmann transfer.

**Knowns:**
-   Velocity in the initial circular orbit ($v_{c1}$): **7,726 m/s**
-   Velocity needed at the perigee of the transfer orbit ($v_{p}$): **10,150 m/s**
-   Velocity needed at the apogee of the transfer orbit ($v_{a}$): **1,610 m/s**
-   Velocity in the final circular GEO orbit ($v_{c2}$): **3,075 m/s**

**Calculations:**
1.  **Delta-v for Burn 1 ($\Delta v_1$):** This is the change in velocity to go from the initial circular orbit to the transfer orbit's perigee.
    $\Delta v_1 = v_p - v_{c1}$
2.  **Delta-v for Burn 2 ($\Delta v_2$):** This is the change in velocity to go from the transfer orbit's apogee to the final circular orbit.
    $\Delta v_2 = v_{c2} - v_a$

Calculate the total delta-v required ($\Delta v_{total} = \Delta v_1 + \Delta v_2$).

<FillInTheBlank correctAnswer="3889" placeholder="Enter total delta-v in m/s, rounded to the nearest whole number..." />`,
    type: 'interactive'
  },
  {
    content: `## Other Maneuvers: Plane Changes

What if your target orbit is in a different plane? A Hohmann transfer won't work. You need to do a **plane change maneuver**. This involves firing your engine perpendicular to your direction of travel at the point where the two orbital planes intersect.

Plane change maneuvers are *extremely* expensive in terms of delta-v, especially for large angle changes. This is why mission planners go to great lengths to launch a rocket directly into the desired orbital plane from the start.`,
    type: 'content'
  },
  {
    content: `A spacecraft in an equatorial orbit needs to move to a polar orbit (a 90-degree plane change). This maneuver would be:

<MultipleChoice correctAnswer={2}>
  <p>Very simple and fuel-efficient.</p>
  <p>Achieved with a standard Hohmann transfer.</p>
  <p>Extremely fuel-intensive and require a large amount of delta-v.</p>
  <p>Impossible to perform once in orbit.</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## Up Next: How Do We Know Where We Are?

We know how to move around. But how do we describe our position and path in space with precision? An orbit is defined by a specific set of parameters that tell us its size, shape, and orientation in 3D space. In the next module, we'll learn the language of orbits by exploring the six classical orbital elements.`,
    type: 'content'
  }
] as const;