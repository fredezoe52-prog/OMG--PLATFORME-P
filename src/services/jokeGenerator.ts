// Joke Generator Service using JokeAPI
import axios from 'axios';
interface Joke {
  type: string;
  joke?: string;
  setup?: string;
  delivery?: string;
  category: string;
}
interface JokeResponse {
  error: boolean;
  category: string;
  type: string;
  joke?: string;
  setup?: string;
  delivery?: string;
}
class JokeGenerator {
  private apiUrl = 'https://v2.jokeapi.dev/joke';
  async getRandomJoke(category: string = 'Any'): Promise<Joke> {
    try {
      const response = await axios.get<JokeResponse>(`${this.apiUrl}/${category}?format=json`);
      if (response.data.error) {
        throw new Error('Failed to fetch joke from API');
      }
      const joke: Joke = {
        type: response.data.type,
        category: response.data.category,
      };
      if (response.data.type === 'single') {
        joke.joke = response.data.joke;
      } else if (response.data.type === 'twopart') {
        joke.setup = response.data.setup;
        joke.delivery = response.data.delivery;
      }
      return joke;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`API Error: ${error.message}`);
      }
      throw error;
    }
  }
  async getMultipleJokes(count: number = 5, category: string = 'Any'): Promise<Joke[]> {
    const jokes: Joke[] = [];
    for (let i = 0; i < count; i++) {
      try {
        const joke = await this.getRandomJoke(category);
        jokes.push(joke);
      } catch (error) {
        console.error(`Error fetching joke ${i + 1}:`, error);
      }
    }
    return jokes;
  }
  formatJoke(joke: Joke): string {
    let formatted = `[${joke.category}] `;
    if (joke.type === 'single' && joke.joke) {
      formatted += joke.joke;
    } else if (joke.type === 'twopart' && joke.setup && joke.delivery) {
      formatted += `${joke.setup}\n\n${joke.delivery}`;
    }
    return formatted;
  }
}
export default JokeGenerator;