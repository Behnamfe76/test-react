


> **This is a testing project made of technologies as following :**
> **BACKEND** : Laravel 10
> **FRONTEND** : Inertia.js (react.js)

> **Additional packages have been used as following :**
> **Laravel-medialibrary** : Associate files with Eloquent models.
> **Laravel-permission** : Associate users with roles and permissions
> **nwidart/laravel-modules** : A Laravel package which was created to manage large Laravel app using modules. 
> **laravel/breeze** : [Laravel Breeze](https://github.com/laravel/breeze) is a minimal, simple implementation of all of Laravel's [authentication features](https://laravel.com/docs/10.x/authentication), including login, registration, password reset, email verification, and password confirmation.
> **pestphp/pest** : A testing framework for app's tests.

 > **Application's architecture is as following :**
 > By default Laravel is based on MVC, but it's not optimized for large scale projects. Here Domain Driven Design (ddd) is used.
 > To resolve this issue in this project we used ddd, and **nwidart/laravel-modules** is used to make it work.

> **All you have to do to work with app is as following :**
>  1. Clone the source code from github
>  2. Install the dependencies using the following commands :
>  `composer install`
>  `npm install`
>  3. Make a .env file using .env.example
>  4. Generate APP_KEY if not exists in .env file using following command :
>  `php artisan key:generate` 
>  5. Prepare database configuration in .env file  
> 6. Prepare mail configuration in .env file, you can use mailtrap as a testing mail service
> 7. Run migrations in order to make database tables using following command : 
> `php artisan migrate`
> 8. It's Optional, you can have a testing fake data  to see the app's functionality by running the following command :
> `php artisan db:seed`

