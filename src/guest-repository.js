
const defaultGuests = [
  { email: 'gangnam-style@psy.com', tickets: 1 },
  { email: 'harlem.shake@baauer.com', tickets: 8 },
  { email: 'black.beatles@skrillex.com', tickets: 3 },
];
const KEY = 'iscout-recruit-project.guests';

module.exports = class GuestRepository {
  load() {
    return new Promise(resolve => {
      setTimeout(() => {
        try {
          const json = localStorage.getItem(KEY);
          if (!json) throw 'no data found';
          resolve(JSON.parse(json));
        }catch (e) {
          resolve(defaultGuests);
        }
      }, 1000);
    });
  }
  save(guests) {
    return new Promise(resolve => {
      setTimeout(() => {
        try {
          localStorage.setItem(KEY, JSON.stringify(guests));
        }catch (e) {
          // noop
        }
        resolve();
      }, 1000);
    });
  }
  reset() {
    return new Promise(resolve => {
      setTimeout(() => {
        localStorage.removeItem(KEY);
        resolve();
      }, 1000);
    });
  }
}
