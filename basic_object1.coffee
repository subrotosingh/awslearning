obj = 
	firstName: "Subroto"
	lastName: "Singh"

	fullName: ->
		"#{@firstName}  #{@lastName}"

console.log obj.fullName()