import cohere
from .test_image_parse import detect_handwritten_ocr
co = cohere.Client('pQG4CTXENvjZqtXcY6dbUoXDF8rKxiTa43x7Qx2Y')
def get_suggestions(img):
  response = co.generate(
    model='xlarge',
    prompt='Note: If a single elementary operation of any type is performed on a system of linear equations, then the system produced will be equivalent to the original system.\n\nSuggest areas to look into: Linear Algebra, Systems of Equations, Dot product, Cross product\n--\nNote: In differential calculus and differential geometry, an inflection point, point of inflection, flex, or inflection is a point on a smooth plane curve at which the curvature changes sign.\n\nSuggest areas to look into: Second derivative test, Derivatives, concavity, curvature\n--\n\nNote: A covalent bond is a chemical bond that involves the sharing of electrons to form electron pairs between atoms. These electron pairs are known as shared pairs or bonding pairs. The stable balance of attractive and repulsive forces between atoms, when they share electrons, is known as covalent bonding.\n\nSuggest areas to look into: Ionic bonding, types of bonds, intramolecular forces\n--\nNote: First law of thermodynamics: aka The Law of Conservation of Energy; a statement of our experience that energy is conserved in any process. We can express the first law in many ways. One of the more useful expressions is that the change in internal energy, ∆E, of a system in any process is equal to the heat, q, added to the system, plus the work, w, done on the system by its surroundings: ∆E = q + w.\n\nSuggest areas to look into: Thermodynamics, Heat, specific heat, heat transfer, work, internal energy, enthalpy\n--\nNote: Kinematics is the study of motion of a system of bodies without directly considering the forces or potential fields affecting the motion. In other words, kinematics examines how the momentum and energy are shared among interacting bodies.\n\nSuggest areas to look into: Work, power, kinetic energy, potential energy, energy, impulse, momentum, velocity, acceleration\n--\nNote: Gravitational potential energy is the energy possessed or acquired by an object due to a change in its position when it is present in a gravitational field. In simple terms, it can be said that gravitational potential energy is an energy that is related to gravitational force or to gravity.\n\nSuggest areas to look into: Gravitational potential energy, Energy, Work, Power\n--\nNote: \"It may be said that in this more than in any other play Shakespeare comes near to being a commentator on himself, and to giving us his own authority for the true interpretation. In the prologue it is the author who speaks: this opening of the plot exhibits, not sin and its consequences, but a suggestion of entangling circumstance; when he speaks of the \"fatal loins\" of the parents, the \"star-cross\'d lovers,\" and their \"misadventured piteous overthrows,\" Shakespeare is using the language of destiny and pathos. For what is spoken in the scenes the speakers alone are responsible; yet a succession of striking passages has the effect of carrying on the suggestion of the prologue - dramatic foreshadowings, unconscious finger-pointings to the final tragedy, just like the shocks of omen that in ancient drama brought out the irony of fate.\" [Richard G. Moulton, The Moral System of Shakespeare]\n\nSuggest areas to look into: Shakespeare, Romeo and Juliet, Richard III, Hamlet, Othello, Macbeth, King\n--\nNote: Portia is the strong and devoted wife of Brutus. Her most notable moment in the play is when she reveals to her husband that she has wounded herself to demonstrate her strength and courage (2.1.300). Her act proves to Brutus that she is worthy to hear his troubles, and he is about to tell her his plan when they are interrupted by Ligarius. Knowing Brutus\'s cause is lost to Antony and Octavius, Portia commits suicide \n\nSuggest areas to look into: Shakespeare, Julius Caesar, Portia\n--\nNote: A gene is a unit of heredity that corresponds to a region of deoxyribonucleic acid (DNA) that carries genetic information that controls form or function of an organism. DNA is composed of two polynucleotide chains that coil around each other to form a double helix. It is found as linear chromosomes in eukaryotes, and circular chromosomes in prokaryotes.\n\nSuggest areas to look into: DNA, RNA, Genes, DNA replication, DNA polymerase, DNA replication, Genetic code\n--\nNote: A species is a group of organisms that mate with one another and speciation is the process by which one lineage splits into two lineages as a result of having evolved independently from each other. For speciation to occur, there has to be reproductive isolation.[90] Reproductive isolation can result from incompatibilities between genes as described by Bateson–Dobzhansky–Muller model. Reproductive isolation also tends to increase with genetic divergence. Speciation can occur when there are physical barriers that divide an ancestral species, a process known as allopatric speciation.\n\nSuggest areas to look into: Genetic divergence, Reproductive isolation, Allopatric speciation, speciation\n--\nNote: A binary search tree, also called an ordered or sorted binary tree, is a rooted binary tree data structure with the key of each internal node being greater than all the keys in the respective node\'s left subtree and less than the ones in its right subtree.\n\nSuggest areas to look into: Binary search tree, Trees, Binary tree, Binary tree traversal, Binary search\n--\nNote: Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. Extra memory, usually a stack, is needed to keep track of the nodes discovered so far along a specified branch which helps in backtracking of the graph.\n\nSuggest areas to look into: Depth-first search, Breadth-first search, Graph theory, Graph traversal\n--\nNote: ' + detect_handwritten_ocr(img) + '\n\nSuggest areas to look into:',
    max_tokens=20,
    temperature=0.2,
    k=0,
    p=1,
    frequency_penalty=0,
    presence_penalty=0,
    stop_sequences=["--"],
    return_likelihoods='NONE')
  #print('Prediction: {}'.format(response.generations[0].text))
  return response.generations[0].text
