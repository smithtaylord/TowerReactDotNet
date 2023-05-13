CREATE TABLE
    IF NOT EXISTS accounts(
        id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
        name varchar(255) COMMENT 'User Name',
        email varchar(255) COMMENT 'User Email',
        picture varchar(255) COMMENT 'User Picture'
    ) default charset utf8 COMMENT '';

CREATE TABLE
    events(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description VARCHAR(500) NOT NULL,
        coverImg VARCHAR(500) NOT NULL,
        location VARCHAR(100) NOT NULL,
        capacity INT NOT NULL,
        startDate DATE NOT NULL,
        isCanceled BOOLEAN NOT NULL,
        creatorId VARCHAR(255) NOT NULL,
        FOREIGN KEY (creatorId) REFERENCES accounts(id) ON DELETE CASCADE
    ) default charset utf8 COMMENT '';

ALTER TABLE events ALTER COLUMN isCanceled SET DEFAULT false;

ALTER TABLE events ADD type VARCHAR(100) NOT NULL ;

ALTER TABLE events MODIFY COLUMN startDate VARCHAR(100) NOT NULL;

ALTER TABLE events MODIFY COLUMN description VARCHAR(1000) NOT NULL;

INSERT INTO
    events(
        name,
        description,
        coverImg,
        location,
        capacity,
        startDate,
        type,
        isCanceled,
        creatorId
    )
VALUES (
        'Cool Club',
        'This is a cool club for cool people',
        'https://images.unsplash.com/photo-1531875506263-dfcc69e73475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        'Mars',
        25,
        '2023-04-25',
        'music',
        false,
        '63ebf351822e730e1e0b3616'
    );

CREATE TABLE
    tickets(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        eventId INT NOT NULL,
        accountId VARCHAR(255) NOT NULL,
        FOREIGN KEY (eventId) REFERENCES events(id) ON DELETE CASCADE,
        FOREIGN KEY (accountId) REFERENCES accounts(id) ON DELETE CASCADE
    ) default charset utf8 COMMENT '';

CREATE TABLE
    comments(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        creatorId VARCHAR(255) NOT NULL,
        eventId INT NOT NULL,
        body VARCHAR(500) NOT NULL,
        FOREIGN KEY (eventId) REFERENCES events(id) ON DELETE CASCADE,
        FOREIGN KEY (creatorId) REFERENCES accounts(id) ON DELETE CASCADE
    ) default charset utf8 COMMENT '';