// Poly means many and morphism means form so polymorphism means object with different form

class Animal {
  name(name) {
    return name;
  }
}

class Cow extends Animal {}

const a = new Cow();
console.log(a.name("Cow"));
