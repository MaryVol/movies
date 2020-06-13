import MovieList from "./MovieList";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MoviePage from "./MoviePage";

let movies = {
  mData: [
    {
      id: 0,
      title: "Kill Bill: Vol2",
      release_date: "2004",
      poster_path:
        "https://i.pinimg.com/originals/64/82/ef/6482ef51ce0b437986ec477e0d46f30c.jpg",
      overview: "film description",
      runtime: "154",
      rating: "4.2",
      genre: "Action & Adventure",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium minima quas neque quos eius placeat dignissimos voluptatum sequi modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequatur? Dolorum et nam quod aperiam, numquam consequatur excepturi debitis reiciendis.",
    },
    {
      id: 1,
      title: "Kill Bill: Vol1",
      release_date: "2003",
      poster_path:
        "https://www.film.ru/sites/default/files/movies/posters/tumblr_n4k5nvk6c01tzuuzio1_1280.jpg",
      overview: "film description",
      runtime: "160",
      rating: "4.0",
      genre: "Action & Adventure",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium minima quas neque quos eius placeat dignissimos voluptatum sequi modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequatur? Dolorum et nam quod aperiam, numquam consequatur excepturi debitis reiciendis.",
    },
    {
      id: 2,
      title: "Avatar",
      release_date: "2009",
      poster_path:
        "https://i.pinimg.com/474x/54/02/bf/5402bff7eae10174026a90a073242f34--james-cameron-james-darcy.jpg",
      overview: "film description",
      runtime: "168",
      rating: "4.7",
      genre: "Science fiction",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium minima quas neque quos eius placeat dignissimos voluptatum sequi modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequatur? Dolorum et nam quod aperiam, numquam consequatur excepturi debitis reiciendis.",
    },
    {
      id: 3,
      title: "Matrix",
      release_date: "1999",
      poster_path:
        "https://cdn.shopify.com/s/files/1/1416/8662/products/matrix_1999_french_1p_original_film_art_2000x.jpg?v=1586441106",
      overview: "film description",
      runtime: "170",
      rating: "4.6",
      genre: "Science fiction",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium minima quas neque quos eius placeat dignissimos voluptatum sequi modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequatur? Dolorum et nam quod aperiam, numquam consequatur excepturi debitis reiciendis.",
    },
    {
      id: 4,
      title: "Pulp fiction",
      release_date: "1994",
      poster_path:
        "https://i.pinimg.com/originals/bf/93/bd/bf93bd7b361b9a43b54c59161966cb18.png",
      overview: "film description",
      runtime: "158",
      rating: "4.8",
      genre: "Comedy & Thriller",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium minima quas neque quos eius placeat dignissimos voluptatum sequi modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequatur? Dolorum et nam quod aperiam, numquam consequatur excepturi debitis reiciendis.",
    },
    {
      id: 5,
      title: "Django unchained",
      release_date: "2012",
      poster_path:
        "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/canadian_1sh_django_unchained_advance_WC23581_B_2_framed1.jpg?v=1581169558",
      overview: "film description",
      runtime: "165",
      rating: "4.1",
      genre: "Comedy & Thriller",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium minima quas neque quos eius placeat dignissimos voluptatum sequi modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequatur? Dolorum et nam quod aperiam, numquam consequatur excepturi debitis reiciendis.",
    },
    {
      id: 6,
      title: "The fifth element",
      release_date: "1997",
      poster_path:
        "https://www.vintagemovieposters.co.uk/wp-content/uploads/2018/10/IMG_0958.jpg",
      overview: "film description",
      runtime: "126",
      rating: "4.4",
      genre: "Action & Adventure",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium minima quas neque quos eius placeat dignissimos voluptatum sequi modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequatur? Dolorum et nam quod aperiam, numquam consequatur excepturi debitis reiciendis.",
    },
  ],
};

test("movie render", () => {
  let onclick = jest.fn();
  render(
    <div>
      <MovieList
        movies={movies.mData}
        onClick={onclick}
      />
      <MoviePage movie={movies.mData[0]}/>
    </div>
  );
  expect(screen.getByText(fireEvent.click(screen.getByText(/Kill Bill: Vol2/))).toBe(movies.mData[0].title));
  });
