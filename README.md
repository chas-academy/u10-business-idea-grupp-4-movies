# MovieMatcher
https://moviematcher.netlify.app/

## Why MovieMatcher?
Have you and your friend or significant other ever had trouble deciding on what to watch? If so, then MovieMatcher is the perfect app for you! Users can register an account, then find their friends in our database, add them to their friends list and start swiping! MovieMatcher only allows you to swipe with your friends, so you won't get any weird matches with people you don't know. You're also able to choose, specifically, which friend to swipe with and your matches are saved in our database for you to always go back and check what you've matched with in the past. It's as easy as one, two and swipe!

## Contributors
<table>
  <tr>
    <td align="center">
        <a href="https://github.com/LinusUnghammar">
            <img src="https://avatars.githubusercontent.com/u/70320500?v=4" width="100;" alt="LinusUnghammar"/>
            <br />
            <sub><b>LinusUnghammar</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/frankemon">
            <img src="https://avatars.githubusercontent.com/u/70698241?v=4" width="100;" alt="frankemon"/>
            <br />
            <sub><b>frankemon</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/jagestedt">
            <img src="https://avatars.githubusercontent.com/u/72127499?v=4" width="100;" alt="jagestedt"/>
            <br />
            <sub><b>jagestedt</b></sub>
        </a>
    </td>
  </tr>
</table>

## About the project

### Built with
- [Laravel](https://laravel.com/)
- [Angular](https://angular.io/)
- [Tailwindcss](https://tailwindcss.com/)

## Code Standards
If you intend to work on this project, it is important to follow the code standards we have set up for this project.

### In general
- Classes should be declared in PascalCase
- Variables, methods/functions should be declared in camelCase

### Laravel
Laravel is written in php therefore we have chosen to follow [PSR-12](https://www.php-fig.org/psr/psr-12/)<br/>
To make life easier we use php [codesniffer](https://github.com/squizlabs/PHP_CodeSniffer).

### Angular
We are following the strict rules of [TypeScript](https://www.typescriptlang.org/).

## Getting started

### Laravel 
- clone this repo
- `cd backend`
- install dependencies `composer install` (run composer update if needed)
- Create .env file `cp .env.example .env`
- Fill in TMDB_KEY with your TMDB API key
- generate app key `php artisan key:generate` 
- run project with docker `./vendor/bin/sail up`
- create the tables `./vendor/bin/sail artisan migrate`
- seed the tables with `./vendor/bin/sail artisan db:seed`

### Angular 
To run frontend commands Angular CLI is required. Install with `npm install -g @angular/cli` 
- clone this repo
- `cd frontend`
- install dependencies `npm install`
- create .env file `cp .env.example .env`
- make sure your `API_URL` in `.env` is correct and connected to the backend
- run `ng serve`
- dev server will be found on `http://localhost:4200/`

## License 
Distributed under the [MIT](https://mit-license.org/) License

## Example (Swiping)
### User page
<figure>
  <img src="https://cdn.discordapp.com/attachments/763816365554532363/851908008145715290/unknown.png"></img>
  <figcaption>On the user page you can see your friends, incoming requests and send requests to other users. (For now the swipe-button in the friends table takes you to the swipe page, but could be used to instantly swipe against that friend)</figcaption>
</figure>

### Swipe page
<figure>
  <img src="https://cdn.discordapp.com/attachments/763816365554532363/851907028564705300/unknown.png"></img>
  <figcaption>Once you have a friend you can select them from the dropdown and the first movie will appear as a card with some info. Under the card is the dislike/like-buttons. A click on the right (thumbs up) will add that movie to a list of approved movies and then the next movie card shows up. If your friend has liked the same movie, it's a match. If you click on the thumbs down you will just be shown the next movie card.</figcaption>
</figure>

### Matches page
<figure>
  <figcaption>On the matches page you can choose a friend from the dropdown and it will display all matches.</figcaption>
  <img src="https://cdn.discordapp.com/attachments/763816365554532363/851910487024861244/unknown.png"></img>
</figure>


