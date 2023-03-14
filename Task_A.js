let input = "Hi there. My name is Sam. This is my lucky day. I like coding so much. This is it.";
let output = "";
const n = 2;
let words = input.split("."); // split input into an array of words


//function to count the total number of words in a sentence
function countWords(w) {
  var count = 0;
  var words = w.split(" ");
  for (i = 0; i < words.length; i++)
  {
    if (words[i] != "") {
      count += 1;
    }
  }

  return (count);
}

//function to get last n words from a sentence
function GetLastNWords(s)
{
    let sublast2Words = s.split(" ");
    return sublast2Words.slice(-n).join(" ");
}

//function to get the setence excluding the last N words of the sentence
function GetAllWordsExceptLastN(s)
{
    let subAllExceptTwoWords = s.split(" ");
        return subAllExceptTwoWords.slice(0, -n).join(" ");
}

//logic to get the sentence in reverse ordered words except last N words
for(let i = 0; i< words.length; i++)
{
    let result = "";
    var countOfWords = countWords(words[i]);
    if(countOfWords > n)
    {
      let lastTwoWords = GetLastNWords(words[i]);
      let allWordsExceptLastTwo = GetAllWordsExceptLastN(words[i]);
      let splitWords = allWordsExceptLastTwo.split(" ");
      let reversedWords = splitWords.reverse().join(" ");
      result = reversedWords.concat(lastTwoWords);
    }
    else
    {
       result = words[i];
    }
    output = output.concat(result).concat(".").replace(/\.\.$/, ".");
   
}
//display output
console.log(output);