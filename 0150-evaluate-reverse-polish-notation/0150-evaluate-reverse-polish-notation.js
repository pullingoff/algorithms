/**
 * @param {string[]} tokens
 * @return {number}
 tokens 돌면서 숫자면 스택에 넣는다. 연산자일 경우 앞의 숫자 2개씩 꺼내서 계산
 */
var evalRPN = function(tokens) {
    let numStack = [];

    for(let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        // 숫자인 경우
        if (!isNaN(token)) {
            numStack.push(Number(token));
        } else {
            let num2 = numStack.pop();
            let num1 = numStack.pop();

            switch(token) {
                case '+':  
                    numStack.push(num1 + num2);
                    break;
                case '-':
                    numStack.push(num1 - num2);
                    break;
                case '*':
                    numStack.push(num1 * num2);
                    break;
                case '/':
                    numStack.push(Math.trunc(num1 / num2));
                    break;
            }
        }
    }

    return numStack.pop();
};