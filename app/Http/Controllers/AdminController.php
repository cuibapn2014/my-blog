<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use Illuminate\Support\Str;
use App\Blog;
use Carbon;

class AdminController extends Controller
{
	//
	public function __construct()
	{
		if (Auth::check()) {
			View::share('user', Auth::user());
		}
	}

	public function login()
	{
		if (Auth::check()) {
			return redirect('admin');
		} else {
			return view('index.admin.signin');
		}
	}

	public function postLogin(request $req)
	{
		$this->validate(
			$req,
			[
				'username' => 'required',
				'password' => 'required',
			],
			[
				'username.required' => 'Bạn chưa nhập tải khoản',
				'password.required' => 'Bạn chưa nhập mật khẩu',
			]
		);
		$remember = $req->has('remember') ? true : false;
		if (Auth::attempt(['username' => $req->username, 'password' => $req->password], $remember)) {
			return redirect('admin');
		} else {
			return back()->with('danger', 'Tài khoản hoặc mật khẩu không đúng');
		}
	}

	public function getLogout()
	{
		Auth::logout();

		return back();
	}

	public function index()
	{
		$blog = Blog::orderBy('id', 'desc')->paginate(15);
		return view('index.admin.index', ['blog' => $blog]);
	}

	public function insert()
	{
		return view('index.admin.insert');
	}

	public function edit($id)
	{
		$blog = Blog::findOrFail($id);
		return view('index.admin.edit', ['blog' => $blog]);
	}

	public function postEdit(Request $req, $id)
	{
		$blog = Blog::findOrFail($id);
		$this->validate($req, [
			'title' => 'required',
			'description' => 'required',
			'content' => 'required',
			'thumbnail' => 'required'
		]);
		$blog->title = $req->input('title');
		$blog->description = $req->input('description');
		$blog->content = $req->input('content');
		$blog->thumbnail = $req->input('thumbnail');
		$blog->publish = $req->has('is_publish') ? 1 : 0;
		$blog->slug = Str::slug($blog->title);
		$blog->save();
		return back()->with('success', 'Cập nhật thành công');
	}

	public function postBlog(Request $req)
	{
		$blog = new Blog();
		$this->validate($req, [
			'title' => 'required',
			'description' => 'required',
			'content' => 'required',
			'thumbnail' => 'required'
		]);
		$blog->title = $req->input('title');
		$blog->description = $req->input('description');
		$blog->content = $req->input('content');
		$blog->thumbnail = $req->input('thumbnail');
		$blog->publish = $req->has('is_publish') ? 1 : 0;
		$blog->slug = Str::slug($blog->title);
		$blog->save();
		return back()->with('success', 'Đã thêm thành công');
	}
}
