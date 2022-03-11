import { DbFacade } from "./DbFacade";
import { DbSingleton } from "./DbSingleton";

(() => {
  function main() {

    const dbFacade = new DbFacade();


    dbFacade.serialize(async () => {
      dbFacade.createTable();
  
      console.log('Table created.');
  
      dbFacade.insertIntoTable();
  
      console.log('Record inserted.');
  
      const addresses = await dbFacade.getAddresses();
  
      for (const address of addresses) {
        console.log(`${address.getId()} ${address.getStreetName()} ${address.getCity()}`);
      }
    })

  }

  main();
})();
