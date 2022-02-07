<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\bill;
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

Route::get('/', 'MainController@index');

Route::get('about-me', function () {
	return view('index.about');
});

Route::get('post', 'MainController@post');
Route::get('photos', 'MainController@photos');

Route::get('login', 'AdminController@login');
Route::post('login', 'AdminController@postLogin');
Route::get('logout', 'AdminController@getLogout');

Route::group(['prefix' => 'admin', 'middleware' => 'checklogin'], function () {
	Route::get('/', function () {
		return view('index.admin.index');
	});
	Route::get('photos', function () {
		return view('index.admin.photos');
	});
	Route::post('/', 'AdminController@postBaiViet');
	Route::post('photos', 'AdminController@postPhotos');
});
