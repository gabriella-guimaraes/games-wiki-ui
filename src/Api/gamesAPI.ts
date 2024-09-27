const url = "http://localhost:3001/api";

export async function fetchAllGames() {
    try {
        const response = await fetch(`${url}/game`);
        if(!response.ok) {
            throw new Error("An error happened while getting games!");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("An error has happened:", error);
        throw error
    }
}

export async function fetchGameDetails(id: string) {
    try {
        const response = await fetch(`${url}/game/${id}`);
        if(!response.ok) {
            throw new Error("An error happened while getting game details!");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("An error has happened:", error);
        throw error
    }
}

export async function fetchRecentGames() {
    try {
      const response = await fetch(`${url}/game?limit=3&sort=-createdAt`);
      if (!response.ok) {
        throw new Error('An error occurred while fetching recent games!');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('An error has happened:', error);
      throw error;
    }
}

export async function createGame(game: {
    title: string;
    rating: number;
    description: string;
    platform: string;
    favCharacters: string[];
    poster: string;
  }) {
    try {
      const response = await fetch(`${url}/game`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(game),
      });
  
      if (!response.ok) {
        throw new Error('An error occurred while creating the game!');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('An error has happened:', error);
      throw error;
    }
}

export async function updateGame(id: string, game: {
    title: string;
    rating: number;
    description: string;
    platform: string;
    favCharacters: string[];
    poster: string;
  }) {
    try {
      const response = await fetch(`${url}/game/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(game),
      });
  
      if (!response.ok) {
        throw new Error('An error occurred while updating the game!');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('An error has happened:', error);
      throw error;
    }
}

export async function deleteGame(id: string) {
    try {
      const response = await fetch(`${url}/game/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('An error occurred while deleting the game!');
      }
  
      // No need to return data for a DELETE request
    } catch (error) {
      console.error('An error has happened:', error);
      throw error;
    }
}