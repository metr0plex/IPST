//создать класс calculation , в котором будет одна переменная calculationLine.
//методы:
//setterCalculationLine который будет к переменной приравнивать значение которое передается,
//setLastSymbolCalculationLine который будет в конец строки прибавлять символ,
//gettercalCulationLine который будет выводить переменную,
//lastSymbol получение последнего символа,
//deleteLastSymbol удаление последнего символа из строки
class calculation{
    constructor() {
        this.calculationLine = ""
    }
    setterCalculationLine(value){
        this.calculationLine = value
    }
    setLastSymbolCalculationLine(value){
        this.calculationLine += value
    }
    gettercalCulationLine(){
        return this.calculationLine
    }
    lastSymbol(){
        return this.calculationLine.charAt(this.calculationLine.length - 1)
    }
    deleteLastSymbol(){
        this.calculationLine = this.calculationLine.slice(0, -1)
    }
}
const calculator = new calculation()
calculator.setterCalculationLine("den")
calculator.setLastSymbolCalculationLine('is')
console.log(calculator.gettercalCulationLine())
console.log(calculator.lastSymbol())
calculator.deleteLastSymbol()
console.log(calculator.gettercalCulationLine())