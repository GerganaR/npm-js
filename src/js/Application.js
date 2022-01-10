import EventEmitter from "eventemitter3";
import anime from "animejs";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.init();
    this.emit(Application.events.READY);
  }

  init() {
    function animate() {
      console.log("clicked");
      anime({
        targets: ".article",
        translateX: 250,
        direction: "alternate",
        loop: true,
        easing: "spring(1, 80, 10, 0)",
      });
    }

    const article = document.getElementById("article");
    article.addEventListener("click", animate);
  }
}
