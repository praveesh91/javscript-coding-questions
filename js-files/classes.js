class TeacherClass {
  constructor(name, channel) {
    this.name = name;
    this.channel = channel;
  }
  intro() {
    return `Hey It's ${this.name} and welcome to ${this.channel}`;
  }
}
const teacherOne = new TeacherClass("John", "Channel One");
console.log(teacherOne.intro());

function Teacher(name, channel) {
  this.name = name;
  this.channel = channel;
}
Teacher.prototype.intro = function () {
  return `Hey It's ${this.name} and welcome to ${this.channel}`;
};
const teacherTwo = new Teacher("Jane", "Channel Two");
console.log(teacherTwo.intro());

class YoutubeTeacher extends TeacherClass {
  constructor(name, channel, subscribers) {
    super(name, channel);
    this.subscribers = subscribers;
  }
  subscriberCount() {
    return `${this.channel} has ${this.subscribers} subscribers`;
  }
}

const inheritedTecher = new YoutubeTeacher("Jim", "Praveesh Channel", 99);
console.log(inheritedTecher.subscriberCount());
