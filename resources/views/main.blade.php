<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Healthy Coder App</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet">
    @vite('resources/css/app.scss')
    @vite('resources/js/app.js')
</head>
<body>
    <div id="root"></div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
    @viteReactRefresh
    @vite('resources/js/healthycoder.jsx')
</body>
</html> -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Healthy Coder App</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
    @vite('resources/css/app.scss')
    @vite('resources/js/app.js')
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
    <div id="root"></div>
    @viteReactRefresh
    @vite('resources/js/healthycoder.jsx')
</body>
</html>