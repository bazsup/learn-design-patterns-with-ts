import { DressingDecorator } from "./DressingDecorator";
import { MeatDecorator } from "./MeatDecorator";
import { SimpleSandwich } from "./SimpleSandwich";

(() => {
  function main() {
    const sandwich = new DressingDecorator(new MeatDecorator(new SimpleSandwich()));

    console.log(sandwich.make());
  }

  main();
})();
