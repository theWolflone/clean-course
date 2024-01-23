interface Bird{
      eat(): void;
}

interface FlyingBird{
      fly(): number;

}

interface RunningBird{
      run(): void;
}

interface SwimmingBird{
      swim(): void;
}

class Tucan implements Bird, FlyingBird {
      public fly(){ return 100;}
      public eat(){}
      public run(){}
}

class Hummingbird implements Bird, FlyingBird {
      public fly(){ return 200 ;}
      public eat(){}
}


class Ostrich implements Bird, RunningBird{
      public run(){}
      public eat(){}
}

class Penguin implements Bird, SwimmingBird{
      public eat(){}
      public swim(){}
}