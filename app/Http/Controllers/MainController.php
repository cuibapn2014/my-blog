<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\photos;
use App\post;
use App\User;
use Auth;

class MainController extends Controller
{
    //
	public function index(){
		Carbon::setLocale('vi');
		$post = post::orderBy('id','desc')->limit(5)->get();
		$photos = photos::orderBy('id','desc')->limit(15)->get();
		$colum = round(count($photos)/3);
		return view('index.index',['post' => $post,'photos' => $photos,'colum' => $colum]);
	}
	
	public function post(){
		Carbon::setLocale('vi');
		$post = post::orderBy('id','desc')->get();
		return view('index.post',['post' => $post]);
	}
	public function photos(){
		$photos = photos::orderBy('id','desc')->get();
		$colum = round(count($photos)/3);
		return view('index.photos',['photos' => $photos,'colum' => $colum]);
	}
}
