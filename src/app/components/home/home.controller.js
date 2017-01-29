class HomeController {

  constructor($log, Message) {
    'ngInject';
    this.$log = $log;
    this.Message = Message;
    // UI State variables
    this.typeOfMessage = 1;
    this.showSuccessAlert = false;
    this.showErrorAlert = false;
    // Sample messages, this could be changed to external source or service
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

  /**
   * Function for passing new message to MessageService
   */
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

  /**
   * Function for assigning desired template to textarea.
   * @param $item current value of this.message
   */
  useTemplate($item) {
    this.message = this.messageTemplates.find(template => {
      return template.title === $item;
    }).message;
  }

  /**
   * Helper function for getting template titles to show in dropdowns
   * @param q current search value
   * @returns {Array} all templates that contain search value
   */
  getTemplateTitles(q) {
    return this.messageTemplates.filter(template => {
      return template.title.includes(q);
    }).map(template => {
      return template.title;
    });
  }

  /**
   * Autocomplete function for getting contacts from API.
   * @param q search value
   * @param field type of value
   * @returns {IPromise<TResult>|Promise.<T>} Promise from API, transformed by MessageService
   */
  getContacts(q, field) {
    return this.Message.getContacts(q, field).then(contacts => {
      return contacts;
    }).catch(error => {
      this.$log.log(error);
    });
  }
}

export default HomeController;
