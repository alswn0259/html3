class Student {
    constructor(sno, name) {
        this.sno = sno;
        this.name = name;
    } // 생성자
    set setName(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    showInfo() {
        return this.sno + ' ' + this.name; 
    }
    static toShow() {
        return 'Hello';
    }
}

let s1 = new Student('1111' , 'Hongkildong');
console.log(s1.getName); //get 이방식으로 해야함
console.log(s1.showInfo()); //객체 이름으로 부른거. 메소드는 () 붙여서!
console.log(Student.toShow()); //정적메소드 클래스 이름으로 불러야함.