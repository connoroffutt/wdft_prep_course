/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/

for (var i=1; i < 101; i++) {
    console.log(i)
}
console.log('Lovely day for a loop!')


/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

console.log("Like Triangles?")

str = "#######"

for (var i = 0, len = str.length; i < len; i++) {
    if (i >= 6)
        console.log("#######");
    else if (i >= 5)
        console.log("######");
    else if (i >= 4)
        console.log("#####");
    else if (i >= 3)
        console.log("####");
    else if (i >= 2)
        console.log("###");
    else if (i >= 1)
        console.log("##");
    else 
        console.log("#");
}
