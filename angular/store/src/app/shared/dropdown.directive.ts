import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // dropdown-toggle 클래스가 있는 버튼이 눌리면
  // 상위에 있는 div(btn-group 클래스가 있는 div)에 open을 추가해준다.
  //    상위가 아니더라. 그냥 그 엘리멘트에 @HostListener('click')을 이용해서 click을 붙여주고
  //    그 클릭에서 @HostBinding('class.open')으로 변수를 만들고 그 값을 토글 변경해준다.
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  @HostListener('mouseover') onFocus() {
    // console.log('mouse over event');
  }
}
