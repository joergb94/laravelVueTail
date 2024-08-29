<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/css/app.css'])
    @stack('vite-resources-js')
</head>
    <body id="app">
        <div id="main-load" >
            <div class="w-full">
                @yield('layout-topbar')
            </div>
            <div class="layout-content">
                <div class="flex flex-wrap items-center justify-center p-2 m-2">
                    @yield('layout-content')
                </div>
            </div>
        </div>
    </body>
</html>
