import java.util.Arrays;

public class Solution {

    public void duplicateZeros(int[] arr) {

        for (int i = 0; i < arr.length; i++) {

            if (arr[i] == 0) {

                for (int j = arr.length - 1; j > i; j--) {
                    arr[j] = arr[j - 1];
                }
                if (i + 1 < arr.length - 1) {
                    arr[i + 1] = 0;

                }
                i++;

            }
        }
        System.out.println(Arrays.toString(arr));
    }

}
