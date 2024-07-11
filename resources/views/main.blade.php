<!-- resources/views/main.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Page</title>
    @vite('resources/css/app.scss')
    @vite('resources/js/app.js')
</head>
<body>
    <div id="root"></div>

    @viteReactRefresh
    @vite('resources/js/healthycoder.jsx')
</body>
</html>
