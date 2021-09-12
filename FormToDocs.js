//sample code to convert form response to doc

function convertResToDoc(e) {
  //get values from column
  var timestamp = e.values[0];
  var firstName = e.values[1];
  var lastName = e.values[2];
  var idea = e.values[3];
  var level = e.values[4];

  //get template doc by id
  var template = DriveApp.getFileById('1QWKmfkCWJjoHMquV1A_usII1uj8lpQX7b_rLTFzCfJA');

  //select the folder to save the docs
  var folder = DriveApp.getFolderById('1kiJ3LxtkNG69QioYwIexaAhEjZR9Vv4f');

  //create a copy of template in the folder
  var copy = template.makeCopy(firstName + " " + lastName + " - " + timestamp, folder);

  var doc = DocumentApp.openById(copy.getId());

  var body = doc.getBody();

  //replace placeholders in the copy
  body.replaceText("{{First Name}}", firstName);
  body.replaceText("{{Last Name}}", lastName);
  body.replaceText("{{Idea}}", idea);
  body.replaceText("{{Level}}", level);

  doc.saveAndClose();
}
