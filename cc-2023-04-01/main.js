// url: https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a
// Given the molecular mass of two molecules M1 and M2, their masses present
// m1 and m2 in a vessel of volume V at a specific temperature T, find the total
// pressure Ptotal exerted by the molecules. 
const solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  const GAS_CONSTANT = 0.082
  const tempInKelvin = 273.15 + temp
  const molesOfGas1 = givenMass1 / molarMass1
  const molesOfGas2 = givenMass2 / molarMass2
  return (molesOfGas1 + molesOfGas2) * GAS_CONSTANT * tempInKelvin / volume
}
// We receive numbers and we need to return a number
// solution(44, 30, 3, 2, 5, 50) -> 0.7146511212121212
// solution(60, 20, 10, 30, 10, 100) -> 5.099716666666667
// PV = nRT -> P = nRT/v
// n is equal to total moles (mass / molar mass) for the two gases
// R is a constant
// Given temperature in Celcius add 273.15 to it to get it in Kelvin