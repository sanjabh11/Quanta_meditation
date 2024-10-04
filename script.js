const sections = {
    mindfulness: [
        { name: "Decision Making and Observer", href: "Mindfullness/Decision_Making_and_Observer.html", description: "Explore the role of the observer in decision-making processes." },
        { name: "Dynamic Potentiality to Manifestation", href: "Mindfullness/Dynamic_Potentiality_to_Manifestation.html", description: "Understand the journey from potential to reality in quantum systems." },
        { name: "Energy Flow", href: "Mindfullness/Energy Flow.html", description: "Visualize and comprehend energy flow in various systems." },
        { name: "Interactive 10th man", href: "Mindfullness/Interactive_10th_man.html", description: "Engage with the concept of the 10th man in decision theory." },
        { name: "Journey to the Real", href: "Mindfullness/Journey_to_the_Real.html", description: "Embark on a philosophical exploration of reality." },
        { name: "Noumenon to Phenomena", href: "Mindfullness/Noumenon_to_Phenomena.html", description: "Delve into the transition from the unknowable to the observable." },
        { name: "Observer's Holographic World & Void", href: "Mindfullness/Observers_Holographic_World_and_Void.html", description: "Examine the holographic principle and the nature of void." },
        { name: "The Illusion of Separation", href: "Mindfullness/The_Illusion_of_Separation.html", description: "Challenge the perception of separateness in the quantum world." },
    ],
    "quantum-physics": [
        { name: "10 QP Simulations", href: "Quantum Physics Simulations/10_QP_Simulations.html", description: "Experience 10 key quantum physics simulations." },
        { name: "Bloch sphere", href: "Quantum Physics Simulations/Bloch_sphere.html", description: "Visualize quantum states using the Bloch sphere representation." },
        { name: "Cherenkov Effect Simulator", href: "Quantum Physics Simulations/Cherenkov_Effect_Simulator.html", description: "Simulate the Cherenkov radiation effect interactively." },
        { name: "Eigenstates & eigenvalue equations", href: "Quantum Physics Simulations/Eigenstates_and_eigenvalue_equations.html", description: "Explore eigenstates and solve eigenvalue equations." },
        { name: "Electrons, Positrons & Magnetic Monopoles", href: "Quantum Physics Simulations/Electrons_Positrons_and_Magnetic_Monopoles.html", description: "Interact with simulations of fundamental particles." },
        { name: "Entropy Flow & KL Inequality Dashboard", href: "Quantum Physics Simulations/Entropy_Flow_and_KL_Inequality_Dashboard.html", description: "Analyze entropy flow and the Kullback-Leibler inequality." },
        { name: "Hilbert spaces", href: "Quantum Physics Simulations/Hilbert_spaces.html", description: "Visualize and understand Hilbert spaces in quantum mechanics." },
        { name: "Interactive Quantum Playground", href: "Quantum Physics Simulations/Interactive_Quantum_Playground.html", description: "Experiment with quantum concepts in an interactive environment." },
        { name: "Quantum Feynogram Experiment", href: "Quantum Physics Simulations/Quantum_Feynogram_Experiment.html", description: "Create and analyze Feynman diagrams for quantum processes." },
        { name: "Schrödinger Equation", href: "Quantum Physics Simulations/Schrodinger_Equation.html", description: "Solve and visualize the Schrödinger equation for various systems." },
        { name: "Superposition, Bell & GHZ state", href: "Quantum Physics Simulations/Superposition_Bell_and_GHZ_state.html", description: "Explore quantum superposition and entangled states." },
        { name: "Uncertainty, Entropy & Dirac Delta", href: "Quantum Physics Simulations/Uncertainty_Entropy_and_Dirac_Delta.html", description: "Investigate uncertainty principles and related concepts." },
    ],
    "beginning-of-infinity": [
        { name: "11.2", href: "Beginning of Infinity/11.2.html", description: "Explore chapter 11.2 of 'The Beginning of Infinity'." },
        { name: "11.3", href: "Beginning of Infinity/11.3.html", description: "Dive into chapter 11.3 of 'The Beginning of Infinity'." },
        { name: "11.4", href: "Beginning of Infinity/11.4.html", description: "Examine chapter 11.4 of 'The Beginning of Infinity'." },
        { name: "11.5", href: "Beginning of Infinity/11.5.html", description: "Study chapter 11.5 of 'The Beginning of Infinity'." },
        { name: "11.6", href: "Beginning of Infinity/11.6.html", description: "Analyze chapter 11.6 of 'The Beginning of Infinity'." },
        { name: "11.7", href: "Beginning of Infinity/11.7.html", description: "Investigate chapter 11.7 of 'The Beginning of Infinity'." },
        { name: "11.8", href: "Beginning of Infinity/11.8.html", description: "Conclude with chapter 11.8 of 'The Beginning of Infinity'." },
        { name: "Ch 9 combined", href: "Beginning of Infinity/Ch_9_combined.html", description: "Review the combined content of Chapter 9." },
        { name: "index", href: "Beginning of Infinity/index.html", description: "Access the main index of 'The Beginning of Infinity'." },
        { name: "test", href: "Beginning of Infinity/test.html", description: "Take a test on the concepts covered in 'The Beginning of Infinity'." },
    ]
};

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <a href="${item.href}">View Content</a>
    `;
    return card;
}

function displaySection(sectionName) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    sections[sectionName].forEach(item => {
        content.appendChild(createCard(item));
    });
}

function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displaySection(button.dataset.section);
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const content = document.getElementById('content');
        content.innerHTML = '';
        Object.values(sections).flat().forEach(item => {
            if (item.name.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm)) {
                content.appendChild(createCard(item));
            }
        });
    });
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupSearch();
    setupThemeToggle();
    displaySection('mindfulness'); // Display the first section by default
});