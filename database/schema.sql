
CREATE DATABASE Checkout;

USE Checkout;

CREATE TABLE Profile (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  address varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  state varchar(255) NOT NULL,
  zip int NOT NULL,
  ccNumber int NOT NULL,
  ccExpiration varchar(255) NOT NULL,
  cvv int NOT NULL,
  ccZip int NOT NULL,
  PRIMARY KEY (id)
);

         
         
            -- name: '',
            -- email: '',
            -- password: '',
            -- address: '',
            -- city: '',
            -- state: '',
            -- zip: '',
            -- ccNumber: '',
            -- ccExpiration: '',
            -- cvv: '',
            -- ccZip: '',
         
         
         
         