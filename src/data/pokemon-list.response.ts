// Type model for `GET https://pokeapi.co/api/v2/pokemon`.
// Used by list/detail routes to document the API contract and retain type safety.
export interface PokemonListResponse {
  // Total amount of Pokémon available in the API for the queried resource.
  count: number;

  // URL of the next page when pagination is available.
  next: string;

  // Previous page URL (null on first page).
  previous: null;

  // Minimal list payload for each Pokémon item.
  results: Result[];
}

export interface Result {
  // Pokémon slug (`pikachu`, `charizard`, etc.).
  name: string;

  // Canonical API URL containing the numeric id in its path.
  url: string;
}
