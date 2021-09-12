function sendConfirmation(e) {
    //select name and email
    var email = e.values[1];
    var name = e.values[2];
  
    //select template doc
    var template = DriveApp.getFileById('1c_q8Fwz_8iTKGfQRZ-glgUr7tmMaR4br--mGJJ9v5RQ');

    //select the root folder
    var folder = DriveApp.getFolderById('12Zctxlkl8m6p7CexgWI2qHjJjLSFKczW');

    //make a temporary copy of template and add values to copy
    var copy = template.makeCopy("copy", folder);
    var doc = DocumentApp.openById(copy.getId());
    var body = doc.getBody();
    body.replaceText("{{name}}", name);
  
    //send email
    MailApp.sendEmail({
      to: email,
      subject: "confirmation mail",
      body: body.getText()
    });
  
    //delete the temp copy
    copy.setTrashed(true);
  }
  