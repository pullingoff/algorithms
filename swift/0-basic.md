### Swift 기본 데이터 타입
- Bool, Int, UInt(음수), Float, Double, Character, String

### Any, AnyObject, nil
- 데이터타입은 아니지만 데이터타입의 위치에서 동작
- `Any`: Swift의 모든 타입을 지칭하는 키워드
- `AnyObject`: 모든 클래스 타입을 지칭하는 프로토콜
- `nil`: 없음을 의미하는 키워드

### 컬렉션 타입
- Array, Dictionary, Set

### optional
- nil의 가능성을 명시적으로 표현
- 옵셔널 바인딩: 옵셔널 값을 꺼내오는 방법 중 하나: nil 체크+값 추출

```swift
func printName(_ name: String) {
    print(name)
}

var myName: String! = nil

if let name: String = myName {
    printName(name)
} else {
    print(‘myName == nil);
}

```

### 구조체
- swift에선 대부분의 타입이 구조체로 이뤄져있음

```swift
struct 이름 {
    // 구현
}
```

### 클래스
- 구조체나 매우 유사하지만, 구조체는 값 타입이고 클래스는 참조 타입임
- 다중상속 불가
- 타입 메서드 중 `static func`: 재정의 불가 / `class func`: 재정의 가능
