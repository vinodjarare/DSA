# Strings

### What is String?

Strings are considered a data type in general and are typically represented as arrays of bytes (or words) that store a sequence of characters. Strings are defined as an array of characters. The difference between a character array and a string is the string is terminated with a special character ‘\0’

below example of string

```
 "This is example of String"
```

#### 1. Operations:

- Concatenation
- Substring extraction
- Length calculation
- Comparison
- Searching for a pattern
- Replacing a substring
- Sorting

#### 2. Implementations:

- Character arrays
- String objects in object-oriented programming languages

#### 3. Applications:

- Text processing
- URL parsing
- Storing and manipulating human-readable data.

#### Hamming Distance

the Hamming distance between two strings of equal length is the number of positions at which the corresponding symbols are different. In other words, it measures the minimum number of substitutions required to change one string into the other, or the minimum number of errors that could have transformed one string into the other. In a more general context, the Hamming distance is one of several string metrics for measuring the edit distance between two sequences.

example:

- "karolin" and "kathrin" is 3.
- 1011101 and 1001001 is 2.

#### Knuth–Morris–Pratt Algorithm

The Knuth–Morris–Pratt string searching algorithm (or KMP algorithm) searches for occurrences of a "word" W within a main "text string" T by employing the observation that when a mismatch occurs, the word itself embodies sufficient information to determine where the next match could begin, thus bypassing re-examination of previously matched characters.

##### Complexity

- Time: O(|W| + |T|) (much faster comparing to trivial O(|W| \* |T|))
- Space: O(|W|)

#### Palindrome Check

A Palindrome is a string that reads the same forwards and backwards. This means that the second half of the string is the reverse of the first half.

##### Examples

The following are palindromes

```
- "a"
- "pop"
- "kayak"
- "racecar"
```

The following are not palindromes

```
- "rad"
- "dodo"
- "polo"
```
