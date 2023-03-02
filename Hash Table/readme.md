# Hash Table (Hash map)

A hash table is a data structure that is used for efficient storage and retrieval of key-value pairs. It is also known as a hash map or dictionary.

In a hash table, a hash function is used to map each key to a specific index in an array, which is called the hash table. The value associated with the key is stored at this index. When a key-value pair is inserted into the hash table, the key is hashed using the hash function to determine the index at which the value will be stored.

Hash tables have a constant-time complexity for basic operations such as insertion, deletion, and retrieval of elements, on average. However, in the worst case, when there are a lot of hash collisions, the performance of hash tables can degrade to O(n), where n is the number of elements in the table.

To handle collisions, hash tables use different techniques such as chaining, open addressing, or probing. Chaining involves creating a linked list at each index of the table, where multiple values can be stored if they hash to the same index. Open addressing involves finding another available index in the table when a collision occurs. Probing is a technique where the table is searched for an empty slot by using a sequence of hash function values.

Hash tables are used in various applications such as compilers, database indexing, and caching. They provide efficient search and retrieval operations, making them a popular data structure in computer science.
