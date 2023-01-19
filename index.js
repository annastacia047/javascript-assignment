//1. function to check whether a number is even or odd //
function oddoreven(x){
    if(!Number.isInteger(x)===true){
       return console.log("input invalid");
    }
    if(x%2===0){
        console.log("The Number Is Even");
    }
    else{
        console.log("The Number Is Odd");
    }
    }
    console.log(oddoreven(7));


    //2.JavaScript function that accepts a string as a parameter and find the longest word within the string. 
    // (i)using reduce()method 
      function findLongestWord(str) {
        let strSplit = str.split(' ');
        let longestWord = strSplit.reduce(function(longest, currentWord) {
          if(currentWord.length > longest.length)
             return currentWord;
          else
             return longest;
        }, "");
        return longestWord; 
                              
      }
      console.log(findLongestWord("Web Development Tutorials"));

      //(ii).using the sort()method
      function findLongestWord(str) {
        let strSplit = str.split(' ');
        let longestWord = strSplit.sort(function(a, b) { 
          return b.length - a.length;
        });

        return longestWord[0]; 
      }
      console.log(findLongestWord("Web Development Tutorials"));

      //3.JavaScript function to get the last element of an array and the number of items in the array
      const colours=['red','yellow','green','blue'];
      const last_item=colours[colours.length-1];
      console.log(colours);
      console.log(last_item);
      
      //4.JavaScript function that will insert the property “published_on” in the below object. The value of the property should be the current date generated using the Date object.
      const book={
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
      }
      console.log(book.title);
      book.published_on=new Date();
      console.log(book);
    

  





  

