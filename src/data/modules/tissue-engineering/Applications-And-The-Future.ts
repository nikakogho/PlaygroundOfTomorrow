export const sections = [
  {
    content: `## Is This Really Happening?

We've covered a lot of theory. But is tissue engineering actually being used to treat patients? The answer is **yes**.

While we're still far from printing a whole heart on demand, several engineered tissues have successfully made the leap from the lab to the clinic, changing lives today.`,
    type: 'content'
  },
  {
    content: `## Success Story 1: Skin Grafts

The most established application is in engineered skin for burn victims or patients with chronic ulcers.

Companies like Organogenesis developed products like Apligraf. It's a bilayered skin equivalent, with a lower dermal layer of fibroblasts in a collagen gel and an upper epidermal layer of keratinocytes. It doesn't replace the skin permanently, but it provides a "living bandage" that promotes the patient's own tissue to heal.`,
    type: 'content'
  },
  {
    content: `<ImageEmbed src="https://pub.mdpi-res.com/cells/cells-09-01622/article_deploy/html/images/cells-09-01622-ag-550.jpg?1596114822" alt="A sheet of engineered skin." caption="Engineered skin is one of the first major clinical successes."/>`,
    type: 'content'
  },
  {
    content: `## Success Story 2: Cartilage Repair

Cartilage in joints like the knee has very poor self-healing ability. One of the first cell-based therapies, Autologous Chondrocyte Implantation (ACI), involves:
1.  Taking a small biopsy of healthy cartilage from the patient's knee.
2.  Growing those cartilage cells (chondrocytes) in the lab.
3.  Implanting the new cells back into the damaged area, often under a patch.

This uses the patient's own cells to repair the defect.`,
    type: 'content'
  },
  {
    content: `Autologous Chondrocyte Implantation (ACI) is a procedure used to repair which type of tissue?

<MultipleChoice correctAnswer={0}>
  <p>Cartilage</p>
  <p>Bone</p>
  <p>Nerve</p>
  <p>Skin</p>
</MultipleChoice>`,
    type: 'interactive'
  },
  {
    content: `## The Holy Grail: Complex Organs

The biggest challenges lie ahead. Engineering complex, solid organs like the liver, kidney, or heart is incredibly difficult. Why?
- **Vascularization:** A thick tissue needs its own blood supply (arteries, veins, capillaries) to survive. This is arguably the #1 challenge in the field.
- **Scale and Complexity:** An organ isn't just one cell type; it's dozens of cell types organized in a highly specific 3D architecture.
- **Integration:** How do you connect a lab-grown organ to the body's existing plumbing and wiring?`,
    type: 'content'
  },
  {
    content: `The greatest technical hurdle to engineering thick, complex organs is creating a blood supply network, a problem known as _____________.

<FillInTheBlank correctAnswer="vascularization" placeholder="Enter the term..." />`,
    type: 'interactive'
  },
  {
    content: `## The Future is Personal

Where is this all going?
- **Organs-on-a-Chip:** Miniaturized models of human organs used for drug testing, providing a better alternative to animal models.
- **3D Bioprinting:** The technology is rapidly advancing, allowing for more complex and precise placement of cells and materials.
- **Personalized Medicine:** Using a patient's own iPSCs to create tissues to test which drugs will work best for them *before* administering them.`,
    type: 'content'
  },
  {
    content: `## Course Complete!

Congratulations! You've journeyed through the core principles of tissue engineering, from the fundamental triad of cells, scaffolds, and signals, to the bioreactors that nurture them and the real-world applications they enable.

This field represents a fundamental shift in medicine—from treating symptoms to rebuilding and regenerating the body itself. The future you imagined in the first lesson is being built, one cell at a time.`,
    type: 'content'
  }
] as const;