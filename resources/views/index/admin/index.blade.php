@extends('layout.layout_admin')
@section('dashboard')
<p class="text-end m-1"><a href="logout" class="fs-6">Đăng xuất <i class="bi bi-box-arrow-right"></i></a></p>
@endsection

@section('display')
<div class="col-12">
	<h2 class="fs-3 border-bottom py-2 fw-light">Blog</h2>
	<table class="table">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">Thumbnail</th>
				<th scope="col">Title</th>
				<th scope="col">Description</th>
				<th scope="col">Created</th>
				<th scope="col" class="text-center">Publish</th>
				<th scope="col" class="text-center">Edit</th>
				<th scope="col" class="text-center">Delete</th>
			</tr>
		</thead>
		<tbody>
			@foreach($blog as $bl)
			<tr>
				<th scope="row">{{$bl->id}}</th>
				<td><img src="{{$bl->thumbnail}}" width="70px" /></td>
				<td>{{$bl->title}}</td>
				<td>{{$bl->description}}</td>
				<td>{{Carbon\CarBon::parse($bl->created_at)->format("d-m-Y")}}</td>
				<td class="text-center">
					@if($bl->publish != 0)
					<i class="bi bi-eye-fill"></i>
					@else
					<i class="bi bi-eye-slash-fill"></i>
					@endif
				</td>
				<td><a href="{{asset('/admin/edit/').'/'.$bl->id}}"><button class="btn btn-warning rounded mx-auto">Edit
							<i class="bi bi-pencil-square"></i></button></a>
				</td>
				<td><button class="btn btn-danger rounded mx-auto" data-bs-toggle="modal"
						data-bs-target="#staticBackdrop-{{$bl->id}}">Delete <i class="bi bi-trash3-fill"></i></button>
				</td>
			</tr>
			<div class="modal fade" id="staticBackdrop-{{$bl->id}}" data-bs-backdrop="static" data-bs-keyboard="false"
				tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="staticBackdropLabel">IAmCoder</h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							Bạn có chắc chắn muốn xóa bài viết <strong>{{$bl->title}}</strong> khỏi IAmCoder ?
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
							<button type="button" class="btn btn-danger">Chấp nhận</button>
						</div>
					</div>
				</div>
			</div>
			@endforeach
		</tbody>
	</table>
	{{ $blog->links() }}
	<button class="btn btn-primary" onClick="location.href='{{route('admin.insert')}}'">Thêm mới <i class="bi bi-plus"></i></button>
</div>
@endsection
@section('title')
Admin
@endsection