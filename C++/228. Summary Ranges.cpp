#include <iostream>
#include <set>
#include <string>
#include <unordered_map>
#include <vector>

using namespace std;

/*
examples:
nums = [3,5,7,8,9,10,11,13,79] -> [3, 5,7->11, 13, 79]

result = []
prev = nums[0]
range = [prev]
for i in range(nums[1:]):
  n = nums[i]
  if n == prev + 1:
     range.add(n)
     prev = n
  else:
    rangeString = str(range[0])
    if range.length > 1:
      rangeString+= range[range.length - 1]
    result.add(rangeString)
    prev = n
    range = [prev]
*/

class Solution {
  public:
    vector<string> summaryRanges(vector<int>& nums) {
        vector<string> result = {};
        if(nums.size() == 0) {
          return result;
        }
        int prev = nums[0];
        vector<int> range = {prev};

        for (int i = 1; i < nums.size(); i++) {
            int n = nums[i];
            if (n == prev + 1) {
                range.push_back(n);
                prev = n;
            } else {
                string rangeString = std::to_string(range[0]);
                if (range.size() > 1) {
                    rangeString += "->" + std::to_string(range[range.size() - 1]);
                }
                result.push_back(rangeString);
                prev = n;
                range = {prev};
            }
        }
        string rangeString = std::to_string(range[0]);
        if (range.size() > 1) {
            rangeString += "->" + std::to_string(range[range.size() - 1]);
        }
        result.push_back(rangeString);
        return result;
    }
};