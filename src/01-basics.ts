// (Optional) Change the names below to your friends.
import {Friend, Colleague, ColleagueHistory } from './myTypes'


const friend1: Friend = {
  name: "Adam Thompson",
  phone: "087-12345",
  age: 21,
  dob: new Date("2003-03-01"),
};

const friend2: Friend = {
  name: "Shane Lavelle",
  phone: "086--12345",
  age: 22,
  interests: ["Gaming", "Sport"]
};

const friend3: Friend = {
  name: "Ralph Graham",
  phone: "089-324254",
  age: 45
}

export const friends = [friend1, friend2, friend3];
// console.log(friends[1]);
//   -------------------


const colleague1: Colleague = {
  name: "Ralph Graham",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2: Colleague = {
  name: "Patti Burke",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

const colleague3: Colleague = {
  name: "Dean Sullivan",
  department: "HR",
  contact: {
    email: "dos@company.com",
    extension: 125,
  },
};
export const colleagues : ColleagueHistory= {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

// console.log(colleagues.current[0]);
