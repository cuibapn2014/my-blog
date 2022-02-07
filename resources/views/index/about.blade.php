@extends('layout.layout_master')
@section('content')
<div class="container-fluid padding mt-4">
	<div class="col-lg-6 col-md-12 col-sm-12 mx-auto mt-2">
		<div class="col-12 p-3 my-3 bg-white rounded shadow d-flex flex-column">
			<div class="col-12" style="height:70px;">
				<center><img class="rounded-circle" src="./image/av.jpg" width="70px" height="70px" /></center>
			</div>
			<div class="w-100">
				<p><i class="bi bi-person-fill"></i> Nguyễn Mạnh Tuấn</p>
				<p><i class="bi bi-mortarboard-fill"></i> Sinh viên IT tại Đại Học Gia Định</p>
				<p><i class="bi bi-heart-fill text-danger"></i> Chụp ảnh, code dạo, acoustic, cà phê, viết quote</p>
				<p><i class="bi bi-facebook text-primary"></i> Fakerht</p>
				<p><i class="bi bi-instagram"></i> manhtuan.n7250</p>
				<p><i class="bi bi-github"></i> cuibapn2014
			</div>
		</div>
	</div>
</div>

@endsection
@section('title')
Về tui
@endsection
@section('seo')
<meta property="og:url" content="{{asset('')}}/about">
<meta property="og:type" content="article">
<meta property="og:title" content="Blog của Tuấn">
<meta property="og:image" content="{{asset('')}}/image/cover_pic.jpg">
@endsection