/* You are given a binary tree (not sorted, it doesn't matter in this kata) represented by TreeNode class, 
which is defined like this:

class TreeNode
  attr_accessor :left
  attr_accessor :right
  attr_reader :value
end
Your task is to return the array with elements from tree sorted by levels, which means the root element goes first, 
then root children (from left to right) are second and third, and so on. The leaf terminator is nil. 
Return empty array for empty tree (nil argument). */