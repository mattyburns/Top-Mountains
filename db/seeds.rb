# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_list = [
  {username: "Userguy2323",
    email: "userguy@aol.com",
    password: "passwordguy",
    role: "member"
  },
  {username: "adminbuddy",
    email: "adminguy@gmail.com",
    password: "imsospecial",
    role: "admin"
  },
  {username: "userlady",
    email: "fancylady@ladies.com",
    password: "oohlala123",
    role: "member"
  },
  {username: "greatseed",
    email: "seed@seed.com",
    password: "seeeeeeeed1",
    role: "member"
  }
]

user1 = User.create(user_list[0])
user2 = User.create(user_list[1])
user3 = User.create(user_list[2])
user4 = User.create(user_list[3])

mountain_list = [
  {
    name: "Stowe",
    address: "7412 Moiuntain Rd",
    city: "Stowe",
    state: "Vermont",
    zip: "05672",
    creator_id: 1
  },
  {
    name: "Other Stowe",
    address: "12 Other Stowe St.",
    city: "OhYeah",
    state: "Vermont",
    zip: "23456",
    creator_id: 2
  },
  {
    name: "Big Scary Mountain",
    address: "OhhhhNooooo St",
    city: "Scarymountainville",
    state: "Rhode Island",
    zip: "12345",
    creator_id: 3
  },
  {name: "Mount Mountain",
    address: "Mountain st",
    city: "Mountainia",
    state: "Colorado",
    zip: "65432",
    creator_id: 4
  },
  {name: "Space Mountain",
    address: "Disney St",
    city: "Orlando",
    state: "Florida",
    zip: "98765",
    creator_id: 1
    }
]

mountain1 = Mountain.create(mountain_list[0])
mountain2 = Mountain.create(mountain_list[1])
mountain3 = Mountain.create(mountain_list[2])
mountain4 = Mountain.create(mountain_list[3])
mountain5 = Mountain.create(mountain_list[4])


Review.create(user_id: 1, mountain_id: 1, rating: 5)
