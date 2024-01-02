/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentProperties {
  props: {
    title: string;
  };
}

class Component implements ComponentProperties {
  constructor(public props: { title: string }) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
