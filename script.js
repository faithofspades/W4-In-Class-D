const myObj = {
    name: "Sue",
    hobby: "birds",
}
let myStuff = ["hello", myObj, 14, false, ["things, 36"], 13, true, false];


let i = 0;

while (i < myStuff.length) {
    if (typeof myStuff[i] == "string") {
        myStuff[i] = "new text";
     } else if (typeof myStuff[i] == "number") {
            myStuff[i] += 10;
        }
        i++;
    }
    console.log(myStuff);




/*
+=
-=
++
--
*=
/=
*/
