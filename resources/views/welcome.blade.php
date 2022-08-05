<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Highlight.js -->
   
    <title>iAmCoder</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/monokai-sublime.min.css">
    <script defer="defer" src="{{asset('/assets/js/main.js')}}"></script>
    <link href="{{ asset('/assets/css/main.css')}}" rel="stylesheet">
</head>

<body>
    <div id="root"></div>
</body>

</html>