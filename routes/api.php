<?php

use Illuminate\Http\Request;

// Auth routes
Route::post('/register', 'Auth\AuthController@register');
Route::post('/login', 'Auth\AuthController@login');
Route::post('/logout', 'Auth\AuthController@logout');

// Auth routes
Route::group(['middleware' => 'jwt.auth'], function () {
    // User routes
    Route::get('/user', 'Auth\AuthController@user');
    Route::get('/dashboard', 'DashboardController@index');
});
