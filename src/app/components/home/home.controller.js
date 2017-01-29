class HomeController {

  constructor($log, Message) {
    'ngInject';
    this.$log = $log;
    this.Message = Message;
    this.typeOfMessage = 1;
    this.showSuccessAlert = false;
    this.showErrorAlert = false;
    this.messageTemplates = [
      {
        title: "Bro",
        message: "Hey Bro, " +
        "Hope you are doing alright!"
      },
      {
        title: "BFF",
        message: "Hey Girl! " +
        "We so need to talk about last night!"
      },
      {
        title: "Parent",
        message: "Hey Mom/Dad, " +
        "Just a reminder of how much I love you guys..."
      },
      {
        title: "Congrats",
        message: "Congrats on your 'Insert Achievement Here'!"
      }
    ];
  }

  sendMessage() {
    const newMessage = {
      message: this.message,
      name: this.name
    };
    if (this.typeOfMessage === 1) {
      newMessage.email = this.email;
    } else {
      newMessage.sms = this.sms;
    }

    this.Message.sendMessage(newMessage).then(() => {
      this.showSuccessAlert = true;
    }).catch(error => {
      this.$log.log(error);
    });
  }

  useTemplate($item) {
    this.message = this.messageTemplates.find(template => {
      return template.title === $item;
    }).message;
  }

  getTemplateTitles(q) {
    return this.messageTemplates.filter(template => {
      return template.title.includes(q);
    }).map(template => {
      return template.title;
    });
  }

  getContacts(q, field) {
    return this.Message.getContacts(q, field).then(contacts => {
      return contacts;
    }).catch(error => {
      this.$log.log(error);
    });
  }
}

export default HomeController;
