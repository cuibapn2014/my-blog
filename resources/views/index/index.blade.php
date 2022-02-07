@extends('layout.layout_master')
@section('content')
<div class="container-fluid padding mt-4">
	@if($post)
	<h2 class="fs-3 mx-2">Nhật ký của tui</h2>
	@foreach($post as $post)
	<div class="col-lg-8 col-md-12 col-sm-12 mx-auto mt-3 bg-white shadow-sm rounded">
		<div class="post col-12 p-3">
			<div class="col-12 w-100 mb-2" style="height:70px;">
				<img class="avt float-left mr-2" src="./image/av.jpg" width="70px" height="70px" />
				<p class="text p-4 mx-2">Mạnh Tuấn - {{\Carbon\Carbon::parse($post->created_at)->diffForHumans()}}</p>
			</div>
			<div class="content">
				{{$post->content}}
			</div>
		</div>
	</div>
	@endforeach
	@endif
</div>

<div class="container-fluid">
	<h2 class="fs-3 mx-2">Khoảnh khắc của tui</h2>
	<div class="col-lg-4 col-md-6 col-sm-12 float-left p-2 image-col"></div>
	<div class="col-lg-4 col-md-6 col-sm-12 float-left p-2 image-col"></div>
	<div class="col-lg-4 col-md-6 col-sm-12 float-left p-2 image-col"></div>
	<script type="text/javascript" def src="./js/home/script.js"></script>
</div>

@endsection

@section('title')
Blog của Tuấn
@endsection

@section('seo')
<meta property="og:url" content="{{asset('')}}">
<meta property="og:type" content="article">
<meta property="og:title" content="Blog của Tuấn">
<meta property="og:image" content="{{asset('')}}/image/cover_pic.jpg">
@endsection