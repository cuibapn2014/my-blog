<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\User;
use App\post;
use App\photos;

class AdminController extends Controller
{
    //
	public function __construct()
	{
		if(Auth::check())
		{
			View::share('user',Auth::user());
		}
	} 
	
	public function login(){
		if(Auth::check()){
			return redirect('admin');
		}else{
		return view('index.admin.signin');
		}
	}
	
	public function postLogin(request $req){
		$this->validate($req,
		[
			'username' => 'required',
			'password' => 'required',
		],
		[
			'username.required' => 'Bạn chưa nhập tải khoản',
			'password.required' => 'Bạn chưa nhập mật khẩu',
		]);
		$remember = $req->has('remember') ? true : false;
		if(Auth::attempt(['username' => $req->username,'password' => $req->password],$remember)){
			return redirect('admin');
		}else{
			return back()->with('danger','Tài khoản hoặc mật khẩu không đúng');
		}
	}
	
	public function getLogout(){
		Auth::logout();
		return back();
	}
	
	public function postBaiViet(request $req){
		$post = new post();
		$this->validate($req,
		[
			'content' => 'required',
		],
		[
			'content.required' => 'Bạn chưa thêm nội dung',
		]);
		$content = $req->content;
		$post->content = $content;
		$post->save();
		return back()->with('notice','Thêm thành công');
	}
	
	public function postPhotos(request $req){
		$photos = new photos();
		$this->validate($req,
		[
			'_link' => 'required',
		],
		[
			'_link.required' => 'Bạn chưa thêm đường dẫn ảnh',
		]);
		$_link = $req->_link;
		$photos->_link = $_link;
		$photos->save();
		return back()->with('notice','Thêm thành công');
	}
}
