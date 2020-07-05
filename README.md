# AngularTourOfHeroes




## Personal note

- 拿掉 ng-in-momory-db and use `json placeholder`
- 新增 一些 nav bar 在 app comp, to practice

### 使用者輸入input note

- 用 as 提供 property type
- Template Variable #, To Get Its V as Value In Template, No Need To Get Value In TS File
- 除了 Click event inside button, We have keyup in input, keyup.<keycode>
- need To Use Enter And Blur O. W. you Lose Value When Blur

### 屬性指令 attr directive

- custom directive 可以讓你加上attr就可以改變el的屬性
- 也可以設定監聽器，像是 mouseenter and mouseleave
- 屬性指令，指令邏輯的內部可以是一個名字，binding（用在template上）的可以是另一個名字
- 何時要加上binding, 因為要把templte的東西binding到指令邏輯，需要用input裝飾器
- angular有自己的規則是設定哪些是公共的，哪些是私有的，如果預設是私有的，你要加上binding 才可以讓元件傳過去。像是tempate自己的componnent，就是預設公共的，要互通，不需要用到binding。

### 結構型指令

- begin with `*`
- 你可以在一個host el apply 一個 struc-directive, 但可以apply 很多 attr-deiretive, 其實也是可以理解，你總無法同一個el 說要砍又要增，或是要改東，又要改西。
- ngIf 指令並不是使用 CSS 來隱藏元素的。它會把這些元素從 DOM 中物理刪除
- Angular 會把星號（*）語法解開成 <ng-template>
- ngif, ngfor 目前學的都是語法糖，"解糖"後，會變成比較難懂，這邊也是一層抽象層，如果要到更底層，就是src
譬如

```
*ngFor="let item of [1,2,3]""

```

解糖後

```
<ng-template ngFor let-item [ngForOf]="[1,2,3]">

```

又譬如

```
*ngIf="exp as value"

```

解糖後

```
<ng-template [ngIf]="exp" let-value="ngIf">

```

-範本輸入變數(#box)和範本參考變數(let item)不同，前者的scope是整個template, 後者是那個el而已。

- NgSwitch、NgSwitchCase 和 NgSwitchDefault很多都是一起用的，然後也是可以解糖變成ng-template的形式
- 優先使用語法糖版本的 *, 如果找不到包的el, 那就用<ng-container>
- 如果要自己寫結構指令，那就一定是用<ng-template>
- 自己寫結構指令

### 管道

- full pipe api -> [https://angular.tw/api/common#pipes](https://angular.tw/api/common#pipes)
- use pipe for i18n -> [https://angular.tw/guide/i18n#i18n-pipes](https://angular.tw/guide/i18n#i18n-pipes)
- 自訂管道，也是要用ng g pipe xxxx
- 然後要自訂transform的語法
- pipe預設是pure func的邏輯，因此寫起來要不能mutate， 如果你mutate的話，結果就會出錯。不然就是你要加上語法，讓pure變成不pure, 這就你mutate也是可以用，只是這樣有效能問題。這邊不是非常懂，還無法應用！
- 使用 AsyncPipe, 用在資料不會同步送過來，因此需要這個非純管道去幫助我們簡化操作（他會幫我們訂閱可觀察物件，解析值，進行binding, 使用後取消訂閱）
- HttpClient 服務會發出http請求，返回一個可觀察物件。
- 自己建立一個非純管道來建立和快取 HTTP 請求，只有當請求的 URL 發生變化時才會呼叫該伺服器。

### life hook

- 下面依照順序
- ngOnChanges() -> 在 ngOnInit() 之前以及所繫結的一個或多個輸入屬性的值發生變化時都會呼叫。
- ngOnInit() -> 在第一輪 ngOnChanges() 完成之後呼叫，只調用一次
- ngOnInit() 是元件獲取初始資料的好地方
- ngDoCheck()，檢測用 -> 緊跟在每次執行變更檢測時的 ngOnChanges() 和 首次執行變更檢測時的 ngOnInit() 後呼叫。
- ngAfterContentInit() ，當外部內容進入view時-> 第一次 ngDoCheck() 之後呼叫，只調用一次。
- ngAfterContentChecked(), 檢查步驟 -> ngAfterContentInit() 和每次 ngDoCheck() 之後呼叫
- ngAfterViewInit() 初始化完元件檢視後 -> 第一次 ngAfterContentChecked() 之後呼叫，只調用一次。
- ngAfterViewChecked() 做完元件檢視後呼叫 -> ngAfterViewInit() 和每次 ngAfterContentChecked() 之後呼叫。
- ngOnDestroy() -> 在 Angular 銷燬指令或元件"之前"立即呼叫。
- 有關ngOnDestroy
- 把清理邏輯放進 ngOnDestroy() 中，這個邏輯就必然會在 Angular 銷燬該指令之前執行
- 類似 取消訂閱可觀察物件和 DOM 事件、停止 interval 計時器、Unregister all callbacks that the directive registered with global or application services、也可以用來通知應用程式的其它部分，該元件即將消失。


----


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
