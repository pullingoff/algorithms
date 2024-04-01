## Dart #1 기본기

### 타입

- var로 그냥 변수 선언시 JS처럼 런타임 타입 지정
- String, bool, int, double 등
- dynamic: 어떤 타입이든 넣을 수 있음.
  - var과의 차이: **var의 경우 타입이 선언시 타입으로 고정되어 다른 타입의 값으로 바뀔수 없으나, dynamic은 변수의 내용물 변경시 그 타입에 따라 타입이 바뀜**
  - `dynamicType.runtimeType`으로 타입 확인 가능
- nullable: null이 될 수 있음
  - `String? name2 = '블핑';`: 타입? 형식으로 선언
  - `print(name2!);` : 널러블한 변수 뒤에 !를 붙이면 null이 아님을 단언 가능 (TS와 똑같군) 
- non-nullable: null이 될 수 없음
- final, const: 선언 이후 변수의 값 변경 불가, 타입 생략 불가
  - `final String name = '다트';`
  - final, const의 차이점: **const는 빌드타임에 값을 알고 있어야**한다. final은 빌드시 값을 모르고 있어도 됨
    - e.g.) `const DateTime now = DateTime.now();`은 에러가 남.

### 오퍼레이터

```dart
int number1 = 1;
print(number1 is int);     // true
print(number1 is! String); // false
```

### 구조체

```dart
List<String> friends = ['sheldon', 'amy', 'penny'];
friends.add('howard');
friends.remove('sheldon');

// Map
Map<String, bool> isHarryPotter = {
  'harry': true,
  'ron': false
};

// 맵에 값 추가. 이거 말고도 그냥 바로 넣어서 추가도 가능
isHarryPotter.addAll({  
  'tom': false
});

// Set
final Set<String> names = {'jamey', 'sandy'};

// enum
enum Status{
  approved, pending, rejected
}
```

### 함수

```dart
void main() {
  addNumber(10, 20);
  addNumber(y:10, x:20); // 파라미터 이름을 명시하면 순서를 바꿔 실행도 가능
}

// return 타입 명시
int addNumber({
  required int x, // parameters
  required int y,
  int z = 30
}) {
  print('x': x);
};

// 화살표 함수도 있음!
int addNumber(x, y) => x+y;
```

### TypeDef

```dart
typedef Operation = int Function(int x, int y, int z);

int add(...) {
  // 더하기 구현...
}

// 이런 방식 많이 사용
int calculate(int x, int y, int z, Operation operation) {
  return operation(x,y,z);
}

void main() {
  Operation operation = add;  
  operation(10,20,30); // 60
  // 이런 방식 많이 사용
  calculate(30,40,50,add); // 120

}
```
