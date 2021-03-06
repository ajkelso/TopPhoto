# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding..."

User.destroy_all
Photo.destroy_all
Gallery.destroy_all


u1 = User.create(username: 'Andy', password: 'andy', email: 'a@a.com')
u2 = User.create(username: 'Joe', password: 'joe', email: 'j@j.com')
u3 = User.create(username: 'Preston', password: 'preston', email: 'p@p.com')

puts "Seeding complete!"