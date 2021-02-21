# Oreilly Angular - The Complete Guide 2020

<https://learning.oreilly.com/videos/angular-the/9781788998437>

## Chapter 6: Course Project - Components & Databinding

Chapter 5에서 배운 내용들을 프로젝트에 실습해보는 시간!

@Output, @Input을 통해서 컴포넌트 간에 통신하는 방법을 배웠다.
@ViewChild를 이용해서 html에 있는 input 값을 ts에서 가져오고 사용하는 방법을 배웠다.

## Chapter 7: Directives

* *ngIf, *ngFor 두개를 하나의 컴포넌트에 같이 쓸 수 없음.
* Attribute 디렉티브를 만들어본다.
* 디렉티브는 ng g d name으로 만들고 shared로 모아서 관리해도 됨
* 다시 말하지만 angular ts에서 바로 돔(DOM)을 수정하는 것은 좋지 않음
* 돔을 바로 수정하는 것은 Renderer(Renderer2)를 써서 수정하는 것이 권장됨
  * `this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');`


### HostListener

```ts
// mouse enter, color = blue
@HostListener('mouseenter') mouseover(eventData: Event) {
  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
}
// mouse leave, color = x
@HostListener('mouseleave') mouseleave(eventData: Event) {
  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false, false);
}
```

### HostBinding

```ts
@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

// mouse enter, color = blue
@HostListener('mouseenter') mouseover(eventData: Event) {
  backgroundColor = 'blue';
}
// mouse leave, color = x
@HostListener('mouseleave') mouseleave(eventData: Event) {
  backgroundColor = 'transparent';
}
```

### custom directive



