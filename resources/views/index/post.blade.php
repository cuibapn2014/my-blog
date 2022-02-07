@extends('layout.layout_master')
@section('content')
<div class="container-fluid padding my-4">
	<h2 class="fs-3">Nhật ký của tui</h2>
	@if($post)
	@foreach($post as $post)
	<div class="col-lg-8 col-md-12 col-sm-12 mx-auto mt-3 shadow-sm rounded bg-white">
		<div class="post col-12 p-3 d-flex flex-column">
			<div class="col-12 w-100 mb-2" style="height:70px;">
				<img class="rounded-circle float-left mr-2" src="./image/av.jpg" width="70px" height="70px" />
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
@endsection
@section('title')
Quote của tui
@endsection
@section('seo')
<meta property="og:url" content="{{asset('')}}/post">
<meta property="og:type" content="article">
<meta property="og:title" content="Blog của Tuấn">
<meta property="og:image" content="{{asset('')}}/image/cover_pic.jpg">
@endsection