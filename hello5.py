def login(username, password, users):
    """Return True when username and password match an entry in users.

    `users` should map usernames to passwords, for example:
    {"alice": "correct-horse-battery-staple"}
    """
    return username in users and users[username] == password


if __name__ == "__main__":
    registered_users = {"alice": "change-this-password"}
    username = input("Username: ")
    password = input("Password: ")

    if login(username, password, registered_users):
        print("Login successful.")
    else:
        print("Invalid username or password.")
