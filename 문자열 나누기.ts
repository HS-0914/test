/*
문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.

먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서,
x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. 
처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 
역시 지금까지 읽은 문자열을 분리하고, 종료합니다.
문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 
분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.

1 ≤ s의 길이 ≤ 10,000
s는 영어 소문자로만 이루어져 있습니다.
*/
// 문자열 나누기 - https://school.programmers.co.kr/learn/courses/30/lessons/140108
export {};
function solution(s: string): number {
    let answer: number = 0;
    let compareChar: string = s[0];
    let same: number = 1;
    for (let i = 1; i < s.length; i++) {
        compareChar === s[i] ? same++ : same--;
        // same이 0이면 false
        if (!same) {
            compareChar = s[i + 1];
            answer++;
        }
    }

    return same ? ++answer : answer;
}
