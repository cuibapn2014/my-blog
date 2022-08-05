<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('auth/facebook', 'Auth\AuthController@redirectToFacebook')->name('auth.facebook');
Route::get('auth/facebook/callback', 'Auth\AuthController@handleFacebookCallback');

Route::get('login', 'AdminController@login');
Route::post('login', 'AdminController@postLogin');
Route::get('logout', 'AdminController@getLogout');

Route::group(['prefix' => 'admin', 'middleware' => 'checklogin'], function ($router) {
	$router->get('/', 'AdminController@index')->name('admin.index');
	$router->get('/insert', 'AdminController@insert')->name('admin.insert');
	$router->post('/insert', 'AdminController@postBlog')->name('admin.insert.post');
	$router->get('/edit/{id}', 'AdminController@edit')->name('admin.edit');
	$router->post('/edit/{id}', 'AdminController@postEdit')->name('admin.edit.post');
});

Route::group(['middleware' => 'checkroute'], function ($router) {
	$router->get('/{any?}', 'MainController@index')->where('any', '(.+)?')->name('home');
});
