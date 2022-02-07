@extends('layout.layout_master')
@section('content')

<div class="container-fluid padding">
    <div class="col-lg-4 col-md-6 col-sm-12 float-left p-2 image-col"></div>
    <div class="col-lg-4 col-md-6 col-sm-12 float-left p-2 image-col"></div>
    <div class="col-lg-4 col-md-6 col-sm-12 float-left p-2 image-col"></div>
</div>
<script type="text/javascript" def src="./js/script.js"></script>

@endsection
@section('title')
Ảnh của tui
@endsection

@section('seo')
<meta property="og:url" content="{{asset('')}}/photos">
<meta property="og:type" content="article">
<meta property="og:title" content="Blog của Tuấn">
<meta property="og:image"
    content="{{asset('')}}/image/cover_pic.jpg">
@endsection