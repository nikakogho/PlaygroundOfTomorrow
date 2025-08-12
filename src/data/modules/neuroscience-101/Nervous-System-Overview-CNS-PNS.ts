export const sections = [
    {
        content: `## The Body's Command and Control

We've seen the building blocks, now let's look at the blueprint. The **Nervous System** is the entire network of neurons and glia that controls the body. Its primary division is between the central and peripheral systems.

-   **Central Nervous System (CNS):** The brain and spinal cord. This is the integration and command center.
-   **Peripheral Nervous System (PNS):** The vast network of nerves that connect the CNS to every other part of the body. It's the communication highway.`,
        type: 'content'
    },
    {
        content: `## The Peripheral Nervous System (PNS)

The PNS has two main subdivisions:
1.  The **Somatic Nervous System:** This is the part you have conscious control over. It carries sensory information from the skin, muscles, and joints to the CNS, and carries motor commands from the CNS to the skeletal muscles.
2.  The **Autonomic Nervous System:** This system operates automatically, without your conscious thought. It regulates your internal organs and glands—things like your heart rate, digestion, and breathing.`,
        type: 'content'
    },
    {
        content: `The system responsible for contracting the muscles in your arm to pick up a cup is the ________ nervous system.

<FillInTheBlank correctAnswer="somatic" placeholder="Enter the term..." />`,
        type: 'interactive'
    },
    {
        content: `## Fight or Flight vs. Rest and Digest

The **Autonomic Nervous System** is itself divided into two opposing branches that keep your body in balance (**homeostasis**).
-   The **Sympathetic Nervous System:** This is your "fight or flight" system. It arouses the body to deal with perceived threats, increasing heart rate, mobilizing energy, and shutting down non-essential functions like digestion.
-   The **Parasympathetic Nervous System:** This is your "rest and digest" system. It calms the body down after the danger has passed, slowing the heart rate and stimulating digestion.`,
        type: 'content'
    },
    {
        content: `<ImageEmbed src="https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/b/109765/files/2019/09/Blog-Post.jpeg" alt="Sympathetic vs. Parasympathetic Nervous System." caption="The two branches of the autonomic nervous system have opposing effects to maintain balance."/>`,
        type: 'content'
    },
    {
        content: `Immediately after a sudden scare, your heart is pounding. This is the result of your ________ nervous system being activated.

<MultipleChoice correctAnswer={2}>
  <p>Somatic</p>
  <p>Parasympathetic</p>
  <p>Sympathetic</p>
  <p>Central</p>
</MultipleChoice>`,
        type: 'interactive'
    },
    {
        content: `## Up Next: The Central Highway

We've seen how the PNS connects the body to the command center. Now, let's turn our attention to the CNS itself. We'll start our tour from the bottom up, beginning with the crucial information highway that is the spinal cord and the life-sustaining brainstem.`,
        type: 'content'
    }
] as const;