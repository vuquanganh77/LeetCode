// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', function (input) {
//   let n = parseInt(input.split("\n")[0]);
//   let arr = input.split("\n")[1].split(" ").map(Number);
//   solution(n, arr);
// });

var n = 5;
var arr = [1,3,1,2,3];


let solution = (n, arr) => {
    //   console.log(n, arr)
        let l = 0;
        let r = n-1;
        let max_sum = 0;
        let temp = 0;
    
    
        // while(l<r){
        //     if(arr[l] <= arr[r]){
        //         if(arr[l] >= arr[i]  arr[r] >= arr[j]){
        //             temp += arr[l] - arr[i];
        //             temp += arr[r] - arr[j];
        //             i++;
        //             j--;
        //         }else{
        //             if(temp > max_sum){
        //                 max_sum = temp;
        //                 temp = 0;
        //                 l=i;
        //             }
        //         }
            
        //     }else{
        //         if(arr[l] >= arr[i] && arr[r] >= arr[j]){
        //             temp += arr[l] - arr[i];
        //             temp += arr[r] - arr[j];
        //             i++;
        //             j--;
        //         }else{
        //             if(temp > max_sum){
        //                 max_sum = temp;
        //                 temp = 0;
        //                 r=j;
        //             }
        //         }
        //     }
        // }

        while (l<r){
            let i = l+1;
            let j = r-1;
            while(arr[l] >= arr[i] && i < r){
                temp += arr[i];
                i++;
            }
            l = i;
            while(arr[r] >= arr[j] && j>l){
                temp += arr[j];
                j--;
            }
            r = i;

            if(temp > max_sum){
                max_sum = temp;
                temp = 0;
            }

        }
    
        return max_sum;
    }

    
    console.log(solution(n,arr))