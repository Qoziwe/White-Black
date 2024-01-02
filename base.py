import sqlite3 as sq

with sq.connect("database.db") as con:
    cur = con.cursor()

    userid = 1
    username = 'Lekim'

    # cur.execute("""CREATE TABLE IF NOT EXISTS users(
    #     user_id INTEGER PRIMARY KEY,
    #     login TEXT NOT NULL,
    #     password TEXT NOT NULL,
    #     count INTEGER NOT NULL DEFAULT 0
    # )""")

    # cur.execute("INSERT INTO users (login, password, count) VALUES('Lekim', '123456789', 5)")

    # if userid == 1:
    cur.execute("UPDATE users SET count = count + 1 WHERE login LIKE 'Lekim'")

    # cur.execute("DELETE FROM users WHERE user_id = 4")

    cur.execute("SELECT * FROM users")
    result = cur.fetchall()
    print(result)

    # cur.execute("DROP TABLE IF EXISTS users")