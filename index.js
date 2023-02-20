const constacts = require("./contacts");
const { Command } = require("commander");
const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "choose id")
  .option("-n, --name <type>", "choose name")
  .option("-e, --email <type>", "choose email")
  .option("-p, --phone <type>", "choose phone");
program.parse(process.argv);

const options = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      constacts.listContacts();
      break;

    case "get":
      constacts.getContactById(id);
      break;

    case "add":
      constacts.addContact(name, email, phone);
      break;

    case "remove":
      constacts.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
