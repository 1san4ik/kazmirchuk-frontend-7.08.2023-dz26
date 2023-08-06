class SuperMath {
  constructor() {
    this.x = 0
    this.y = 0
    this.znak = ''
  }

  check(obj) {
    const response = prompt(
      `Хочете виконати дію  "${obj.znak}" з числами ${obj.X} і ${obj.Y}? (да/ні)`
    )
    if (response === 'да') {
      this.x = obj.X
      this.y = obj.Y
      this.znak = obj.znak
      return this.calculate()
    } else {
      this.input()
      return this.calculate()
    }
  }

  input() {
    this.x = Number(prompt('Введіть перше число: '))
    this.y = Number(prompt('Введіть друге число: '))
    this.znak = prompt('Введіть математичну дію (+ - / * %): ')

    if ((this.znak === '/' || this.znak === '%') && this.y === 0) {
      alert('Ділити на нуль не можна, виберіть іншу математичну дію.')
      this.input()
    }
  }

  calculate() {
    switch (this.znak) {
      case '+':
        return this.x + this.y
      case '-':
        return this.x - this.y
      case '/':
        return this.x / this.y
      case '*':
        return this.x * this.y
      case '%':
        return this.x % this.y
      default:
        return 'Некоректна операція.'
    }
  }
}

const math1 = new SuperMath()
const obj = { X: 12, Y: 3, znak: '+' }
const result = math1.check(obj)
alert(`Результат: ${result}`)
