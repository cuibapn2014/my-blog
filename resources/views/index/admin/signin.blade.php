@extends('layout.login_master')
@section('content')
	<style>
		body{
			background-color:#ffc107;
		}
	</style>
	<div class="col-lg-6 col-md-10 col-sm-12 mx-auto bg-light p-3 mt-4">
		<h2>Blog của tui</h2>
		<hr/>
		@if(count($errors) > 0)
			@foreach($errors as $err)
			<p class="alert alert-danger">{{$err}}</p>
		@endforeach
		@endif
		@if(session('danger'))
			<p class="alert alert-danger">{{session('danger')}}</p>
			@endif
		<form action="login" method="post">
		<input type="hidden" name="_token" value="{{csrf_token()}}"/>
			<div class="form-group">
				<label>Username</label>
				<input type="text" class="form-control" name="username" placeholder="Nhập tài khoản"/>
			</div>
			<div class="form-group">
				<label>Password</label>
				<input type="password" class="form-control" name="password" placeholder="Nhập mật khẩu"/>
			</div>
			<div class="form-group">
				<input class="" type="checkbox" class="form-control" name="remember"/>
				<label>Ghi nhớ</label>
			</div>
			<div class="form-group">
				<button type="submit" class="btn btn-outline-danger">Đăng nhập</button>
			</div>
		</form>
	</div>
@endsection

@section('title')
Đăng nhập
@endsection