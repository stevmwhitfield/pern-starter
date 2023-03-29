create database expense_tracker;

create table users (
  id serial primary key,
  name varchar(255),
  email varchar(255),
  firstName varchar(255),
  lastName varchar(255),
  password varchar(255),
  dateCreated datetime
);
