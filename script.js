// ========== DADOS ==========
const navItems = [
    { label: "Início", href: "#inicio", icon: "fa-home" },
    { label: "Gaia IA", href: "#chat", icon: "fa-comments" },
    { label: "BioInovações", href: "#tecnologias", icon: "fa-microchip" },
    { label: "Sobre", href: "#sobre", icon: "fa-info-circle" }
];

const quickQuestions = [
    "O que é agricultura regenerativa?",
    "Como funcionam os biosensores?",
    "O que são redes neurais edáficas?",
    "Robôs podem regenerar solos?",
    "Como será a agricultura em 2100?"
];

const timeline = {
    2023: {
        title: "Sensoriamento Biofílico",
        desc: "Biosensores que mimetizam raízes medem a saúde do solo em tempo real. A internet das árvores transmite dados sobre a floresta.",
        img: [
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&auto=format&fit=crop"
        ],
        metrics: { "Precisão biológica": 82, "Adoção global": 45, "Redução de análises químicas": 70 },
        icon: "fa-microchip", color: "from-eco-glow to-eco-leaf",
        question: "O que é sensoriamento biofílico e como funciona?"
    },
    2030: {
        title: "Robótica Simbiótica",
        desc: "Robôs-colmeia polinizam, robôs-minhoca arejam o solo. Máquinas trabalham em harmonia com insetos e micro-organismos.",
        img: [
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop"
        ],
        metrics: { "Polinização assistida": 88, "Regeneração do solo": 65, "Redução de compactação": 92 },
        icon: "fa-robot", color: "from-eco-gold to-amber-700",
        question: "Como robôs simbióticos ajudam na regeneração?"
    },
    2050: {
        title: "Redes Neurais Edáficas
