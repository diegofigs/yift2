class HomeController {

  constructor($log, Message) {
    'ngInject';
    this.$log = $log;
    this.Message = Message;
    this.typeOfMessage = 1;
    this.showSuccessAlert = false;
    this.showErrorAlert = false;
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

  getContacts(q, field) {
    return this.Message.getContacts(q, field).then(contacts => {
      return contacts;
    }).catch(error => {
      this.$log.log(error);
    });
  }
}

export default HomeController;
