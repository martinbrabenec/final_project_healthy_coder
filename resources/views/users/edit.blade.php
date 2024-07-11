<!DOCTYPE html>
<html>
<head>
    <title>Edit User</title>
</head>
<body>
    <h1>Edit User</h1>
    <form action="{{ route('users.update', $user->id) }}" method="POST">
        @csrf
        @method('PUT')
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value="{{ $user->name }}">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value="{{ $user->email }}">
        <button type="submit">Update</button>
    </form>
</body>
</html>
