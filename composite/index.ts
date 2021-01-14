import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

(() => {
  function main() {
    const mainMenu: Menu = new Menu("Main", "/main");

    const safetyMenuItem: MenuItem = new MenuItem("Safety", "/safety");
    mainMenu.add(safetyMenuItem);

    const claimsSubMenu: Menu = new Menu("Claims", "/claims");
    mainMenu.add(claimsSubMenu);

    const personalclaimsMenu: MenuItem = new MenuItem(
      "Personal Claim",
      "/personalClaims"
    );
    claimsSubMenu.add(personalclaimsMenu);

    console.log(mainMenu.toString());
  }
  main();
})();
