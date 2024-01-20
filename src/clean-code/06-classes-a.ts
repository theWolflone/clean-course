(() => {
  // No aplicando el principio de responsabilidad única.
  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthDate: Date
    ) {}

    // public name: string;
    // public gender: Gender;
    // public birthDate: Date;

    // constructor(name:string, gender:Gender, birthDate:Date){
    //       this.name = name;
    //       this.gender = gender;
    //       this.birthDate = birthDate;
    // }
  }

  class User extends Person {

      public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(name, gender, birthDate);
      this.lastAccess = new Date;
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(email, role, name, gender, birthDate);
    }
  }

  const userSettings = new UserSettings(
      '/usr/home',
      '/home',
      'fernando@google.com',
      'ADMIN',
      'Santiago',
      'M',
      new Date('2006-01-09')
  );
      console.log({userSettings});
      

})();
