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

user_list.each do |user|
  User.create(user)
end

mountain_list = [
  {
    name: "Stowe",
    address: "7412 Mountain Rd",
    city: "Stowe",
    state: "VT",
    zip: "05672",
    creator_id: 1,
    image_url: "http://cdn.mntm.me/6f/9f/24/Shred-Corduroy-with-the-Kids-at-These-Rocky-Mountain-Ski-Resorts-6f9f24518e4949cfb6a5f4a32746c129.jpg"

  },
  {
    name: "Other Stowe",
    address: "12 Other Stowe St.",
    city: "OhYeah",
    state: "VT",
    zip: "23456",
    creator_id: 2,
    image_url: "http://www.powderhounds.com/site/DefaultSite/filesystem/images/USA/CrystalMountain/Overview/CrystalMountain-13.JPG"
  },
  {
    name: "Big Scary Mountain",
    address: "OhhhhNooooo St",
    city: "Scarymountainville",
    state: "RI",
    zip: "12345",
    creator_id: 3,
    image_url: "http://www.tenneymtn.com/wp-content/uploads/2017/03/ss-1.jpg"
  },
  {name: "Mount Mountain",
    address: "Mountain st",
    city: "Mountainia",
    state: "CO",
    zip: "65432",
    creator_id: 4,
    image_url: "https://www.sundanceresort.com/wp-content/uploads/2016/09/ski-school-hero.jpg"
  },
  {name: "Space Mountain",
    address: "Disney St",
    city: "Orlando",
    state: "FL",
    zip: "98765",
    creator_id: 1,
    image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Magic_Kingdom_Space_Mountain.jpg/250px-Magic_Kingdom_Space_Mountain.jpg"
    }
]

mountain_list.each do |mountain|
  Mountain.create(mountain)
end


Review.create(user_id: 1, mountain_id: 1, rating: 5)
