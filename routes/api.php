<?php

use Illuminate\Http\Request;

Route::post('/register', 'Auth\AuthController@register');

Route::post('/login', 'Auth\AuthController@login');