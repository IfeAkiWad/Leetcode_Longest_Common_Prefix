/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 */

//  HORIZONTAL SCANNING TECHNIQUE
let log = console.log

let strs = ["toyin","toyo", "tonye"]

// cjecking to see if there are strings at all
if(strs.length === 0) {
     log("no string")
} else if (strs.length === 1){
    log("only one string")
}
// going to need the first string to find the prefix
let prefix = strs[0]

// will iterate through strs array, starting at strs[1]
for(let i = 1; i< strs.length; i++) {
    // while loop to iterate through each element that is not at index 0
    while (strs[i].indexOf(prefix) !== 0) {
        // set prefix to a substring of it's self and willl shorten it every time
        prefix = prefix.substring(0, prefix.length - 1)
            if(prefix.length === 0) {
                console.log("prefix is currently " + prefix )
            }
    }
}

return prefix