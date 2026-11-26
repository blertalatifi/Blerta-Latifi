def login(username, password, users, session=None):
    """Return True when username and password match an entry in users.

    `users` should map usernames to passwords, for example:
    {"alice": "correct-horse-battery-staple"}
    """
    authenticated = username in users and users[username] == password
    if authenticated and session is not None:
        session["username"] = username
    return authenticated


def register(username, password, users):
    """Add a new user, returning False for blank or already-used usernames."""
    username = username.strip()
    if not username or not password or username in users:
        return False

    users[username] = password
    return True


def logout(session):
    """Clear the authenticated user from a session, returning whether it existed."""
    return session.pop("username", None) is not None


if __name__ == "__main__":
    registered_users = {}
    session = {}

    while True:
        action = input("Choose register, login, logout, or exit: ").strip().lower()
        if action == "exit":
            break

        if action == "register":
            username = input("Username: ")
            password = input("Password: ")
            if register(username, password, registered_users):
                print("Registration successful.")
            else:
                print("Username and password are required; usernames must be unique.")
        elif action == "login":
            username = input("Username: ")
            password = input("Password: ")
            if login(username, password, registered_users, session):
                print(f"Login successful. Welcome, {session['username']}.")
            else:
                print("Invalid username or password.")
        elif action == "logout":
            if logout(session):
                print("Logout successful.")
            else:
                print("No user is currently logged in.")
        else:
            print("Choose register, login, logout, or exit.")
