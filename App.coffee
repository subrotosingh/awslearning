
# This programming is to implement Binary Search
class Add
	constructor: (@num1, @num2) ->
		addition:=>
			console.log "Sum of the two numbers is: " +(@num1+@num2)

class Mul extends Add
	constructor: (@num1,@num2) ->
	super(@num1,@num2)

		multiplication:->
			console.log  "Product of the two numbers is: " + (@num1*@num2)

mul = new Mul(10,20)
#mul.addition()
mul.multiplication()