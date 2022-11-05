-- Creating a table for users
CREATE TABLE login_users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(28) NOT NULL UNIQUE,
    password VARCHAR(28) NOT NULL
)

-- Inserting Values into the Table
INSERT INTO login_users (user_id, username, password)
VALUES ('1', 'SamKrovvidi', '123'), ('2', 'DaveGibson', '123')