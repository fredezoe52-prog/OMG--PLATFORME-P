import { Request, Response } from 'express';

// Handler for getting a random joke
export const getRandomJoke = async (req: Request, res: Response) => {
    // Example joke data, you can replace this with a real joke API call
    const jokes = [
        'Why don't scientists trust atoms? Because they make up everything!',
        'I told my computer I needed a break, and it froze!',
        'Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears!',
    ];
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json({ joke: jokes[randomIndex] });
};

// Handler for getting jokes by category
export const getJokesByCategory = async (req: Request, res: Response) => {
    const category = req.params.category;
    // Here you would usually call a service to get jokes of the requested category
    res.json({ message: `Jokes from the ${category} category` });
};

// Handler for submitting a joke
export const submitJoke = async (req: Request, res: Response) => {
    const { joke } = req.body;
    // Logic to save the joke, e.g., to a database
    res.status(201).json({ message: 'Joke submitted successfully!', joke });
};
