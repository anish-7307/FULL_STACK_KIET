// data/questions.js
// ─────────────────────────────────────────────
// Static seed data for 30 classic DSA problems.
// Each question object has:
//   id          – unique number
//   title       – problem name
//   topic       – DSA category
//   difficulty  – "Easy" | "Medium" | "Hard"
//   platform    – "LeetCode" | "GFG" etc.
//   link        – URL to the problem
//   solved      – boolean (false by default)
//   bookmarked  – boolean (false by default)
// ─────────────────────────────────────────────

export const questionsData = [
  { id: 1,  title: "Two Sum",                          topic: "Array",               difficulty: "Easy",   platform: "LeetCode",    link: "https://leetcode.com/problems/two-sum/",                               solved: false, bookmarked: false },
  { id: 2,  title: "Best Time to Buy and Sell Stock",  topic: "Array",               difficulty: "Easy",   platform: "LeetCode",    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",      solved: false, bookmarked: false },
  { id: 3,  title: "Maximum Subarray",                 topic: "Dynamic Programming", difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/maximum-subarray/",                      solved: false, bookmarked: false },
  { id: 4,  title: "Product of Array Except Self",     topic: "Array",               difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/product-of-array-except-self/",         solved: false, bookmarked: false },
  { id: 5,  title: "Valid Parentheses",                topic: "Stack",               difficulty: "Easy",   platform: "LeetCode",    link: "https://leetcode.com/problems/valid-parentheses/",                     solved: false, bookmarked: false },
  { id: 6,  title: "Min Stack",                        topic: "Stack",               difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/min-stack/",                             solved: false, bookmarked: false },
  { id: 7,  title: "Reverse a Linked List",            topic: "Linked List",         difficulty: "Easy",   platform: "LeetCode",    link: "https://leetcode.com/problems/reverse-linked-list/",                   solved: false, bookmarked: false },
  { id: 8,  title: "Merge Two Sorted Lists",           topic: "Linked List",         difficulty: "Easy",   platform: "LeetCode",    link: "https://leetcode.com/problems/merge-two-sorted-lists/",                solved: false, bookmarked: false },
  { id: 9,  title: "LRU Cache",                        topic: "Hashing",             difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/lru-cache/",                             solved: false, bookmarked: false },
  { id: 10, title: "Binary Search",                    topic: "Binary Search",       difficulty: "Easy",   platform: "LeetCode",    link: "https://leetcode.com/problems/binary-search/",                         solved: false, bookmarked: false },
  { id: 11, title: "Find Minimum in Rotated Sorted Array", topic: "Binary Search",   difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", solved: false, bookmarked: false },
  { id: 12, title: "Search in Rotated Sorted Array",   topic: "Binary Search",       difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",        solved: false, bookmarked: false },
  { id: 13, title: "Invert Binary Tree",               topic: "Tree",                difficulty: "Easy",   platform: "LeetCode",    link: "https://leetcode.com/problems/invert-binary-tree/",                    solved: false, bookmarked: false },
  { id: 14, title: "Maximum Depth of Binary Tree",     topic: "Tree",                difficulty: "Easy",   platform: "LeetCode",    link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",          solved: false, bookmarked: false },
  { id: 15, title: "Binary Tree Level Order Traversal",topic: "Tree",                difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",     solved: false, bookmarked: false },
  { id: 16, title: "Validate Binary Search Tree",      topic: "Tree",                difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/validate-binary-search-tree/",           solved: false, bookmarked: false },
  { id: 17, title: "Serialize and Deserialize Binary Tree", topic: "Tree",           difficulty: "Hard",   platform: "LeetCode",    link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", solved: false, bookmarked: false },
  { id: 18, title: "Number of Islands",                topic: "Graph",               difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/number-of-islands/",                     solved: false, bookmarked: false },
  { id: 19, title: "Clone Graph",                      topic: "Graph",               difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/clone-graph/",                           solved: false, bookmarked: false },
  { id: 20, title: "Course Schedule",                  topic: "Graph",               difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/course-schedule/",                       solved: false, bookmarked: false },
  { id: 21, title: "Word Ladder",                      topic: "Graph",               difficulty: "Hard",   platform: "LeetCode",    link: "https://leetcode.com/problems/word-ladder/",                           solved: false, bookmarked: false },
  { id: 22, title: "Climbing Stairs",                  topic: "Dynamic Programming", difficulty: "Easy",   platform: "LeetCode",    link: "https://leetcode.com/problems/climbing-stairs/",                       solved: false, bookmarked: false },
  { id: 23, title: "Coin Change",                      topic: "Dynamic Programming", difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/coin-change/",                           solved: false, bookmarked: false },
  { id: 24, title: "Longest Increasing Subsequence",   topic: "Dynamic Programming", difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/longest-increasing-subsequence/",        solved: false, bookmarked: false },
  { id: 25, title: "0/1 Knapsack Problem",             topic: "Dynamic Programming", difficulty: "Medium", platform: "GFG",         link: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/",            solved: false, bookmarked: false },
  { id: 26, title: "Word Break",                       topic: "Dynamic Programming", difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/word-break/",                            solved: false, bookmarked: false },
  { id: 27, title: "N-Queens",                         topic: "Backtracking",        difficulty: "Hard",   platform: "LeetCode",    link: "https://leetcode.com/problems/n-queens/",                              solved: false, bookmarked: false },
  { id: 28, title: "Subsets",                          topic: "Backtracking",        difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/subsets/",                               solved: false, bookmarked: false },
  { id: 29, title: "Valid Anagram",                    topic: "Hashing",             difficulty: "Easy",   platform: "LeetCode",    link: "https://leetcode.com/problems/valid-anagram/",                         solved: false, bookmarked: false },
  { id: 30, title: "Container With Most Water",        topic: "Two Pointers",        difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/container-with-most-water/",             solved: false, bookmarked: false },
  { id: 31, title: "Merge Intervals",                  topic: "Array",               difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/merge-intervals/",                       solved: false, bookmarked: false },
  { id: 32, title: "Rotate Image",                     topic: "Array",               difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/rotate-image/",                          solved: false, bookmarked: false },
  { id: 33, title: "Spiral Matrix",                    topic: "Array",               difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/spiral-matrix/",                         solved: false, bookmarked: false },
  { id: 34, title: "Set Matrix Zeroes",                topic: "Array",               difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/set-matrix-zeroes/",                     solved: false, bookmarked: false },
  { id: 35, title: "Group Anagrams",                   topic: "Hashing",             difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/group-anagrams/",                        solved: false, bookmarked: false },
  { id: 36, title: "Top K Frequent Elements",          topic: "Hashing",             difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/top-k-frequent-elements/",               solved: false, bookmarked: false },
  { id: 37, title: "Subarray Sum Equals K",            topic: "Array",               difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/subarray-sum-equals-k/",                 solved: false, bookmarked: false },
  { id: 38, title: "Longest Consecutive Sequence",     topic: "Hashing",             difficulty: "Medium", platform: "LeetCode",    link: "https://leetcode.com/problems/longest-consecutive-sequence/",          solved: false, bookmarked: false },
  { id: 39, title: "Median of Two Sorted Arrays",      topic: "Binary Search",       difficulty: "Hard",   platform: "LeetCode",    link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",           solved: false, bookmarked: false },
  { id: 40, title: "Trapping Rain Water",              topic: "Two Pointers",        difficulty: "Hard",   platform: "LeetCode",    link: "https://leetcode.com/problems/trapping-rain-water/",                   solved: false, bookmarked: false },
];