/**
 * Created by diegofigs on 1/27/17.
 */
export default class MessageService {

  constructor($http, $log) {
    'ngInject';
    this.baseDomain = 'http://yifteeqa.com/programming_challenge';
    this.$http = $http;
    this.$log = $log;
  }

  sendMessage(message) {
    return this.$http.post(`${this.baseDomain}/message`, message);
  }

  getContacts(q, field) {
    const config = {
      params: {
        q
      }
    };
    return this.$http.get(`${this.baseDomain}/autocomplete`, config)
      .then(response => {
        return response.data.response.contacts.map(contact => {
          if (field === 'name') {
            return contact.name;
          } else if (field === 'email') {
            return contact.email;
          }
          return contact.sms;
        });
      })
      .catch(error => {
        this.$log.log(error);
      });
  }
}
