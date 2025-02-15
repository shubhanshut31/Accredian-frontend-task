CREATE DATABASE referral_db;
USE referral_db;

CREATE TABLE referrals (
    id INT AUTO_INCREMENT PRIMARY KEY
    , name VARCHAR(100)
    , email VARCHAR(100)
    , created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);