# MovieMatcher
https://moviematcher.netlify.app/

## Why MovieMatcher?
You know when you and your friend/partner are trying to find a movie that both of you want to see? It can take a long time to find a movie that both approve of... With MovieMatcher, you swipe the movies you want to watch and your friend/partner does the same. The app matches all your approving swipes and displays them in a couple-specific list.

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
We are following the strict rules of [TypeScript](https://www.typescriptlang.org/) and the 

## Getting started

### Laravel 
- clone this repo
- cd backend
- install dependencies `composer install` (run composer update if needed)
- Create .env file `cp .env.example .env`
- Fill in TMDB_KEY with your TMDB API key
- generate app key `php artisan key:generate` 
- run project with docker `./vendor/bin/sail up`
- create the tables `./vendor/bin/sail artisan migrate`
- seed the tables with `./vendor/bin/sail artisan db:seed`

### Angular 
Frontend is generated with angular CLI, so a good idea to install it `npm install -g @angular/cli` 
- clone this repo
- cd frontend
- install dependencies `npm install`
- create .env file `cp .env.example .env`
- make sure your `API_URL` in `.env` is correct and connected to the backend
- run `ng serve`
- dev server will be found on `http://localhost:4200/`

## License 
Distributed under the [MIT](https://mit-license.org/) License
