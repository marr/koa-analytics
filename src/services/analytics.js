export default class Analytics {
  constructor({ db }) {
    this.db = db;
  }

  trackEvent({ category, action, label, value }) {
    return this.db('events').insert({
      category,
      action,
      label,
      value
    });
  }
}
