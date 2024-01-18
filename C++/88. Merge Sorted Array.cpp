#include <vector>
using std::vector;

/*
[1,2,3,0,0,0]
     |    <-i
           | <-k
[4,5,6]
     | <-j
*/
class Solution
{
public:
  void merge(vector<int> &nums1, int m, vector<int> &nums2, int n)
  {

    int i = m - 1;
    int j = n - 1;
    int k = nums1.size() - 1;

    while (k >= 0)
    {
      if (i >= 0 && j >= 0)
      {

        if (nums1[i] >= nums2[j])
        {
          nums1[k] = nums1[i];
          i--;
        }
        else
        {
          nums1[k] = nums2[j];
          j--;
        }
      }
      else
      {
        if (i < 0)
        {
          nums1[k] = nums2[j];
          j--;
        }
        else
        {
          nums1[k] = nums1[i];
          i--;
        }
      }
      k--;
    }
  }
};