
# Game Explorer

Game Explorer is a functional clone of the RAWG website. It provides users access to a vast database of games displayed on the home screen, where they can explore new games based on various filters such as genre, platform, and relevance. Users can sort and discover games by release date, average rating, and popularity, offering a comprehensive experience similar to the RAWG platform.




## Demo

You can access the live version of Game Explorer hosted on Vercel at: [Game Explorer Live](https://game-explorer-five.vercel.app/)
## Run locally

To install and run Game Explorer on your local machine:

1. Clone the repository:
```bash
  git clone https://github.com/abhijeetbanerjee1/game-explorer.git
```
2. Navigate into the project directory:
```bash
cd game-explorer
```
3. Install dependencies using npm:
```bash
npm i
```
4. To run on localhost
```bash
npm run dev
```

## Technologies Used

**Game Explorer** is built using the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing for better development and maintainability.
- **Chakra UI**: A simple, modular, and accessible component library for React that helps in building responsive and user-friendly interfaces.
- **React Query**: A powerful data-fetching library that simplifies state management and server-state synchronization, providing efficient fetching and caching mechanisms.
- **Zustand**: A minimalistic state management library that simplifies global state management, making it easy to manage and share state across components.
- **Lazy Loading**: Implemented to optimize performance by loading components only when they are needed, which improves initial loading times and enhances the user experience.
- **DRY Principle**: Adhered to throughout the codebase to minimize redundancy and improve maintainability, ensuring that code is modular and reusable.
- **Reusable Hooks and Services**: Created custom hooks and services to encapsulate logic and enhance code reusability across the application.

## Usage

Users can interact with Game Explorer in the following ways:

- **Search Bar**: At the top of the page, users can search for games by title.
- **Genre Selection**: On the left sidebar, a list of genres allows users to filter games based on their preferences.
- **Dropdown lists**:
    - **Relevance**: Users can sort games by criteria such as release date, popularity, and average rating.
    - **Platform**: This dropdown allows users to select a platform to filter games available on that system.
- **Homepage Scrolling**: Users can scroll through the games displayed on the homepage to explore available titles.
- **Game Details**: Users can click on a specific game to view more details, including the game description, screenshots, and trailers, all without leaving the website.


## Configuration

To run **Game Explorer**, you will need an API key from RAWG. Here’s how to obtain and set it up:

1. Create a Developer Account: Visit the RAWG website and sign up for a developer account.

2. Obtain Your API Key: After signing up, follow the instructions to get your API key

3. Set Up Environment Variables: In the api-client directory, create a .env file (if it doesn’t already exist) and add your API key:
```bash
RAWG_API_KEY = your_api_key_here
```
## Features

- **Dynamic Filtering and Sorting**: Easily filter games by genre and platform while sorting based on relevance criteria like release date and popularity.
- **In-Depth Game Information**: Access detailed descriptions, screenshots, and trailers for each game without leaving the main page.
- **Responsive Design**: Built with Chakra UI for a seamless experience across devices, also contains switching between Light and Dark mode.
- **Lazy Loading**: Optimizes performance by loading content as needed, reducing initial load times.
- **State Management with Zustand**: Simplifies global state management, allowing for efficient data handling across the application.
- **Enhanced User Experience**: Intuitive navigation features allow users to explore and find games quickly.
- **Integration with RAWG API**: Provides access to a vast database of games for an enriched browsing experience.

