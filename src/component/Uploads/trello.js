const trello = (selectedFile) => {
  var TOKEN = "d74a634b10aa9d723bbcbf72d6b4d0d56a6c74a8ba6a42572d6528be2c268e74";
  // var KEY = "805d013d57846d5e9015d54e1578f7c421715514e862e76d53146da3954f412d";
  // var KEY= '805d013d57846d5e9015d54e1578f7c421715514e862e76d53146da3954f412d';
  var KEY = '7d42a3055076bb619a590b02472a0c87';
  var CARD = "5e8dcfc6574a3b1ecd96cee3";

  var formData = new FormData();

  formData.append("token", TOKEN);
  formData.append("key", KEY);

  // HTML file input, chosen by user
  formData.append("file", selectedFile);

  var request = new XMLHttpRequest();
  request.open("POST", "https://api.trello.com/1/cards/" + CARD + "/attachments");
  request.send(formData);
};

export default trello;