@extends('layout.layout_admin')
@section('dashboard')
	<p class="text"><a href="admin">Thêm bài viết</a></p>
	<p class="text"><a href="admin/photos">Thêm ảnh</a></p>
	<p class="text"><a href="logout">Đăng xuất</a></p>
@endsection

@section('display')
	<div class="col-12">
		<h2>Thêm ảnh mới</h2>
		<hr/>
		<form action="admin/photos" method="post">
		@if(count($errors) > 0)
			@foreach($errors as $err)
		<p class="alert alert-danger">{{$err}}</p>
		@endforeach
			@endif
		@if(session('notice'))
			<p class="alert alert-success">{{session('notice')}}</p>
			@endif
		<input type="hidden" name="_token" value="{{csrf_token()}}"/>
			<label>Link ảnh</label>
			<div class="form-group">
				<input type="text" class="form-control" name="_link" placeholder="Đường dẫn ảnh"/>
			</div>
			<div class="form-group">
				<button class="btn btn-warning">Thêm ảnh mới</button>
			</div>
		</form>
	</div>
@endsection
@section('title')
Thêm ảnh
@endsection