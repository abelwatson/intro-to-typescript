/*
What is JSON

Object
Array
Number
String

    "Literal Values"


false
true
null
*/

//Modify the 3 type JSON values and parse JSON and fail otherwise
//Use the isJSON function to test

function isJSON(j: JSONValue){}
type Primitive = string | number | boolean | null

type JSONObject = {[k: string]: JSONValue}
type JSONArray = JSONValue[]
type JSONValue = Primitive | JSONObject |JSONArray

let testing1: JSONValue = {fname: "Abel", data: [1, 2, 3]}
let testing2: JSONValue = "Testing string"
let testing3: JSONValue = [1, 2, "Hello", {fname: "Abel"}]

isJSON(testing1)
isJSON(testing2)
isJSON(testing3)

