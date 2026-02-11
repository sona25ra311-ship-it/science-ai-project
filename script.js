// script.js

// Function to generate random business ideas
function generateBusinessIdeas() {
    const ideas = [
        'AI-powered virtual interior designer',
        'Subscription box for eco-friendly products',
        'Mobile app for personal finance management',
        'Online platform for freelance services',
        'Health and wellness coaching app',
        'E-commerce site for handmade products',
        'Remote work productivity tools',
        'Personalized meal planning and delivery service'
    ];

    // Pick a random idea
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    return randomIdea;
}

// Example usage
console.log(generateBusinessIdeas());