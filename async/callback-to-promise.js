// Callback Hell 코드를 promise를 이용하여 예쁘게 만들기!

class UserStorage {
    loginUser(id, password) {   // 콜백함수 전달받을 필요 없어짐
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'koona' && password === 'cuty') ||
                    (id === 'coder' && password === 'smart')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {// 콜백함수 전달받을 필요 없어짐
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'koona') {
                    resolve({ name: 'koona', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        } );
    }
}

// 1. 사용자에게 id, password 입력받아오기
// 2. 서버에 로그인하기
// 3. 성공하면 로그인해서 받아온 사용자의 아이디를 이용해 역할을 요청해 받아오기
// 4. 성공하면 우리에게 사용자의 오브젝트가 만들어짐 -> 이름, 역할 출력해보기

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);

// 콜백지옥 코드보다 완전 깔끔해졌다...!