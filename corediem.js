//corediem.js

var rawCharCount = 0;
var spaces = 1;
var spaceUnicode = "%20";

function countStroke(unicodeChar)
{
  if (escape(unicodeChar) === spaceUnicode)
  {
      spaces++;
  }
  rawCharCount++;
}

// O(n)
function printCounts(doc)
{
  for (x in doc.trim())
  {
    countStroke(doc[x]);
  }
  console.log("Raw type count: "+rawCharCount);
  console.log("Raw word count: "+spaces);
}
